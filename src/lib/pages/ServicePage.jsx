import { useState, useEffect, useRef } from 'react';
import '../stylesheet css/ServicePage.css';

// Import Assets
import bpLogo from '../../assets/logo/Baluca-portpolio logo.png';

// Icons
import appIcon from '../../assets/icon/mobile-development.png';
import webIcon from '../../assets/icon/world-wide-web.png';
import arduinoIcon from '../../assets/icon/computer.png';

// Logos
import androidLogo from '../../assets/logo/android.png';
import antigravityLogo from '../../assets/logo/antigravity ide.png';
import arduinoLogo from '../../assets/logo/aurdino ide.png';
import cppLogo from '../../assets/logo/cpp.png';
import cssLogo from '../../assets/logo/css-3.png';
import dartLogo from '../../assets/logo/dart.webp';
import firebaseLogo from '../../assets/logo/firebase.png';
import flutterLogo from '../../assets/logo/flutter.png';
import htmlLogo from '../../assets/logo/html-5.png';
import jsLogo from '../../assets/logo/js.png';
import mysqlLogo from '../../assets/logo/mysql.png';
import nodeLogo from '../../assets/logo/node js.png';
import phpLogo from '../../assets/logo/php (2).png';
import reactLogo from '../../assets/logo/react js.png';
import tailwindLogo from '../../assets/logo/tailwind css.png';

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#32CD32"/>
    <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SpinningOrb = () => (
  <div className="service-orb-wrapper">
    <div className="service-obj">
      <div className="service-objchild">
        <span className="service-inn6"></span>
      </div>
    </div>
  </div>
);

