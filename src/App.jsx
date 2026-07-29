import { useState, useEffect } from 'react'
import './App.css'

// Custom SVGs as Components for rich visuals
const SparklesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
  </svg>
)

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

// Project Vector Previews (Instead of generic images, we draw gorgeous UI mockups in SVGs)
const DashboardSVG = () => (
  <svg viewBox="0 0 500 280" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="500" height="280" fill="#080b13" />
    {/* Grid Lines */}
    <path d="M50 0v280M100 0v280M150 0v280M200 0v280M250 0v280M300 0v280M350 0v280M400 0v280M450 0v280" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
    <path d="M0 50h500M0 100h500M0 150h500M0 200h500M0 250h500" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
    
    {/* Header banner */}
    <rect x="20" y="20" width="460" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
    <circle cx="45" cy="40" r="8" fill="var(--accent-color)" opacity="0.8" />
    <rect x="65" y="36" width="80" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
    
    {/* Main Card */}
    <rect x="20" y="75" width="280" height="185" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
    <rect x="40" y="95" width="100" height="12" rx="6" fill="var(--accent-color)" opacity="0.3" />
    
    {/* Glowing Chart */}
    <path d="M45 220 l30-40 l40 20 l50-80 l60 40 l40-70" stroke="var(--accent-color)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M45 220 l30-40 l40 20 l50-80 l60 40 l40-70 V 220 H 45 Z" fill="url(#chart-glow)" opacity="0.15" />
    
    {/* Sidebar Cards */}
    <rect x="315" y="75" width="165" height="85" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
    <circle cx="350" cy="118" r="22" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
    <circle cx="350" cy="118" r="22" stroke="var(--accent-color)" strokeWidth="4" strokeDasharray="90 50" />
    <rect x="390" y="114" width="70" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
    
    <rect x="315" y="175" width="165" height="85" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
    <rect x="335" y="195" width="125" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
    <rect x="335" y="215" width="90" height="8" rx="4" fill="rgba(255,255,255,0.05)" />
    <rect x="335" y="235" width="110" height="8" rx="4" fill="var(--accent-color)" opacity="0.5" />
    
    <defs>
      <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="var(--accent-color)" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
    </defs>
  </svg>
)

const EcommerceSVG = () => (
  <svg viewBox="0 0 500 280" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="500" height="280" fill="#08070d" />
    
    {/* Top Nav */}
    <rect x="20" y="20" width="460" height="35" rx="6" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.04)" />
    <rect x="40" y="32" width="60" height="10" rx="3" fill="rgba(255,255,255,0.1)" />
    <circle cx="440" cy="37" r="8" fill="var(--accent-color)" opacity="0.7" />
    
    {/* Product Cards */}
    <g transform="translate(20, 75)">
      {/* Product 1 */}
      <rect x="0" y="0" width="135" height="185" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
      <rect x="12" y="12" width="111" height="90" rx="6" fill="rgba(255,255,255,0.04)" />
      <circle cx="68" cy="57" r="24" fill="var(--accent-color)" opacity="0.2" />
      <path d="M53 57l10 10l20-20" stroke="var(--accent-color)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="12" y="115" width="70" height="8" rx="4" fill="rgba(255,255,255,0.15)" />
      <rect x="12" y="130" width="45" height="8" rx="4" fill="var(--accent-color)" opacity="0.8" />
      <rect x="12" y="152" width="111" height="20" rx="4" fill="rgba(255,255,255,0.05)" />
    </g>
    
    <g transform="translate(170, 75)">
      {/* Product 2 */}
      <rect x="0" y="0" width="135" height="185" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
      <rect x="12" y="12" width="111" height="90" rx="6" fill="rgba(255,255,255,0.04)" />
      <path d="M45 42 L80 42 L85 75 L40 75 Z" stroke="var(--accent-color)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" opacity="0.6" />
      <rect x="12" y="115" width="85" height="8" rx="4" fill="rgba(255,255,255,0.15)" />
      <rect x="12" y="130" width="45" height="8" rx="4" fill="var(--accent-color)" opacity="0.8" />
      <rect x="12" y="152" width="111" height="20" rx="4" fill="rgba(255,255,255,0.05)" />
    </g>

    <g transform="translate(320, 75)">
      {/* Details Box */}
      <rect x="0" y="0" width="160" height="185" rx="10" fill="rgba(255,255,255,0.03)" stroke="var(--accent-color)" strokeOpacity="0.4" />
      <rect x="15" y="20" width="130" height="10" rx="5" fill="var(--accent-color)" opacity="0.2" />
      <rect x="15" y="45" width="130" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
      <rect x="15" y="60" width="100" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
      <rect x="15" y="75" width="115" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
      
      <circle cx="30" cy="115" r="10" fill="rgba(255,255,255,0.05)" />
      <circle cx="55" cy="115" r="10" fill="var(--accent-color)" opacity="0.7" />
      <circle cx="80" cy="115" r="10" fill="rgba(255,255,255,0.05)" />
      
      <rect x="15" y="145" width="130" height="25" rx="6" fill="var(--accent-color)" />
    </g>
  </svg>
)

