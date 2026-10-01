import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Instagram, Youtube, Leaf } from 'lucide-react'
import ebMonogram from '../assets/eb-monogram.png'
import footerRightArt from '../assets/footer-right-art.png'

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
          <div style={{ flex: '0.8' }}>
            <img src={ebMonogram} alt="EB Logo" style={{ height: '100px', objectFit: 'contain' }} />
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
                  <Instagram size={16} />
                </a>
                <a href="#" style={{ width: '30px', height: '30px', borderRadius: '5px', background: '#D36777', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <Youtube size={16} />
                </a>
              </div>
              <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>@evora.balotra</span>
            </div>
            <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: '1.6', maxWidth: '250px' }}>
              Stay updated with our latest snacks, drinks and behind the scenes.
            </p>
          </div>

          {/* Col 5: Right Art */}
          <div style={{ flex: '1.5', display: 'flex', justifyContent: 'flex-end', marginTop: '-2rem' }}>
            <img src={footerRightArt} alt="Good Vibes" style={{ height: '180px', objectFit: 'contain', mixBlendMode: 'darken' }} />
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
