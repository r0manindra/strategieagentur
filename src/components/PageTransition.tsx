import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useState, useEffect, type ReactNode } from 'react'
import './PageTransition.css'

interface PageTransitionProps {
  children: ReactNode
}

const CompassLoader = () => (
  <div className="page-loader">
    <svg viewBox="0 0 200 200" className="loader-compass">
      <circle
        cx="100"
        cy="100"
        r="45"
        fill="none"
        stroke="#e2e6ea"
        strokeWidth="1"
        className="loader-ring"
      />
      <g className="loader-needle">
        <polygon points="100,60 104,100 100,105 96,100" fill="#2d8a5e" />
        <polygon points="100,140 104,100 100,95 96,100" fill="#1a1f25" opacity="0.2" />
      </g>
      <circle cx="100" cy="100" r="4" fill="#1a1f25" />
      <circle cx="100" cy="100" r="2" fill="#2d8a5e" />
    </svg>
  </div>
)

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setDisplayChildren(children)
      setIsLoading(false)
    }, 400)
    return () => clearTimeout(timer)
  }, [location.pathname, children])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <CompassLoader />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {displayChildren}
      </motion.div>
    </>
  )
}

export default PageTransition
