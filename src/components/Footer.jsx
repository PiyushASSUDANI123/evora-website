import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Leaf, Truck, Sparkles } from 'lucide-react'

const Footer = () => {
  const features = [
    { icon: <Leaf size={20} />, text: '100% Organic Ingredients' },
    { icon: <Heart size={20} />, text: 'Made with Love Daily' },
    { icon: <Truck size={20} />, text: 'Free Delivery Over ₹299' },
    { icon: <Sparkles size={20} />, text: 'Freshly Prepared' },
  ]

  return (
    <footer style={{ 
      background: 'linear-gradient(180deg, var(--primary-cream) 0%, var(--primary-peach-light) 100%)',
      padding: '4rem 0 2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, var(--primary-peach), transparent)' }} />
      
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: 'var(--radius-md)', 
                background: 'linear-gradient(135deg, var(--primary-peach), var(--primary-mint))',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                boxShadow: 'var(--shadow-soft)',
              }}>
                <Heart size={24} color="white" />
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: '900', background: 'linear-gradient(135deg, var(--primary-peach), var(--primary-mint))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Evora
              </span>
            </div>
            <p style={{ color: 'var(--text-soft)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Fresh, healthy & delicious meals made with love. Your daily dose of happiness delivered! 💕
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-full)', background: 'var(--primary-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-soft)', color: 'var(--primary-peach)', transition: 'var(--transition)' }} onMouseEnter={e => e.target.style.transform = 'translateY(-3px)'} onMouseLeave={e => e.target.style.transform = 'translateY(0)'}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-full)', background: 'var(--primary-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-soft)', color: 'var(--primary-mint)', transition: 'var(--transition)' }} onMouseEnter={e => e.target.style.transform = 'translateY(-3px)'} onMouseLeave={e => e.target.style.transform = 'translateY(0)'}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-full)', background: 'var(--primary-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-soft)', color: 'var(--primary-lavender)', transition: 'var(--transition)' }} onMouseEnter={e => e.target.style.transform = 'translateY(-3px)'} onMouseLeave={e => e.target.style.transform = 'translateY(0)'}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.25rem', fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-dark)' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link to="/" style={{ color: 'var(--text-soft)', fontSize: '0.95rem', transition: 'var(--transition-smooth)', display: 'flex', alignItems: 'center', gap: '0.5rem' }} onMouseEnter={e => e.target.style.color = 'var(--primary-peach-dark)'} onMouseLeave={e => e.target.style.color = 'var(--text-soft)'}><span>→</span> Home</Link>
              <Link to="/about" style={{ color: 'var(--text-soft)', fontSize: '0.95rem', transition: 'var(--transition-smooth)', display: 'flex', alignItems: 'center', gap: '0.5rem' }} onMouseEnter={e => e.target.style.color = 'var(--primary-peach-dark)'} onMouseLeave={e => e.target.style.color = 'var(--text-soft)'}><span>→</span> About Us</Link>
              <Link to="/contact" style={{ color: 'var(--text-soft)', fontSize: '0.95rem', transition: 'var(--transition-smooth)', display: 'flex', alignItems: 'center', gap: '0.5rem' }} onMouseEnter={e => e.target.style.color = 'var(--primary-peach-dark)'} onMouseLeave={e => e.target.style.color = 'var(--text-soft)'}><span>→</span> Contact</Link>
              <Link to="/" style={{ color: 'var(--text-soft)', fontSize: '0.95rem', transition: 'var(--transition-smooth)', display: 'flex', alignItems: 'center', gap: '0.5rem' }} onMouseEnter={e => e.target.style.color = 'var(--primary-peach-dark)'} onMouseLeave={e => e.target.style.color = 'var(--text-soft)'}><span>→</span> Order Now</Link>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.25rem', fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-dark)' }}>Contact Us</h4>
            <div style={{ color: 'var(--text-soft)', fontSize: '0.95rem', lineHeight: '1.8' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> Balotra, Rajasthan</p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={16} /> +91 98765 43210</p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={16} /> hello@evora.com</p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={16} /> Mon-Sun: 8AM - 10PM</p>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border-soft)' }}>
          {features.map((feature, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', background: 'var(--primary-white)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-soft)', border: '1px solid var(--border-soft)' }}>
              <div style={{ color: 'var(--primary-peach)' }}>{feature.icon}</div>
              <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>{feature.text}</span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', color: 'var(--text-light)', fontSize: '0.85rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-soft)' }}>
          <p>Made with <Heart size={14} color="var(--primary-peach)" /> by Team Evora</p>
          <p style={{ marginTop: '0.5rem' }}>© 2024 Evora Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

const MapPin = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
const Phone = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
const Mail = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
const Clock = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>

export default Footer