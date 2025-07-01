
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import "../styles/chat.css";

const CreateUsernamePage = () => {
  const [username, setUsername] = useState("");
  const [server, setServer] = useState("chat.dunamismax.com");
  const router = useRouter();

  const handleLogin = () => {
    if (username.match(/^[a-zA-Z0-9_-]{3,16}$/)) {
      router.push(`/chat?username=${username}&server=${server}`);
    } else {
      alert("Invalid username. Please use only letters, numbers, dashes, and underscores (3-16 characters).");
    }
  };

  return (
    <>
      <Head>
        <title>trpchat - Create Username</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Welcome to <span className="text-[hsl(280,100%,70%)]">trpchat</span>
          </h1>
          <div className="flex flex-col items-center gap-4">
            <input
              type="text"
              placeholder="Server IP / Domain Name"
              value={server}
              onChange={(e) => setServer(e.target.value)}
              className="w-full rounded-full bg-white/10 px-4 py-2 text-white"
            />
            <input
              type="text"
              placeholder="Create a new username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="w-full rounded-full bg-white/10 px-4 py-2 text-white"
            />
            <button
              onClick={handleLogin}
              className="glow-on-hover px-10 py-4"
            >
              Enter
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateUsernamePage;
