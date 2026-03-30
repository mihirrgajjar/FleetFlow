import React from 'react'

const TruckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="2" />
    <path d="M16 8h4l3 5v3h-7z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
)

export default function HomeFooter({ onNavigate }) {
  const handleNavigate = (path) => {
    if (onNavigate) onNavigate(path)
  }

  return (
    <footer className="home-footer">
      <div className="home-footer-container">
        <div className="home-footer-main">
          <div className="home-footer-brand">
            <div className="home-logo">
              <TruckIcon />
            </div>
            <span className="home-brand-name" onClick={() => handleNavigate('home')} style={{ cursor: 'pointer' }}>FleetFlow</span>
            <p className="home-footer-description">
              Enterprise-grade fleet management platform for modern logistics operations.
              Streamline dispatch, track vehicles, and optimize costs with intelligent automation.
            </p>
            <div className="home-footer-social">
              <a href="#" className="home-footer-social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="home-footer-social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="home-footer-links">
            <div className="home-footer-column">
              <h4>Product</h4>
              <a href="#features" onClick={(e) => { e.preventDefault(); handleNavigate('home'); setTimeout(() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Features</a>
              <a href="#workflow" onClick={(e) => { e.preventDefault(); handleNavigate('home'); setTimeout(() => document.getElementById('workflow')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Workflow</a>
              <a href="#benefits" onClick={(e) => { e.preventDefault(); handleNavigate('home'); setTimeout(() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Benefits</a>
            </div>
            <div className="home-footer-column">
              <h4>Company</h4>
              <a href="#about" onClick={(e) => { e.preventDefault(); handleNavigate('about'); }}>About Us</a>
              <a href="#careers" onClick={(e) => { e.preventDefault(); handleNavigate('careers'); }}>Careers</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavigate('contact'); }}>Contact</a>
            </div>
            <div className="home-footer-column">
              <h4>Support</h4>
              <a href="#help" onClick={(e) => { e.preventDefault(); handleNavigate('help'); }}>Help Center</a>
              <a href="#docs" onClick={(e) => { e.preventDefault(); handleNavigate('docs'); }}>Documentation</a>
              <a href="#api" onClick={(e) => { e.preventDefault(); handleNavigate('api'); }}>API Reference</a>
            </div>
            <div className="home-footer-column">
              <h4>Legal</h4>
              <a href="#privacy" onClick={(e) => { e.preventDefault(); handleNavigate('privacy'); }}>Privacy Policy</a>
              <a href="#terms" onClick={(e) => { e.preventDefault(); handleNavigate('terms'); }}>Terms of Service</a>
              <a href="#security" onClick={(e) => { e.preventDefault(); handleNavigate('security'); }}>Security</a>
            </div>
          </div>
        </div>

        <div className="home-footer-bottom">
          <p>&copy; {new Date().getFullYear()} FleetFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