const WorkspaceSVG = () => (
  <svg viewBox="0 0 500 280" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="500" height="280" fill="#06080e" />
    
    {/* Left Toolbar */}
    <rect x="15" y="15" width="40" height="250" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
    <circle cx="35" cy="40" r="10" fill="var(--accent-color)" opacity="0.8" />
    <rect x="25" y="70" width="20" height="20" rx="4" fill="rgba(255,255,255,0.05)" />
    <rect x="25" y="105" width="20" height="20" rx="4" fill="rgba(255,255,255,0.05)" />
    <rect x="25" y="140" width="20" height="20" rx="4" fill="rgba(255,255,255,0.05)" />
    
    {/* Main Editor Screen */}
    <rect x="70" y="15" width="415" height="250" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
    
    {/* Editor Header */}
    <rect x="70" y="15" width="415" height="40" rx="10" fill="rgba(255,255,255,0.01)" />
    <rect x="90" y="30" width="110" height="10" rx="5" fill="rgba(255,255,255,0.15)" />
    <circle cx="420" cy="35" r="10" fill="var(--accent-color)" opacity="0.3" />
    <circle cx="445" cy="35" r="10" fill="rgba(255,255,255,0.2)" />
    
    {/* Collaboration Cursor lines */}
    <g transform="translate(90, 80)">
      <rect x="0" y="0" width="280" height="12" rx="4" fill="rgba(255,255,255,0.08)" />
      <rect x="0" y="22" width="310" height="12" rx="4" fill="rgba(255,255,255,0.08)" />
      <rect x="0" y="44" width="150" height="12" rx="4" fill="rgba(255,255,255,0.08)" />
      {/* Active typing cursor */}
      <rect x="154" y="44" width="2" height="12" fill="var(--accent-color)" />
      <rect x="160" y="58" width="80" height="18" rx="4" fill="var(--accent-color)" />
      <text x="166" y="70" fill="#06070a" fontSize="8" fontWeight="bold" fontFamily="sans-serif">ALEX TYPING</text>
    </g>
    
    {/* Floating card element */}
    <rect x="290" y="160" width="180" height="90" rx="12" fill="#0e111a" stroke="var(--accent-color)" strokeWidth="1.5" strokeOpacity="0.8" />
    <rect x="305" y="175" width="120" height="8" rx="4" fill="rgba(255,255,255,0.15)" />
    <rect x="305" y="195" width="150" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
    <rect x="305" y="207" width="90" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
    
    <circle cx="317" cy="232" r="8" fill="var(--accent-color)" opacity="0.6" />
    <circle cx="337" cy="232" r="8" fill="rgba(255,255,255,0.1)" />
  </svg>
)

