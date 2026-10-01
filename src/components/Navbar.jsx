import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Home, ArrowRight } from 'lucide-react'
import logo from '../assets/right-logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/about', label: 'About' },
    { path: '/visit', label: 'Visit Us' },
  ]

  return (
    <header 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        background: 'transparent',
        padding: '1.5rem 0',
      }}
    >
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '0 4rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src={logo} alt="Evora Balotra" style={{ height: '65px', objectFit: 'contain', mixBlendMode: 'darken' }} />
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ 
          display: 'flex', 
          gap: '3rem', 
          alignItems: 'center',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)'
        }}>
          {navLinks.map(link => {
            const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '')
            return (
              <div key={link.path} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Link
                  to={link.path}
                  style={{
                    fontWeight: 500,
                    color: isActive ? '#D36777' : '#6b7280',
                    fontSize: '1.05rem',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {link.label}
                </Link>
                {isActive && (
                  <div style={{ width: '24px', height: '1.5px', background: '#D36777', marginTop: '4px' }} />
                )}
              </div>
            )
          })}
        </nav>

        {/* Order Now Button */}
        <div>
          <a 
            href="/admin" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.5rem',
              fontSize: '1.05rem',
              fontWeight: '500',
              color: '#3e5c46',
              background: 'transparent',
              border: '1px solid #3e5c46',
              borderRadius: '30px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#3e5c46'
              e.target.style.color = 'white'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent'
              e.target.style.color = '#3e5c46'
            }}
          >
            Order Now <ArrowRight size={18} strokeWidth={1.5} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer' }}
          className="mobile-menu-btn"
        >
          {isOpen ? <Menu size={24} color="#3e5c46" /> : <Home size={24} color="#3e5c46" />}
        </button>
      </div>
    </header>
  )
}

export default Navbar