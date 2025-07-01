"use client";

import { api } from "@/trpc/react";

export default function Home() {
  const { data: hello } = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="container mx-auto px-4 py-16">
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
            Dunamismax<span className="text-blue-600">.com</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-black/10 p-4 text-black hover:bg-black/20">
              <h3 className="text-2xl font-bold">Portfolio →</h3>
              <div className="text-lg">
                Explore my latest projects and development work.
              </div>
            </div>
            <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-black/10 p-4 text-black hover:bg-black/20">
              <h3 className="text-2xl font-bold">Blog →</h3>
              <div className="text-lg">
                Read my thoughts on technology and development.
              </div>
            </div>
          </div>
          {hello && (
            <div className="flex flex-col items-center gap-2">
              <p className="text-2xl text-black">
                {hello.greeting}
              </p>
              <p className="text-sm text-gray-600">
                tRPC is working correctly!
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
