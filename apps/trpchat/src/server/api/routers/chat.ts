import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

interface Message {
  username: string
  message: string
  timestamp: string
}

const chatMessages: Message[] = []

export const chatRouter = router({
  onMessage: publicProcedure
    .input(
      z.object({
        username: z.string(),
        message: z.string(),
        timestamp: z.string(),
      })
    )
    .subscription(() => {
      return new Promise((resolve) => {
        // This is a simplified example. In a real app, you'd use a pub/sub system.
        // For now, we'll just return the existing messages.
        resolve(chatMessages)
      })
    }),
  postMessage: publicProcedure
    .input(
      z.object({
        username: z.string(),
        message: z.string(),
        timestamp: z.string(),
      })
    )
    .mutation(({ input }) => {
      chatMessages.push(input)
      // In a real app, you'd broadcast this message to all connected clients.
      return input
    }),
})
