import { useState, useEffect, useRef } from 'react';
import '../stylesheet css/HomePage.css';
import profileImg from '../../assets/images/its me.png';
import bpLogo from '../../assets/logo/Baluca-portpolio logo.png';
import { PerspectiveCarousel } from '../../components/ui/perspective-carousel';

import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';
import img4 from '../../assets/images/4.jpg';
import img5 from '../../assets/images/5.jpg';
import img6 from '../../assets/images/6.jpg';
import img7 from '../../assets/images/7.jpg';
import img8 from '../../assets/images/8.jpg';
import img9 from '../../assets/images/9.png';
import img10 from '../../assets/images/10.png';
import img11 from '../../assets/images/11.jpg';
import htmlIcon from '../../assets/logo/html-5.png';
import cssIcon from '../../assets/logo/css-3.png';
import jsIcon from '../../assets/logo/js.png';
import reactIcon from '../../assets/logo/react js.png';
import tailwindIcon from '../../assets/logo/tailwind css.png';
import flutterIcon from '../../assets/logo/flutter.png';
import firebaseIcon from '../../assets/logo/firebase.png';
import viteIcon from '../../assets/logo/vite.png';
import nodeIcon from '../../assets/logo/node js.png';
import mysqlIcon from '../../assets/logo/mysql.png';
import phpIcon from '../../assets/logo/php (2).png';
import figmaIcon from '../../assets/logo/figma.png';
import photoshopIcon from '../../assets/logo/photoshop.png';
import drawioIcon from '../../assets/logo/draw io.webp';
import canvaIcon from '../../assets/logo/canva.png';
import pythonIcon from '../../assets/logo/phython.webp';
import dartIcon from '../../assets/logo/dart.webp';

const skillLogos = {
  'HTML': htmlIcon,
  'CSS': cssIcon,
  'Javascript': jsIcon,
  'React': reactIcon,
  'Tailwind': tailwindIcon,
  'Flutter': flutterIcon,
  'Firebase': firebaseIcon,
  'Vite': viteIcon,
  'Node.js': nodeIcon,
  'Mysql': mysqlIcon,
  'PHP': phpIcon,
  'Figma': figmaIcon,
  'Photoshop': photoshopIcon,
  'Draw.io': drawioIcon,
  'Canva': canvaIcon
};

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

const ScrambleText = ({ text, trigger }) => {
  const elRef = useRef(null);
  const runRef = useRef(false);

  useEffect(() => {
    if (!trigger) {
      runRef.current = false;
      return;
    }
    if (runRef.current) return;
    runRef.current = true;

    const el = elRef.current;
    if (!el) return;

    const originalText = text;
    const scrambleChars = '01';
    const duration = 2500;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const revealedCount = Math.floor(progress * originalText.length);
      let html = '';
      for (let i = 0; i < originalText.length; i++) {
        if (i < revealedCount) {
          html += originalText[i];
        } else {
          if (originalText[i] === ' ' || originalText[i] === '\n') {
            html += originalText[i];
          } else {
            const rand = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
            html += `<span style="color:dodgerblue;font-weight:700">${rand}</span>`;
          }
        }
      }
      el.innerHTML = html;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        el.textContent = originalText;
      }
    };

    requestAnimationFrame(animate);
  }, [text, trigger]);

  return <span ref={elRef}>{text}</span>;
};

const TypewriterText = ({ text, trigger, speed = 100, renderText, loop = false, loopStartIndex = 0, pauseDuration = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!trigger) {
      setDisplayedText('');
      setIsDeleting(false);
      setIsPaused(false);
      return;
    }

    if (isPaused) return;

    let timeout;
    
    if (!isDeleting) {
      if (displayedText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, speed);
      } else if (loop) {
        setIsPaused(true);
        timeout = setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (displayedText.length > loopStartIndex) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length - 1));
        }, speed);
      } else {
        setIsPaused(true);
        timeout = setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(false);
        }, pauseDuration / 2);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, isPaused, text, trigger, speed, loop, loopStartIndex, pauseDuration]);

  return (
    <span>
      {renderText ? renderText(displayedText) : displayedText}
      {trigger && (
        <span style={{ 
          opacity: 1, 
          animation: 'typewriter-blink 1s step-end infinite',
          marginLeft: '2px',
          color: 'inherit'
        }}>|</span>
      )}
    </span>
  );
};

