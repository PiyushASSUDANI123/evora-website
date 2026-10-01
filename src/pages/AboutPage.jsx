import React from 'react'
import { motion } from 'framer-motion'

const AboutPage = () => {
  return (
    <div style={{ padding: '4rem 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: '400', color: '#d86a77', letterSpacing: '4px', fontFamily: 'serif', lineHeight: 1 }}>EVORA</span>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#4a6246', letterSpacing: '4px', marginTop: '4px' }}>BALOTRA</span>
          </div>
          <h1 className="heading-2" style={{ marginBottom: '0.5rem' }}>About Evora</h1>
          <p className="text-muted">Our story, our passion, our food</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--primary-green)' }}>Our Story</h3>
            <p className="text-muted" style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Evora started with a simple idea — make healthy food accessible to everyone. Based in Balotra, Rajasthan, we've been serving fresh, nutritious meals that don't compromise on taste.
            </p>
            <p className="text-muted" style={{ lineHeight: '1.8' }}>
              From morning sprouts to evening snacks, every item on our menu is crafted with care using the finest local ingredients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel"
            style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--primary-pink)' }}>Our Values</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--primary-green)', fontWeight: '700' }}>01</span>
                <div>
                  <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Quality First</h4>
                  <p className="text-muted" style={{ fontSize: '0.9rem' }}>We never compromise on the quality of our ingredients</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--primary-green)', fontWeight: '700' }}>02</span>
                <div>
                  <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Health Focused</h4>
                  <p className="text-muted" style={{ fontSize: '0.9rem' }}>Every meal is designed to be nutritious and balanced</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--primary-green)', fontWeight: '700' }}>03</span>
                <div>
                  <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Community Love</h4>
                  <p className="text-muted" style={{ fontSize: '0.9rem' }}>We're proud to serve our local community</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
