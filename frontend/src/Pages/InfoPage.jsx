import React, { useEffect } from 'react'
import HomeFooter from '../Components/HomeFooter'
import '../styles/global.css'

const TruckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
    <rect x="1" y="3" width="15" height="13" rx="2" />
    <path d="M16 8h4l3 5v3h-7z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
)

const PageHeader = ({ title, subtitle, onNavigate }) => (
  <nav className="home-nav">
    <div className="home-nav-brand" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
      <div className="home-logo">
        <TruckIcon />
      </div>
      <span className="home-brand-name">FleetFlow</span>
    </div>
    <div className="home-nav-actions">
      <button className="home-btn home-btn-secondary" onClick={() => onNavigate('login')}>Login</button>
      <button className="home-btn home-btn-primary" onClick={() => onNavigate('login')}>Get Started</button>
    </div>
  </nav>
)

const ContentSection = ({ title, children }) => (
  <section className="info-section">
    <h2 className="info-section-title">{title}</h2>
    <div className="info-content">
      {children}
    </div>
  </section>
)

const PAGE_CONTENT = {
  about: {
    title: "About FleetFlow",
    subtitle: "Revolutionizing Logistics Through Intelligent Automation",
    sections: [
      {
        title: "Our Mission",
        content: "At FleetFlow, our mission is to empower logistics companies with cutting-edge technology that simplifies complex operations. We believe that efficiency in transportation is the backbone of global commerce, and we're committed to building the tools that make it possible."
      },
      {
        title: "Our Story",
        content: "Founded in 2022, FleetFlow started as a small project to help local trucking companies manage their routes. Today, we serve thousands of operators worldwide, providing a comprehensive platform that covers everything from vehicle registry to predictive analytics."
      },
      {
        title: "Why FleetFlow?",
        content: "Unlike traditional fleet management software, FleetFlow is built with a focus on real-time data and user experience. Our platform is designed to be intuitive, powerful, and scalable, ensuring that your fleet stays on the road and your business keeps growing."
      }
    ]
  },
  careers: {
    title: "Join Our Team",
    subtitle: "Build the Future of Logistics with Us",
    sections: [
      {
        title: "Working at FleetFlow",
        content: "We're a team of engineers, designers, and logistics experts passionate about solving real-world problems. We value innovation, transparency, and a commitment to excellence."
      },
      {
        title: "Open Positions",
        content: "We are currently looking for talented individuals to join our Engineering, Product, and Sales teams. Even if you don't see a role that fits perfectly, we're always looking for great people to join our journey."
      },
      {
        title: "Benefits",
        content: "Enjoy competitive salaries, remote-first work environment, comprehensive health insurance, and the opportunity to work on technology that makes a global impact."
      }
    ]
  },
  contact: {
    title: "Contact Us",
    subtitle: "We're Here to Help You Succeed",
    sections: [
      {
        title: "Get in Touch",
        content: "Have questions about FleetFlow? Our team is ready to assist you with sales inquiries, technical support, or general information."
      },
      {
        title: "Support",
        content: "For technical issues, please contact our support team at support@fleetflow.io or visit our Help Center."
      },
      {
        title: "Sales",
        content: "Interested in a demo or custom enterprise pricing? Reach out to our sales team at sales@fleetflow.io."
      }
    ]
  },
  help: {
    title: "Help Center",
    subtitle: "Find Answers and Get Support",
    sections: [
      {
        title: "Getting Started",
        content: "New to FleetFlow? Check out our quick start guide to set up your company, add your first vehicle, and dispatch your first trip."
      },
      {
        title: "Common Questions",
        content: "Browse our frequently asked questions about billing, user permissions, and mobile app integration."
      },
      {
        title: "Video Tutorials",
        content: "Watch our step-by-step video guides to master every feature of the FleetFlow platform."
      }
    ]
  },
  docs: {
    title: "Documentation",
    subtitle: "Everything You Need to Know",
    sections: [
      {
        title: "Platform Overview",
        content: "Learn about the core architecture of FleetFlow and how our modules work together to provide a seamless fleet management experience."
      },
      {
        title: "Integration Guides",
        content: "Step-by-step instructions on how to integrate FleetFlow with your existing ERP, GPS providers, and financial systems."
      },
      {
        title: "Best Practices",
        content: "Optimize your fleet operations by following our recommended workflows for maintenance, dispatch, and driver safety."
      }
    ]
  },
  api: {
    title: "API Reference",
    subtitle: "Build Custom Solutions on FleetFlow",
    sections: [
      {
        title: "REST API",
        content: "Our comprehensive REST API allows you to programmatically manage vehicles, drivers, trips, and analytics data."
      },
      {
        title: "Authentication",
        content: "Learn how to securely authenticate your API requests using OAuth2 and API keys."
      },
      {
        title: "Samples",
        content: "Explore our sample code and SDKs for Python, Node.js, and Java to jumpstart your integration."
      }
    ]
  },
  privacy: {
    title: "Privacy Policy",
    subtitle: "Your Data Security is Our Top Priority",
    sections: [
      {
        title: "Information Collection",
        content: "We collect information necessary to provide and improve our services, including account data, vehicle location data, and usage metrics."
      },
      {
        title: "Data Usage",
        content: "We use your data to optimize fleet operations, provide customer support, and ensure platform security. We never sell your personal information to third parties."
      },
      {
        title: "Security Measures",
        content: "We employ industry-standard encryption and security protocols to protect your data both in transit and at rest."
      }
    ]
  },
  terms: {
    title: "Terms of Service",
    subtitle: "The Legal Foundation of Our Partnership",
    sections: [
      {
        title: "User Agreement",
        content: "By using FleetFlow, you agree to comply with our platform policies and use our services for lawful logistics operations."
      },
      {
        title: "Service Availability",
        content: "We strive for 99.9% uptime and will provide advance notice for any scheduled maintenance that may affect service availability."
      },
      {
        title: "Intellectual Property",
        content: "The FleetFlow platform and all related content are protected by copyright and intellectual property laws."
      }
    ]
  },
  security: {
    title: "Security",
    subtitle: "Enterprise-Grade Protection for Your Fleet",
    sections: [
      {
        title: "Infrastructure",
        content: "FleetFlow is hosted on Tier-1 cloud providers with multi-region redundancy and continuous monitoring."
      },
      {
        title: "Compliance",
        content: "We maintain compliance with SOC2, GDPR, and other international security standards to ensure your data is handled with care."
      },
      {
        title: "Reporting Issues",
        content: "If you discover a security vulnerability, please report it to our security team via our responsible disclosure program."
      }
    ]
  }
}

