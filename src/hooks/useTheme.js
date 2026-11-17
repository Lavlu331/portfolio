import { useEffect, useState } from 'react'

export function useTheme() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains('dark'),
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch {
      /* স্টোরেজ বন্ধ থাকলে সমস্যা নেই */
    }
  }, [dark])

  return [dark, () => setDark((d) => !d)]
}
