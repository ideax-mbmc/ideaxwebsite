import React, { useState, useEffect, useRef, useCallback } from 'react'
import TitleBar from './components/TitleBar'
import OutputPane from './components/OutputPane'
import SuggestionChips from './components/SuggestionChips'
import CommandLine from './components/CommandLine'
import LoadingIntro from './components/LoadingIntro'
import AsciiWorld from './components/AsciiWorld'
import Testimonials from './components/Testimonials'
import Conduct from './components/Conduct'
import { executeCommand } from './utils/commandHandler'
import { TRACKS, getDynamicTimeline } from './utils/terminalData'
import { routeForCommand, routeForPath, canonicalFor, hrefFor, HOME_ROUTE } from './utils/routes'

// Keep <title> and <link rel="canonical"> in step with the current route, so each
// path is indexable in its own right rather than all claiming to be "/".
function applyRouteMeta(route) {
  document.title = route.title
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.rel = 'canonical'
    document.head.appendChild(link)
  }
  link.href = canonicalFor(route)
}

const getInitialLandingItems = () => [
  { type: 'TEXT', text: '[ok] mounting /tracks', cls: 'ok' },
  { type: 'TEXT', text: '[ok] mounting /timeline', cls: 'ok' },
  { type: 'TEXT', text: '[ok] starting register.service', cls: 'ok' },
  { type: 'TEXT', text: '[ok] loading fastfetch…', cls: 'ok' },
  { type: 'BLANK' },
  { type: 'FASTFETCH' },
  { type: 'BLANK' },
  { type: 'REGISTER_BANNER' },
  { type: 'BLANK' },
  { type: 'TEXT', text: 'welcome to MBMC IdeaX 2026.', cls: 'strong' },
  { type: 'TEXT', text: "type 'help' to see available commands, or click a suggestion below.", cls: 'dim' },
  { type: 'BLANK' }
]

export default function App() {
  const [showIntro, setShowIntro] = useState(() => {
    try {
      // Already watched it this session (or just refreshed) — go straight in.
      if (sessionStorage.getItem('ideax_intro_seen')) return false
    } catch { /* private mode: fall through and play it */ }
    // The teardown strobes brightness; that's a photosensitivity risk, so
    // reduced-motion users skip the intro entirely.
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })
  const [view, setView] = useState('terminal')
  const [items, setItems] = useState([])
  const [history, setHistory] = useState([])
  const outputRef = useRef(null)
  const inputRef = useRef(null)

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const runBootSequence = (onDone) => {
    let isCancelled = false
    let timeoutIds = []

    setItems([])

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      document.body.classList.add('reduced-motion')
    }

    const bootTimer = setTimeout(() => {
      if (!isCancelled) document.body.classList.remove('boot')
    }, 950)
    timeoutIds.push(bootTimer)

    const bootLines = [
      ['[ok] mounting /tracks', 'ok'],
      ['[ok] mounting /timeline', 'ok'],
      ['[ok] starting register.service', 'ok'],
      ['[ok] loading fastfetch…', 'ok']
    ]

    let i = 0
    const step = () => {
      if (isCancelled) return
      if (i < bootLines.length) {
        const [text, cls] = bootLines[i]
        setItems(prev => [...prev, { type: 'TEXT', text, cls }])
        i++
        const t = setTimeout(step, reduced ? 0 : 130)
        timeoutIds.push(t)
      } else {
        setItems(getInitialLandingItems())
        const t = setTimeout(() => {
          focusInput()
          if (onDone) onDone()
        }, 50)
        timeoutIds.push(t)
      }
    }

    step()

    return () => {
      isCancelled = true
      timeoutIds.forEach(id => clearTimeout(id))
    }
  }

  const bootCleanupRef = useRef(null)

  const startBootSequence = () => {
    if (bootCleanupRef.current) {
      bootCleanupRef.current()
    }
    bootCleanupRef.current = runBootSequence()
  }

  // Boot sequence
  useEffect(() => {
    if (showIntro) return
    startBootSequence()
    return () => {
      if (bootCleanupRef.current) {
        bootCleanupRef.current()
        bootCleanupRef.current = null
      }
    }
  }, [showIntro])

  // Point the address bar at a route and update its metadata. `push` is false
  // when we're reacting to the URL (initial load, back/forward) rather than
  // driving it, so we don't push a duplicate entry onto the history stack.
  const goToRoute = (cmdName, push = true) => {
    const route = routeForCommand(cmdName)
    if (!route) return
    applyRouteMeta(route)
    if (!push) return
    const target = hrefFor(route)
    if (window.location.pathname !== target) {
      window.history.pushState(null, '', target)
    }
  }

  // handleRunCommand is redefined every render; the popstate listener below is
  // registered once, so it calls through this ref to avoid a stale closure.
  const runCommandRef = useRef(null)

  // Apply whatever route the URL points at — on first load and on back/forward.
  useEffect(() => {
    if (showIntro) return

    const applyRoute = () => {
      // Translate legacy #hash links (bookmarks, older shares) into real paths.
      const legacy = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase()
      if (legacy) {
        const hashRoute = routeForCommand(legacy)
        if (hashRoute) {
          window.history.replaceState(null, '', hrefFor(hashRoute))
        }
      }

      const route = routeForPath(window.location.pathname)
      if (!route || route.cmd === 'home') {
        // Covers navigating *back* to "/" from a full-screen view.
        setView('terminal')
        applyRouteMeta(HOME_ROUTE)
        return
      }
      runCommandRef.current(route.cmd, { push: false })
    }

    applyRoute()
    window.addEventListener('popstate', applyRoute)
    return () => window.removeEventListener('popstate', applyRoute)
  }, [showIntro])

  const handleRunCommand = (raw, opts = {}) => {
    const { push = true } = opts
    const trimmed = (raw || '').trim()

    // Always add command history if non-empty
    if (trimmed !== '') {
      setHistory(prev => [...prev, trimmed])
    }

    const cmdName = (trimmed.split(/\s+/)[0] || '').toLowerCase()
    goToRoute(cmdName, push)

    const echoItem = { type: 'ECHO', command: raw }
    const result = executeCommand(raw, { history, onRunCommand: handleRunCommand })

    if (result && result.type === 'CLEAR') {
      setItems([])
    } else if (result && result.type === 'HOME') {
      setHistory([])
      goToRoute('home', push)
      startBootSequence()
    } else if (result && result.type === 'MUSEUM') {
      setItems(prev => [...prev, echoItem])
      setView('museum')
      // Routed here explicitly: `cat code-of-conduct.md` and friends reach a view
      // without the typed word itself being a route.
      goToRoute('hall', push)
    } else if (result && result.type === 'GALLERY') {
      setItems(prev => [...prev, echoItem])
      setView('gallery')
      goToRoute('gallery', push)
    } else if (result && result.type === 'CONDUCT_VIEW') {
      setItems(prev => [...prev, echoItem])
      setView('conduct')
      goToRoute('conduct', push)
    } else if (result) {
      setItems(prev => [...prev, echoItem, result])
    } else {
      setItems(prev => [...prev, echoItem])
    }

    setTimeout(focusInput, 20)
  }

  runCommandRef.current = handleRunCommand

  const handleClearTerminal = () => {
    setItems([])
    focusInput()
  }

  const handleHome = () => {
    setHistory([])
    goToRoute('home')
    startBootSequence()
  }

  const handleIntroComplete = useCallback(() => setShowIntro(false), [])

  const handleFocusInput = () => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
    focusInput()
  }

  const handleAppendText = (text, cls) => {
    setItems(prev => [...prev, { type: 'TEXT', text, cls }])
  }

  const handleReturnToTerminal = () => {
    setView('terminal')
    goToRoute('home')
  }

  return (
    <main>
      {view === 'museum' ? (
        <section aria-label="Hall of Fame">
          <AsciiWorld onReturn={handleReturnToTerminal} />
        </section>
      ) : view === 'gallery' ? (
        <section aria-label="Testimonials">
          <Testimonials onReturn={handleReturnToTerminal} />
        </section>
      ) : view === 'conduct' ? (
        <section aria-label="Code of Conduct">
          <Conduct onReturn={handleReturnToTerminal} />
        </section>
      ) : (
        <div className="terminal-app">
          <div className="scanlines" aria-hidden="true" />
          <div className="vignette" aria-hidden="true" />

          {showIntro ? (
            <LoadingIntro onComplete={handleIntroComplete} />
          ) : (
            <div className="app" id="app">
              <TitleBar
                onClear={handleClearTerminal}
                onHome={handleHome}
                onFocus={handleFocusInput}
              />

              <OutputPane
                items={items}
                onRunCommand={handleRunCommand}
                outputRef={outputRef}
                onFocusInput={handleFocusInput}
              />

              <nav aria-label="Quick commands">
                <SuggestionChips onRunCommand={handleRunCommand} />
              </nav>

              <CommandLine
                inputRef={inputRef}
                history={history}
                onRunCommand={handleRunCommand}
                onAppendText={handleAppendText}
              />
            </div>
          )}
        </div>
      )}
    </main>
  )
}
