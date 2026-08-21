// Single source of truth for URL <-> command <-> page title.
//
// `path` is the real pathname without a leading slash ('' is the home page).
// `cmd` is the canonical command name; `aliases` are the other words a user can
// type that land on the same route. Deep links only work in production because
// vercel.json rewrites unknown paths back to index.html.

const SUFFIX = 'MBMC IdeaX 2026'

export const ROUTES = [
  { path: '', cmd: 'home', aliases: [], title: `${SUFFIX} | National Hackathon Nepal | Register Now` },
  { path: 'about', cmd: 'about', aliases: [], title: `About ${SUFFIX} | National Hackathon` },
  { path: 'participation', cmd: 'participation', aliases: ['eligibility'], title: `Eligibility & Team Rules | ${SUFFIX}` },
  { path: 'tracks', cmd: 'tracks', aliases: [], title: `Tracks & Problem Statements | ${SUFFIX}` },
  { path: 'timeline', cmd: 'timeline', aliases: [], title: `Timeline & Important Dates | ${SUFFIX}` },
  { path: 'prizes', cmd: 'prizes', aliases: [], title: `Prizes & Rewards (Rs. 111,111) | ${SUFFIX}` },
  { path: 'faq', cmd: 'faq', aliases: [], title: `Frequently Asked Questions (FAQ) | ${SUFFIX}` },
  { path: 'codeofconduct', cmd: 'conduct', aliases: ['coc', 'code', 'code-of-conduct', 'codeofconduct'], title: `Code of Conduct & Rules | ${SUFFIX}` },
  { path: 'register', cmd: 'register', aliases: [], title: `Register Now | ${SUFFIX}` },
  { path: 'halloffame', cmd: 'hall', aliases: ['museum', 'halloffame', 'hall-of-fame', 'fame'], title: `Hall of Fame | ${SUFFIX}` },
  { path: 'testimonials', cmd: 'gallery', aliases: ['testimonials'], title: `Participant Testimonials | ${SUFFIX}` },
  { path: 'recap', cmd: 'recap', aliases: [], title: `Past Recaps (2023-2025) | ${SUFFIX}` },
  { path: 'contact', cmd: 'contact', aliases: [], title: `Contact & Support | ${SUFFIX}` },
  { path: 'discord', cmd: 'discord', aliases: [], title: `Community Discord | ${SUFFIX}` },
  { path: 'countdown', cmd: 'countdown', aliases: [], title: `Countdown to Kickoff | ${SUFFIX}` }
]

export const CANONICAL_ORIGIN = 'https://ideax.mbmc.edu.np'
export const HOME_ROUTE = ROUTES[0]

const byToken = new Map()
const byPath = new Map()
for (const r of ROUTES) {
  byToken.set(r.cmd, r)
  for (const a of r.aliases) byToken.set(a, r)
  byPath.set(r.path, r)
}

/** Route for a typed command name or any of its aliases. */
export function routeForCommand(cmd) {
  return byToken.get((cmd || '').trim().toLowerCase()) || null
}

/** Route for a URL pathname such as "/codeofconduct" or "/codeofconduct/". */
export function routeForPath(pathname) {
  const clean = (pathname || '/').replace(/^\/+|\/+$/g, '').toLowerCase()
  return byPath.get(clean) || null
}

/** Absolute canonical URL for a route. */
export function canonicalFor(route) {
  return route && route.path ? `${CANONICAL_ORIGIN}/${route.path}` : `${CANONICAL_ORIGIN}/`
}

/** Pathname to put in the address bar for a route. */
export function hrefFor(route) {
  return route && route.path ? `/${route.path}` : '/'
}
