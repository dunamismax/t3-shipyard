export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-[5rem]">
          Admin <span className="text-blue-500">App</span>
        </h1>
        <p className="mt-3 text-2xl text-gray-700">
          T3-Shipyard Admin Application
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-gray-900 hover:bg-white/20">
            <h3 className="text-2xl font-bold">Users →</h3>
            <div className="text-lg">Manage user accounts and permissions.</div>
          </div>
          <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-gray-900 hover:bg-white/20">
            <h3 className="text-2xl font-bold">Settings →</h3>
            <div className="text-lg">
              Configure application settings and preferences.
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-gray-900">Admin Dashboard Ready</p>
          <p className="text-sm text-gray-600">
            Basic admin app structure is working!
          </p>
        </div>
      </div>
    </main>
  )
}
