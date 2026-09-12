import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// React Router does not reset scroll position on route change by default —
// this keeps whatever scroll position the browser last had, so navigating
// away from the middle/bottom of one page lands you at the same spot on
// the next page instead of the top. This component forces a jump to the
// top of the page every time the route (pathname) changes.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
