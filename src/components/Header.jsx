import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const links = [
    { path: '/', label: 'HOME' },
    { path: '/menu', label: 'MENU' },
    { path: '/locations', label: 'LOCATIONS' },
    { path: '/specials', label: 'SPECIALS' },
    { path: '/about', label: 'ABOUT' },
    { path: '/contact', label: 'CONTACT' },
  ]

  return (
    <header className="main-header">
      <div className="header-container">
        <Link to="/" className="logo-container">
          <img 
            src="https://d28f3w0x9i80nq.cloudfront.net/restaurantImages/e9645c2a-0731-47f8-b1e0-f9bd41fe597c/craftwinglogofinal-04.png" 
            alt="TexasCraftWings Logo"
            className="logo"
          />
        </Link>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button className="cta-button">ORDER NOW</button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`hamburger ${menuOpen ? 'active' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

