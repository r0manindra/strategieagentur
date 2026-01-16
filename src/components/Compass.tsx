import { motion } from 'framer-motion'
import './Compass.css'

interface CompassProps {
  size?: number
}

const Compass = ({ size = 300 }: CompassProps) => {
  return (
    <div className="compass-container" style={{ width: size, height: size }}>
      <svg viewBox="0 0 200 200" className="compass">
        {/* Subtle glow effect */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <linearGradient id="needleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent-light)" />
            <stop offset="100%" stopColor="var(--color-accent-dark)" />
          </linearGradient>
          <linearGradient id="goldShine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="var(--color-gold)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--color-gold)" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Outer ring - elegant thin stroke */}
        <motion.circle
          cx="100"
          cy="100"
          r="95"
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
        />

        {/* Second outer ring - premium detail */}
        <motion.circle
          cx="100"
          cy="100"
          r="92"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="0.3"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
        />

        {/* Inner decorative ring */}
        <motion.circle
          cx="100"
          cy="100"
          r="75"
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        />

        {/* Degree markers - small ticks around the circle */}
        {Array.from({ length: 72 }).map((_, i) => {
          const angle = (i * 5 * Math.PI) / 180
          const isCardinal = i % 18 === 0
          const isMajor = i % 9 === 0
          const innerR = isCardinal ? 82 : isMajor ? 85 : 88
          const outerR = 91
          return (
            <motion.line
              key={i}
              x1={100 + innerR * Math.sin(angle)}
              y1={100 - innerR * Math.cos(angle)}
              x2={100 + outerR * Math.sin(angle)}
              y2={100 - outerR * Math.cos(angle)}
              stroke={isCardinal ? "var(--color-accent)" : "var(--color-border)"}
              strokeWidth={isCardinal ? "1" : "0.5"}
              strokeOpacity={isCardinal ? 0.8 : 0.5}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.8 + i * 0.008,
                ease: [0.4, 0, 0.2, 1]
              }}
            />
          )
        })}

        {/* Cardinal letters */}
        {[
          { letter: 'N', angle: 0, y: 28 },
          { letter: 'E', angle: 90, x: 172 },
          { letter: 'S', angle: 180, y: 178 },
          { letter: 'W', angle: 270, x: 28 }
        ].map((item, i) => (
          <motion.text
            key={item.letter}
            x={item.x || 100}
            y={item.y || 104}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={item.letter === 'N' ? "var(--color-accent)" : "var(--color-text-secondary)"}
            fontSize="8"
            fontWeight="500"
            letterSpacing="0.05em"
            opacity={item.letter === 'N' ? 1 : 0.4}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: item.letter === 'N' ? 1 : 0.4, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 + i * 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            {item.letter}
          </motion.text>
        ))}

        {/* Success label with premium styling */}
        <motion.text
          x="100"
          y="52"
          textAnchor="middle"
          fill="var(--color-accent)"
          fontSize="6"
          fontWeight="600"
          letterSpacing="0.25em"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: [0.4, 0, 0.2, 1] }}
        >
          ERFOLG
        </motion.text>

        {/* Compass needle group with sophisticated animation */}
        <motion.g
          initial={{ rotate: -45, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            duration: 2.5,
            delay: 0.5,
            type: "spring",
            stiffness: 30,
            damping: 15
          }}
          style={{ transformOrigin: '100px 100px' }}
        >
          {/* North needle shadow */}
          <motion.polygon
            points="100,38 105,100 100,106 95,100"
            fill="rgba(0,0,0,0.1)"
            transform="translate(1, 1)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />

          {/* North needle - gradient fill */}
          <motion.polygon
            points="100,38 105,100 100,106 95,100"
            fill="url(#needleGradient)"
            filter="url(#glow)"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
          />

          {/* North needle highlight */}
          <motion.polygon
            points="100,38 102,100 100,106"
            fill="var(--color-accent-light)"
            opacity="0.3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.8, delay: 1 }}
          />

          {/* South needle */}
          <motion.polygon
            points="100,162 105,100 100,94 95,100"
            fill="var(--color-text)"
            opacity="0.15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
        </motion.g>

        {/* Center mechanism - premium detail */}
        <motion.circle
          cx="100"
          cy="100"
          r="12"
          fill="var(--color-bg)"
          stroke="var(--color-border)"
          strokeWidth="1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
        />

        {/* Center ring - gold accent */}
        <motion.circle
          cx="100"
          cy="100"
          r="8"
          fill="none"
          stroke="url(#goldShine)"
          strokeWidth="1.5"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4, ease: [0.4, 0, 0.2, 1] }}
        />

        {/* Center dot - accent */}
        <motion.circle
          cx="100"
          cy="100"
          r="3"
          fill="var(--color-accent)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 1.6,
            type: "spring",
            stiffness: 200
          }}
        />

        {/* Subtle pulsing ring animation */}
        <motion.circle
          cx="100"
          cy="100"
          r="20"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="0.5"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 3,
            delay: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  )
}

export default Compass
