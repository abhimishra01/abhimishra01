import { useState, useEffect } from 'react'

export function useTheme() {
  const getSystemTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark' : 'light'

  const getSavedTheme = () =>
    localStorage.getItem('portfolio_theme') || getSystemTheme()

  const [theme, setTheme] = useState(getSavedTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('portfolio_theme', theme)
  }, [theme])

  // Listen for system preference changes (only when user hasn't manually set a preference)
  useEffect(() => {
    const saved = localStorage.getItem('portfolio_theme')
    if (saved) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light')
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}
