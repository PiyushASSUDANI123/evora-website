import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
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
          <img src={logo} alt="Evora Balotra" style={{ height: '65px', objectFit: 'contain', mixBlendMode: 'multiply' }} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-only" style={{ 
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

        {/* Order Now Button - Removed as requested */}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          className="mobile-only mobile-menu-btn"
        >
          {isOpen ? <X size={28} color="#3e5c46" /> : <Menu size={28} color="#3e5c46" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          background: '#FFF4F5',
          boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
          padding: '2rem 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          zIndex: 99
        }}>
          {navLinks.map(link => {
            const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '')
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={{
                  fontWeight: 600,
                  color: isActive ? '#D36777' : '#3e5c46',
                  fontSize: '1.25rem',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}

export default Navbar