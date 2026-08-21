import React from 'react'

export default function SuggestionChips({ onRunCommand }) {
  // Order matters: on a narrow phone only the first few chips are visible
  // without scrolling, so the most-wanted commands come first.
  const chips = [
    { label: '$ tracks', cmd: 'tracks' },
    { label: '$ prizes', cmd: 'prizes' },
    { label: '$ timeline', cmd: 'timeline' },
    { label: '$ about', cmd: 'about' },
    { label: '$ participation', cmd: 'participation' },
    { label: '$ faq', cmd: 'faq' },
    { label: '$ conduct', cmd: 'conduct' },
    { label: '$ hall of fame', cmd: 'hall' },
    { label: '$ recap', cmd: 'recap' },
    { label: '$ testimonials', cmd: 'gallery' },
    { label: '$ help', cmd: 'help' },
    { label: '$ home', cmd: 'home' },
  ]

  return (
    <div className="chips" aria-label="quick commands">
      {chips.map(chip => (
        <button
          key={chip.cmd}
          className={chip.isPrimary ? 'chip-primary' : chip.isSecondary ? 'chip-secondary' : ''}
          onClick={() => onRunCommand(chip.cmd)}
        >
          {chip.label}
        </button>
      ))}
    </div>
  )
}
