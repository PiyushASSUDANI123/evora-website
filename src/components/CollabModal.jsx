import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function CollabModal({ isOpen, onClose, initialPackage }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    socialLink: '',
    packageId: initialPackage || '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('http://localhost:5001/api/collabs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setFormData({ name: '', phone: '', email: '', socialLink: '', packageId: '', message: '' });
        }, 2000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)', zIndex: 9999,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '1rem'
    }}>
      <div style={{
        background: '#fff', borderRadius: '20px', padding: '2rem',
        width: '100%', maxWidth: '500px', position: 'relative'
      }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer' }}>
          <X size={24} color="#6b7280" />
        </button>
        
        <h3 style={{ fontSize: '1.5rem', color: '#3e5c46', marginBottom: '1.5rem', fontFamily: "'Playfair Display', serif" }}>
          Let's Collaborate
        </h3>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '2rem 0', color: '#4a5d4e' }}>
            <h4>Request Submitted Successfully!</h4>
            <p>Our team will get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input required placeholder="Your Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={inputStyle} />
            <input required type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} style={inputStyle} />
            <input required type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={inputStyle} />
            <input required placeholder="Instagram/YouTube Link" value={formData.socialLink} onChange={e => setFormData({...formData, socialLink: e.target.value})} style={inputStyle} />
            
            <select required value={formData.packageId} onChange={e => setFormData({...formData, packageId: e.target.value})} style={inputStyle}>
              <option value="">Select a Package</option>
              <option value="Basic">Basic - ₹1,499</option>
              <option value="Standard">Standard - ₹2,499</option>
              <option value="Pro">Pro - ₹3,999</option>
              <option value="Custom">Let's discuss a custom plan</option>
            </select>

            <textarea placeholder="Tell us a bit about your content..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} style={{...inputStyle, minHeight: '100px'}} />

            <button disabled={status === 'submitting'} type="submit" style={{
              background: '#4a5d4e', color: 'white', padding: '1rem', borderRadius: '10px',
              border: 'none', fontWeight: 600, cursor: 'pointer', marginTop: '0.5rem'
            }}>
              {status === 'submitting' ? 'Submitting...' : 'Send Request'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  padding: '0.8rem 1rem',
  borderRadius: '10px',
  border: '1px solid #e5e7eb',
  fontSize: '0.95rem',
  width: '100%',
  fontFamily: 'inherit'
};
