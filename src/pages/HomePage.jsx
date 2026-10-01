import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Leaf, Heart, Star, Flame, Clock, Calendar } from 'lucide-react'
import leafImg from '../assets/bottom-left-leaf.png'
import rightImg from '../assets/hero-right.png'
import menu1 from '../assets/menu-1.png'
import menu2 from '../assets/menu-2.png'
import menu3 from '../assets/menu-3.png'
import menu4 from '../assets/menu-4.png'
import tlLeaf from '../assets/menu-tl-leaf.png'
import trLeaf from '../assets/menu-tr-leaf.png'
import blLeaf from '../assets/menu-bl-leaf.png'
import brLeaf from '../assets/menu-br-leaf.png'
import storyRight from '../assets/story-right.png'
import visitCollage from '../assets/visit-collage.png'

// Custom SVGs for the specific icons in the design
const CupIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" y1="2" x2="6" y2="4" />
    <line x1="10" y1="2" x2="10" y2="4" />
    <line x1="14" y1="2" x2="14" y2="4" />
  </svg>
)

const BowlIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v10" />
    <path d="M18.5 7.5 12 12 5.5 7.5" />
    <path d="M22 12a10 10 0 0 1-20 0Z" />
  </svg>
)

const HomePage = () => {
  const [menuItems, setMenuItems] = useState([]);

  // Mocking database fetch for showcase
  useEffect(() => {
    const fetchMenuFromDatabase = async () => {
      // Simulate API delay
      // In production, this would be: const response = await fetch('/api/menu'); const data = await response.json();
      const mockDbData = [
        { id: 1, img: menu1, title: 'Cold Cocoa', price: '₹60', desc: 'Rich, chilled & creamy', badge: 'Bestseller', badgeType: 'star' },
        { id: 2, img: menu2, title: 'Coconut Milk', price: '₹50', desc: 'Light, cool & refreshing', badge: 'Customer Favourite', badgeType: 'heart' },
        { id: 3, img: menu3, title: 'Chatpata Mix', price: '₹50', desc: 'Crunchy, loaded & full of flavour', badge: 'Most Ordered', badgeType: 'flame' },
        { id: 4, img: menu4, title: 'Fruit Chaat', price: '₹60', desc: 'Fresh, colourful & zesty', badge: 'Fresh & Seasonal', badgeType: 'leaf' },
      ];
      setMenuItems(mockDbData);
    };
    fetchMenuFromDatabase();
  }, []);

  const getBadgeIcon = (type) => {
    switch(type) {
      case 'star': return <Star size={14} fill="#D36777" color="#D36777"/>;
      case 'heart': return <Heart size={14} color="#3e5c46"/>;
      case 'flame': return <Flame size={14} color="#D36777"/>;
      case 'leaf': return <Leaf size={14} color="#3e5c46"/>;
      default: return null;
    }
  }

  const heroStats = [
    { icon: <Leaf size={24} strokeWidth={1.5} />, title: 'FRESH', subtitle: 'INGREDIENTS' },
    { icon: <CupIcon />, title: 'CHILLED', subtitle: 'BEVERAGES' },
    { icon: <BowlIcon />, title: 'TASTY', subtitle: 'SNACKS & CHATS' },
    { icon: <Heart size={24} strokeWidth={1.5} />, title: 'LOCAL', subtitle: 'GOODNESS' },
  ]

  const menuStats = [
    { icon: <Leaf size={24} strokeWidth={1.5} />, title: 'FRESH', subtitle: 'INGREDIENTS' },
    { icon: <CupIcon />, title: 'CHILLED', subtitle: 'BEVERAGES' },
    { icon: <BowlIcon />, title: 'TASTY', subtitle: 'SNACKS & CHATS' },
    { icon: <Heart size={24} strokeWidth={1.5} />, title: 'MADE', subtitle: 'WITH LOVE' },
  ]

  return (
    <div style={{ background: '#FCFAF7', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '8rem 0 2rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        
        {/* Right Side Image */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 25%, black 50%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 25%, black 50%, black 100%)',
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          }}>
            <img src={rightImg} alt="Evora Offerings" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'right center', mixBlendMode: 'darken' }} />
          </div>
        </div>

        <div className="container" style={{ 
          padding: '0 4rem',
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative', 
          zIndex: 2, 
          width: '100%' 
        }}>
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'left', maxWidth: '650px' }}
          >
            <p style={{ 
              fontSize: '0.85rem', 
              letterSpacing: '3px', 
              color: '#8b8b9a', 
              fontWeight: 600, 
              marginBottom: '2rem',
              display: 'inline-flex',
              gap: '1rem',
              alignItems: 'center',
              textTransform: 'uppercase'
            }}>
              REFRESHMENT <span style={{fontSize: '0.4rem'}}>●</span> SNACKS <span style={{fontSize: '0.4rem'}}>●</span> GOOD VIBES
            </p>
            
            <h1 style={{ 
              fontSize: 'clamp(3.5rem, 5vw, 5.2rem)', 
              fontWeight: 600, 
              lineHeight: 1.05, 
              color: '#3e5c46',
              marginBottom: '1.5rem',
              fontFamily: "'Playfair Display', serif",
              letterSpacing: '-1.5px'
            }}>
              Simple Bites.<br />
              Refreshing Sips.<br />
              <span style={{ color: '#D36777' }}>Good Moments.</span>
            </h1>
            
            <p style={{ 
              fontSize: '1.15rem', 
              lineHeight: 1.6, 
              color: '#6b7280', 
              marginBottom: '3rem', 
              maxWidth: '480px',
              fontFamily: "'Playfair Display', serif"
            }}>
              From chilled cocoa and coconut milk to chats and your favourite snack bowls — made fresh, served with love in Balotra.
            </p>
            
            <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '5rem' }}>
              <Link to="/menu" style={{ 
                background: '#3e5c46', 
                color: 'white', 
                padding: '1.1rem 2.2rem', 
                borderRadius: '12px', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                fontWeight: 500,
                fontSize: '1.05rem',
                textDecoration: 'none',
                transition: 'all 0.3s',
                boxShadow: '0 4px 15px rgba(62, 92, 70, 0.2)'
              }}>
                Explore Menu <ArrowRight size={18} strokeWidth={2} />
              </Link>
              <Link to="/visit" style={{ 
                background: 'transparent',
                border: '1px solid #3e5c46',
                color: '#3e5c46', 
                padding: '1.1rem 2.2rem', 
                borderRadius: '12px', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                fontWeight: 500,
                fontSize: '1.05rem',
                textDecoration: 'none',
                transition: 'all 0.3s'
              }}>
                Visit Us <MapPin size={18} strokeWidth={2} />
              </Link>
            </div>
            
            <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
              {heroStats.map((stat, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ color: '#3e5c46', display: 'flex' }}>
                    {stat.icon}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#6b7280', letterSpacing: '1px', lineHeight: 1.3 }}>{stat.title}</span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#6b7280', letterSpacing: '1px', lineHeight: 1.3 }}>{stat.subtitle}</span>
                  </div>
                  {idx < heroStats.length - 1 && (
                    <div style={{ width: '1px', height: '30px', background: '#e5e7eb', marginLeft: '1.5rem' }}></div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
        
        {/* Decorative Leaf Bottom Left */}
        <div style={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0,
          zIndex: 0, 
          pointerEvents: 'none',
          width: '30vw',
          height: '50vh',
          maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
        }}>
          <img src={leafImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom left', display: 'block', mixBlendMode: 'darken' }} />
        </div>
      </section>

      {/* Signature Favourites Section */}
      <section style={{
        padding: '5rem 0 0 0',
        position: 'relative',
      }}>
        
        {/* Corner Leaves */}
        <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}>
          <img src={tlLeaf} alt="" style={{ height: '300px', mixBlendMode: 'darken' }} />
        </div>
        <div style={{ position: 'absolute', top: 0, right: 0, zIndex: 0, pointerEvents: 'none' }}>
          <img src={trLeaf} alt="" style={{ height: '300px', mixBlendMode: 'darken' }} />
        </div>

        <div className="container" style={{ 
          padding: '0 4rem',
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative', 
          zIndex: 2, 
        }}>
          
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.8rem', letterSpacing: '2px', color: '#8b8b9a', fontWeight: 600, textTransform: 'uppercase' }}>SIGNATURE FAVOURITES</span>
                <span style={{ height: '1px', width: '60px', background: '#fca5a5' }}></span>
              </div>
              <h2 style={{ fontSize: '3.8rem', fontWeight: 600, lineHeight: 1.1, color: '#3e5c46', fontFamily: "'Playfair Display', serif" }}>
                Our Most Loved<br />
                <span style={{ color: '#D36777' }}>Flavours.</span>
              </h2>
            </div>
            <div style={{ maxWidth: '420px', paddingBottom: '0.5rem' }}>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#6b7280', marginBottom: '1.5rem', fontFamily: "'Playfair Display', serif" }}>
                A few of our bestsellers — from chilled drinks to chatpata snacks and fresh fruit chaat. Simple, fresh and always a good idea.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <button style={{ width: '45px', height: '45px', borderRadius: '50%', border: '1px solid #d1d5db', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }}>
                  <ArrowRight size={18} style={{ transform: 'rotate(180deg)' }} color="#9ca3af" />
                </button>
                <button style={{ width: '45px', height: '45px', borderRadius: '50%', border: '1px solid #3e5c46', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }}>
                  <ArrowRight size={18} color="#3e5c46" />
                </button>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
            {menuItems.map((item) => (
              <div key={item.id} style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: '260px' }}>
                  <img src={item.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '15px', left: '15px', background: 'rgba(255,255,255,0.85)', padding: '6px 14px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', fontWeight: 600, color: '#4b5563', backdropFilter: 'blur(4px)' }}>
                    {getBadgeIcon(item.badgeType)} {item.badge}
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#3e5c46', fontFamily: "'Playfair Display', serif", margin: 0 }}>{item.title}</h3>
                    <span style={{ fontSize: '1.3rem', fontWeight: 600, color: '#D36777', fontFamily: "'Playfair Display', serif" }}>{item.price}</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#6b7280', margin: 0, flexGrow: 1 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Button */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', paddingBottom: '2rem' }}>
            <span style={{ height: '1px', width: '60px', background: '#fca5a5' }}></span>
            <Link to="/menu" style={{ background: '#4a5d4e', color: 'white', padding: '1rem 2.5rem', borderRadius: '30px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, fontSize: '1rem', textDecoration: 'none', transition: 'all 0.3s' }}>
              View Full Menu <ArrowRight size={18} strokeWidth={2} />
            </Link>
            <span style={{ height: '1px', width: '60px', background: '#fca5a5' }}></span>
          </div>

        </div>

        {/* Bottom Pink Area & Stats */}
        <div style={{ 
          background: 'linear-gradient(to bottom, transparent 0%, #FFF4F5 70%, #FCFAF7 100%)', 
          paddingTop: '1rem', 
          paddingBottom: '3rem',
          position: 'relative'
        }}>
          {/* Bottom Leaves */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}>
            <img src={blLeaf} alt="" style={{ height: '350px', mixBlendMode: 'darken', maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }} />
          </div>
          <div style={{ position: 'absolute', bottom: 0, right: 0, zIndex: 0, pointerEvents: 'none' }}>
            <img src={brLeaf} alt="" style={{ height: '350px', mixBlendMode: 'darken', maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }} />
          </div>

          <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'center', gap: '3rem', alignItems: 'center' }}>
            {menuStats.map((stat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: '#3e5c46', display: 'flex' }}>
                  {stat.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', letterSpacing: '1px', lineHeight: 1.3 }}>{stat.title}</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', letterSpacing: '1px', lineHeight: 1.3 }}>{stat.subtitle}</span>
                </div>
                {idx < menuStats.length - 1 && (
                  <div style={{ width: '1px', height: '35px', background: '#e5e7eb', marginLeft: '1.5rem' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Why Evora Section */}
      <section style={{ padding: '3rem 0 1rem 0', background: '#FCFAF7', position: 'relative' }}>
        {/* Top Right Leaf */}
        <div style={{ position: 'absolute', top: 0, right: 0, zIndex: 0, pointerEvents: 'none' }}>
          <img src={trLeaf} alt="" style={{ height: '220px', mixBlendMode: 'darken', transform: 'rotate(-45deg) translate(20%, -20%)' }} />
        </div>

        <div className="container" style={{ padding: '0 4rem', maxWidth: '1300px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '3rem', position: 'relative', zIndex: 2 }}>
          {/* Left Side */}
          <div style={{ flex: '1.2', maxWidth: '420px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '2px', color: '#8b8b9a', fontWeight: 600, textTransform: 'uppercase' }}>WHY EVORA</span>
              <span style={{ height: '1px', width: '35px', background: '#fca5a5' }}></span>
            </div>
            <h2 style={{ fontSize: '3rem', fontWeight: 600, lineHeight: 1.05, color: '#3e5c46', fontFamily: "'Playfair Display', serif", marginBottom: '1rem', letterSpacing: '-1px' }}>
              More Than<br />
              <span style={{ color: '#D36777' }}>Just Snacks.</span>
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.5, color: '#6b7280', marginBottom: '1.5rem', fontFamily: "'Playfair Display', serif" }}>
              It's about fresh ingredients, refreshing flavours and those little happy moments — every single day.
            </p>
            <Link to="/about" style={{ background: '#4a5d4e', color: 'white', padding: '0.9rem 2.2rem', borderRadius: '8px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.3s' }}>
              Know Our Story <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
          
          {/* Right Side Icons */}
          <div style={{ flex: '2', display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
            {[
              { icon: <Leaf size={24} strokeWidth={1} color="#4b5563"/>, title: 'Fresh Ingredients', sub: 'Quality ingredients, made fresh daily.' },
              { icon: <CupIcon />, title: 'Refreshing Beverages', sub: 'Chilled cocoa, coconut milk and more.' },
              { icon: <BowlIcon />, title: 'Chatpata Flavours', sub: 'Loaded with taste, just the way you like it.' },
              { icon: <Heart size={24} strokeWidth={1} color="#4b5563"/>, title: 'Made with Love', sub: 'A local favourite in Balotra.' }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: '1' }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', border: '1px solid #d1d5db', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <div style={{ transform: 'scale(1.1)', display: 'flex', color: '#4b5563' }}>
                    {item.icon}
                  </div>
                </div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#374151', fontFamily: "'Playfair Display', serif", marginBottom: '0.4rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.8rem', color: '#9ca3af', lineHeight: 1.4, padding: '0 0.1rem', margin: 0 }}>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section style={{ padding: '3rem 0 2rem 0', background: '#FCFAF7', position: 'relative' }}>
        {/* Middle Left Leaf */}
        <div style={{ position: 'absolute', top: '20%', left: 0, zIndex: 0, pointerEvents: 'none' }}>
          <img src={leafImg} alt="" style={{ height: '250px', objectFit: 'contain', mixBlendMode: 'darken', transform: 'translateX(-40%)' }} />
        </div>

        <div className="container" style={{ padding: '0 4rem', maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ background: '#FFF4F5', borderRadius: '25px', display: 'flex', alignItems: 'center', position: 'relative', marginLeft: '-4rem', marginRight: '-4rem' }}>
            {/* Left Side */}
            <div style={{ flex: '1', padding: '3.5rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
                <span style={{ fontSize: '0.75rem', letterSpacing: '2px', color: '#8b8b9a', fontWeight: 600, textTransform: 'uppercase' }}>OUR STORY</span>
                <span style={{ height: '1px', width: '35px', background: '#fca5a5' }}></span>
              </div>
              <h2 style={{ fontSize: '3rem', fontWeight: 600, lineHeight: 1.05, color: '#3e5c46', fontFamily: "'Playfair Display', serif", marginBottom: '1rem', letterSpacing: '-1px' }}>
                A Little Place<br />
                <span style={{ color: '#D36777' }}>For Good Moments.</span>
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#6b7280', marginBottom: '2rem', fontFamily: "'Playfair Display', serif", maxWidth: '400px' }}>
                Evora Balotra started with a simple idea — to bring refreshing drinks and flavourful snacks to our city. From chilled cocoa and coconut milk to chatpata bowls and fresh fruit chaat, everything here is made to add a little joy to your day.
              </p>
              <div>
                <Link to="/about" style={{ background: 'transparent', border: '1px solid #3e5c46', color: '#3e5c46', padding: '0.9rem 2.2rem', borderRadius: '30px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.3s' }}>
                  Read More <ArrowRight size={16} strokeWidth={2} />
                </Link>
              </div>
            </div>
            
            {/* Right Side Composite Image (Popping Out) */}
            <div style={{ flex: '1.2', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <img src={storyRight} alt="Our Story" style={{ width: '100%', height: 'auto', objectFit: 'contain', mixBlendMode: 'darken', marginTop: '-4rem', marginBottom: '-2rem' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section style={{ padding: '1rem 0 5rem 0', background: '#FCFAF7', position: 'relative' }}>
        
        {/* Bottom Leaves */}
        <div style={{ position: 'absolute', bottom: '0px', left: 0, zIndex: 1, pointerEvents: 'none' }}>
          <img src={blLeaf} alt="" style={{ height: '200px', mixBlendMode: 'darken', maskImage: 'linear-gradient(to top, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 80%, transparent 100%)' }} />
        </div>
        <div style={{ position: 'absolute', bottom: '0px', right: 0, zIndex: 1, pointerEvents: 'none' }}>
          <img src={brLeaf} alt="" style={{ height: '200px', mixBlendMode: 'darken', maskImage: 'linear-gradient(to top, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 80%, transparent 100%)' }} />
        </div>

        <div className="container" style={{ padding: '0 4rem', maxWidth: '1300px', margin: '0 auto', display: 'flex', gap: '5rem', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
          {/* Left Side */}
          <div style={{ flex: '0.9', paddingTop: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '2px', color: '#8b8b9a', fontWeight: 600, textTransform: 'uppercase' }}>VISIT US</span>
              <span style={{ height: '1px', width: '35px', background: '#fca5a5' }}></span>
            </div>
            <h2 style={{ fontSize: '3rem', fontWeight: 600, lineHeight: 1.05, color: '#3e5c46', fontFamily: "'Playfair Display', serif", marginBottom: '1rem', letterSpacing: '-1px' }}>
              Come Say Hi<br />
              <span style={{ color: '#D36777' }}>At Our Stall.</span>
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.5, color: '#6b7280', marginBottom: '2.5rem', fontFamily: "'Playfair Display', serif" }}>
              Enjoy your favourite chilled drinks and chatpata snacks at Evora Balotra.
            </p>
            
            <div style={{ display: 'flex', gap: '1.2rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', flex: '1' }}>
                <MapPin color="#D36777" size={20} strokeWidth={1.5} style={{ marginTop: '0.1rem' }}/>
                <div>
                  <h4 style={{ fontSize: '0.8rem', color: '#4b5563', fontWeight: 600, marginBottom: '0.2rem', marginTop: 0 }}>Location</h4>
                  <p style={{ fontSize: '0.75rem', color: '#9ca3af', margin: 0 }}>Balotra, Rajasthan</p>
                </div>
              </div>
              <div style={{ width: '1px', height: '30px', background: '#e5e7eb', marginTop: '0.2rem' }}></div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', flex: '1' }}>
                <Clock color="#D36777" size={20} strokeWidth={1.5} style={{ marginTop: '0.1rem' }}/>
                <div>
                  <h4 style={{ fontSize: '0.8rem', color: '#4b5563', fontWeight: 600, marginBottom: '0.2rem', marginTop: 0 }}>Timings</h4>
                  <p style={{ fontSize: '0.75rem', color: '#9ca3af', margin: 0 }}>4:00 PM - 10:00 PM</p>
                </div>
              </div>
              <div style={{ width: '1px', height: '30px', background: '#e5e7eb', marginTop: '0.2rem' }}></div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', flex: '1.2' }}>
                <Calendar color="#D36777" size={20} strokeWidth={1.5} style={{ marginTop: '0.1rem' }}/>
                <div>
                  <h4 style={{ fontSize: '0.8rem', color: '#4b5563', fontWeight: 600, marginBottom: '0.2rem', marginTop: 0 }}>Open Daily</h4>
                  <p style={{ fontSize: '0.75rem', color: '#9ca3af', margin: 0 }}>Mon - Sun</p>
                </div>
              </div>
            </div>

            <button style={{ background: '#4a5d4e', color: 'white', padding: '0.9rem 2.2rem', borderRadius: '8px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, fontSize: '0.9rem', border: 'none', cursor: 'pointer', transition: 'all 0.3s' }}>
              Get Directions <ArrowRight size={16} strokeWidth={2} />
            </button>
          </div>

          {/* Right Side Collage */}
          <div style={{ flex: '1.1' }}>
            <img src={visitCollage} alt="Visit Us Collage" style={{ width: '100%', height: 'auto', objectFit: 'contain', mixBlendMode: 'darken', clipPath: 'inset(0 0 0 30px)' }} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage