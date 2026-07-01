import { useState, useEffect, useRef } from 'react';
import '../stylesheet css/MyProjectPage.css';
import bpLogo from '../../assets/logo/Baluca-portpolio logo.png';
import rgbLogo from '../../assets/my project assets/Arduino_and_flutter_project_assets/Rgblightcontrol/rgb_light_control_logo.png';
import screenShot from '../../assets/my project assets/Arduino_and_flutter_project_assets/Rgblightcontrol/screen shot.png';
import rgbControlDiagram from '../../assets/my project assets/Arduino_and_flutter_project_assets/Rgblightcontrol/RGB CONTROL DIAGRAM.png';
import flutterIcon from '../../assets/logo/flutter.png';
import dartIcon from '../../assets/logo/dart.webp';
import firebaseIcon from '../../assets/logo/firebase.png';
import cppIcon from '../../assets/logo/cpp.png';
import arduinoIcon from '../../assets/logo/aurdino ide.png';
import antigravityIcon from '../../assets/logo/antigravity ide.png';

import gradeCalcLogo from '../../assets/my project assets/application_project_assets/Gradecalculator_assets/logo.png';
import gradeCalcScreenshot from '../../assets/my project assets/application_project_assets/Gradecalculator_assets/g-s1.png';

import balucaPortfolioLogo from '../../assets/my project assets/web_project_assets/my_portfolio_assets/Baluca-portpolio logo.png';
import balucaPortfolioScreenshot from '../../assets/my project assets/web_project_assets/my_portfolio_assets/responsive bp screeenshot.png';
import cssIcon from '../../assets/logo/css-3.png';
import jsIcon from '../../assets/logo/js.png';
import htmlIcon from '../../assets/logo/html-5.png';
import reactIcon from '../../assets/logo/react js.png';
import tailwindIcon from '../../assets/logo/tailwind css.png';
import nodeIcon from '../../assets/logo/node js.png';
import githubIcon from '../../assets/logo/github.png';

