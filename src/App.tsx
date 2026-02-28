import { useState, type FormEvent, type KeyboardEvent } from 'react'
import './App.css'

function SearchIcon() {
  return (
    <svg focusable="false" height="20" viewBox="0 0 24 24" width="20" fill="currentColor">
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
  )
}

function MicIcon() {
  return (
    <svg focusable="false" height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
    </svg>
  )
}

function ImageSearchIcon() {
  return (
    <svg focusable="false" height="24" viewBox="0 0 192 192" width="24">
      <path fill="none" d="M0 0h192v192H0z" />
      <path fill="#34a853" d="M176 168H16c-4.41 0-8-3.59-8-8V32c0-4.41 3.59-8 8-8h160c4.41 0 8 3.59 8 8v128c0 4.41-3.59 8-8 8z" opacity=".3" />
      <path fill="#4285f4" d="M176 168H96V96l80 72z" opacity=".3" />
      <path fill="#ea4335" d="M96 168v-72l-48 48 48 24z" opacity=".3" />
      <path fill="#fbbc05" d="M16 168l80-72-80-32v104z" opacity=".3" />
      <circle cx="64" cy="80" r="16" fill="#fbbc05" opacity=".8" />
      <path fill="#4285f4" d="M176 24H16c-4.41 0-8 3.59-8 8v128c0 4.41 3.59 8 8 8h160c4.41 0 8-3.59 8-8V32c0-4.41-3.59-8-8-8zm0 136H16V32h160v128z" />
    </svg>
  )
}

export default function App() {
  const [query, setQuery] = useState('')

  function handleSearch(e: FormEvent) {
    e.preventDefault()
    if (query.trim()) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query.trim())}`
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      if (query.trim()) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query.trim())}`
      }
    }
  }

  function handleLucky() {
    if (query.trim()) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query.trim())}&btnI=1`
    } else {
      window.location.href = 'https://www.google.com/doodles'
    }
  }

  return (
    <div className="page">
      {/* Top-right navigation */}
      <nav className="top-nav">
        <a href="https://mail.google.com">Gmail</a>
        <a href="https://images.google.com">Images</a>
        <button className="sign-in-btn">Sign in</button>
      </nav>

      {/* Centre content */}
      <main className="center">
        {/* Logo */}
        <div className="logo" aria-label="HelloWorld">
          <span>H</span>
          <span>e</span>
          <span>l</span>
          <span>l</span>
          <span>o</span>
          <span>W</span>
          <span>o</span>
          <span>r</span>
          <span>l</span>
          <span>d</span>
        </div>

        {/* Search form */}
        <form className="search-form" onSubmit={handleSearch} role="search">
          <div className="search-box">
            <span className="search-icon">
              <SearchIcon />
            </span>
            <input
              className="search-input"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              aria-label="Search"
              autoFocus
            />
            <div className="search-actions">
              <button type="button" className="mic-btn" aria-label="Search by voice">
                <MicIcon />
              </button>
              <button type="button" className="img-btn" aria-label="Search by image">
                <ImageSearchIcon />
              </button>
            </div>
          </div>

          <div className="search-buttons">
            <button type="submit">HelloWorld Search</button>
            <button type="button" onClick={handleLucky}>I'm Feeling Lucky</button>
          </div>
        </form>

        <div className="language-row">
          HelloWorld offered in:&nbsp;
          <a href="https://www.google.com/setprefs?hl=es">Español</a>
          <a href="https://www.google.com/setprefs?hl=fr">Français</a>
          <a href="https://www.google.com/setprefs?hl=de">Deutsch</a>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-country">United States</div>
        <div className="footer-links">
          <div className="footer-links-group">
            <a href="https://about.google">About</a>
            <a href="https://www.google.com/ads">Advertising</a>
            <a href="https://www.google.com/services">Business</a>
            <a href="https://www.google.com/search/howsearchworks">How Search works</a>
          </div>
          <div className="footer-links-group">
            <a href="https://policies.google.com/privacy">Privacy</a>
            <a href="https://policies.google.com/terms">Terms</a>
            <a href="https://www.google.com/preferences">Settings</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
