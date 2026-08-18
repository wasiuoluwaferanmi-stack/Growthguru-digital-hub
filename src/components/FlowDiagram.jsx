// The signature element: scattered nodes (manual chaos) resolving into
// a single glowing line (the automated system). Used once, large, in the hero.
export default function FlowDiagram() {
  const scattered = [
    { x: 40, y: 60 }, { x: 90, y: 130 }, { x: 30, y: 190 },
    { x: 110, y: 40 }, { x: 60, y: 240 }, { x: 130, y: 210 },
  ]

  return (
    <svg
      viewBox="0 0 620 320"
      className="flow-diagram"
      role="img"
      aria-label="Diagram of scattered manual tasks converging into one automated flow"
    >
      <defs>
        <linearGradient id="flowLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3FB8AF" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#3FB8AF" stopOpacity="1" />
        </linearGradient>
        <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* scattered chaos nodes, left side */}
      {scattered.map((p, i) => (
        <g key={i} className="chaos-node" style={{ animationDelay: `${i * 0.12}s` }}>
          <rect
            x={p.x} y={p.y} width="22" height="22" rx="4"
            fill="none" stroke="#5C6576" strokeWidth="1.4"
          />
          <line
            x1={p.x + 22} y1={p.y + 11}
            x2="220" y2="160"
            stroke="#2A3140" strokeWidth="1"
          />
        </g>
      ))}

      {/* convergence node */}
      <circle cx="220" cy="160" r="7" fill="#F2A93B" filter="url(#glow)" />

      {/* the resolved flow line */}
      <line
        x1="227" y1="160" x2="560" y2="160"
        stroke="url(#flowLine)" strokeWidth="2.5"
        className="flow-line"
      />

      {/* pulse traveling along the flow line */}
      <circle r="4" fill="#3FB8AF" filter="url(#glow)">
        <animateMotion
          dur="2.6s"
          repeatCount="indefinite"
          path="M227,160 L560,160"
        />
      </circle>

      {/* end node — the "done, running itself" state */}
      <circle cx="560" cy="160" r="9" fill="none" stroke="#3FB8AF" strokeWidth="2" />
      <circle cx="560" cy="160" r="3" fill="#3FB8AF" />
    </svg>
  )
}
