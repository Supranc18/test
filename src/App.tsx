import { useState } from 'react'
import './app.css'

function App() {
  const [page, setPage] = useState('question')
  const [noStyle, setNoStyle] = useState({})

  const moveNoButton = () => {
    const x = Math.random() * 200 - 100
    const y = Math.random() * 200 - 100
    setNoStyle({
      transform: `translate(${x}px, ${y}px)`
    })
  }

  if (page === 'love') {
    return <LovePage goBack={() => setPage('question')} />
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-rose-500 to-red-500">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 max-w-md text-center relative">

        <div className="text-6xl mb-4 animate-bounce">❤️</div>

        <h1 className="text-3xl font-extrabold text-pink-600 mb-4">
          Will You Be My Valentine?
        </h1>

        <p className="text-xl font-semibold text-gray-800 mb-6">
          My Love <span className="text-rose-500">Aradhya Shrestha</span>
        </p>

        <p className="text-gray-600 mb-8">
          You are my favorite person, my peace, my happiness 💕
        </p>

        <div className="flex gap-6 justify-center relative">
          <button
            onClick={() => setPage('love')}
            className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-lg transition transform hover:scale-105"
          >
            Yes 💖
          </button>

          <button
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
            style={noStyle}
            className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-full shadow-lg transition-all duration-300"
          >
            No 💔
          </button>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          You can’t say no 😌💌
        </p>
      </div>
    </div>
  )
}

function LovePage({ goBack }: { goBack: () => void }) {
  const photos = Array.from({ length: 9 }, (_, i) =>
    `/photos/photo${i + 1}.jpeg`
  )

  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-500 via-pink-500 to-red-600 p-6 relative">

      {/* Back Button */}
      <button
        onClick={goBack}
        className="fixed top-5 left-5 bg-white/90 text-pink-600 font-semibold px-4 py-2 rounded-full shadow-lg hover:scale-105 transition z-50"
      >
        ← Back
      </button>

      <div className="max-w-4xl mx-auto text-center text-white">
        <h1 className="text-4xl font-extrabold mb-4">
          Forever & Always 💖
        </h1>

        <p className="text-lg mb-8">
          Every memory with you is my favorite ❤️
        </p>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Memory ${index + 1}`}
              onClick={() => setSelectedPhoto(photo)}
              className="h-48 w-full object-cover rounded-2xl shadow-xl cursor-pointer hover:scale-105 transition duration-300"
            />
          ))}
        </div>

        <p className="mt-10 text-lg">
          I choose you — today, tomorrow, forever 💍❤️
        </p>
      </div>

      {/* Image Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          
          {/* Close Button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:scale-110 transition"
          >
            ✕
          </button>

          <img
            src={selectedPhoto}
            alt="Big memory"
            className="max-h-[90vh] max-w-[90vw] rounded-3xl shadow-2xl animate-scale-in"
          />
        </div>
      )}
    </div>
  )
}

export default App
