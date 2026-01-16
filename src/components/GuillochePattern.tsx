import { motion } from 'framer-motion'

interface GuillochePatternProps {
  variant?: 'hero' | 'section' | 'card'
  className?: string
}

const GuillochePattern = ({ variant = 'section', className = '' }: GuillochePatternProps) => {
  if (variant === 'hero') {
    return (
      <div className={`guilloche-pattern guilloche-hero ${className}`}>
        <svg
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
          className="guilloche-svg"
        >
          <defs>
            <pattern id="fine-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.3"
                opacity="0.15"
              />
            </pattern>
            <pattern id="diagonal-lines" width="8" height="8" patternUnits="userSpaceOnUse">
              <path
                d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4"
                stroke="currentColor"
                strokeWidth="0.2"
                opacity="0.08"
              />
            </pattern>
            <radialGradient id="fade-out" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="70%" stopColor="white" stopOpacity="0.5" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Fine grid background */}
          <rect width="100%" height="100%" fill="url(#fine-grid)" />

          {/* Concentric circles - currency/bond style */}
          <g opacity="0.06" stroke="currentColor" fill="none">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.ellipse
                key={i}
                cx="700"
                cy="300"
                rx={80 + i * 35}
                ry={60 + i * 25}
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: i * 0.1, ease: "easeOut" }}
              />
            ))}
          </g>

          {/* Rosette pattern - top left */}
          <g opacity="0.04" transform="translate(100, 100)">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.path
                key={i}
                d={`M 0 0 Q ${40 * Math.cos((i * 30 * Math.PI) / 180)} ${40 * Math.sin((i * 30 * Math.PI) / 180)}, ${80 * Math.cos(((i * 30 + 15) * Math.PI) / 180)} ${80 * Math.sin(((i * 30 + 15) * Math.PI) / 180)}`}
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 + i * 0.05 }}
              />
            ))}
          </g>

          {/* Wave guilloche - bottom */}
          <g opacity="0.05" transform="translate(0, 450)">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.path
                key={i}
                d={`M 0 ${i * 12} Q 100 ${i * 12 - 30}, 200 ${i * 12} T 400 ${i * 12} T 600 ${i * 12} T 800 ${i * 12}`}
                stroke="currentColor"
                strokeWidth="0.4"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.1 }}
              />
            ))}
          </g>
        </svg>
      </div>
    )
  }

  if (variant === 'card') {
    return (
      <div className={`guilloche-pattern guilloche-card ${className}`}>
        <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="card-lines" width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M 0 4 L 4 0" stroke="currentColor" strokeWidth="0.15" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#card-lines)" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.08" />
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.05" />
        </svg>
      </div>
    )
  }

  // Section variant - decorative divider
  return (
    <div className={`guilloche-pattern guilloche-divider ${className}`}>
      <svg viewBox="0 0 400 40" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="line-fade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="30%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="70%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Central ornament */}
        <g transform="translate(200, 20)" opacity="0.4">
          <motion.path
            d="M -8 0 L -4 -4 L 0 0 L 4 -4 L 8 0 L 4 4 L 0 0 L -4 4 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.circle
            cx="0"
            cy="0"
            r="2"
            fill="currentColor"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          />
        </g>

        {/* Extending lines */}
        <motion.line
          x1="20"
          y1="20"
          x2="180"
          y2="20"
          stroke="url(#line-fade)"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.line
          x1="220"
          y1="20"
          x2="380"
          y2="20"
          stroke="url(#line-fade)"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Small decorative dots */}
        {[-60, -30, 30, 60].map((offset, i) => (
          <motion.circle
            key={i}
            cx={200 + offset}
            cy="20"
            r="1"
            fill="currentColor"
            opacity="0.3"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.2, delay: 0.5 + i * 0.05 }}
          />
        ))}
      </svg>
    </div>
  )
}

export default GuillochePattern
