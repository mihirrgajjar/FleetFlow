import { useState, useEffect, useRef, useCallback } from 'react'
import HomeFooter from '../Components/HomeFooter'
import '../styles/global.css'

// SVG Icons - Professional Industry Set
const TruckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="2" />
    <path d="M16 8h4l3 5v3h-7z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
)

const VehicleManagementIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
  </svg>
)

const TripDispatchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
    <circle cx="12" cy="10" r="3" />
    <path d="M12 13v6" />
    <path d="m9 16 3-3 3 3" />
  </svg>
)

const DriverProfileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

const AnalyticsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const RegisterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <path d="M20 8v6" />
    <path d="M23 11h-6" />
  </svg>
)

const AddVehicleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
    <path d="M12 7v6" />
    <path d="M9 10h6" />
  </svg>
)

const DispatchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="m16 12-4-4-4 4" />
    <path d="M12 16V8" />
  </svg>
)

const TrackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
    <circle cx="19" cy="5" r="2" />
  </svg>
)

const EfficiencyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20" />
    <path d="M2 12h20" />
    <path d="m4.93 4.93 14.14 14.14" />
    <path d="m19.07 4.93-14.14 14.14" />
    <circle cx="12" cy="12" r="4" />
  </svg>
)

const CostTrackingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" x2="12" y1="2" y2="22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
)

const VisibilityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const SecurityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

