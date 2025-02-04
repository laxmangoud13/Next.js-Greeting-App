import { NameForm } from "./components/NameForm"
import { Explanation } from "./components/Explanation"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8 p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center">Next.js 15.1 Server Action Demo</h1>
        <NameForm />
        <Explanation />
      </div>
    </main>
  )
}

