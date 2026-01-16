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
      setTimeout(onComplete, 500)
    }, 2800)
    return () => clearTimeout(timer)
  }, [onComplete])

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.04,
        duration: 0.4,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    })
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.5,
        ease: "easeOut"
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
          transition={{ duration: 0.5 }}
        >
          <div className="intro-content">
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
