import React, { useEffect, useState, useRef } from 'react'

// Full combined banner (large block letters)
const BANNER_LINES = [
  '  ██╗██████╗ ███████╗ █████╗ ██╗  ██╗',
  '  ██║██╔══██╗██╔════╝██╔══██╗╚██╗██╔╝',
  '  ██║██║  ██║█████╗  ███████║ ╚███╔╝ ',
  '  ██║██║  ██║██╔══╝  ██╔══██║ ██╔██╗ ',
  '  ██║██████╔╝███████╗██║  ██║██╔╝ ██╗',
  '  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝',
]

const BOOT_LOG = [
  { t: 0, text: '[    0.000] Booting MBMC IdeaX 2026 kernel...' },
  { t: 160, text: '[    0.312] mounting /proc and /sys filesystems' },
  { t: 330, text: '[    0.624] loading hackathon modules... OK' },
  { t: 500, text: '[    0.936] starting register.service... OK' },
  { t: 670, text: '[    1.260] mounting /tracks... OK' },
  { t: 840, text: '[    1.581] mounting /prizes... OK' },
  { t: 1010, text: '[    1.901] loading ui renderer... OK' },
  { t: 1170, text: '[    2.200] ████████████████ 100%' },
  { t: 1330, text: '> System ready. Welcome.' },
]

const TOTAL_MS = 1800

export default function LoadingIntro({ onComplete }) {
  // phases: 'running' | 'flicker1' | 'dark1' | 'flicker2' | 'dark2' | 'flicker3' | 'done'
  const [phase, setPhase] = useState('running')
  const [logLines, setLogLines] = useState([])
  const [progress, setProgress] = useState(0)
  const [bannerLine, setBannerLine] = useState(0)
  const timerRef = useRef([])
  const doneRef = useRef(false)

  // Tear everything down and hand off to the terminal. Guarded so that a skip
  // racing the natural end of the sequence can't complete twice.
  const finish = useRef(() => {})
  finish.current = () => {
    if (doneRef.current) return
    doneRef.current = true
    timerRef.current.forEach(clearTimeout)
    timerRef.current.forEach(clearInterval)
    timerRef.current = []
    try { sessionStorage.setItem('ideax_intro_seen', '1') } catch { /* private mode */ }
    setPhase('done')
    document.body.classList.add('boot')
    onComplete()
  }

  // Any tap, click or keypress skips the intro.
  useEffect(() => {
    const skip = () => finish.current()
    window.addEventListener('pointerdown', skip)
    window.addEventListener('keydown', skip)
    return () => {
      window.removeEventListener('pointerdown', skip)
      window.removeEventListener('keydown', skip)
    }
  }, [])

  useEffect(() => {
    // Reveal banner lines one by one
    BANNER_LINES.forEach((_, i) => {
      const t = setTimeout(() => setBannerLine(i + 1), i * 80)
      timerRef.current.push(t)
    })

    // Schedule log lines
    BOOT_LOG.forEach(({ t, text }) => {
      const id = setTimeout(() => {
        setLogLines(prev => [...prev, text])
      }, t)
      timerRef.current.push(id)
    })

    // Animate progress 0 → 100 over TOTAL_MS
    const steps = 60
    const stepInterval = TOTAL_MS / steps
    let step = 0
    const pid = setInterval(() => {
      step++
      const raw = step / steps
      const eased = 1 - Math.pow(1 - raw, 2)
      setProgress(Math.floor(eased * 100))
      if (step >= steps) clearInterval(pid)
    }, stepInterval)
    timerRef.current.push(pid)

    // CRT flicker sequence: intro → flicker pulses → hard cut
    // Each "flicker" is a quick dim → bright → dim cycle
    const seq = [
      // [delay from TOTAL_MS+100, phase]
      [0, 'flicker1'],  // first flash bright
      [80, 'dark1'],     // drop to black
      [160, 'flicker2'],  // second flash
      [240, 'dark2'],     // drop again
      [320, 'flicker3'],  // final burst
      [400, 'done'],      // hard cut — unmount
    ]

    seq.forEach(([offset, p]) => {
      const id = setTimeout(() => {
        if (p === 'done') {
          finish.current()
        } else {
          setPhase(p)
        }
      }, TOTAL_MS + 100 + offset)
      timerRef.current.push(id)
    })

    // finish() is read through a ref, so this effect never needs to re-run —
    // an unstable onComplete prop would otherwise restart the whole sequence.
    return () => timerRef.current.forEach(id => clearTimeout(id))
  }, [])

  // Build text-based progress bar: [████████░░░░] 42%
  const BAR_WIDTH = 28
  const filled = Math.round((progress / 100) * BAR_WIDTH)
  const empty = BAR_WIDTH - filled
  const progressBar = `[${'█'.repeat(filled)}${'░'.repeat(empty)}] ${String(progress).padStart(3)}%`

  return (
    <div className={`loading-intro loading-intro--${phase}`} aria-label="Loading IdeaX">
      {/* Scanlines overlay within intro */}
      <div className="intro-scanlines" aria-hidden="true" />

      {/* Big ASCII banner */}
      <div className="intro-banner" aria-label="IdeaX">
        {BANNER_LINES.map((line, i) => (
          <div
            key={i}
            className="banner-line"
            style={{
              opacity: i < bannerLine ? 1 : 0,
              transform: i < bannerLine ? 'translateY(0)' : 'translateY(-8px)',
              transition: 'opacity 0.18s ease, transform 0.18s ease',
            }}
          >
            {line}
          </div>
        ))}
      </div>

      {/* Sub-title */}
      <div className="intro-subtitle">
        MBMC IdeaX 2026
      </div>

      {/* Scrolling boot log */}
      <div className="intro-log" aria-live="polite">
        {logLines.map((line, i) => (
          <div
            key={i}
            className={`intro-log-line${i === logLines.length - 1 ? ' intro-log-line--last' : ''}`}
          >
            {line}
          </div>
        ))}
      </div>

      {/* Text-based progress bar */}
      <div className="intro-progress-row">
        <span className="intro-prompt">boot@ideax:~$&nbsp;</span>
        <span className="intro-progress-bar">{progressBar}</span>
        <span className="cursor-blink">_</span>
      </div>

      <button type="button" className="intro-skip" onClick={() => finish.current()}>
        press any key to skip &rarr;
      </button>
    </div>
  )
}