function App() {
  const [theme, setTheme] = useState('purple') // 'purple' | 'emerald' | 'rose'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  
  // Project list
  const projects = [
    {
      id: 1,
      title: "Aether Analytics Dashboard",
      shortDesc: "A glassmorphic real-time cloud stats tracker designed with highly customized layout configurations and dynamic metric cards.",
      longDesc: "Aether is a next-generation cloud infrastructure management portal. It features a fully glassmorphic dashboard built to handle millions of data streams in real-time. Designed with visual excellence and rich aesthetics, users can dynamically drag-and-drop metrics widgets, monitor global response logs, and customize analytics panels under multiple glow accent configurations.",
      tags: ["React", "CSS Variables", "Vite", "Websockets"],
      category: "Web Apps",
      duration: "3 Months",
      role: "Lead UI Developer",
      stack: "React, SVG Charts, HSL Theme Engine",
      demoUrl: "https://example.com/aether",
      githubUrl: "https://github.com/example/aether",
      svg: <DashboardSVG />
    },
    {
      id: 2,
      title: "Nova Luxury eCommerce",
      shortDesc: "An immersive digital storefront featuring fluid micro-animations, customizable dark theme presets, and high-performance routing.",
      longDesc: "Nova is a premium retail platform focusing on delivering a high-end storefront experience. By utilizing custom CSS keyframe animations, HSL tint variations, and lightweight client state management, the website features ultra-responsive filters, seamless cart slide panels, and sleek visual checkout summaries without heavy layout-shifting packages.",
      tags: ["React", "Fluid Motion", "State Management", "SEO"],
      category: "Web Apps",
      duration: "2 Months",
      role: "Frontend Engineer",
      stack: "React, Context API, CSS Transitions",
      demoUrl: "https://example.com/nova",
      githubUrl: "https://github.com/example/nova",
      svg: <EcommerceSVG />
    },
    {
      id: 3,
      title: "Zenith Real-time Workspace",
      shortDesc: "A sleek collaborative canvas allowing multiple team members to draft, organize, and edit docs simultaneously in a glass workspace.",
      longDesc: "Zenith Workspace provides teams with an ambient, minimalist playground for real-time documentation. Built to maximize focus, it provides collaborative rich-text pads, floating editor utility menus, drag-and-drop file imports, and multi-user cursor flags that render custom user-selected accent halos around active typography selections.",
      tags: ["Collaboration", "CSS Grid", "Real-time", "Design Systems"],
      category: "Design Systems",
      duration: "4 Months",
      role: "Core UI/UX Developer",
      stack: "React, Custom Rich Editor, WebRTC",
      demoUrl: "https://example.com/zenith",
      githubUrl: "https://github.com/example/zenith",
      svg: <WorkspaceSVG />
    }
  ]

  const [activeProject, setActiveProject] = useState(null)
  const [projectFilter, setProjectFilter] = useState('All')

  // Typing effect hook values
  const titles = ["Creative Developer", "React Specialist", "UI/UX Designer"]
  const [titleIndex, setTitleIndex] = useState(0)
  const [currentTitle, setCurrentTitle] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  // Typing animation effect
  useEffect(() => {
    let timer;
    const fullText = titles[titleIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentTitle(prev => prev.substring(0, prev.length - 1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setCurrentTitle(prev => fullText.substring(0, prev.length + 1));
      }, 85);
    }
    
    if (!isDeleting && currentTitle === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentTitle === "") {
      setIsDeleting(false);
      setTitleIndex(prev => (prev + 1) % titles.length);
    }
    
    return () => clearTimeout(timer);
  }, [currentTitle, isDeleting, titleIndex]);

  // Handle active section scrolling highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Contact form submission states
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [shakeFields, setShakeFields] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setFormErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validateForm = () => {
    let valid = true
    const errors = { name: '', email: '', message: '' }

    if (!formData.name.trim()) {
      errors.name = 'Name is required'
      valid = false
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email address'
      valid = false
    }

    if (!formData.message.trim()) {
      errors.message = 'Message cannot be empty'
      valid = false
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long'
      valid = false
    }

    setFormErrors(errors)
    return valid
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      setShakeFields(true)
      setTimeout(() => setShakeFields(false), 500)
      return
    }

    setIsSubmitting(true)
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  // Filtered projects
  const filteredProjects = projectFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === projectFilter)

  // Smooth scroll handler
  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`theme-${theme}`} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Background Orbs */}
      <div className="bg-glow-orb orb-1"></div>
      <div className="bg-glow-orb orb-2"></div>
      <div className="bg-glow-orb orb-3"></div>

      {/* Floating Navbar */}
      <nav className="navbar">
        <div className="container navbar-container">
          <div className="nav-logo" onClick={() => scrollToSection('home')}>
            AR<span className="logo-dot"></span>
          </div>

          <ul className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
            <li><a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
            <li><a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a></li>
            <li><a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>

          <div className="nav-actions">
            {/* Custom Accent Switcher Widget */}
            <div className="theme-picker">
              <div 
                className={`theme-dot purple ${theme === 'purple' ? 'active' : ''}`} 
                onClick={() => setTheme('purple')}
                title="Purple Accent"
              />
              <div 
                className={`theme-dot emerald ${theme === 'emerald' ? 'active' : ''}`} 
                onClick={() => setTheme('emerald')}
                title="Emerald Accent"
              />
              <div 
                className={`theme-dot rose ${theme === 'rose' ? 'active' : ''}`} 
                onClick={() => setTheme('rose')}
                title="Rose Accent"
              />
            </div>

            <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }} onClick={() => scrollToSection('contact')}>
              Let's Chat
            </button>

            {/* Mobile Menu Icon */}
            <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="badge">
              <SparklesIcon /> Available for Freelance & Remote Work
            </div>
            <h1 className="hero-title">Designing Ambient Web Interfaces</h1>
            <h2 className="hero-subtitle">
              I am a <span className="current-text">{currentTitle}</span>
              <span className="cursor-blink">|</span>
            </h2>
            <p className="hero-desc">
              Specialized in engineering sleek client environments and layout systems. I focus on combining high-performance code with premium modern design principles.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                View Projects <ArrowRightIcon />
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                Get in Touch
              </button>
            </div>
            <div className="hero-socials">
              <span>Connect</span>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-icon" aria-label="GitHub"><GithubIcon /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-icon" aria-label="LinkedIn"><LinkedinIcon /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="btn-icon" aria-label="Twitter"><TwitterIcon /></a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-canvas">
              <div className="visual-header">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>alex_rivera_resume.js</div>
              </div>
              <div className="visual-body">
                <div className="visual-circle">
                  <svg className="visual-inner-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div className="visual-code-lines">
                  <div className="code-line code-line-1"></div>
                  <div className="code-line code-line-2"></div>
                  <div className="code-line code-line-3"></div>
                  <div className="code-line code-line-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ backgroundColor: 'rgba(255, 255, 255, 0.01)', borderTop: '1px solid var(--card-border)', borderBottom: '1px solid var(--card-border)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge"><SparklesIcon /> My Story</div>
            <h2 className="section-title">About Me</h2>
            <p className="section-desc">Bridging the gap between creative visual architecture and technical implementation details.</p>
          </div>

          <div className="about-grid">
            <div className="about-bio">
              <p>
                Hello! I'm Alex Rivera, a frontend engineer and interface designer based in San Francisco. I craft websites and application UI mockups that feel responsive, fast, and visually rewarding.
              </p>
              <p>
                Over the past 5 years, I've worked alongside growing startups and established studios to build custom design systems, client portals, and fluid marketing sites. I strive for clean semantic HTML, modular CSS layout utilities, and maintainable state loops.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-num">5+</div>
                  <div className="stat-label">Years Exp</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">40+</div>
                  <div className="stat-label">Clients</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">100%</div>
                  <div className="stat-label">Delivered</div>
                </div>
              </div>
            </div>

            <div className="skills-container">
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Core Capabilities</h3>
              
              <div className="skill-card">
                <div className="skill-info">
                  <span className="skill-name">
                    <svg className="skill-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M21 9H3M21 15H3M12 3v18" /></svg>
                    React / Next.js Development
                  </span>
                  <span className="skill-percent">92%</span>
                </div>
                <div className="skill-track">
                  <div className="skill-bar" style={{ width: '92%' }}></div>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-info">
                  <span className="skill-name">
                    <svg className="skill-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                    CSS Grid / Flexbox Styling
                  </span>
                  <span className="skill-percent">95%</span>
                </div>
                <div className="skill-track">
                  <div className="skill-bar" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-info">
                  <span className="skill-name">
                    <svg className="skill-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><path d="M12 2v20M2 12h20" /></svg>
                    UI Design System Prototyping
                  </span>
                  <span className="skill-percent">88%</span>
                </div>
                <div className="skill-track">
                  <div className="skill-bar" style={{ width: '88%' }}></div>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-info">
                  <span className="skill-name">
                    <svg className="skill-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
                    Performance & SEO Tuning
                  </span>
                  <span className="skill-percent">85%</span>
                </div>
                <div className="skill-track">
                  <div className="skill-bar" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <div className="section-header">
            <div className="badge"><SparklesIcon /> Portfolio</div>
            <h2 className="section-title">Selected Projects</h2>
            <p className="section-desc">Explore live client workspaces and core design resources built for creative agencies.</p>
            
            {/* Filter buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '2rem' }}>
              {['All', 'Web Apps', 'Design Systems'].map(cat => (
                <button 
                  key={cat} 
                  className={`btn ${projectFilter === cat ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ padding: '0.4rem 1.1rem', fontSize: '0.85rem', borderRadius: '20px' }}
                  onClick={() => setProjectFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="project-card" 
                onClick={() => setActiveProject(project)}
              >
                <div className="project-img-wrapper">
                  {project.svg}
                  <div className="project-overlay">
                    <span className="project-overlay-btn">View Details</span>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.shortDesc}</p>
                  <div className="project-footer">
                    <span className="project-link">
                      Learn More <ArrowRightIcon />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{ backgroundColor: 'rgba(255, 255, 255, 0.01)', borderTop: '1px solid var(--card-border)', borderBottom: '1px solid var(--card-border)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge"><SparklesIcon /> History</div>
            <h2 className="section-title">My Journey</h2>
            <p className="section-desc">Timeline of my career path engineering design systems and interactive client dashboards.</p>
          </div>

          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-header">
                <span className="timeline-role">Lead Frontend Developer</span>
                <span className="timeline-company">TechVanguard Labs</span>
                <span className="timeline-duration">Jan 2024 - Present</span>
              </div>
              <p className="timeline-desc">
                Architecting core React widgets and user-dashboard libraries for a cloud computing platform. Focused on custom client-side analytics tools, theme settings configuration, and maintaining lightweight bundles.
              </p>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-header">
                <span className="timeline-role">Senior React Engineer</span>
                <span className="timeline-company">PixelCraft Studio</span>
                <span className="timeline-duration">Aug 2021 - Dec 2023</span>
              </div>
              <p className="timeline-desc">
                Crafted high-fidelity custom design systems, eCommerce layouts, and promotional landings. Collaborated closely with brand design partners to implement complex CSS keyframes and glassmorphic layers.
              </p>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-header">
                <span className="timeline-role">Frontend Web Developer</span>
                <span className="timeline-company">WebStudio Creative</span>
                <span className="timeline-duration">Jun 2019 - Jul 2021</span>
              </div>
              <p className="timeline-desc">
                Designed responsive layouts using flexbox, grid, and vanilla scripts. Managed deployment pipelines, ensured SEO scores met standards, and performed load-time speed optimizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <div className="section-header">
            <div className="badge"><SparklesIcon /> Get In Touch</div>
            <h2 className="section-title">Let's Collaborate</h2>
            <p className="section-desc">Have an upcoming project or need consulting? Drop a line and let's configure your details.</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-panel">
              <div className="contact-card">
                <div className="contact-icon-box">
                  <MailIcon />
                </div>
                <div>
                  <div className="contact-label">Email Me</div>
                  <div className="contact-value">alex@riveradesign.io</div>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon-box">
                  <MapPinIcon />
                </div>
                <div>
                  <div className="contact-label">Based In</div>
                  <div className="contact-value">San Francisco, CA</div>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon-box">
                  <PhoneIcon />
                </div>
                <div>
                  <div className="contact-label">Call / Text</div>
                  <div className="contact-value">+1 (415) 555-0192</div>
                </div>
              </div>
            </div>

            <div className="contact-form-panel">
              {isSubmitted ? (
                <div className="success-banner">
                  <div className="success-icon">✓</div>
                  <h3 style={{ fontSize: '1.5rem', color: '#f8fafc' }}>Message Dispatched!</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Thank you, your parameters have been submitted. I'll read through your message and respond within 24 hours.
                  </p>
                  <button className="btn btn-primary" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className={shakeFields ? 'shake' : ''} noValidate>
                  <div className="form-group">
                    <label htmlFor="form-name" className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      id="form-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`form-input ${formErrors.name ? 'input-invalid' : ''}`}
                      placeholder="Jane Doe" 
                    />
                    {formErrors.name && <span className="form-error-msg">{formErrors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="form-email" className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      id="form-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-input ${formErrors.email ? 'input-invalid' : ''}`}
                      placeholder="jane@company.com" 
                    />
                    {formErrors.email && <span className="form-error-msg">{formErrors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="form-message" className="form-label">Message Details</label>
                    <textarea 
                      id="form-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`form-textarea ${formErrors.message ? 'input-invalid' : ''}`}
                      placeholder="Tell me about your product scope..."
                    />
                    {formErrors.message && <span className="form-error-msg">{formErrors.message}</span>}
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{ width: '100%', marginTop: '1rem' }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Dispatching Message...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-logo">
            AR<span className="logo-dot"></span>
          </div>
          <ul className="footer-links">
            <li><a href="#home" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
            <li><a href="#about" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#projects" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
            <li><a href="#experience" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a></li>
          </ul>
          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-icon" aria-label="GitHub"><GithubIcon /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-icon" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="btn-icon" aria-label="Twitter"><TwitterIcon /></a>
          </div>
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Alex Rivera. Crafted with React & Ambient CSS variables. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Glassmorphic Project Detail Modal */}
      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveProject(null)}>✕</button>
            <div className="modal-body">
              <div style={{ background: '#08090d', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden', marginBottom: '1.5rem' }}>
                {activeProject.svg}
              </div>
              <h3 className="modal-title">{activeProject.title}</h3>
              
              <div className="modal-tags">
                {activeProject.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>

              <p className="modal-desc">{activeProject.longDesc}</p>

              <div className="modal-metadata">
                <div className="meta-item">
                  <span className="meta-label">Role</span>
                  <span className="meta-val">{activeProject.role}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Duration</span>
                  <span className="meta-val">{activeProject.duration}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Tech Stack</span>
                  <span className="meta-val">{activeProject.stack}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Category</span>
                  <span className="meta-val">{activeProject.category}</span>
                </div>
              </div>

              <div className="modal-actions">
                <a href={activeProject.demoUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Launch Live Preview <ExternalLinkIcon />
                </a>
                <a href={activeProject.githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
                  View Repository <GithubIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