// Animated Counter Component
const AnimatedCounter = ({ target, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let startTime = null
          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            setCount(Math.floor(easeOutQuart * target))
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={countRef}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

// Realistic Truck - Using Professional Photography
const ProfessionalTruckVisual = () => {
  return (
    <div className="truck-visual-container">
      {/* Abstract geometric background */}
      <div className="geo-bg">
        <div className="geo-line geo-line-1"></div>
        <div className="geo-line geo-line-2"></div>
        <div className="geo-line geo-line-3"></div>
        <div className="geo-dot geo-dot-1"></div>
        <div className="geo-dot geo-dot-2"></div>
        <div className="geo-dot geo-dot-3"></div>
      </div>

      {/* Real Truck Image */}
      <div className="truck-illustration real-truck">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80"
          alt="Professional Semi Truck"
          className="truck-image"
        />
        {/* Overlay gradient for seamless blending */}
        <div className="truck-overlay"></div>
      </div>

      {/* Data cards floating around truck */}
      <div className="data-card data-card-1">
        <div className="data-card-icon"><TrackIcon /></div>
        <div className="data-card-label">Real-time</div>
        <div className="data-card-value">Tracking</div>
      </div>

      <div className="data-card data-card-2">
        <div className="data-card-icon"><AnalyticsIcon /></div>
        <div className="data-card-label">Fleet</div>
        <div className="data-card-value">Analytics</div>
      </div>

      <div className="data-card data-card-3">
        <div className="data-card-icon"><TripDispatchIcon /></div>
        <div className="data-card-label">Smart</div>
        <div className="data-card-value">Dispatch</div>
      </div>
    </div>
  )
}

export default function Home({ onNavigate }) {
  const [isVisible, setIsVisible] = useState({})
  const [currentTheme, setCurrentTheme] = useState('dark')
  const featuresRef = useRef(null)
  const howItWorksRef = useRef(null)
  const statsRef = useRef(null)
  const benefitsRef = useRef(null)

  // Handle navigation with proper history management
  const handleNavigate = useCallback((destination) => {
    if (onNavigate) {
      onNavigate(destination)
    }
  }, [onNavigate])

  // Detect theme changes
  useEffect(() => {
    const updateTheme = () => {
      const isLight = document.documentElement.classList.contains('light')
      setCurrentTheme(isLight ? 'light' : 'dark')
    }

    updateTheme()

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          updateTheme()
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })

    return () => observer.disconnect()
  }, [])

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    const sections = [featuresRef, howItWorksRef, statsRef, benefitsRef]
    sections.forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  // Enable body scrolling for Home page
  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow
    const originalHtmlOverflow = document.documentElement.style.overflow

    document.body.style.overflow = 'auto'
    document.documentElement.style.overflow = 'auto'

    return () => {
      document.body.style.overflow = originalBodyOverflow
      document.documentElement.style.overflow = originalHtmlOverflow
    }
  }, [])

  const features = [
    {
      icon: <VehicleManagementIcon />,
      title: 'Vehicle Management',
      description: 'Complete fleet oversight with real-time status tracking, maintenance scheduling, and lifecycle management for every vehicle in your fleet.',
    },
    {
      icon: <TripDispatchIcon />,
      title: 'Trip Dispatching',
      description: 'Intelligent route optimization and automated driver assignment. Track trips in real-time with GPS integration and delivery confirmations.',
    },
    {
      icon: <DriverProfileIcon />,
      title: 'Driver Management',
      description: 'Comprehensive driver profiles with certification tracking, performance analytics, safety scores, and compliance monitoring.',
    },
    {
      icon: <AnalyticsIcon />,
      title: 'Advanced Analytics',
      description: 'Data-driven insights with detailed reports on fuel consumption, trip efficiency, cost analysis, and operational performance metrics.',
    },
  ]

  const workflowSteps = [
    {
      number: '01',
      icon: <RegisterIcon />,
      title: 'Register Company',
      description: 'Create your company account and set up your fleet management workspace with customizable settings and permissions.'
    },
    {
      number: '02',
      icon: <AddVehicleIcon />,
      title: 'Add Fleet Data',
      description: 'Import your vehicles, drivers, and routes. Set up maintenance schedules and configure operational parameters.'
    },
    {
      number: '03',
      icon: <DispatchIcon />,
      title: 'Dispatch Operations',
      description: 'Create and assign trips with optimized routing. Monitor real-time progress and manage exceptions efficiently.'
    },
    {
      number: '04',
      icon: <TrackIcon />,
      title: 'Track & Analyze',
      description: 'Monitor fleet performance with live dashboards. Generate comprehensive reports and identify optimization opportunities.'
    },
  ]

  const stats = [
    { value: 50000, suffix: '+', label: 'Trips Completed' },
    { value: 1200, suffix: '+', label: 'Active Vehicles' },
    { value: 98, suffix: '%', label: 'On-Time Delivery' },
    { value: 30, suffix: '%', label: 'Cost Reduction' },
  ]

  const benefits = [
    {
      icon: <EfficiencyIcon />,
      title: 'Operational Efficiency',
      description: 'Streamline dispatch operations and reduce manual coordination by up to 75% with automated workflows and intelligent scheduling.',
    },
    {
      icon: <CostTrackingIcon />,
      title: 'Cost Control',
      description: 'Track fuel expenses, maintenance costs, and driver hours in real-time. Identify cost-saving opportunities and optimize budgets.',
    },
    {
      icon: <VisibilityIcon />,
      title: 'Fleet Visibility',
      description: 'Gain complete visibility into your entire fleet operations with real-time GPS tracking, status updates, and predictive analytics.',
    },
    {
      icon: <SecurityIcon />,
      title: 'Compliance & Safety',
      description: 'Ensure regulatory compliance with automated driver certification tracking, vehicle inspection logs, and safety score monitoring.',
    },
  ]

  return (
    <div className="home-page">
      {/* Navigation */}
      <nav className="home-nav">
        <div className="home-nav-brand" onClick={() => handleNavigate('home')} style={{ cursor: 'pointer' }}>
          <div className="home-logo">
            <TruckIcon />
          </div>
          <span className="home-brand-name">FleetFlow</span>
        </div>
        <div className="home-nav-links">
          <a href="#features" className="home-nav-link" onClick={(e) => { e.preventDefault(); featuresRef.current?.scrollIntoView({ behavior: 'smooth' }); }}>Features</a>
          <a href="#workflow" className="home-nav-link" onClick={(e) => { e.preventDefault(); howItWorksRef.current?.scrollIntoView({ behavior: 'smooth' }); }}>Workflow</a>
          <a href="#benefits" className="home-nav-link" onClick={(e) => { e.preventDefault(); benefitsRef.current?.scrollIntoView({ behavior: 'smooth' }); }}>Benefits</a>
        </div>
        <div className="home-nav-actions">
          <button className="home-btn home-btn-secondary" onClick={() => handleNavigate('login')}>Login</button>
          <button className="home-btn home-btn-primary" onClick={() => handleNavigate('login')}>Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero-content">
          <div className="home-hero-badge">
            <span className="home-badge-dot"></span>
            Trusted by 2,000+ Fleet Operators
          </div>
          <h1 className="home-hero-title">
            Intelligent Fleet
            <span className="home-gradient-text"> Management Platform</span>
          </h1>
          <p className="home-hero-subtitle">
            Optimize routes, track vehicles in real-time, and reduce operational costs
            by up to 30% with our AI-powered logistics solution.
          </p>

          {/* Quick Stats */}
          <div className="home-hero-quick-stats">
            <div className="quick-stat">
              <span className="quick-stat-value">30%</span>
              <span className="quick-stat-label">Cost Savings</span>
            </div>
            <div className="quick-stat">
              <span className="quick-stat-value">50K+</span>
              <span className="quick-stat-label">Vehicles Managed</span>
            </div>
            <div className="quick-stat">
              <span className="quick-stat-value">99.9%</span>
              <span className="quick-stat-label">Uptime</span>
            </div>
          </div>

          {/* Feature Pills */}
          <div className="home-hero-pills">
            <span className="hero-pill"><CheckIcon /> Live Tracking</span>
            <span className="hero-pill"><CheckIcon /> Route Optimization</span>
            <span className="hero-pill"><CheckIcon /> Auto Dispatch</span>
          </div>

          <div className="home-hero-cta">
            <button className="home-btn home-btn-large home-btn-glow" onClick={() => handleNavigate('login')}>
              Start Free Trial
              <ArrowRightIcon />
            </button>
            <button className="home-btn home-btn-large home-btn-outline" onClick={() => handleNavigate('login')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Demo
            </button>
          </div>

          <div className="home-hero-trust">
            <div className="home-trust-avatars">
              {[
                { name: 'LogiCore', logo: '/images/logos/logicore.png' },
                { name: 'SwiftPort', logo: '/images/logos/swiftport.png' },
                { name: 'FleetLink', logo: '/images/logos/fleetlink.png' },
                { name: 'ApexTransit', logo: '/images/logos/apextransit.png' }
              ].map((company, i) => (
                <div key={i} className="home-trust-avatar" title={company.name}>
                  <img src={company.logo} alt={company.name} />
                </div>
              ))}
            </div>
            <p className="home-trust-text"><strong>2,000+</strong> companies trust FleetFlow</p>
          </div>
        </div>

        {/* Professional Truck Visualization */}
        <div className="home-hero-visual">
          <ProfessionalTruckVisual />
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" ref={statsRef} className={`home-section home-stats ${isVisible['stats'] ? 'visible' : ''}`}>
        <div className="home-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="home-stat-card" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="home-stat-value">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="home-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={featuresRef} className={`home-section home-features ${isVisible['features'] ? 'visible' : ''}`}>
        <div className="home-section-header">
          <span className="home-section-label">Platform Features</span>
          <h2 className="home-section-title">Everything You Need to Manage Your Fleet</h2>
          <p className="home-section-subtitle">Comprehensive tools designed to streamline logistics operations and maximize efficiency</p>
        </div>
        <div className="home-features-grid">
          {features.map((feature, index) => (
            <div key={index} className="home-feature-card" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="home-feature-icon-wrapper">
                <div className="home-feature-icon">{feature.icon}</div>
              </div>
              <h3 className="home-feature-title">{feature.title}</h3>
              <p className="home-feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" ref={howItWorksRef} className={`home-section home-workflow ${isVisible['workflow'] ? 'visible' : ''}`}>
        <div className="home-section-header">
          <span className="home-section-label">How It Works</span>
          <h2 className="home-section-title">Simple Workflow, Powerful Results</h2>
          <p className="home-section-subtitle">Get started with FleetFlow in four simple steps and transform your fleet operations</p>
        </div>
        <div className="home-workflow-container">
          <div className="home-workflow-line"></div>
          <div className="home-workflow-steps">
            {workflowSteps.map((step, index) => (
              <div key={index} className="home-workflow-step" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="home-workflow-step-number">{step.number}</div>
                <div className="home-workflow-step-icon">{step.icon}</div>
                <div className="home-workflow-step-content">
                  <h3 className="home-workflow-step-title">{step.title}</h3>
                  <p className="home-workflow-step-description">{step.description}</p>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="home-workflow-arrow">
                    <ArrowRightIcon />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" ref={benefitsRef} className={`home-section home-benefits ${isVisible['benefits'] ? 'visible' : ''}`}>
        <div className="home-section-header">
          <span className="home-section-label">Why Choose FleetFlow</span>
          <h2 className="home-section-title">Built for Modern Logistics</h2>
          <p className="home-section-subtitle">Discover how FleetFlow transforms fleet management operations</p>
        </div>
        <div className="home-benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="home-benefit-card" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="home-benefit-icon">{benefit.icon}</div>
              <h3 className="home-benefit-title">{benefit.title}</h3>
              <p className="home-benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta-section">
        <div className="home-cta-content">
          <h2 className="home-cta-title">Ready to Transform Your Fleet?</h2>
          <p className="home-cta-subtitle">Join thousands of logistics companies already using FleetFlow to optimize their operations</p>
          <div className="home-cta-buttons">
            <button className="home-btn home-btn-large home-btn-glow" onClick={() => handleNavigate('login')}>
              Get Started Free
              <ArrowRightIcon />
            </button>
            <button className="home-btn home-btn-large home-btn-outline-light" onClick={() => handleNavigate('login')}>
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <HomeFooter onNavigate={handleNavigate} />
    </div>
  )
}