const ServiceCard = ({ title, description, skills, className }) => {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);

  useEffect(() => {
    if (!skills || skills.length === 0) return;
    const interval = setInterval(() => {
      setActiveSkillIndex((prev) => (prev + 1) % skills.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [skills]);

  const activeSkill = skills[activeSkillIndex];
  const activeLogo = skillLogos[activeSkill];

  return (
    <div className={`service-mock-card relative ${className || ''}`}>
      <div className="mock-border-top" />
      <div className="mock-border-left" />
      <div className="mock-border-bottom" />
      <div className="mock-border-right" />
      
      {activeLogo && (
        <img 
          src={activeLogo} 
          alt={activeSkill} 
          className="active-skill-logo"
          style={{ transform: activeSkill === 'Photoshop' ? 'scale(1.35)' : 'scale(1)' }}
        />
      )}

      <h3 className="mock-title pr-16">{title}</h3>
      <p className="mock-desc">{description}</p>
      <h4 className="mock-subtitle">Skilled & Tools</h4>
      <div className="mock-skills-container">
        {skills.map((skill, index) => (
          <span 
            key={skill} 
            className={`mock-skill-badge ${index === activeSkillIndex ? 'active' : ''}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const FancyButton = ({ children, className, style, onClick }) => (
  <button className={`enter-btn shadow-lg popup-btn ${className}`} style={style} onClick={onClick}>
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

const TimelineItem = ({ side, title, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          if (itemRef.current) observer.unobserve(itemRef.current);
        }
      },
      { threshold: 0.1 }
    );
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={itemRef}
      className={`timeline-item ${side} ${isVisible ? 'fade-in-up' : ''}`} 
      style={{ opacity: isVisible ? undefined : 0 }}
    >
      <div className="timeline-content">
        <h3 className="timeline-title">{title}</h3>
        <p className="timeline-desc">{description}</p>
      </div>
    </div>
  );
};

const HomePage = ({ show, setCurrentPage }) => {
  const [navExpanded, setNavExpanded] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [timelineVisible, setTimelineVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const cardsRef = useRef(null);
  const timelineRef = useRef(null);
  const containerRef = useRef(null);
  const lastScrollTop = useRef(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    const cardsObserver = new IntersectionObserver(
      (entries) => {
        setCardsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (cardsRef.current) cardsObserver.observe(cardsRef.current);

    const indicatorTimer = setTimeout(() => {
      setShowScrollIndicator(true);
    }, 3500);

    const initialPhoneAnimTimer = setTimeout(() => {
      setIsScrollingUp(true);
    }, 800);

    const timelineObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimelineVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (timelineRef.current) timelineObserver.observe(timelineRef.current);

    const handleScroll = () => {
      if (!timelineRef.current || !containerRef.current) return;
      const container = containerRef.current;
      
      if (container.scrollTop > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
      
      const currentScroll = container.scrollTop;
      
      // Determine scroll direction
      if (currentScroll > lastScrollTop.current + 5) {
        setIsScrollingUp(false); // scrolling down
      } else if (currentScroll < lastScrollTop.current - 5) {
        setIsScrollingUp(true); // scrolling up
      }
      
      // Keep it up if at the very top
      if (currentScroll < 50) {
        setIsScrollingUp(true);
      }
      lastScrollTop.current = currentScroll;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const startPos = windowHeight * 0.75; 
      
      if (rect.top < startPos) {
        const maxScroll = container.scrollHeight - container.clientHeight;
        const currentScroll = container.scrollTop;
        
        // Calculate what rect.top will be when scrolled to the absolute bottom
        const minRectTop = rect.top + currentScroll - maxScroll;
        const distanceToScroll = startPos - minRectTop;
        
        let progress = (startPos - rect.top) / distanceToScroll;
        progress = Math.max(0, Math.min(1, progress));
        timelineRef.current.style.setProperty('--scroll-progress', progress);
      } else {
        timelineRef.current.style.setProperty('--scroll-progress', 0);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      cardsObserver.disconnect();
      timelineObserver.disconnect();
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
      clearTimeout(indicatorTimer);
      clearTimeout(initialPhoneAnimTimer);
    };
  }, []);

  return (
    <div className={`homepage-container ${show ? 'show' : ''}`} ref={containerRef}>
      {/* Navigation (Mobile & Tablet) */}
      <nav className="fixed-nav-header">
        <div className="nav-brand">
          <img src={bpLogo} alt="Baluca Portfolio" className="nav-logo-img" />
          <span className="nav-name">Johnrey Viadnes Baluca</span>
        </div>

        {/* Hamburger Menu Icon */}
        <div 
          className={`nav-hamburger ${navExpanded ? 'open' : ''}`} 
          onClick={() => setNavExpanded(!navExpanded)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links-right ${navExpanded ? 'expanded' : ''}`}>
          <a href="#home" className="nav-link active" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); setNavExpanded(false); }}>Home</a>
          <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); setNavExpanded(false); }}>About me</a>
          <a href="#skills" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('skills'); setNavExpanded(false); }}>Skills</a>
          <a href="#projects" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); setNavExpanded(false); }}>My Projects</a>
          <a href="#service" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('service'); setNavExpanded(false); }}>Service</a>
          <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); setNavExpanded(false); }}>Contact</a>
        </div>
      </nav>

      <div className="home-hero-section">
        {/* Left Section - Black Background */}
        <div className="left-section">

        {/* Content */}
        <div className="mt-4 sm:mt-8 md:mt-16 max-w-2xl">
          <div className="home-title-content fade-in-up" style={{ '--i': 0 }}>
            <h2>HOME</h2>
            <h2>HOME</h2>
          </div>
          <h1 className="text-base sm:text-2xl lg:text-4xl font-bold mb-1 sm:mb-4 fade-in-up" style={{ '--i': 1 }}>
            <TypewriterText 
              text="Hello, I'm Johnrey V. Baluca" 
              trigger={true} 
              speed={150}
              loop={true}
              loopStartIndex={11}
              pauseDuration={3000}
              renderText={(displayedText) => {
                const bluePart = "Hello, I'm ";
                if (displayedText.length <= bluePart.length) {
                  return <span className="text-[#1e90ff]">{displayedText}</span>;
                } else {
                  return (
                    <>
                      <span className="text-[#1e90ff]">{bluePart}</span>
                      {displayedText.slice(bluePart.length)}
                    </>
                  );
                }
              }}
            />
          </h1>
          <h2 className="text-sm sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-2 fade-in-up" style={{ '--i': 2 }}>
            Web <span className="text-[#1e90ff]">Development</span>
          </h2>
          <h2 className="text-sm sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-6 fade-in-up" style={{ '--i': 3 }}>
            Application <span className="text-[#1e90ff]">Development</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-snug sm:leading-relaxed mb-3 sm:mb-8 max-w-xl text-justify font-medium fade-in-up" style={{ '--i': 4 }}>
            <ScrambleText 
              trigger={true} 
              text="I am Johnrey Baluca, an Application Developer and Web Developer passionate about creating innovative, user-friendly, and efficient digital solutions. I specialize in designing, developing, and maintaining responsive web applications, focusing on functionality, performance, and user experience. I continuously improve my skills, embrace new technologies, and strive to deliver high-quality software." 
            />
          </p>
        </div>
      </div>

      {/* Right Section - Phone UI with Matrix and Image */}
      <div className="right-section" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="phone-card" style={{ zIndex: 2 }}>
          <div className={`phone ${isScrollingUp ? 'is-animated' : ''}`}>
            <div className="face front">
              {/* Profile Background inside the phone */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '5px', overflow: 'hidden', zIndex: 0, backgroundColor: 'white' }}>
                <div className="matrix-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, background: 'transparent' }}>
                  <MatrixPattern />
                </div>
                <img
                  src={profileImg}
                  alt="Johnrey V. Baluca"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative', zIndex: 1 }}
                />
              </div>




              <div className="navigation" style={{ zIndex: 10 }}>
                <span className="btn btn-task"></span>
                <span className="btn btn-home"></span>
                <span className="btn btn-back"></span>
              </div>

              <div className="front-camera" style={{ zIndex: 20 }}></div>
            </div>

            <div className="face back">back</div>
            <div className="face top"></div>
            <div className="face bottom">
              <div className="elements">
                <span className="headphone"></span>
                <span className="microphone"></span>
                <span className="charge"></span>
                <span className="speaker"></span>
              </div>
            </div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className={`scroll-down-indicator ${!cardsVisible && showScrollIndicator ? 'visible' : ''}`}>
        Scroll Down
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

      </div>

      {/* Combined Cards and Experience Section */}
      <div className="home-cards-experience-section">
        {/* Services / Cards Section */}
        <div className="home-cards-section" ref={cardsRef}>
          <div className="experience-title-container fade-in-up" style={{ '--i': 0, marginBottom: '4rem' }}>
            <h2>SKILLS</h2>
            <h2>SKILLS</h2>
          </div>
          <div className={`cards-wrapper ${cardsVisible ? 'animate-cards' : ''}`}>
            <ServiceCard 
              className="slide-left"
              title="DEVELOP"
              description="I develop and maintain websites using modern technologies, clean code techniques, and scalable architecture."
              skills={['HTML', 'CSS', 'Javascript', 'React', 'Tailwind', 'Flutter', 'Firebase', 'Vite', 'Node.js', 'Mysql', 'PHP']}
            />
            <ServiceCard 
              className="slide-right"
              title="CREATE"
              description="My Creative instinct power visuals from a still, handle to working sites -always crafted to give your brand distinctive and lasting edge."
              skills={['Figma', 'Photoshop', 'Canva', 'Draw.io']}
            />
          </div>
        </div>

        {/* Experience Section */}
        <div className="experience-section">
        <div className="experience-title-container fade-in-up" style={{ '--i': 0 }}>
          <h2>EXPERIENCE</h2>
          <h2>EXPERIENCE</h2>
        </div>
        
        <div className={`timeline-container ${timelineVisible ? 'animate-timeline' : ''}`} ref={timelineRef}>
          <div className="timeline-line-track"></div>
          <div className="timeline-line"></div>
          <div className="timeline-middle-dot"></div>
          
          <TimelineItem 
            side="left"
            title="FIRST JOURNEY"
            description="My first journey i was learn about the basic programming HTML, CSS, Javascript i build website not responsive too colorfull"
          />
          <TimelineItem 
            side="right"
            title="FIRST PROJECT"
            description="My first project i create the simple website call calculator my first ever build website and also the encyclopedia with no database experience"
          />
          <TimelineItem 
            side="left"
            title="FIRST USING VISUAL BASIC"
            description="I create the grading system at the visual basic at the project of my grade 12 i really not understandable and i never give up"
          />
          <TimelineItem 
            side="right"
            title="FIRST USING DATABASE"
            description="My First using database i use database SQL and for my backend its PHP i use this to make a website enrollment system but i failed and i never give up"
          />
          <TimelineItem 
            side="left"
            title="MAKING APPLICATION"
            description="I make my first application using the flutter and dart language the core language of the flutter i make another calculator but base on the GPA and GWA using for the database is Firebase this is my first database NOSQL."
          />
          <TimelineItem 
            side="right"
            title="MAKING WEB"
            description="i totally make a website for my project i built the web call lost and found management system, and use the tech stack for this system is HTML, CSS, JS, PHP, MYSQL and this is my first using AI from VSCODE i use AI to assist my project to make a faster"
          />
          <TimelineItem 
            side="left"
            title="MODERN TECK STOCK"
            description="For now my first making the webapp call this Baluca portfolio this my first webapp i make using the react.js and vite i totaly learn for the AI assistant at gemini from IDE Antigravity how to clean the folder structure and first using API google email for the messages"
          />
          <TimelineItem 
            side="right"
            title="MY COMMON USING LANGUAGE"
            description="As for now my commonly using language for the webapp its react.js and also i use for firebase for the database and real time database for android application i use the flutter and dart language and also i use firebase this is i commonly use for my project HTML, CSS, JS ,PHP, MYSQL, REACT.JS, FIREBASE, FLUTTER, NODE.JS, VITE, DART."
          />
          <TimelineItem 
            side="left"
            title="USING TO DEPLOY WEBSITE"
            description="I use github for deployed website and also vercel and firebase this my commonly i use because its free"
          />
          <TimelineItem 
            side="right"
            title="AI ASSISTANT"
            description="Better to Use Claude, and Gemini don't afraid to use AI its depends on you, for me i use AI assistants to fast making project and save the time"
          />
          <TimelineItem 
            side="left"
            title="ARDIUNO"
            description="My First ardiuno ive ever make its RGBLIGHT CONTROL with a realtime database and have a software using flutter"
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '4rem 0', width: '100%', overflow: 'hidden', padding: '4rem 0' }}>
          <div className="card-3d">
            {[
              reactIcon,
              pythonIcon,
              phpIcon,
              nodeIcon,
              viteIcon,
              jsIcon,
              flutterIcon,
              firebaseIcon,
              dartIcon,
              mysqlIcon
            ].map((logo, idx) => (
              <div key={idx} className="card-3d-item">
                <div className="carousel-card-border-tl"></div>
                <div className="carousel-card-border-br"></div>
                <img src={logo} alt={`carousel-skill-${idx}`} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '1.5rem', zIndex: 1 }} />
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0 3rem 0', width: '100%' }}>
          <div className="home-title-content fade-in-up" style={{ '--i': 0 }}>
            <h2>My Teamates</h2>
            <h2>My Teamates</h2>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center', margin: '-2rem 0 4rem 0', width: '100%', overflow: 'hidden', padding: '0 0 4rem 0' }}>
          <PerspectiveCarousel
            items={[
              { src: img1, title: "" },
              { src: img2, title: "" },
              { src: img3, title: "" },
              { src: img4, title: "" },
              { src: img5, title: "" },
              { src: img6, title: "" },
              { src: img7, title: "" },
              { src: img8, title: "" },
              { src: img9, title: "" },
              { src: img10, title: "" },
              { src: img11, title: "" },
            ]}
            defaultActiveIndex={5}
            loop={true}
            autoPlay={true}
            autoPlayInterval={2500}
            autoPlayDirection="forward"
            slideWidth={250}
            showControls={false}
            className="h-[400px] w-[100%] bg-transparent"
          />
          <PerspectiveCarousel
            items={[
              { src: img1, title: "" },
              { src: img2, title: "" },
              { src: img3, title: "" },
              { src: img4, title: "" },
              { src: img5, title: "" },
              { src: img6, title: "" },
              { src: img7, title: "" },
              { src: img8, title: "" },
              { src: img9, title: "" },
              { src: img10, title: "" },
              { src: img11, title: "" },
            ]}
            defaultActiveIndex={5}
            loop={true}
            autoPlay={true}
            autoPlayInterval={2500}
            autoPlayDirection="backward"
            autoPlayDelay={1250}
            slideWidth={250}
            showControls={false}
            className="h-[400px] w-[100%] bg-transparent"
          />
        </div>
      </div>
      </div>
      
      {/* Scroll to Top Button */}
      <div 
        className={`scroll-to-top-btn ${showScrollTop ? 'visible' : ''}`}
        onClick={() => {
          containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </div>
    </div>
  );
};

export default HomePage;
