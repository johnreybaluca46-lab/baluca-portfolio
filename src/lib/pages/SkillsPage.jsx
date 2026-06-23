import { useState, useEffect, useRef } from 'react';
import '../stylesheet css/SkillsPage.css';

// Import Assets
import bpLogo from '../../assets/logo/Baluca-portpolio logo.png';
import htmlIcon from '../../assets/logo/html-5.png';
import cssIcon from '../../assets/logo/css-3.png';
import jsIcon from '../../assets/logo/js.png';
import phpIcon from '../../assets/logo/php (2).png';
import pythonIcon from '../../assets/logo/phython.webp';
import mysqlIcon from '../../assets/logo/mysql.png';
import firebaseIcon from '../../assets/logo/firebase.png';
import nodeIcon from '../../assets/logo/node js.png';
import tailwindIcon from '../../assets/logo/tailwind css.png';
import dartIcon from '../../assets/logo/dart.webp';
import cppIcon from '../../assets/logo/cpp.png';
import reactIcon from '../../assets/logo/react js.png';
import flutterIcon from '../../assets/logo/flutter.png';
import arduinoIcon from '../../assets/logo/aurdino ide.png';
import antigravityIcon from '../../assets/logo/antigravity ide.png';
import vscodeIcon from '../../assets/logo/vs code ide.png';
import photoshopIcon from '../../assets/logo/photoshop.png';
import figmaIcon from '../../assets/logo/figma.png';
import drawioIcon from '../../assets/logo/draw io.webp';
import fishGif from '../../assets/gif/fish.gif';

