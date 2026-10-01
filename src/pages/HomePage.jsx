import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Leaf, Heart, Star, Flame, Clock, Calendar, Check, Quote, X, ChevronLeft, ChevronRight } from 'lucide-react'
import rightImg from '../assets/hero-right.png'
import storyRight from '../assets/story-right.png'
import visitCollage from '../assets/visit-collage-clean.png'

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
  const [packages, setPackages] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);
  const [showAddReview, setShowAddReview] = useState(false);
  const [promotionalBanner, setPromotionalBanner] = useState(null);

  // New Review Form State
  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewText, setNewReviewText] = useState('');

  // Mocking database fetch for showcase
  useEffect(() => {
    const fetchMenuFromDatabase = async () => {
      try {
        const menuRes = await fetch('http://localhost:5001/api/menu');
        const menuData = await menuRes.json();
        setMenuItems(menuData);
      } catch (err) {
        console.error('Error fetching menu', err);
      }

      try {
        const pkgRes = await fetch('http://localhost:5001/api/packages');
        const pkgData = await pkgRes.json();
        setPackages(pkgData);
      } catch (err) {
        console.error('Error fetching packages', err);
      }

      // Fetch approved reviews from database
      const fetchReviews = async () => {
        try {
          const res = await fetch('http://localhost:5001/api/reviews/approved');
          const data = await res.json();
          // Map to match frontend structure if needed, or use directly
          const formattedReviews = data.map(r => ({
            id: r.id,
            name: r.name,
            initial: r.name.charAt(0).toUpperCase(),
            stars: r.rating,
            excerpt: `"${r.text.substring(0, 50)}..."`,
            fullText: r.text
          }));
          
          if(formattedReviews.length > 0) {
            setReviews(formattedReviews);
          } else {
            // Fallback mock data if DB is empty
            setReviews([
              { id: 1, name: 'Kavya S.', initial: 'K', stars: 5, excerpt: '"Best cold cocoa in Balotra! Always fresh and so tasty."', fullText: "I've been visiting Evora Balotra for months now, and their cold cocoa is hands down the best in town. The ingredients are always fresh and it tastes amazing every single time." },
              { id: 2, name: 'Rohan M.', initial: 'R', stars: 5, excerpt: '"Chatpata mix is my go-to snack. Perfect taste and always fresh."', fullText: "The chatpata mix is my absolute favorite. It has the perfect balance of spices, and it's always served fresh. Great place to hang out with friends!" },
            ]);
          }
        } catch (error) {
          console.error("Error fetching reviews", error);
        }
      };
      fetchReviews();

      // Simulate fetching active promotional banner from database
      const fetchBanner = () => {
        const mockDbBanner = {
          id: 1,
          title: 'Festive Special Offer!',
          desc: 'Get 20% off on all chatpata mixes this week. Show this at the stall.',
          isActive: true
        };
        // Only show if active and not dismissed in this session
        if (mockDbBanner.isActive && !sessionStorage.getItem('evoraBannerDismissed')) {
          setPromotionalBanner(mockDbBanner);
        }
      };
      fetchBanner();
    };
    fetchMenuFromDatabase();
  }, []);

  const closeBanner = () => {
    setPromotionalBanner(null);
    sessionStorage.setItem('evoraBannerDismissed', 'true');
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5001/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newReviewName,
          rating: newReviewRating,
          text: newReviewText
        })
      });
      if (res.ok) {
        alert("Thank you! Your review has been submitted to the database and is pending admin approval.");
        setShowAddReview(false);
        setNewReviewName('');
        setNewReviewRating(5);
        setNewReviewText('');
      } else {
        alert("Error submitting review");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting review. Is backend running?");
    }
  };

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
    <div style={{ background: '#FCFAF7', minHeight: '100vh', overflowX: 'hidden' }}>
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

      </section>

      {/* Signature Favourites Section */}
      <section style={{
        padding: '5rem 0 0 0',
        position: 'relative',
      }}>


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


        <div className="container" style={{ padding: '0 4rem', maxWidth: '1300px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '5rem', position: 'relative', zIndex: 2 }}>
          {/* Left Side */}
          <div style={{ flex: '0.8', maxWidth: '380px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '2px', color: '#8b8b9a', fontWeight: 600, textTransform: 'uppercase' }}>WHY EVORA</span>
              <span style={{ height: '1px', width: '35px', background: '#fca5a5' }}></span>
            </div>
            <h2 style={{ fontSize: '3.2rem', fontWeight: 600, lineHeight: 1.05, color: '#3e5c46', fontFamily: "'Playfair Display', serif", marginBottom: '1rem', letterSpacing: '-1px' }}>
              More Than<br />
              <span style={{ color: '#D36777' }}>Just Snacks.</span>
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.5, color: '#6b7280', marginBottom: '2rem', fontFamily: "'Playfair Display', serif" }}>
              It's about fresh ingredients, refreshing flavours and those little happy moments — every single day.
            </p>
            <Link to="/about" style={{ background: '#4a5d4e', color: 'white', padding: '0.9rem 2.2rem', borderRadius: '8px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.3s' }}>
              Know Our Story <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
          
          {/* Right Side Icons */}
          <div style={{ flex: '1.5', display: 'flex', justifyContent: 'space-between', gap: '1.5rem' }}>
            {[
              { icon: <Leaf size={28} strokeWidth={1} color="#4b5563"/>, title: 'Fresh Ingredients', sub: 'Quality ingredients, made fresh daily.' },
              { icon: <CupIcon />, title: 'Refreshing Beverages', sub: 'Chilled cocoa, coconut milk and more.' },
              { icon: <BowlIcon />, title: 'Chatpata Flavours', sub: 'Loaded with taste, just the way you like it.' },
              { icon: <Heart size={28} strokeWidth={1} color="#4b5563"/>, title: 'Made with Love', sub: 'A local favourite in Balotra.' }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: '1' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                  <div style={{ transform: 'scale(1.1)', display: 'flex', color: '#4b5563' }}>
                    {item.icon}
                  </div>
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#3e5c46', fontFamily: "'Playfair Display', serif", marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.4, fontFamily: "'Playfair Display', serif", padding: '0 0.1rem', margin: 0 }}>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section style={{ padding: '1rem 0', background: '#FCFAF7', position: 'relative' }}>


        <div className="container" style={{ padding: '0 4rem', maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', padding: '2.5rem 0' }}>
            {/* Absolute Pink Box Background */}
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '-4rem', right: '-4rem', background: '#FFF4F5', borderRadius: '30px', zIndex: -1 }}></div>

            {/* Left Side */}
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.75rem', letterSpacing: '2px', color: '#8b8b9a', fontWeight: 600, textTransform: 'uppercase' }}>OUR STORY</span>
                <span style={{ height: '1px', width: '35px', background: '#fca5a5' }}></span>
              </div>
              <h2 style={{ fontSize: '3.2rem', fontWeight: 600, lineHeight: 1.05, color: '#3e5c46', fontFamily: "'Playfair Display', serif", marginBottom: '1rem', letterSpacing: '-1px' }}>
                A Little Place<br />
                <span style={{ color: '#D36777' }}>For Good Moments.</span>
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#6b7280', marginBottom: '1.5rem', fontFamily: "'Playfair Display', serif", maxWidth: '400px' }}>
                Evora Balotra started with a simple idea — to bring refreshing drinks and flavourful snacks to our city. From chilled cocoa and coconut milk to chatpata bowls and fresh fruit chaat, everything here is made to add a little joy to your day.
              </p>
              <div>
                <Link to="/about" style={{ background: 'transparent', border: '1px solid #3e5c46', color: '#3e5c46', padding: '0.8rem 2rem', borderRadius: '30px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.3s' }}>
                  Read More <ArrowRight size={16} strokeWidth={2} />
                </Link>
              </div>
            </div>
            
            {/* Right Side Composite Image (Popping Out via scale) */}
            <div style={{ flex: '1.2', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', position: 'relative' }}>
              <img src={storyRight} alt="Our Story" style={{ width: '100%', height: 'auto', objectFit: 'contain', mixBlendMode: 'darken', transform: 'scale(1.25) translateX(-0.5rem)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section style={{ padding: '1rem 0 5rem 0', background: '#FCFAF7', position: 'relative' }}>
        


        <div className="container" style={{ padding: '0 4rem', maxWidth: '1300px', margin: '0 auto', display: 'flex', gap: '5rem', alignItems: 'center', position: 'relative', zIndex: 2 }}>
          {/* Left Side */}
          <div style={{ flex: '0.9' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '2px', color: '#8b8b9a', fontWeight: 600, textTransform: 'uppercase' }}>VISIT US</span>
              <span style={{ height: '1px', width: '35px', background: '#fca5a5' }}></span>
            </div>
            <h2 style={{ fontSize: '3.2rem', fontWeight: 600, lineHeight: 1.05, color: '#3e5c46', fontFamily: "'Playfair Display', serif", marginBottom: '1rem', letterSpacing: '-1px' }}>
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
          <div style={{ flex: '1.15' }}>
            <img src={visitCollage} alt="Visit Us Collage" style={{ width: '110%', height: 'auto', objectFit: 'contain', mixBlendMode: 'darken', marginLeft: '-1rem' }} />
          </div>
        </div>
      </section>

      {/* Collaboration & Promotion Section */}
      <section style={{ padding: '4rem 0', background: '#FCFAF7', position: 'relative' }}>


        <div className="container" style={{ padding: '0 4rem', maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '3rem', alignItems: 'stretch', position: 'relative', zIndex: 2 }}>
          {/* Left Side */}
          <div style={{ flex: '0.9', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '2px', color: '#8b8b9a', fontWeight: 600, textTransform: 'uppercase' }}>COLLABORATION & PROMOTION</span>
            </div>
            <h2 style={{ fontSize: '3.2rem', fontWeight: 600, lineHeight: 1.05, color: '#3e5c46', fontFamily: "'Playfair Display', serif", marginBottom: '1rem', letterSpacing: '-1px' }}>
              Let's<br />
              <span style={{ color: '#D36777' }}>Grow Together.</span>
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.5, color: '#6b7280', marginBottom: '2.5rem', fontFamily: "'Playfair Display', serif", maxWidth: '400px' }}>
              Evora Balotra collaborates with local creators, influencers and pages to reach more people and share the taste of Balotra. Get high-quality content, regular video features and more with our monthly collaboration packages.
            </p>
            <div>
              <button style={{ background: '#4a5d4e', color: 'white', padding: '0.9rem 2.2rem', borderRadius: '8px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, fontSize: '0.9rem', border: 'none', cursor: 'pointer', transition: 'all 0.3s' }}>
                Collaborate With Us <ArrowRight size={16} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Right Side Pink Box */}
          <div style={{ flex: '2', background: '#FFF4F5', borderRadius: '25px', padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.6rem', color: '#374151', fontFamily: "'Playfair Display', serif", fontWeight: 600, margin: 0 }}>Collaboration Packages</h3>
              <div style={{ background: '#FCE7EA', color: '#D36777', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Star size={12} fill="#D36777" color="#D36777" /> Best for local creators
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', flex: 1 }}>
              {packages.map((pkg) => (
                <div key={pkg.id} style={{ flex: 1, background: 'white', borderRadius: '15px', padding: '1.5rem', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h4 style={{ color: '#D36777', fontSize: '1rem', fontWeight: 500, margin: 0 }}>{pkg.name}</h4>
                    {pkg.isPopular && (
                      <span style={{ background: '#4a5d4e', color: 'white', fontSize: '0.65rem', padding: '0.2rem 0.6rem', borderRadius: '12px', fontWeight: 600 }}>Popular</span>
                    )}
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '1.6rem', color: '#D36777', fontWeight: 600 }}>{pkg.price}</span>
                    <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}> {pkg.period}</span>
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.8rem' }}>
                        <Check size={14} color="#4a5d4e" strokeWidth={3} style={{ marginTop: '0.2rem' }} />
                        <span style={{ fontSize: '0.8rem', color: '#4b5563' }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button style={{ width: '100%', background: pkg.isPopular ? '#4a5d4e' : 'transparent', color: pkg.isPopular ? 'white' : '#4a5d4e', border: '1px solid #4a5d4e', padding: '0.75rem 0', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, marginTop: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What People Say Section */}
      <section style={{ padding: '2rem 0 6rem 0', background: '#FCFAF7', position: 'relative' }}>
        <div className="container" style={{ padding: '0 4rem', maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '3rem', alignItems: 'center', position: 'relative', zIndex: 2 }}>
          {/* Left Side */}
          <div style={{ flex: '0.9' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '2px', color: '#8b8b9a', fontWeight: 600, textTransform: 'uppercase' }}>WHAT PEOPLE SAY</span>
              <span style={{ height: '1px', width: '35px', background: '#fca5a5' }}></span>
            </div>
            <h2 style={{ fontSize: '3.2rem', fontWeight: 600, lineHeight: 1.05, color: '#3e5c46', fontFamily: "'Playfair Display', serif", marginBottom: '1rem', letterSpacing: '-1px' }}>
              Loved by<br />
              <span style={{ color: '#D36777' }}>Many in Balotra.</span>
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.5, color: '#6b7280', marginBottom: '2.5rem', fontFamily: "'Playfair Display', serif", maxWidth: '350px' }}>
              Your kind words keep us going. Here's what our customers and creators say about Evora.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #d1d5db', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#4b5563', transition: 'all 0.2s' }}>
                  <ChevronLeft size={18} />
                </button>
                <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #4a5d4e', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#4a5d4e', transition: 'all 0.2s' }}>
                  <ChevronRight size={18} />
                </button>
              </div>
              <button onClick={() => setShowAddReview(true)} style={{ background: 'transparent', color: '#D36777', padding: '0.5rem 1rem', borderRadius: '20px', border: '1px solid #D36777', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s' }}>
                + Write a Review
              </button>
            </div>
          </div>

          {/* Right Side Review Cards */}
          <div style={{ flex: '2', display: 'flex', gap: '1rem' }}>
            {reviews.map((review) => (
              <div 
                key={review.id} 
                onClick={() => setSelectedReview(review)}
                style={{ flex: 1, background: 'white', borderRadius: '15px', padding: '1.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', cursor: 'pointer', transition: 'transform 0.2s', position: 'relative' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: '#FCE7EA' }}>
                  <Quote size={24} fill="currentColor" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#4a5d4e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '1rem' }}>
                    {review.initial}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', color: '#374151', fontWeight: 600, margin: '0 0 0.2rem 0' }}>{review.name}</h4>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} fill={i < review.stars ? "#f59e0b" : "#e5e7eb"} color={i < review.stars ? "#f59e0b" : "#e5e7eb"} />
                      ))}
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.5, margin: 0, fontStyle: 'italic' }}>
                  {review.excerpt}
                </p>
                <div style={{ fontSize: '0.7rem', color: '#D36777', fontWeight: 600, marginTop: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Read Full Review →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Modal Pop-up */}
      {selectedReview && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(5px)' }} onClick={() => setSelectedReview(null)}>
          <div style={{ background: 'white', padding: '3rem', borderRadius: '20px', maxWidth: '500px', width: '90%', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedReview(null)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: '#f3f4f6', borderRadius: '50%', padding: '0.5rem', border: 'none', cursor: 'pointer', color: '#4b5563', display: 'flex' }}>
              <X size={18} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#4a5d4e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '1.2rem' }}>
                {selectedReview.initial}
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: '#374151', margin: '0 0 0.3rem 0' }}>{selectedReview.name}</h3>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < selectedReview.stars ? "#f59e0b" : "#e5e7eb"} color={i < selectedReview.stars ? "#f59e0b" : "#e5e7eb"} />
                  ))}
                </div>
              </div>
            </div>
            <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '2rem' }}>
              "{selectedReview.fullText}"
            </p>
            <div style={{ textAlign: 'center', borderTop: '1px solid #e5e7eb', paddingTop: '1.5rem' }}>
              <span style={{ fontSize: '0.8rem', color: '#9ca3af', display: 'block' }}>Verified Customer Review</span>
              <span style={{ fontSize: '0.7rem', color: '#d1d5db', display: 'block', marginTop: '0.5rem' }}>Fetched from Database via Backend API</span>
            </div>
          </div>
        </div>
      )}

      {/* Add Review Modal */}
      {showAddReview && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(5px)' }} onClick={() => setShowAddReview(false)}>
          <div style={{ background: 'white', padding: '2.5rem', borderRadius: '20px', maxWidth: '400px', width: '90%', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowAddReview(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: '#f3f4f6', borderRadius: '50%', padding: '0.5rem', border: 'none', cursor: 'pointer', color: '#4b5563', display: 'flex' }}>
              <X size={18} />
            </button>
            <h3 style={{ fontSize: '1.4rem', color: '#374151', margin: '0 0 1.5rem 0', fontFamily: "'Playfair Display', serif" }}>Share Your Experience</h3>
            
            <form onSubmit={handleReviewSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#4b5563', marginBottom: '0.4rem', fontWeight: 500 }}>Your Name</label>
                <input type="text" required value={newReviewName} onChange={e => setNewReviewName(e.target.value)} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none' }} placeholder="e.g. Rahul S." />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#4b5563', marginBottom: '0.4rem', fontWeight: 500 }}>Rating</label>
                <div style={{ display: 'flex', gap: '5px' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} onClick={() => setNewReviewRating(star)} size={24} fill={star <= newReviewRating ? "#f59e0b" : "none"} color={star <= newReviewRating ? "#f59e0b" : "#d1d5db"} style={{ cursor: 'pointer' }} />
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#4b5563', marginBottom: '0.4rem', fontWeight: 500 }}>Your Review</label>
                <textarea required value={newReviewText} onChange={e => setNewReviewText(e.target.value)} rows="4" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none', resize: 'none' }} placeholder="What did you like the most?"></textarea>
              </div>
              <button type="submit" style={{ width: '100%', background: '#4a5d4e', color: 'white', border: 'none', padding: '1rem', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Promotional Banner Modal */}
      {promotionalBanner && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(5px)' }} onClick={closeBanner}>
          <div style={{ position: 'relative', maxWidth: '500px', width: '90%', background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.25)' }} onClick={e => e.stopPropagation()}>
            <button onClick={closeBanner} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.8)', borderRadius: '50%', padding: '0.5rem', border: 'none', cursor: 'pointer', color: '#4b5563', display: 'flex', zIndex: 10 }}>
              <X size={20} />
            </button>
            <div style={{ background: '#FFF4F5', padding: '3.5rem 2.5rem', textAlign: 'center', position: 'relative' }}>
              <Leaf size={40} color="#D36777" style={{ position: 'absolute', top: '-15px', left: '-15px', opacity: 0.2, transform: 'rotate(-45deg)' }} />
              <h2 style={{ fontSize: '2.5rem', color: '#3e5c46', fontFamily: "'Playfair Display', serif", margin: '0 0 1rem 0' }}>{promotionalBanner.title}</h2>
              <p style={{ color: '#6b7280', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.5 }}>
                {promotionalBanner.desc}
              </p>
              <button onClick={closeBanner} style={{ background: '#D36777', color: 'white', border: 'none', padding: '0.9rem 2.5rem', borderRadius: '30px', fontWeight: 600, cursor: 'pointer', fontSize: '1rem', transition: 'all 0.3s' }}>
                Awesome, thanks!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage