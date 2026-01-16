import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
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
    setShowIntro(false)
    setTimeout(() => setIntroComplete(true), 50)
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && !introComplete && (
          <IntroAnimation onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>
      {introComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="agentur" element={<Agentur />} />
              <Route path="expertisen" element={<Expertisen />} />
            </Route>
          </Routes>
        </motion.div>
      )}
    </>
  )
}

export default App
