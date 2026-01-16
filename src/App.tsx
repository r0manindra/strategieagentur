import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Agentur from './pages/Agentur'
import Expertisen from './pages/Expertisen'
import IntroAnimation from './components/IntroAnimation'

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [introComplete, setIntroComplete] = useState(false)

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro')
    if (hasSeenIntro) {
      setShowIntro(false)
      setIntroComplete(true)
    }
  }, [])

  const handleIntroComplete = () => {
    sessionStorage.setItem('hasSeenIntro', 'true')
    setIntroComplete(true)
  }

  return (
    <>
      {showIntro && !introComplete && (
        <IntroAnimation onComplete={handleIntroComplete} />
      )}
      {introComplete && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="agentur" element={<Agentur />} />
            <Route path="expertisen" element={<Expertisen />} />
          </Route>
        </Routes>
      )}
    </>
  )
}

export default App
