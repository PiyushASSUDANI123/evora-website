import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Leaf } from 'lucide-react'
import footerLeaf from '../assets/new-tr-leaf.png'

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
)

const Footer = () => {
  return (
    <footer style={{ 
      background: '#FCFAF7',
      padding: '4rem 0 2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ padding: '0 4rem', maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Top Main Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem', gap: '2rem' }}>
          
          {/* Col 1: Monogram */}
          <div style={{ flex: '0.8', position: 'relative', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '80px', height: '80px', fontFamily: "'Playfair Display', serif" }}>
              <span style={{ position: 'absolute', left: 0, top: 0, fontSize: '5rem', color: '#3e5c46', lineHeight: 1, fontWeight: 500 }}>E</span>
              <span style={{ position: 'absolute', right: 0, bottom: '-10px', fontSize: '4.5rem', color: '#D36777', lineHeight: 1, fontWeight: 500, zIndex: 2 }}>B</span>
              {/* Optional tiny decorative leaf for the monogram */}
              <Leaf size={14} color="#3e5c46" style={{ position: 'absolute', left: '20px', top: '45px', transform: 'rotate(-45deg)', zIndex: 1 }} />
            </div>
          </div>

          {/* Col 2: Brand Info */}
          <div style={{ flex: '1.2' }}>
            {/* Logo Text simulation */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'fit-content', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                <Leaf size={16} color="#3e5c46" />
                <span style={{ fontSize: '1.8rem', fontWeight: 500, color: '#D36777', letterSpacing: '2px', fontFamily: "'Playfair Display', serif" }}>EVORA</span>
                <Leaf size={16} color="#3e5c46" style={{ transform: 'scaleX(-1)' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '-0.3rem' }}>
                <div style={{ height: '1px', width: '20px', background: '#3e5c46' }}></div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#3e5c46', letterSpacing: '3px' }}>BALOTRA</span>
                <div style={{ height: '1px', width: '20px', background: '#3e5c46' }}></div>
              </div>
            </div>
            <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: '1.6', maxWidth: '200px' }}>
              Simple bites. Refreshing sips. Good moments.
            </p>
          </div>

          {/* Col 3: Quick Links */}
          <div style={{ flex: '1' }}>
            <h4 style={{ marginBottom: '1.25rem', fontSize: '1.05rem', fontWeight: '700', color: '#374151', fontFamily: "'Playfair Display', serif" }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <Link to="/" style={{ color: '#6b7280', fontSize: '0.9rem', textDecoration: 'none' }}>Home</Link>
              <Link to="/menu" style={{ color: '#6b7280', fontSize: '0.9rem', textDecoration: 'none' }}>Menu</Link>
              <Link to="/about" style={{ color: '#6b7280', fontSize: '0.9rem', textDecoration: 'none' }}>About Us</Link>
              <Link to="/collaboration" style={{ color: '#6b7280', fontSize: '0.9rem', textDecoration: 'none' }}>Collaboration</Link>
              <Link to="/visit" style={{ color: '#6b7280', fontSize: '0.9rem', textDecoration: 'none' }}>Visit Us</Link>
            </div>
          </div>

          {/* Col 4: Follow Us */}
          <div style={{ flex: '1.2' }}>
            <h4 style={{ marginBottom: '1.25rem', fontSize: '1.05rem', fontWeight: '700', color: '#374151', fontFamily: "'Playfair Display', serif" }}>Follow Us</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a href="#" style={{ width: '30px', height: '30px', borderRadius: '5px', background: '#D36777', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <InstagramIcon />
                </a>
                <a href="#" style={{ width: '30px', height: '30px', borderRadius: '5px', background: '#D36777', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <YoutubeIcon />
                </a>
              </div>
              <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>@evora.balotra</span>
            </div>
            <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: '1.6', maxWidth: '250px' }}>
              Stay updated with our latest snacks, drinks and behind the scenes.
            </p>
          </div>

          {/* Col 5: Right Art */}
          <div style={{ flex: '1.5', position: 'relative', display: 'flex', justifyContent: 'flex-end', marginTop: '-1rem' }}>
            <div style={{ position: 'absolute', right: '-80px', top: '-50px', zIndex: 0, pointerEvents: 'none', opacity: 0.6 }}>
              <img src={footerLeaf} alt="" style={{ height: '250px', mixBlendMode: 'darken' }} />
            </div>
            <div style={{ position: 'relative', zIndex: 1, transform: 'rotate(-15deg)', fontFamily: "'Caveat', cursive", fontSize: '2.5rem', color: '#4b5563', lineHeight: 1.1, textAlign: 'center', paddingRight: '2rem' }}>
              <div>Good Food</div>
              <div>Good Vibes</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                Balotra
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D36777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(15deg)' }}>
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <svg style={{ position: 'absolute', bottom: '-5px', right: '10px' }} width="80" height="20" viewBox="0 0 80 20" fill="none">
                <path d="M2 15 Q 40 0, 78 5" stroke="#D36777" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0 }}>
            © 2025 Evora Balotra. All rights reserved.
          </p>
          <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Made with <Heart size={12} /> in Balotra
          </p>
        </div>

        {/* Credits Section */}
        <div style={{ textAlign: 'center', marginTop: '2rem', paddingTop: '1rem', borderTop: '1px dashed #e5e7eb' }}>
          <p style={{ color: '#9ca3af', fontSize: '0.8rem', margin: 0 }}>
            Designed and Developed by <strong style={{ color: '#6b7280' }}>Piyush Assudani</strong>, Founder of Assudani Developer - <a href="tel:9413879444" style={{ color: '#D36777', textDecoration: 'none', fontWeight: 600 }}>9413879444</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
