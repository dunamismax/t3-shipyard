
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import "../styles/chat.css";

const chatrooms = [
    { name: "️｜the-lounge", description: "A relaxed, general-purpose chat room for users to hang out, socialize, and talk about anything that comes to mind." },
    { name: "｜tech-talk", description: "A broad channel for discussions about the latest trends in the technology industry." },
    { name: "｜ai-machine-learning", description: "For all things related to Artificial Intelligence and Machine Learning." },
    { name: "☁️｜cloud-and-devops", description: "This room is dedicated to cloud computing (AWS, Azure, GCP) and the DevOps lifecycle." },
    { name: "｜cybersecurity", description: "A channel focused on digital security." },
    { name: "｜game-development", description: "A hub for aspiring and professional game developers to discuss engines like Unity and Unreal, game design principles, graphics programming, and the business of making games." },
    { name: "｜web-development", description: "A room for front-end and back-end web developers to discuss everything from the latest JavaScript frameworks to CSS tricks and server-side logic." },
    { name: "｜mobile-development", description: "Focused on native and cross-platform mobile app development." },
    { name: "｜python-and-data-science", description: "A space for Python enthusiasts and data scientists." },
    { name: "｜career-and-learning", description: "A supportive channel for developers of all levels to discuss career growth, job hunting, interview preparation, and effective learning strategies." },
];

const ChatLobbyPage = () => {
  const router = useRouter();
  const { username, server } = router.query;

  return (
    <>
      <Head>
        <title>trpchat - Chat Lobby</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gray-900 text-white">
        <div className="container flex flex-col items-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Chat Lobby
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            {chatrooms.map((room) => (
              <Link key={room.name} href={`/chat/${room.name}?username=${username}&server=${server}`}>
                <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                  <h3 className="text-2xl font-bold">{room.name}</h3>
                  <div className="text-lg">
                    {room.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default ChatLobbyPage;