export default function InfoPage({ type, onNavigate }) {
  const content = PAGE_CONTENT[type] || PAGE_CONTENT.about
  const topRef = React.useRef(null)

  // Robust scroll to top when page type changes
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.body.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);

      if (topRef.current) {
        topRef.current.scrollIntoView({ behavior: 'smooth' });
      }

      // Fallback with a slight delay
      setTimeout(() => {
        window.scrollTo(0, 0);
        if (topRef.current) topRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    };

    scrollToTop();
  }, [type]);

  return (
    <div id="top" ref={topRef} className="home-page info-page-wrapper">
      <PageHeader onNavigate={onNavigate} />

      <div className="info-hero">
        <div className="info-hero-content">
          <h1 className="info-hero-title">{content.title}</h1>
          <p className="info-hero-subtitle">{content.subtitle}</p>
        </div>
      </div>

      <main className="info-main">
        <div className="info-container">
          {content.sections.map((section, idx) => (
            <ContentSection key={idx} title={section.title}>
              <p>{section.content}</p>
            </ContentSection>
          ))}

          <div className="info-cta">
            <h3>Ready to see it in action?</h3>
            <button className="home-btn home-btn-large home-btn-glow" onClick={() => onNavigate('login')}>
              Start Free Trial
            </button>
          </div>
        </div>
      </main>

      <HomeFooter onNavigate={onNavigate} />

      <style dangerouslySetInnerHTML={{
        __html: `
        .info-page-wrapper {
          background: var(--bg-primary);
          color: var(--text-primary);
          min-height: 100vh;
        }
        .info-hero {
          padding: 120px 20px 80px;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(30, 64, 175, 0.05) 100%);
          text-align: center;
          border-bottom: 1px solid var(--border-color);
        }
        .info-hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #60a5fa 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .info-hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto;
        }
        .info-main {
          padding: 80px 20px;
        }
        .info-container {
          max-width: 800px;
          margin: 0 auto;
        }
        .info-section {
          margin-bottom: 60px;
        }
        .info-section-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 24px;
          color: var(--text-primary);
        }
        .info-content p {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        .info-cta {
          margin-top: 80px;
          padding: 60px;
          background: rgba(37, 99, 235, 0.05);
          border-radius: 24px;
          text-align: center;
          border: 1px solid rgba(37, 99, 235, 0.1);
        }
        .info-cta h3 {
          font-size: 1.5rem;
          margin-bottom: 24px;
        }
        
        .light .info-hero {
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(243, 244, 246, 1) 100%);
        }
        .light .info-hero-title {
          background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}} />
    </div>
  )
}
