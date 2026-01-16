import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './IntroAnimation.css'

interface IntroAnimationProps {
  onComplete: () => void
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [showIntro, setShowIntro] = useState(true)
  const title = "StrategieAgentur"
  const subtitle = "Michael Schmid"

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
      setTimeout(onComplete, 600)
    }, 3200)
    return () => clearTimeout(timer)
  }, [onComplete])

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -90
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 1.2 + i * 0.035,
        duration: 0.4,
        ease: [0.2, 0.65, 0.3, 0.9] as const
      }
    })
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2.0,
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="intro-animation"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="intro-content">
            {/* Compass Animation */}
            <motion.div
              className="intro-compass"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <svg viewBox="0 0 200 200" className="intro-compass-svg">
                {/* Outer ring */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="#e2e6ea"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />

                {/* Compass needle group */}
                <motion.g
                  initial={{ rotate: -45 }}
                  animate={{ rotate: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.4,
                    type: "spring",
                    stiffness: 50,
                    damping: 15
                  }}
                  style={{ transformOrigin: '100px 100px' }}
                >
                  {/* North needle - Green */}
                  <motion.polygon
                    points="100,25 107,100 100,110 93,100"
                    fill="#2d8a5e"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  />

                  {/* South needle */}
                  <motion.polygon
                    points="100,175 107,100 100,90 93,100"
                    fill="#1a1f25"
                    opacity="0.2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  />
                </motion.g>

                {/* Center circle */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="8"
                  fill="#ffffff"
                  stroke="#1a1f25"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                />

                {/* Center dot */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="3"
                  fill="#2d8a5e"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2, delay: 0.9 }}
                />
              </svg>
            </motion.div>

            {/* Title */}
            <h1 className="intro-title">
              {title.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ display: 'inline-block' }}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              className="intro-subtitle"
              variants={subtitleVariants}
              initial="hidden"
              animate="visible"
            >
              {subtitle}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default IntroAnimation
