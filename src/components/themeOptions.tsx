import { useEffect } from "react";
import { useState } from "react";

function ThemeOptions() {

  const [theme, setTheme] = useState('auto')
  const setMode = (theme: string) => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    const preferredTheme = storedTheme ? storedTheme : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    setMode(preferredTheme)
  }, [])

  return (
    <div className="nav-item dropdown">
      <button className="btn btn-link dropdown-toggle me-1 mb-1" data-bs-toggle="dropdown">
        {theme === 'auto' ? (
          <i className="bi bi-circle-half"></i>
        ) : theme === 'light' ? (
          <i className="bi bi-sun-fill"></i>
        ) : (
          <i className="bi bi-moon-stars-fill"></i>
        )}
      </button>
      <ul className="dropdown-menu mb-3">
        <li><span className={"dropdown-item hoverable" + (theme === 'light' ? ' active' : '')} onClick={() => { setMode('light') }} ><i className="bi bi-sun-fill"></i> Terang</span></li>
        <li><span className={"dropdown-item hoverable" + (theme === 'dark' ? ' active' : '')} onClick={() => { setMode('dark') }} ><i className="bi bi-moon-stars-fill"></i> Gelap</span></li>
        <li><span className={"dropdown-item hoverable" + (theme === 'auto' ? ' active' : '')} onClick={() => { setMode('auto') }} ><i className="bi bi-circle-half"></i> Auto</span></li>
      </ul>
    </div >
  );
}

export default ThemeOptions;