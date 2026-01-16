import { motion } from 'framer-motion'
import './Compass.css'

interface CompassProps {
  size?: number
}

const Compass = ({ size = 300 }: CompassProps) => {
  return (
    <div className="compass-container" style={{ width: size, height: size }}>
      <svg viewBox="0 0 200 200" className="compass">
        {/* Outer ring */}
        <motion.circle
          cx="100"
          cy="100"
          r="95"
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Inner ring */}
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
        />

        {/* Direction markers */}
        {[0, 90, 180, 270].map((angle, i) => (
          <motion.line
            key={angle}
            x1="100"
            y1={angle === 0 ? "10" : angle === 180 ? "190" : "100"}
            x2="100"
            y2={angle === 0 ? "25" : angle === 180 ? "175" : "100"}
            stroke="var(--color-text-secondary)"
            strokeWidth="2"
            transform={`rotate(${angle} 100 100)`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
            style={{
              transformOrigin: 'center',
              ...(angle === 90 || angle === 270 ? {
                x1: angle === 90 ? 190 : 10,
                y1: 100,
                x2: angle === 90 ? 175 : 25,
                y2: 100
              } : {})
            }}
          />
        ))}

        {/* Success label */}
        <motion.text
          x="100"
          y="40"
          textAnchor="middle"
          fill="var(--color-accent)"
          fontSize="10"
          fontWeight="600"
          letterSpacing="0.1em"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          ERFOLG
        </motion.text>

        {/* Compass needle group */}
        <motion.g
          initial={{ rotate: -45 }}
          animate={{ rotate: 0 }}
          transition={{
            duration: 2,
            delay: 0.5,
            type: "spring",
            stiffness: 30,
            damping: 10
          }}
          style={{ transformOrigin: '100px 100px' }}
        >
          {/* North needle (pointing to success) */}
          <motion.polygon
            points="100,30 108,100 100,110 92,100"
            fill="var(--color-accent)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />

          {/* South needle */}
          <motion.polygon
            points="100,170 108,100 100,90 92,100"
            fill="var(--color-text)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
        </motion.g>

        {/* Center circle */}
        <motion.circle
          cx="100"
          cy="100"
          r="12"
          fill="var(--color-bg)"
          stroke="var(--color-text)"
          strokeWidth="3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />

        {/* Decorative dots */}
        {[45, 135, 225, 315].map((angle, i) => (
          <motion.circle
            key={angle}
            cx={100 + 70 * Math.cos((angle * Math.PI) / 180)}
            cy={100 + 70 * Math.sin((angle * Math.PI) / 180)}
            r="3"
            fill="var(--color-border)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
          />
        ))}
      </svg>

      {/* Pulsing glow effect */}
      <motion.div
        className="compass-glow"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export default Compass
