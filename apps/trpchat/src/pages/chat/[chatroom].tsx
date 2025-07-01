import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'

interface Message {
  username: string
  message: string
  timestamp: string
}

const ChatroomPage = () => {
  const router = useRouter()
  const { chatroom, username, server } = router.query
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [socket, setSocket] = useState<Socket | null>(null)

  useEffect(() => {
    if (
      typeof server === 'string' &&
      typeof username === 'string' &&
      typeof chatroom === 'string'
    ) {
      const newSocket = io(server)
      setSocket(newSocket)

      newSocket.emit('joinRoom', { username, room: chatroom })

      newSocket.on('message', (message: Message) => {
        setMessages((prev) => [...prev, message])
      })

      return () => {
        newSocket.disconnect()
      }
    }
  }, [server, username, chatroom])

  const sendMessage = () => {
    if (input.trim() && socket) {
      const message: Message = {
        username: username as string,
        message: input,
        timestamp: new Date().toISOString(),
      }
      socket.emit('chatMessage', message)
      setInput('')
    }
  }

  return (
    <>
      <Head>
        <title>trpchat - {chatroom}</title>
      </Head>
      <main className="flex h-screen flex-col bg-gray-900 text-white">
        <header className="bg-gray-800 p-4 text-white shadow-md">
          <h1 className="text-2xl font-bold">{chatroom}</h1>
        </header>
        <div className="flex-1 overflow-y-auto p-4">
          <div className="flex flex-col gap-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.username === username ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`rounded-lg px-4 py-2 ${msg.username === username ? 'bg-blue-600' : 'bg-gray-700'}`}
                >
                  <div className="text-sm font-bold">{msg.username}</div>
                  <div>{msg.message}</div>
                  <div className="text-xs text-gray-400">
                    {new Date(msg.timestamp).toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-800 p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-1 rounded-full bg-white/10 px-4 py-2 text-white"
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="rounded-full bg-blue-600 px-4 py-2 font-bold text-white"
            >
              Send
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default ChatroomPage
