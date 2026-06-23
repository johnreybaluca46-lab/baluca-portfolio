import { useState, useEffect, useRef } from 'react';
import '../stylesheet css/HomePage.css';
import profileImg from '../../assets/images/its me.png';

const MatrixPattern = () => {
  const columns = Array.from({ length: 40 });
  return (
    <div className="matrix-pattern">
      {columns.map((_, index) => (
        <div key={index} className="matrix-column"></div>
      ))}
    </div>
  );
};

const FancyButton = ({ children, className, onClick }) => (
  <button className={`enter-btn shadow-lg ${className}`} onClick={onClick}>
    <div className="fold"></div>
    <div className="points_wrapper">
      <div className="point"></div>
      <div className="point"></div>
      <div className="point"></div>
      <div className="point"></div>
      <div className="point"></div>
      <div className="point"></div>
      <div className="point"></div>
      <div className="point"></div>
      <div className="point"></div>
      <div className="point"></div>
    </div>
    <div className="inner">
      <span>{children}</span>
      <svg
        className="icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </div>
  </button>
);

const HomePage = ({ show, setCurrentPage }) => {
  const [navExpanded, setNavExpanded] = useState(false);
  const descRef = useRef(null);

  // ── scrambleText – runs once when page mounts ──
  useEffect(() => {
    const el = descRef.current;
    if (!el) return;

    const originalText = el.innerText;
    const scrambleChars = '100100000100101';

    const run = async () => {
      try {
        const { animate } = await import('https://esm.sh/animejs');

        const obj = { progress: 0 };
        animate(obj, {
          progress: 1,
          duration: 2500,
          ease: 'linear',
          onUpdate: () => {
            const revealedCount = Math.floor(obj.progress * originalText.length);
            let html = '';
            for (let i = 0; i < originalText.length; i++) {
              if (i < revealedCount) {
                // Revealed — show original character as-is
                html += originalText[i] === ' ' || originalText[i] === '\n'
                  ? originalText[i]
                  : originalText[i];
              } else {
                // Scrambling — show random char in dodger blue
                if (originalText[i] === ' ' || originalText[i] === '\n') {
                  html += originalText[i];
                } else {
                  const rand = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
                  html += `<span style="color:dodgerblue;font-weight:700">${rand}</span>`;
                }
              }
            }
            el.innerHTML = html;
          },
          onComplete: () => {
            // Restore clean original text
            el.innerText = originalText;
          },
        });
      } catch (err) {
        console.warn('Anime.js scramble failed:', err);
      }
    };

    run();
  }, []);

  return (
    <div className={`homepage-container ${show ? 'show' : ''}`}>
      {/* Left Section - Black Background */}
      <div className="left-section">
        {/* Navigation */}
        <div className="nav-container">
          <div className={`nav-pill ${navExpanded ? 'expanded' : ''}`}>
            <button
              className="nav-icon"
              onClick={() => setNavExpanded(!navExpanded)}
              aria-label="Toggle Navigation"
            >
              {navExpanded ? (
                // Close (X) Icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                // Menu (Hamburger) Icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
            <div className="nav-links">
              <a href="#home" className="nav-link active" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>Home</a>
              <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }}>About me</a>
              <a href="#skills" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('skills'); }}>Skills</a>
              <a href="#projects" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); }}>My project</a>
              <a href="#service" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('service'); }}>Service</a>
              <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }}>Contact</a>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-4 sm:mt-8 md:mt-16 max-w-2xl">
          <div className="home-title-content">
            <h2>HOME</h2>
            <h2>HOME</h2>
          </div>
          <h1 className="text-sm sm:text-3xl lg:text-5xl font-bold mb-1 sm:mb-4">
            <span className="text-[#1e90ff]">Hello, I'm</span> Johnrey V. Baluca
          </h1>
          <h2 className="text-[11px] sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-2">
            Web <span className="text-[#1e90ff]">Development</span>
          </h2>
          <h2 className="text-[11px] sm:text-2xl md:text-3xl font-bold mb-1.5 sm:mb-6">
            Application <span className="text-[#1e90ff]">Development</span>
          </h2>
          <p ref={descRef} className="text-gray-400 text-[10px] sm:text-sm md:text-base leading-snug sm:leading-relaxed mb-3 sm:mb-8 max-w-xl text-justify font-medium">
            I am Johnrey Baluca, an Application Developer
            and Web Developer passionate about creating
            innovative, user-friendly, and efficient digital
            solutions. I specialize in designing, developing,
            and maintaining responsive web applications,
            focusing on functionality, performance, and user
            experience. I continuously improve my skills,
            embrace new technologies, and strive to deliver
            high-quality software.
          </p>
          {/* Hidden on mobile and tablet — accessible via hamburger menu */}
          <div className="hidden lg:grid" style={{ gridTemplateColumns: 'repeat(3, auto)', gap: '1.2rem', marginTop: '1.5rem', justifyContent: 'start' }}>
            <FancyButton className="w-44 h-13 text-sm sm:text-base" onClick={() => setCurrentPage('about')}>About me</FancyButton>
            <FancyButton className="w-44 h-13 text-sm sm:text-base" onClick={() => setCurrentPage('skills')}>Skills</FancyButton>
            <FancyButton className="w-44 h-13 text-sm sm:text-base" onClick={() => setCurrentPage('projects')}>My projects</FancyButton>
            <FancyButton className="w-44 h-13 text-sm sm:text-base" onClick={() => setCurrentPage('service')}>Service</FancyButton>
            <FancyButton className="w-44 h-13 text-sm sm:text-base" onClick={() => setCurrentPage('contact')}>Get in touch</FancyButton>
          </div>
        </div>
      </div>

      {/* Right Section - White Background with Matrix and Image */}
      <div className="right-section">
        {/* Matrix Background */}
        <div className="matrix-container">
          <MatrixPattern />
          <MatrixPattern />
          <MatrixPattern />
          <MatrixPattern />
          <MatrixPattern />
        </div>

        {/* Profile Image Overlay */}
        <div className="profile-image-container">
          <img
            src={profileImg}
            alt="Johnrey V. Baluca"
            className="profile-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