/* ─────────────────────────────────────────────
   Tech Card Component (Flip)
───────────────────────────────────────────── */
const TechCard = ({ name, icon, description }) => {
  return (
    <div className="group h-[160px] w-[130px] md:h-[240px] md:w-[180px]" style={{ perspective: '1000px' }}>
      <div className="relative w-full h-full transition-transform duration-700 group-hover:[transform:rotateY(180deg)] cursor-pointer" style={{ transformStyle: 'preserve-3d' }}>
        {/* Front */}
        <div className="absolute inset-0 bg-white border-2 md:border-[3px] border-[#1e90ff] flex flex-col items-center justify-center p-2 md:p-4 shadow-md" style={{ backfaceVisibility: 'hidden' }}>
          {/* Top Left Bracket */}
          <div className="absolute top-0 left-0 w-3 h-3 md:w-4 md:h-4 border-t-2 border-l-2 md:border-t-4 md:border-l-4 border-[#1e90ff] -mt-0.5 -ml-0.5 md:-mt-1 md:-ml-1"></div>
          {/* Bottom Right Bracket */}
          <div className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 border-b-2 border-r-2 md:border-b-4 md:border-r-4 border-[#1e90ff] -mb-0.5 -mr-0.5 md:-mb-1 md:-mr-1"></div>

          <img src={icon} alt={name} className="w-12 h-12 md:w-20 md:h-20 object-contain mb-2 md:mb-4" />
          <span className="text-[#1e90ff] font-bold text-xs md:text-lg text-center">{name}</span>
        </div>
        {/* Back */}
        <div className="absolute inset-0 bg-white border-2 md:border-[3px] border-[#1e90ff] flex flex-col items-center justify-center p-2 md:p-4 shadow-[0_0_15px_rgba(30,144,255,0.5)]" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          {/* Top Left Bracket */}
          <div className="absolute top-0 left-0 w-3 h-3 md:w-4 md:h-4 border-t-2 border-l-2 md:border-t-4 md:border-l-4 border-[#1e90ff] -mt-0.5 -ml-0.5 md:-mt-1 md:-ml-1"></div>
          {/* Bottom Right Bracket */}
          <div className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 border-b-2 border-r-2 md:border-b-4 md:border-r-4 border-[#1e90ff] -mb-0.5 -mr-0.5 md:-mb-1 md:-mr-1"></div>

          <span className="text-[#1e90ff] font-bold text-xs md:text-lg mb-1 md:mb-2 text-center">{name}</span>
          <p className="text-black font-medium text-[9px] md:text-xs text-center leading-tight md:leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   SVG icon helpers
   SVG icon helpers
───────────────────────────────────────────── */
const FolderClosedIcon = ({ className = "tree-icon" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
  </svg>
);
const FolderOpenIcon = ({ className = "tree-icon" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
    <path d="M2 10h20" />
  </svg>
);
const FileIcon = () => (
  <svg className="tree-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

/* ─────────────────────────────────────────────
   ✏️  MANUALLY EDIT STATS HERE
   Change the numbers below to update the cards
───────────────────────────────────────────── */
const STATS = {
  myProjects: 3,           // ← edit this number
  deployedProjects: 1,     // ← edit this number
  completeProjects: 0,     // ← edit this number
};

/* ─────────────────────────────────────────────
   Project Data
───────────────────────────────────────────── */
const projectData = [
  {
    id: 'my-project',
    label: 'MY PROJECT',
    children: [
      {
        id: 'arduino-project',
        label: 'ARDUINO PROJECT',
        children: [
          { id: 'arduino-1', label: 'EMPTY', isFile: true, tech: 'Arduino', description: 'Upcoming Arduino project — coming soon.' },
          { id: 'arduino-2', label: 'EMPTY', isFile: true, tech: 'Arduino', description: 'Upcoming Arduino project — coming soon.' },
        ],
      },
      {
        id: 'arduino-flutter',
        label: 'ARDUINO / FLUTTER PROJECT',
        children: [
          { id: 'Rgblightcontrol', label: 'Rgblightcontrol.apk', isFile: true, tech: 'Flutter + Arduino', description: 'An Android APK that controls an Arduino robot via Bluetooth. Built with Flutter for cross-platform mobile UI and Arduino for hardware control.' },
        ],
      },
      {
        id: 'application-project',
        label: 'APPLICATION PROJECT',
        children: [
          { id: 'Gradecalculator', label: 'Gradecalculator.apk', isFile: true, tech: 'Flutter + Application', description: 'A grade calculator application.' },
          { id: 'app-2', label: 'EMPTY', isFile: true, tech: 'Application', description: 'Upcoming application project — coming soon.' },
        ],
      },
      {
        id: 'web-project',
        label: 'WEB PROJECT',
        children: [
          { id: 'Balucaportfolio', label: 'Balucaportfolio.webapp', isFile: true, tech: 'React + Vite', description: 'A personal portfolio web application.' },
          { id: 'web-2', label: 'EMPTY', isFile: true, tech: 'Web', description: 'Upcoming web project — coming soon.' },
        ],
      },
    ],
  },
  {
    id: 'deployed-project',
    label: 'MY DEPLOYED PROJECT',
    children: [
      {
        id: 'deployed-arduino',
        label: 'DEPLOYED ARDUINO PROJECT',
        children: [
          { id: 'd-arduino-1', label: 'EMPTY', isFile: true, tech: 'Arduino', description: 'Deployed Arduino project — coming soon.' },
          { id: 'd-arduino-2', label: 'EMPTY', isFile: true, tech: 'Arduino', description: 'Deployed Arduino project — coming soon.' },
        ],
      },
      {
        id: 'deployed-arduino-flutter',
        label: 'ARDUINO / FLUTTER PROJECT',
        children: [
          { id: 'd-robotcontrol', label: 'EMPTY', isFile: true, tech: 'Flutter + Arduino', description: 'Deployed version of the robot control APK available on Android.' },
        ],
      },
      {
        id: 'deployed-application',
        label: 'DEPLOYED APPLICATION PROJECT',
        children: [
          { id: 'd-app-1', label: 'EMPTY', isFile: true, tech: 'Application', description: 'Deployed application — coming soon.' },
          { id: 'd-app-2', label: 'EMPTY', isFile: true, tech: 'Application', description: 'Deployed application — coming soon.' },
        ],
      },
      {
        id: 'deployed-web',
        label: 'DEPLOYED WEB PROJECT',
        children: [
          { id: 'deployed-baluca', label: 'Balucaportfolio.webapp.deployed', isFile: true, tech: 'Web / GitHub', description: 'Deployed version of Baluca Portfolio.' },
          { id: 'd-web-2', label: 'EMPTY', isFile: true, tech: 'Web', description: 'Deployed web project — coming soon.' },
        ],
      },
    ],
  },
  {
    id: 'complete-project',
    label: 'MY PROJECT COMPLETE',
    children: [
      {
        id: 'complete-arduino',
        label: 'COMPLETE ARDUINO PROJECT',
        children: [
          { id: 'c-arduino-1', label: 'EMPTY', isFile: true, tech: 'Arduino', description: 'Completed Arduino project — coming soon.' },
          { id: 'c-arduino-2', label: 'EMPTY', isFile: true, tech: 'Arduino', description: 'Completed Arduino project — coming soon.' },
        ],
      },
      {
        id: 'complete-arduino-flutter',
        label: 'ARDUINO / FLUTTER PROJECT',
        children: [
          { id: 'c-robotcontrol', label: 'EMPTY', isFile: true, tech: 'Flutter + Arduino', description: 'Completed version of the cross-platform robot controller app.' },
        ],
      },
      {
        id: 'complete-application',
        label: 'COMPLETE APPLICATION PROJECT',
        children: [
          { id: 'c-app-1', label: 'EMPTY', isFile: true, tech: 'Application', description: 'Completed application — coming soon.' },
          { id: 'c-app-2', label: 'EMPTY', isFile: true, tech: 'Application', description: 'Completed application — coming soon.' },
        ],
      },
      {
        id: 'complete-web',
        label: 'COMPLETE WEB PROJECT',
        children: [
          { id: 'c-web-1', label: 'EMPTY', isFile: true, tech: 'Web', description: 'Completed web project — coming soon.' },
          { id: 'c-web-2', label: 'EMPTY', isFile: true, tech: 'Web', description: 'Completed web project — coming soon.' },
        ],
      },
    ],
  },
];

/* ─────────────────────────────────────────────
   Recursive Tree Node
───────────────────────────────────────────── */
const TreeNode = ({ node, depth = 0, selectedId, onSelectFile }) => {
  const [open, setOpen] = useState(depth < 1); // top-level closed by default

  if (node.isFile) {
    return (
      <li className="proj-tree-item">
        <div
          className={`proj-file-item ${selectedId === node.id ? 'is-selected' : ''}`}
          onClick={() => onSelectFile(node)}
        >
          <FileIcon />
          <span>{node.label}</span>
        </div>
      </li>
    );
  }

  return (
    <li className={`proj-tree-item ${depth === 0 ? 'depth-0-item' : ''}`}>
      <button
        type="button"
        className={`proj-tree-label ${open ? 'open' : ''} ${depth === 0 ? 'depth-0-label' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          setOpen(o => !o);
        }}
        aria-expanded={open}
      >
        {open ? <FolderOpenIcon /> : <FolderClosedIcon />}
        <span>{node.label}</span>
        <svg className={`proj-chevron ${open ? 'rotated' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div className={`proj-tree-children-wrapper ${open ? 'proj-open' : ''}`}>
        <ul className="proj-tree-children">
          {node.children.map(child => (
            <TreeNode
              key={child.id}
              node={child}
              depth={depth + 1}
              selectedId={selectedId}
              onSelectFile={onSelectFile}
            />
          ))}
        </ul>
      </div>
    </li>
  );
};

/* ─────────────────────────────────────────────
   Stat Card Component & Helper
───────────────────────────────────────────── */
const StatCard = ({ title, count }) => {
  return (
    <div className="e-card playing">
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>

      <div className="infotop">
        <div className="stat-text">{count}</div>
        <div className="name">{title}</div>
      </div>
    </div>
  );
};


/* ─────────────────────────────────────────────
   Main Page Component
───────────────────────────────────────────── */
const MyProjectPage = ({ show, setCurrentPage }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const sectionRef = useRef(null);
  const rgbTitleRef = useRef(null);
  const gradeCalcTitleRef = useRef(null);
  const balucaPortfolioTitleRef = useRef(null);
  const previewRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);

  // Show/hide scroll-up button based on scroll position (mobile/tablet only)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const handleScroll = () => {
      if (window.innerWidth < 1024) {
        setShowScrollUp(section.scrollTop > 200);
      }
    };
    section.addEventListener('scroll', handleScroll);
    return () => section.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    sectionRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Auto-scroll to preview panel on mobile/tablet when a file is selected
  useEffect(() => {
    // Strictly limit auto-scroll to mobile (480px) and tablet (768px) views.
    // Desktop screens will completely ignore this.
    const isMobileOrTablet = window.matchMedia("(max-width: 768px)").matches;

    if (selectedFile && isMobileOrTablet) {
      setTimeout(() => {
        const section = sectionRef.current;
        const preview = previewRef.current;
        if (section && preview) {
          section.scrollTo({ top: preview.offsetTop - 80, behavior: 'smooth' });
        }
      }, 200);
    }
  }, [selectedFile]);

  useEffect(() => {
    let cleanups = [];

    const runAnimation = async (el) => {
      try {
        const { animate, stagger, splitText } = await import('https://esm.sh/animejs');
        setTimeout(() => {
          if (!el) return;
          const { chars } = splitText(el, { words: false, chars: true });

          const anim = animate(chars, {
            y: [
              { to: '-1.5rem', ease: 'outExpo', duration: 600 },
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
        }, 50);
      } catch (err) {
        console.warn('Anime.js animation failed to load:', err);
      }
    };

    if (selectedFile?.id === 'Rgblightcontrol') {
      runAnimation(rgbTitleRef.current);
    } else if (selectedFile?.id === 'Gradecalculator') {
      runAnimation(gradeCalcTitleRef.current);
    } else if (selectedFile?.id === 'Balucaportfolio') {
      runAnimation(balucaPortfolioTitleRef.current);
    }
    return () => cleanups.forEach((fn) => fn());
  }, [selectedFile]);

  return (
    <>
      <div className={`myproject-section ${show ? 'show' : ''}`} id="projects" ref={sectionRef}>

        {/* ── Navigation ── */}
        <nav className="fixed-nav-header">
          <div className="nav-brand">
            <img src={bpLogo} alt="Baluca Portfolio" className="nav-logo-img" />
            <span className="nav-name">Johnrey Viadnes Baluca</span>
          </div>

          {/* Hamburger Icon */}
          <div className={`nav-hamburger ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={`nav-links-right ${isMenuOpen ? 'expanded' : ''}`}>
            <a href="#home" className="nav-link" onClick={e => { e.preventDefault(); setCurrentPage('home'); setIsMenuOpen(false); }}>Home</a>
            <a href="#about" className="nav-link" onClick={e => { e.preventDefault(); setCurrentPage('about'); setIsMenuOpen(false); }}>About me</a>
            <a href="#skills" className="nav-link" onClick={e => { e.preventDefault(); setCurrentPage('skills'); setIsMenuOpen(false); }}>Skills</a>
            <a href="#projects" className="nav-link active" onClick={e => { e.preventDefault(); setCurrentPage('projects'); setIsMenuOpen(false); }}>My project</a>
            <a href="#service" className="nav-link" onClick={e => { e.preventDefault(); setCurrentPage('service'); setIsMenuOpen(false); }}>Service</a>
            <a href="#contact" className="nav-link" onClick={e => { e.preventDefault(); setCurrentPage('contact'); setIsMenuOpen(false); }}>Contact</a>
          </div>
        </nav>

        {/* ── Page Header ── */}
        <div className="myproject-header">
          <div className="myproject-title-bg">
            <h2>MY PROJECT</h2>
            <h2>MY PROJECT</h2>
          </div>
        </div>

        {/* ── Main Layout ── */}
        <div className="myproject-layout">

          {/* LEFT: File-Tree Sidebar */}
          <aside className="myproject-sidebar">
            <ul className="proj-tree-root">
              {projectData.map(rootNode => (
                <TreeNode
                  key={rootNode.id}
                  node={rootNode}
                  depth={0}
                  selectedId={selectedFile?.id}
                  onSelectFile={setSelectedFile}
                />
              ))}
            </ul>
          </aside>

          {/* RIGHT: Preview Panel and Stats */}
          <div className="flex flex-col gap-6 w-full">
            <section className="myproject-preview has-cyber-pattern" ref={previewRef}>
              {selectedFile ? (
                selectedFile.id === 'Rgblightcontrol' ? (
                  <div className="w-full max-w-4xl mx-auto custom-scrollbar" style={{ maxHeight: '400px', overflowY: 'auto', paddingRight: '1rem' }}>
                    <div className="text-center mb-8 md:mb-12 mt-4 h-[40px] flex justify-center items-center">
                      <h1 ref={rgbTitleRef} className="text-[#1e90ff] text-lg md:text-3xl font-extrabold uppercase tracking-wider inline-block m-0">
                        RGB LIGHT CONTROL
                      </h1>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 mb-8">
                      <div className="flex-1">
                        <h2 className="text-[#1e90ff] text-base md:text-xl font-bold mb-2 md:mb-4 uppercase tracking-wide">ABOUT THIS PROJECT</h2>
                        <p className="text-black font-medium text-xs md:text-base leading-relaxed text-justify mb-4">
                          The RGB Light Control project is an innovative integration of mobile software and open-source hardware. Built using Flutter for the front-end application and Arduino for the microcontroller logic, this project allows users to wirelessly manage RGB LED setups.
                        </p>
                        <p className="text-black font-medium text-xs md:text-base leading-relaxed text-justify">
                          By utilizing Wi-Fi communication, the mobile app sends real-time commands to the Arduino, which processes the signals and adjusts the lighting accordingly. This project showcases the power of IoT (Internet of Things) concepts applied to home automation, personal projects, and creative lighting setups, providing a highly responsive and interactive user experience.
                        </p>
                      </div>
                      <div className="w-full md:w-1/3 flex justify-center items-start">
                        <div className="bg-[#050505] p-4 md:p-6 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 flex justify-center items-center w-full border border-gray-800">
                          <img src={rgbLogo} alt="RGB Light Control Logo" className="w-28 md:w-full max-w-[200px] object-contain" />
                        </div>
                      </div>
                    </div>

                    <div className="mb-8 md:mb-10">
                      <h2 className="text-[#1e90ff] text-base md:text-xl font-bold mb-2 md:mb-4 uppercase tracking-wide">DESCRIPTION</h2>
                      <p className="text-black font-medium text-xs md:text-base leading-relaxed text-justify">
                        The RGB Light Control application provides a seamless and intuitive user interface to customize your lighting environment. Key features include a full color-picker for precise hue selection, brightness control sliders, and various dynamic lighting modes to suit any mood. Designed with a modern, dark-themed UI, the app ensures that connecting to your Arduino device is straightforward and reliable. Whether you are setting the mood for a movie night, building a custom gaming room setup, or just exploring hardware integrations, this application gives you complete and wireless control over your space's ambiance.
                      </p>
                    </div>

                    <div className="mb-8 md:mb-10">
                      <h2 className="text-[#1e90ff] text-base md:text-xl font-bold mb-2 md:mb-6 uppercase tracking-wide">SCREENSHOT APPLICATION</h2>
                      <div className="flex justify-center">
                        <img src={screenShot} alt="Screenshot Application" className="w-full max-w-4xl rounded-lg" />
                      </div>
                    </div>

                    <div className="mb-8 md:mb-10">
                      <h2 className="text-[#1e90ff] text-base md:text-xl font-bold mb-2 md:mb-6 uppercase tracking-wide">COMPONENTS DIAGRAM</h2>
                      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                        <div className="w-full md:w-1/2">
                          <img src={rgbControlDiagram} alt="Components Diagram" className="w-full bg-gray-100 p-2 rounded-lg" />
                        </div>
                        <div className="w-full md:w-1/2">
                          <h3 className="text-gray-600 font-bold mb-2 md:mb-4 text-xs md:text-base uppercase tracking-wider">Total Components</h3>
                          <ul className="text-gray-500 space-y-1 md:space-y-2 list-disc pl-5 font-bold text-xs md:text-base">
                            <li>1 × ESP32 Development Board</li>
                            <li>1 × RGB LED</li>
                            <li>1 × Red LED</li>
                            <li>1 × Green LED</li>
                            <li>1 × Active Buzzer</li>
                            <li>5 × 220Ω Resistors</li>
                            <li>1 × Breadboard</li>
                            <li>~10 × Jumper Wires</li>
                            <li>1 × USB Cable</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8 md:mb-10">
                      <h2 className="text-[#1e90ff] text-base md:text-xl font-bold mb-2 md:mb-6 uppercase tracking-wide">TECHNOLOGIES USED</h2>
                      <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
                        <TechCard name="Flutter" icon={flutterIcon} description="Used to build the cross-platform mobile application for Android." />
                        <TechCard name="Dart" icon={dartIcon} description="The primary programming language for the Flutter framework." />
                        <TechCard name="Firebase" icon={firebaseIcon} description="Used for real-time data sync and authentication." />
                        <TechCard name="CPP" icon={cppIcon} description="Used to program the ESP32 microcontroller logic." />
                        <TechCard name="Arduino" icon={arduinoIcon} description="The IDE and framework used for ESP32 firmware development." />
                        <TechCard name="Antigravity IDE" icon={antigravityIcon} description="Used for AI-assisted development and debugging." />
                      </div>
                    </div>
                  </div>
                ) : selectedFile.id === 'Gradecalculator' ? (
                  <div className="w-full max-w-4xl mx-auto custom-scrollbar" style={{ maxHeight: '400px', overflowY: 'auto', paddingRight: '1rem' }}>
                    <div className="text-center mb-8 md:mb-12 mt-4 h-[40px] flex justify-center items-center">
                      <h1 ref={gradeCalcTitleRef} className="text-[#1e90ff] text-lg md:text-3xl font-extrabold uppercase tracking-wider inline-block m-0">
                        GRADE CALCULATOR
                      </h1>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 mb-8">
                      <div className="flex-1">
                        <h2 className="text-[#1e90ff] text-base md:text-xl font-bold mb-2 md:mb-4 uppercase tracking-wide">ABOUT THIS PROJECT</h2>
                        <p className="text-black font-medium text-xs md:text-base leading-relaxed text-justify mb-4">
                          The Grade Calculator is a comprehensive academic tool designed to help students track and manage their course performance efficiently. Built with Flutter, it provides a seamless cross-platform experience, allowing users to calculate both their General Weighted Average (GWA) and Grade Point Average (GPA), monitor individual subject grades, and project required scores for future assignments.
                        </p>
                        <p className="text-black font-medium text-xs md:text-base leading-relaxed text-justify">
                          This application simplifies academic monitoring by providing a clear and visual representation of a student's academic progress. Instead of relying on manual calculations or complex spreadsheets, students can instantly see how different grades impact their overall GWA and GPA, helping them stay informed and focused on their academic goals.
                        </p>
                      </div>
                      <div className="w-full md:w-1/3 flex justify-center items-start">
                        <div className="bg-[#050505] p-4 md:p-6 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 flex justify-center items-center w-full border border-gray-800">
                          <img src={gradeCalcLogo} alt="Grade Calculator Logo" className="w-28 md:w-full max-w-[500px] object-contain" />
                        </div>
                      </div>
                    </div>

                    <div className="mb-8 md:mb-10">
                      <h2 className="text-[#1e90ff] text-base md:text-xl font-bold mb-2 md:mb-4 uppercase tracking-wide">DESCRIPTION</h2>
                      <p className="text-black font-medium text-xs md:text-base leading-relaxed text-justify">
                        The application features a clean and intuitive interface where users can easily input their grades, units, and corresponding weights. Key functionalities include an automated GWA Calculator, GPA Calculator, structured grade tracking, academic performance analytics, and target-setting tools that help students determine the scores needed to achieve their desired results.
                        With real-time updates and secure cloud synchronization, the Grade Calculator ensures students always have an up-to-date and reliable overview of their academic standing, empowering them to make informed decisions to achieve their goals.
                      </p>
                    </div>

                    <div className="mb-8 md:mb-10">
                      <h2 className="text-[#1e90ff] text-base md:text-xl font-bold mb-2 md:mb-6 uppercase tracking-wide">SCREENSHOT APPLICATION</h2>
                      <div className="flex justify-center">
                        <img src={gradeCalcScreenshot} alt="Screenshot Application" className="w-full max-w-4xl rounded-lg" />
                      </div>
                    </div>

                    <div className="mb-8 md:mb-10">
                      <h2 className="text-[#1e90ff] text-base md:text-xl font-bold mb-2 md:mb-6 uppercase tracking-wide">TECHNOLOGIES USED</h2>
                      <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
                        <TechCard name="Flutter" icon={flutterIcon} description="Used to build the cross-platform mobile application." />
                        <TechCard name="Dart" icon={dartIcon} description="The primary programming language for the Flutter framework." />
                        <TechCard name="Firebase" icon={firebaseIcon} description="Used for real-time database and authentication." />
                        <TechCard name="Antigravity IDE" icon={antigravityIcon} description="Used for AI-assisted development." />
                      </div>
                    </div>
                  </div>
                ) : selectedFile.id === 'Balucaportfolio' ? (
                  <div className="w-full max-w-4xl mx-auto custom-scrollbar" style={{ maxHeight: '400px', overflowY: 'auto', paddingRight: '1rem' }}>
                    <div className="text-center mb-8 md:mb-12 mt-4 h-[40px] flex justify-center items-center">
                      <h1 ref={balucaPortfolioTitleRef} className="text-[#1e90ff] text-lg md:text-3xl font-extrabold uppercase tracking-wider inline-block m-0">
                        BALUCA PORTFOLIO
                      </h1>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 mb-8">
                      <div className="flex-1">
                        <h2 className="text-[#1e90ff] text-base md:text-xl font-bold mb-2 md:mb-4 uppercase tracking-wide">ABOUT THIS PROJECT</h2>
                        <p className="text-black font-medium text-xs md:text-base leading-relaxed text-justify mb-4">
                          Baluca Portfolio is a modern and responsive web application designed to showcase my skills, projects, and professional journey as a developer. It serves as a centralized platform where visitors can explore my work in web development, mobile application development, and Arduino-based IoT projects. Built with performance, accessibility, and user experience in mind, the portfolio features a clean interface, responsive layouts, and organized project presentations. This web application reflects my passion for creating high-quality digital solutions while continuously improving my technical expertise and problem-solving skills. It also provides an easy way for potential clients, employers, and collaborators to learn more about me and connect for future opportunities.
                        </p>
                      </div>
                      <div className="w-full md:w-1/3 flex justify-center items-start">
                        <div className="p-4 md:p-6 rounded-2xl flex justify-center items-center w-full">
                          <img src={balucaPortfolioLogo} alt="Baluca Portfolio Logo" className="w-28 md:w-full max-w-[200px] object-contain" />
                        </div>
                      </div>
                    </div>

                    <div className="mb-8 md:mb-10">
                      <h2 className="text-[#1e90ff] text-base md:text-xl font-bold mb-2 md:mb-4 uppercase tracking-wide">DESCRIPTION</h2>
                      <p className="text-black font-medium text-xs md:text-base leading-relaxed text-justify">
                        Baluca Portfolio is more than a personal website—it is an interactive web application that highlights my experience, technical skills, and completed projects in a professional and engaging way. The application includes project showcases, technology stacks, screenshots, service offerings, and contact information, allowing visitors to quickly understand my capabilities. Every section is designed with responsive web principles to ensure a seamless experience across desktop, tablet, and mobile devices. The portfolio demonstrates my commitment to clean code, modern UI/UX design, and continuous learning as I work toward becoming a skilled Full-Stack Developer.
                      </p>
                    </div>

                    <div className="mb-8 md:mb-10">
                      <h2 className="text-[#1e90ff] text-base md:text-xl font-bold mb-2 md:mb-6 uppercase tracking-wide">SCREENSHOT APPLICATION</h2>
                      <div className="flex justify-center">
                        <img src={balucaPortfolioScreenshot} alt="Screenshot Application" className="w-full max-w-4xl rounded-lg" />
                      </div>
                    </div>

                    <div className="mb-8 md:mb-10">
                      <h2 className="text-[#1e90ff] text-base md:text-xl font-bold mb-2 md:mb-6 uppercase tracking-wide">TECHNOLOGIES USED</h2>
                      <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
                        <TechCard name="CSS 3" icon={cssIcon} description="Used for styling." />
                        <TechCard name="Javascript" icon={jsIcon} description="Core logic and interactivity." />
                        <TechCard name="Firebase" icon={firebaseIcon} description="Used for database and hosting." />
                        <TechCard name="Antigravity" icon={antigravityIcon} description="AI-assisted development." />
                        <TechCard name="React.Js" icon={reactIcon} description="Frontend UI library." />
                        <TechCard name="Tailwind css" icon={tailwindIcon} description="Utility-first CSS framework." />
                        <TechCard name="HTML 5" icon={htmlIcon} description="Core structure of the web application." />
                        <TechCard name="Node.Js" icon={nodeIcon} description="Backend runtime environment." />
                      </div>
                    </div>
                  </div>
                ) : selectedFile.id === 'deployed-baluca' ? (
                  <div className="w-full max-w-4xl mx-auto custom-scrollbar" style={{ maxHeight: '400px', overflowY: 'auto', paddingRight: '1rem' }}>
                    <div className="mb-8 md:mb-12 mt-4">
                      <div className="flex flex-col md:flex-row gap-8 mb-8">
                        <div className="flex-1">
                          <h2 className="text-[#1e90ff] text-base md:text-xl font-bold mb-2 md:mb-4 uppercase tracking-wide">ABOUT THIS PROJECT DEPLOYED</h2>
                          <p className="text-black font-medium text-xs md:text-base leading-relaxed text-justify mb-4">
                            This project is successfully deployed using GitHub Pages, allowing the portfolio to be accessed online through a fast, secure, and reliable hosting platform. GitHub serves as both the source code repository and deployment service, making it easy to manage updates through version control. Every improvement, feature, and bug fix is tracked using Git, ensuring a smooth development workflow. By deploying with GitHub Pages, visitors can explore the latest version of the Baluca Portfolio from any device, demonstrating modern web development practices, continuous deployment, and responsive design.
                          </p>
                        </div>
                        <div className="w-full md:w-1/3 flex justify-center items-center">
                          <img src={balucaPortfolioLogo} alt="Baluca Portfolio Logo" className="w-28 md:w-full max-w-[200px] object-contain" />
                        </div>
                      </div>

                      <div className="mb-8 md:mb-10">
                        <h2 className="text-[#1e90ff] text-base md:text-xl font-bold mb-2 md:mb-4 uppercase tracking-wide">YOU ARE ALREADY VISIT THIS SITE</h2>
                        <a href="https://johnreybaluca.github.io/Baluca-Portfolio/" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center bg-[#2ecc71] hover:bg-[#27ae60] text-white font-bold py-4 rounded-xl transition-colors duration-300 w-full shadow-md text-lg md:text-xl">
                          <svg className="absolute left-6 md:left-10 w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          VISITED
                        </a>
                      </div>

                      <div className="mb-8 md:mb-10">
                        <h2 className="text-[#1e90ff] text-base md:text-xl font-bold mb-2 md:mb-6 uppercase tracking-wide">HOSTING ENGINE USE</h2>
                        <div className="flex justify-start">
                          <TechCard name="GITHUB" icon={githubIcon} description="Used for version control and hosting via GitHub Pages." />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="proj-detail-card">
                    <div className="proj-detail-header">
                      <FileIcon />
                      <h2 className="proj-detail-title">{selectedFile.label}</h2>
                      <span className="proj-detail-badge">{selectedFile.tech}</span>
                    </div>
                    <div className="proj-detail-divider" />
                    <p className="proj-detail-desc">{selectedFile.description}</p>
                  </div>
                )
              ) : (
                <div className="proj-empty-state">
                  <div className="animated-folder-container">
                    <div className="animated-folder">
                      <div className="folder-back"></div>
                      <div className="folder-paper folder-paper-3"></div>
                      <div className="folder-paper folder-paper-2"></div>
                      <div className="folder-paper folder-paper-1"></div>
                      <div className="folder-front"></div>
                    </div>
                  </div>
                  <p className="proj-empty-text">OPEN FOLDER AND SELECT FILE TO SEE PROJECT</p>
                </div>
              )}
            </section>

            {/* Stats Container Outside the Box */}
            <div className="stats-container mt-2">
              <StatCard title="MY PROJECTS" count={STATS.myProjects} />
              <StatCard title="MY DEPLOYED PROJECTS" count={STATS.deployedProjects} />
              <StatCard title="COMPLETE PROJECTS" count={STATS.completeProjects} />
            </div>
          </div>

        </div>

        {/* ── Water Wave Transition ── */}
        <div className="myproject-water-zone">
          <div className="myproject-waves-container">
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
              <defs>
                <path id="proj-gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className="parallax">
                <use xlinkHref="#proj-gentle-wave" x="48" y="0" fill="rgba(30,144,255,0.7)" />
                <use xlinkHref="#proj-gentle-wave" x="48" y="3" fill="rgba(30,144,255,0.5)" />
                <use xlinkHref="#proj-gentle-wave" x="48" y="5" fill="rgba(30,144,255,0.3)" />
                <use xlinkHref="#proj-gentle-wave" x="48" y="7" fill="dodgerblue" />
              </g>
            </svg>
          </div>

          <div className="myproject-underwater-bg">
            <br></br>
            <br></br>
            <br></br>
            <div className="myproject-copyright">
              © {new Date().getFullYear()} Johnrey Viadnes Baluca. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-up button — sibling to myproject-section, outside transform context */}
      <button
        className={`scroll-up-btn ${showScrollUp ? 'scroll-up-btn--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
};

export default MyProjectPage;
