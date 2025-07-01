import { type NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { api } from "../utils/api";

const UsersPage: NextPage = () => {
  const { data: sessionData } = useSession();
  const { data: users, isLoading } = api.user.getAll.useQuery(undefined, {
    enabled: sessionData?.user !== undefined,
  });

  if (isLoading) return <div>Loading users...</div>;
  if (!sessionData?.user) return <div>Please sign in to view users.</div>;

  return (
    <>
      <Head>
        <title>Admin Users</title>
        <meta name="description" content="Admin User Management" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gray-100 py-10">
        <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-[5rem]">
          Admin <span className="text-blue-500">Users</span>
        </h1>
        <div className="grid w-full max-w-2xl grid-cols-1 gap-4">
          {users?.map((user) => (
            <div
              key={user.id}
              className="block rounded-lg bg-white p-6 shadow-md"
            >
              <h2 className="mb-2 text-2xl font-bold text-gray-800">{user.name || "No Name"}</h2>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default UsersPage;
