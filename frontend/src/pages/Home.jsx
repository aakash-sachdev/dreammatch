import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-white">
      <Navbar />

      <main className="flex-grow flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4  text-indigo-400">
          {' '}
          Welcome to DreamMatch! 💘
        </h1>
        <p className="text-lg text-indigo-200">
          {' '}
          Let's start finding your perfect match! 🚀{' '}
        </p>
      </main>
    </div>
  )
}

export default Home
