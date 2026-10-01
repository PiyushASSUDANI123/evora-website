import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div style={{ padding: '4rem 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h1 className="heading-2" style={{ marginBottom: '0.5rem' }}>Get in Touch</h1>
          <p className="text-muted">We'd love to hear from you</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem' }}>Contact Info</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin size={20} color="var(--primary-green)" />
                <div>
                  <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Address</h4>
                  <p className="text-muted">Balotra, Rajasthan, India</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Phone size={20} color="var(--primary-green)" />
                <div>
                  <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Phone</h4>
                  <p className="text-muted">+91 98765 43210</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Mail size={20} color="var(--primary-green)" />
                <div>
                  <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Email</h4>
                  <p className="text-muted">hello@evora.com</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Clock size={20} color="var(--primary-green)" />
                <div>
                  <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Hours</h4>
                  <p className="text-muted">Mon-Sun: 8:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none', background: 'var(--bg-main)' }}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none', background: 'var(--bg-main)' }}
              />
              <textarea
                placeholder="Your Message"
                required
                rows="5"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none', background: 'var(--bg-main)', resize: 'none' }}
              />
              <button type="submit" className="btn btn-primary-green" style={{ padding: '1rem' }}>
                Send Message
              </button>
              {submitted && (
                <p style={{ color: 'var(--primary-green)', fontWeight: '600', textAlign: 'center' }}>
                  Message sent successfully!
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