/* ── 3D Tool Card ── */
const ThreeDCard = ({ title, icon, content, onSeeMore }) => {
  return (
    <div className="threed-parent">
      <div className="threed-card">
        <div className="threed-content-box">
          <span className="threed-card-title">{title}</span>
          <p className="threed-card-content">
            {content}
          </p>
          <span className="threed-see-more" onClick={onSeeMore}>See More</span>
        </div>
        <div className="threed-icon-box">
          <img src={icon} alt={title} className="threed-floating-icon" />
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ name, icon, percentage, description }) => {
  return (
    <div className="skill-card-container">
      <div className="skill-card-inner">
        {/* Front Face (White, Blue borders) */}
        <div className="skill-card-front">
          <img src={icon} alt={name} className="skill-logo" />
          <div className="skill-divider"></div>
          <p className="skill-name">{name}</p>
        </div>

        {/* Back Face (Dark, glowing border on hover) */}
        <div className="skill-card-back">
          <div className="glow-bg"></div>
          <div className="skill-back-content">
            <div className="skill-badge">{name}</div>
            <p className="skill-desc">{description}</p>
            <div className="skill-progress-box">
              <div className="progress-header">
                <span>Skills Percentage</span>
                <img src={icon} alt={name} />
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
              </div>
              <span className="progress-text">{percentage}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillsPage = ({ show, setCurrentPage }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [modal, setModal] = useState(null); // null | 'photoshop' | 'figma'
  const sectionRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const handleScroll = () => setShowScrollTop(el.scrollTop > 200);
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  // Anime.js splitText bounce animation for subtitles
  useEffect(() => {
    let cleanups = [];

    const runAnimation = async () => {
      try {
        const { animate, stagger, splitText } = await import('https://esm.sh/animejs');

        const targets = [title1Ref.current, title2Ref.current].filter(Boolean);

        targets.forEach((el) => {
          const { chars } = splitText(el, { words: false, chars: true });

          const anim = animate(chars, {
            y: [
              { to: '-2.75rem', ease: 'outExpo', duration: 600 },
              { to: 0, ease: 'outBounce', duration: 800, delay: 100 },
            ],
            rotate: {
              from: '-1turn',
              delay: 0,
            },
            delay: stagger(50),
            ease: 'inOutCirc',
            loopDelay: 1000,
            loop: true,
          });

          cleanups.push(() => anim.pause && anim.pause());
        });
      } catch (err) {
        console.warn('Anime.js animation failed to load:', err);
      }
    };

    if (show) {
      runAnimation();
    }

    return () => cleanups.forEach((fn) => fn());
  }, [show]);

  const scrollToTop = () => {
    sectionRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skillsData = {
    level1: [
      { name: 'HTML 5', icon: htmlIcon, percentage: 90, description: 'Proficient in structuring web pages using semantic HTML tags for accessibility and SEO.' },
      { name: 'CSS 3', icon: cssIcon, percentage: 85, description: 'Strong skills in styling pages with Flexbox, Grid, animations, and modern CSS practices.' },
      { name: 'Javascript', icon: jsIcon, percentage: 80, description: 'Solid understanding of core JS concepts, DOM manipulation, ES6+ syntax, and async programming.' }
    ],
    level2: [
      { name: 'PHP', icon: phpIcon, percentage: 70, description: 'Experience in backend logic, routing, and form handling using core PHP and minimal frameworks.' },
      { name: 'Python', icon: pythonIcon, percentage: 65, description: 'Knowledgeable in scripting, backend development with Flask/Django, and automation.' }
    ],
    level3: [
      { name: 'MySQL', icon: mysqlIcon, percentage: 75, description: 'Skilled in writing SQL queries, designing relational schemas, and database management.' },
      { name: 'Firebase', icon: firebaseIcon, percentage: 80, description: 'Hands-on experience with Firestore, Authentication, and real-time database integrations.' }
    ],
    level4: [
      { name: 'Node.js', icon: nodeIcon, percentage: 75, description: 'Building REST APIs and backend services using Express and standard Node packages.' },
      { name: 'Tailwind CSS', icon: tailwindIcon, percentage: 85, description: 'Rapidly building responsive interfaces utilizing Tailwind utility classes and config.' },
      { name: 'Dart', icon: dartIcon, percentage: 70, description: 'Writing Dart code primarily for Flutter application development, utilizing strict typing.' }
    ],
    level5: [
      { name: 'C++', icon: cppIcon, percentage: 60, description: 'Understanding of object-oriented programming, pointers, and memory management in C++.' },
      { name: 'React.js', icon: reactIcon, percentage: 80, description: 'Creating modular UI components, managing state with hooks, and using React ecosystem tools.' },
      { name: 'Flutter', icon: flutterIcon, percentage: 75, description: 'Developing cross-platform mobile applications with expressive and flexible UI widgets.' }
    ],
    ides: [
      { name: 'Arduino IDE', icon: arduinoIcon, percentage: 85, description: 'Programming microcontrollers and IoT projects using Arduino and C/C++.' },
      { name: 'Antigravity IDE', icon: antigravityIcon, percentage: 80, description: 'Advanced agentic IDE environments for streamlined, AI-assisted software development.' },
      { name: 'VS Code IDE', icon: vscodeIcon, percentage: 95, description: 'Primary editor setup with custom extensions, shortcuts, and integrated terminal workflows.' }
    ]
  };

  return (
    <div className={`skills-page-section ${show ? 'show' : ''}`} id="skills" ref={sectionRef}>
      {/* Navigation Header */}
      <nav className="fixed-nav-header">
        <div className="nav-brand">
          <img src={bpLogo} alt="Baluca Portfolio" className="nav-logo-img" />
          <span className="nav-name">Johnrey Viadnes Baluca</span>
        </div>
        <div className="nav-links-right">
          <a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>Home</a>
          <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }}>About me</a>
          <a href="#skills" className="nav-link active" onClick={(e) => { e.preventDefault(); setCurrentPage('skills'); }}>Skills</a>
          <a href="#projects" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); }}>My project</a>
          <a href="#service" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('service'); }}>Service</a>
          <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }}>Contact</a>
        </div>
      </nav>

      {/* Header Titles */}
      <div className="skills-header-container">
        <div className="skills-title-content">
          <h2>SKILLS & TECHNOLOGIES</h2>
          <h2>SKILLS & TECHNOLOGIES</h2>
        </div>
      </div>

      {/* ── SKILLS GRID: 5 cards per row ── */}
      <div className="skills-grid-wrapper">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h3 className="skills-subtitle" ref={title1Ref}>My Skills &amp; Technologies</h3>
        </div>
        <div className="skills-grid-5col">
          {[
            ...skillsData.level1,
            ...skillsData.level2,
            ...skillsData.level3,
            ...skillsData.level4,
            ...skillsData.level5,
          ].map((skill, idx) => (
            <SkillCard key={idx} {...skill} />
          ))}
        </div>
      </div>

      {/* IDE Section moved above water */}
      <div className="ide-section-wrapper" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div className="ide-section-title" style={{ marginBottom: '2rem' }}>
          <h3 ref={title2Ref} style={{ color: '#1e90ff', fontWeight: 'bold', fontSize: '1.5rem', margin: 0 }}>(IDE) Integrated Development Environment.</h3>
        </div>
        <div className="skills-grid-5col" style={{ padding: '0', maxWidth: '900px', margin: '0 auto' }}>
          {skillsData.ides.map((skill, idx) => (
            <SkillCard key={idx} {...skill} />
          ))}
        </div>
      </div>

      {/* ── MODAL ── */}
      {modal && (
        <div className="threed-modal-overlay" onClick={() => setModal(null)}>
          <div className="threed-modal" onClick={(e) => e.stopPropagation()}>
            <button className="threed-modal-close" onClick={() => setModal(null)}>✕</button>
            {modal === 'photoshop' && (
              <>
                <div className="threed-modal-header">
                  <img src={photoshopIcon} alt="Photoshop" className="threed-modal-icon" />
                  <h2>Photoshop</h2>
                </div>
                <p className="threed-modal-text">
                  Adobe Photoshop is an industry-leading photo editing and graphic design software used for creating stunning visual content. I use Photoshop to edit images, design UI mockups, create digital artwork, and produce high-quality graphics for web and mobile projects. With skills in layer management, masking, color correction, and compositing, I can deliver professional and polished visual outputs for any design requirement or creative project.
                </p>
              </>
            )}
            {modal === 'figma' && (
              <>
                <div className="threed-modal-header">
                  <img src={figmaIcon} alt="Figma" className="threed-modal-icon" />
                  <h2>Figma</h2>
                </div>
                <p className="threed-modal-text">
                  Figma is a powerful cloud-based UI/UX design and prototyping tool that enables real-time collaboration. I use Figma to design wireframes, interactive prototypes, and complete UI systems for web and mobile applications. With proficiency in auto-layout, components, design tokens, and collaborative workflows, I can efficiently translate ideas into polished, developer-ready designs that align with modern design systems and user experience best practices.
                </p>
              </>
            )}
            {modal === 'drawio' && (
              <>
                <div className="threed-modal-header">
                  <img src={drawioIcon} alt="Draw.io" className="threed-modal-icon" />
                  <h2>Draw.io</h2>
                </div>
                <p className="threed-modal-text">
                  Draw.io is a free, powerful diagramming tool I use to visually document systems and data structures. I use it to create entity-relationship (ER) diagrams for database design, system architecture diagrams, and detailed flowcharts for software logic and processes. It has been an essential tool in planning and presenting technical designs in a clear and structured way for academic and personal projects.
                </p>
              </>
            )}
          </div>
        </div>
      )}

      {/* WATER TRANSITION ZONE */}
      <div className="skills-water-transition-zone">
        <div className="water-waves-container">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(30,144,255,0.7)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(30,144,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(30,144,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="dodgerblue" />
            </g>
          </svg>
        </div>

        {/* UNDERWATER BACKGROUND WRAPPER FOR UI EDITOR & FISH */}
        <div className="skills-underwater-bg" style={{ backgroundColor: '#1e90ff' }}>
          <div className="ui-editor-section" style={{ paddingTop: '2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h3 className="skills-subtitle" style={{ color: '#fff' }}>UI Editor, Photo Editor &amp; Flowchart Editor</h3>
            </div>
            <div className="threed-cards-row">
              <ThreeDCard
                title="Photoshop"
                icon={photoshopIcon}
                content="Proficient in image editing, compositing, and creating UI mockups. Experienced in manipulating layers, masks, and blending modes for high-quality visuals."
                onSeeMore={() => setModal('photoshop')}
              />
              <ThreeDCard
                title="Figma"
                icon={figmaIcon}
                content="Experienced in UI/UX design, creating wireframes, and interactive prototypes. Skilled in utilizing auto-layout, components, and collaborative workflows."
                onSeeMore={() => setModal('figma')}
              />
              <ThreeDCard
                title="Draw.io"
                icon={drawioIcon}
                content="Skilled in creating system architecture diagrams, flowcharts, and ER diagrams. Used Draw.io to design and document database structures and software workflows."
                onSeeMore={() => setModal('drawio')}
              />
            </div>
          </div>

          {/* Fishes */}
          <img src={fishGif} className="skills-swimming-fish skills-fish-big skills-fish-1" alt="Fish" />
          <img src={fishGif} className="skills-swimming-fish skills-fish-big skills-fish-2" alt="Fish" />
          <img src={fishGif} className="skills-swimming-fish skills-fish-small skills-fish-3" alt="Fish" />
          <img src={fishGif} className="skills-swimming-fish skills-fish-small skills-fish-4" alt="Fish" />
          {/* FOOTER */}
          <br></br>
          <div className="skills-copyright-footer" style={{ padding: '0 2rem 2rem 2rem', backgroundColor: '#1e90ff', color: '#fff', textAlign: 'center' }}>
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

export default SkillsPage;
