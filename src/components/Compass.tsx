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
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Middle ring with tick marks */}
        <motion.circle
          cx="100"
          cy="100"
          r="75"
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="1"
          strokeDasharray="4 8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Cardinal direction lines */}
        {[0, 90, 180, 270].map((angle, i) => (
          <motion.line
            key={angle}
            x1="100"
            y1={angle === 0 || angle === 180 ? (angle === 0 ? "15" : "185") : "100"}
            x2="100"
            y2={angle === 0 || angle === 180 ? (angle === 0 ? "30" : "170") : "100"}
            stroke="var(--color-text-secondary)"
            strokeWidth="1.5"
            transform={angle === 90 || angle === 270 ? `rotate(${angle} 100 100)` : undefined}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
            style={angle === 90 || angle === 270 ? {
              transformOrigin: 'center'
            } : undefined}
          />
        ))}

        {/* Success/North label */}
        <motion.text
          x="100"
          y="48"
          textAnchor="middle"
          fill="var(--color-accent)"
          fontSize="9"
          fontWeight="600"
          letterSpacing="0.15em"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          ERFOLG
        </motion.text>

        {/* Compass needle group */}
        <motion.g
          initial={{ rotate: -30 }}
          animate={{ rotate: 0 }}
          transition={{
            duration: 1.8,
            delay: 0.3,
            type: "spring",
            stiffness: 40,
            damping: 12
          }}
          style={{ transformOrigin: '100px 100px' }}
        >
          {/* North needle (pointing to success) - Green accent */}
          <motion.polygon
            points="100,35 106,100 100,108 94,100"
            fill="var(--color-accent)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />

          {/* South needle - Dark grey */}
          <motion.polygon
            points="100,165 106,100 100,92 94,100"
            fill="var(--color-text)"
            opacity="0.3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
        </motion.g>

        {/* Center circle */}
        <motion.circle
          cx="100"
          cy="100"
          r="10"
          fill="var(--color-bg)"
          stroke="var(--color-text)"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        />

        {/* Inner center dot */}
        <motion.circle
          cx="100"
          cy="100"
          r="3"
          fill="var(--color-accent)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
        />

        {/* Decorative dots at intercardinal points */}
        {[45, 135, 225, 315].map((angle, i) => (
          <motion.circle
            key={angle}
            cx={100 + 65 * Math.cos((angle * Math.PI) / 180)}
            cy={100 + 65 * Math.sin((angle * Math.PI) / 180)}
            r="2"
            fill="var(--color-border)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.1 + i * 0.08 }}
          />
        ))}
      </svg>
    </div>
  )
}

export default Compass