const ServiceCard = ({ icon, title, titleColor, description, features, techStack, projects }) => {
  return (
    <div className="service-card-wrapper">
      <SpinningOrb />
      <div className="service-card-container">
        {/* Blue border segments */}
        <div className="service-border-top"></div>
        <div className="service-border-left"></div>
        <div className="service-border-bottom"></div>
        <div className="service-border-right"></div>
      
      <div className="service-card-header">
        <img src={icon} alt={title} className="service-card-icon" />
        <h2 className="service-card-title" style={{ color: titleColor }}>{title}</h2>
      </div>

      <p className="service-card-description">
        {description}
      </p>

      <ul className="service-card-features">
        {features.map((feature, idx) => (
          <li key={idx}>
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <h3 className="service-section-title">TECH STACK</h3>
      <div className="service-tech-stack">
        {techStack.map((logo, idx) => (
          <img key={idx} src={logo} alt="Tech Logo" className="service-tech-logo" />
        ))}
      </div>

      <h3 className="service-section-title">PROJECT HIGHLIGHTS</h3>
      <ul className="service-project-highlights">
        {projects.map((project, idx) => (
          <li key={idx}>
            <span className="project-bullet">•</span>
            <span className="project-text">
              <strong>{project.name}</strong> - {project.desc}
            </span>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

const ServicePage = ({ show, setCurrentPage }) => {
  const sectionRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const handleScroll = () => setShowScrollTop(el.scrollTop > 200);
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    sectionRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      icon: appIcon,
      title: "APPLICATION\nDEVELOPMENT",
      titleColor: "#1e90ff",
      description: "I create simple, user-friendly, and reliable applications tailored to your needs. My focus is on building clean designs, smooth functionality, and responsive performance for mobile and desktop platforms. I develop features that improve productivity, simplify daily tasks, and provide an enjoyable user experience. From planning and interface design to coding, testing, and deployment, I work to deliver practical and efficient solutions. Whether you need a student project, business tool, or custom application, I aim to create software that is easy to use, maintain, and expand as your requirements grow in the future.",
      features: [
        "Custom Android Applications",
        "Clean & Modern UI/UX",
        "Firebase (Auth, Firestore, Cloud...)",
        "Performance Optimization",
        "Publishing to Play Store"
      ],
      techStack: [
        flutterLogo, dartLogo, firebaseLogo, reactLogo, antigravityLogo, androidLogo
      ],
      projects: [
        { name: "Rgblightcontrol", desc: "An app for controlling RGB LED colors, brightness, and lighting effects through a simple interface." },
        { name: "Gradecalculator", desc: "A tool that calculates grades and General Weighted Average (GWA) quickly and accurately." },
        { name: "Grademonitoring system", desc: "A system that tracks student grades, academic progress, and performance in one organized dashboard." }
      ]
    },
    {
      icon: webIcon,
      title: "WEB\nDEVELOPMENT",
      titleColor: "#1e90ff",
      description: "I build modern, responsive, and user-friendly websites that work smoothly across desktops, tablets, and mobile devices. My focus is on creating clean layouts, fast performance, and intuitive navigation to provide a great user experience. I develop custom websites for portfolios, businesses, and personal projects using reliable technologies and best practices. From design and front-end development to back-end integration and testing, I strive to deliver secure, scalable, and easy-to-maintain solutions. Whether you need a landing page or a complete web application, I create websites that are functional, visually appealing, and tailored to your goals.",
      features: [
        "Custom Website Development",
        "Clean & Modern UI/UX",
        "Responsive & Mobile-Friendly Design",
        "Frontend Development (React.js, HTML, CSS, JavaScript)",
        "Database Integration (Firebase, MySQL)",
        "Website Deployment & Maintenance"
      ],
      techStack: [
        htmlLogo, cssLogo, jsLogo, phpLogo, mysqlLogo, nodeLogo, reactLogo, tailwindLogo, antigravityLogo
      ],
      projects: [
        { name: "Portfolio", desc: "A personal website showcasing skills, projects, experience, and achievements in development." },
        { name: "Lost and Found management system", desc: "A web-based platform for reporting, tracking, and recovering lost or found items efficiently." }
      ]
    },
    {
      icon: arduinoIcon,
      title: "ARDUINO\nDEVELOPMENT",
      titleColor: "#1e90ff",
      description: "I develop Arduino-based projects that combine hardware and software to create practical and reliable solutions. My work includes sensor integration, automation systems, IoT prototypes, and custom electronic devices for learning or real-world applications. I design circuits, write efficient code, and test components to ensure stable performance. Whether it involves LEDs, motors, displays, Wi-Fi modules, or environmental sensors, I focus on building systems that are easy to use and expand. From simple prototypes to complete embedded solutions, I create Arduino projects that are functional, efficient, and tailored to meet specific requirements and project goals.",
      features: [
        "Custom Arduino Projects",
        "Circuit Design & Prototyping",
        "IoT Development (ESP32, Wi-Fi, Bluetooth)",
        "LCD, & LED Display Integration",
        "Code Optimization & Hardware Testing",
        "Sensor & Module Integration"
      ],
      techStack: [
        flutterLogo, dartLogo, firebaseLogo, arduinoLogo, cppLogo, antigravityLogo
      ],
      projects: [
        { name: "Rgblightcontrol", desc: "An Arduino-based system that controls RGB LED colors, brightness, and lighting effects using programmable modes." },
        { name: "water level tracker", desc: "An Arduino-powered monitoring system that measures water levels in real time and provides alerts or visual indicators for efficient water management." }
      ]
    }
  ];

  return (
    <div className={`service-page-section ${show ? 'show' : ''}`} id="service" ref={sectionRef}>
      {/* Navigation Header */}
      <nav className="fixed-nav-header">
        <div className="nav-brand">
          <img src={bpLogo} alt="Baluca Portfolio" className="nav-logo-img" />
          <span className="nav-name">Johnrey Viadnes Baluca</span>
        </div>
        <div className="nav-links-right">
          <a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>Home</a>
          <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }}>About me</a>
          <a href="#skills" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('skills'); }}>Skills</a>
          <a href="#projects" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); }}>My project</a>
          <a href="#service" className="nav-link active" onClick={(e) => { e.preventDefault(); setCurrentPage('service'); }}>Service</a>
          <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }}>Contact</a>
        </div>
      </nav>

      {/* Header Titles */}
      <div className="service-header-container">
        <div className="service-title-content">
          <h2>SERVICE</h2>
          <h2>SERVICE</h2>
        </div>
      </div>

      <div className="service-content-wrapper">
        <div className="service-cards-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      {/* WATER TRANSITION ZONE */}
      <div className="service-water-zone">
        <div className="service-waves-container">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="service-gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#service-gentle-wave" x="48" y="0" fill="rgba(30,144,255,0.7)" />
              <use xlinkHref="#service-gentle-wave" x="48" y="3" fill="rgba(30,144,255,0.5)" />
              <use xlinkHref="#service-gentle-wave" x="48" y="5" fill="rgba(30,144,255,0.3)" />
              <use xlinkHref="#service-gentle-wave" x="48" y="7" fill="dodgerblue" />
            </g>
          </svg>
        </div>

        {/* Underwater footer */}
        <div className="service-underwater-bg">
          <div className="service-copyright-footer">
            © {new Date().getFullYear()} Johnrey Viadnes Baluca. All Rights Reserved.
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-top-btn ${showScrollTop ? 'scroll-top-btn--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
        style={{ zIndex: 100 }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </div>

  );
};

export default ServicePage;
