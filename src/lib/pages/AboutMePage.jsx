import React, { useState, useEffect, useRef } from 'react';
import '../stylesheet css/AboutMePage.css';
import analyticGif from '../../assets/gif/analytic.gif';
import profilePic from '../../assets/images/profile pic.png';
import cloudGif from '../../assets/gif/cloud.gif';
import sunGif from '../../assets/gif/sun.gif';
import checkGif from '../../assets/gif/check.gif';
import tetuan from '../../assets/logo/tetuan central school.png';
import surabay from '../../assets/logo/surabay national high school.png';
import sibugay from '../../assets/logo/sibugay matthew jackson school inc.png';
import zppsu from '../../assets/logo/zppsu.png';
import bpLogo from '../../assets/logo/Baluca-portpolio logo.png';

import discordIcon from '../../assets/icon/discord.png';
import facebookIcon from '../../assets/icon/facebook.png';
import gmailIcon from '../../assets/icon/gmail.png';
import tiktokIcon from '../../assets/icon/tik-tok.png';

import fishGif from '../../assets/gif/fish.gif';
import design1 from '../../assets/images/design 1.jpg';
import design2 from '../../assets/images/design 2.jpg';
import design3 from '../../assets/images/design 3.jpg';
import design4 from '../../assets/images/design 4.jpg';
import design5 from '../../assets/images/design 5.jpg';
import design6 from '../../assets/images/design 6.jpg';
import design7 from '../../assets/images/design 7.jpg';
import design8 from '../../assets/images/design 8.jpg';

const AboutMePage = ({ show, setCurrentPage }) => {
  const [navExpanded, setNavExpanded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionRef = useRef(null);
  const personalInfoRef = useRef(null);
  const eduBgRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const handleScroll = () => setShowScrollTop(el.scrollTop > 200);
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Anime.js splitText bounce animation ──
  useEffect(() => {
    let cleanups = [];

    const runAnimation = async () => {
      try {
        const { animate, stagger, splitText } = await import('https://esm.sh/animejs');

        const targets = [
          personalInfoRef.current,
          eduBgRef.current,
        ].filter(Boolean);

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

    runAnimation();

    return () => cleanups.forEach((fn) => fn());
  }, []);

  const scrollToTop = () => {
    sectionRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`about-me-section ${show ? 'show' : ''}`} id="about" ref={sectionRef}>
      {/* Navigation */}
      <nav className="fixed-nav-header">
        <div className="nav-brand">
          <img src={bpLogo} alt="Baluca Portfolio" className="nav-logo-img" />
          <span className="nav-name">Johnrey Viadnes Baluca</span>
        </div>
        <div className="nav-links-right">
          <a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>Home</a>
          <a href="#about" className="nav-link active" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }}>About me</a>
          <a href="#skills" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('skills'); }}>Skills</a>
          <a href="#projects" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); }}>My project</a>
          <a href="#service" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('service'); }}>Service</a>
          <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }}>Contact</a>
        </div>
      </nav>

      <div className="about-grid">
        {/* Top Left: Text Area */}
        <div className="about-text-area">
          <div className="about-title-content">
            <h2>ABOUT ME</h2>
            <h2>ABOUT ME</h2>
          </div>
          <p className="about-description">
            Hello, my name is Johnrey V. Baluca. I am 22 years old, from Purok Sunflower, Katipunan, R.T Lim, Zamboanga Sibugay, Philippines. I am an aspiring Application Developer and Web Developer with a strong passion for technology, software development, and continuous learning. I am dedicated to improving my skills in designing and building modern applications and websites that provide efficient, user-friendly, and innovative solutions.
          </p>
          <p className="about-description" style={{ marginTop: '1rem' }}>
            My goal is to become a successful Full-Stack Developer, capable of working on both front-end and back-end development. To achieve this, I am continuously studying programming languages, web technologies, databases, and software development frameworks. I enjoy learning how applications work, solving technical problems, and creating projects that enhance my practical experience.
          </p>
          <p className="about-description" style={{ marginTop: '1rem' }}>
            I believe that success in the IT industry requires determination, discipline, and a commitment to lifelong learning. By studying application development, web development, database management, cloud technologies, and modern development tools, I am preparing myself for future career opportunities in the technology field.
          </p>
          <p className="about-description" style={{ marginTop: '1rem' }}>
            As I continue my journey, I aim to develop professional-grade applications, contribute to meaningful projects, and grow into a skilled software engineer. My vision is to build innovative digital solutions that help businesses and users while establishing a successful and rewarding career as a Full-Stack Developer. Through hard work, persistence, and continuous improvement, I am confident that I can achieve my goals and make a positive impact in the world of technology.
          </p>
        </div>

        {/* Top Right: Analytic Illustration */}
        <div className="about-illustration">
          <img src={analyticGif} alt="Analytic Graphic" className="analytic-img" />
        </div>

        {/* Bottom Left: Personal Information Folder */}
        <div className="folder-wrapper">
          <h3 className="folder-heading" ref={personalInfoRef}>Personal Information</h3>
          <div className="folder-book">
            <div className="folder-tab"></div>
            <div className="folder-book-content">
              <div className="sky-section">
                <img src={cloudGif} className="cloud-gif cloud-1" alt="cloud" />
                <img src={cloudGif} className="cloud-gif cloud-2" alt="cloud" />
                <img src={cloudGif} className="cloud-gif cloud-3" alt="cloud" />
                <img src={sunGif} className="sun-gif" alt="sun" />
                <div className="profile-img-container">
                  <img src={profilePic} alt="Johnrey Baluca" />
                </div>
              </div>

              <div className="info-section">
                <h4 className="name-title">Johnrey Viadnes Baluca</h4>
                <div className="info-row">Age: 22</div>
                <div className="info-row">Date of Birth: 07/15/2004</div>
                <div className="info-row">Citizenship: Filipino</div>
                <div className="info-row">Civil Status: single</div>
                <div className="info-row">Sex: Male</div>
                <div className="info-row">Contact: 09679330142</div>
              </div>

              <div className="social-card-wrapper">
                <div className="social-card">
                  <span>Social</span>
                  <a className="social-link" href="https://web.facebook.com/johnreyvaidnes.baluca" target="_blank" rel="noopener noreferrer" title="Facebook">
                    <img src={facebookIcon} alt="Facebook" />
                  </a>
                  <a className="social-link" href="mailto:johnreybaluca46@gmail.com" title="Gmail">
                    <img src={gmailIcon} alt="Gmail" />
                  </a>
                  <a className="social-link" href="https://discord.com/users/impostor0948_18164" target="_blank" rel="noopener noreferrer" title="Discord">
                    <img src={discordIcon} alt="Discord" />
                  </a>
                  <a className="social-link" href="https://www.tiktok.com/@johnreyviadnesbaluca" target="_blank" rel="noopener noreferrer" title="TikTok">
                    <img src={tiktokIcon} alt="TikTok" />
                  </a>
                </div>
              </div>
            </div>
            <div className="folder-cover"></div>
          </div>
        </div>

        {/* Bottom Right: Education Background Folder */}
        <div className="folder-wrapper">
          <h3 className="folder-heading" ref={eduBgRef}>Education Background</h3>
          <div className="folder-book edu-folder-book">
            <div className="folder-tab"></div>
            <div className="folder-book-content edu-folder-book-content">
              <h4 className="name-title">Educational Journey</h4>

              {/* Tetuan Central School */}
              <div className="edu-card">
                <img src={tetuan} alt="Tetuan Central School" className="edu-logo" />
                <div className="edu-info">
                  <span className="edu-school-name">Tetuan Central School</span>
                  <span className="edu-level">Grade 2 – Grade 6</span>
                  <span className="edu-year">2012 - 2016</span>
                </div>
                <img src={checkGif} alt="completed" className="edu-check" />
              </div>

              <div className="edu-divider" />

              {/* Surabay National High School */}
              <div className="edu-card">
                <img src={surabay} alt="Surabay National High School" className="edu-logo" />
                <div className="edu-info">
                  <span className="edu-school-name">Surabay National High School</span>
                  <span className="edu-level">Grade 7 – Grade 10</span>
                  <span className="edu-year">2017 – 2021</span>
                </div>
                <img src={checkGif} alt="completed" className="edu-check" />
              </div>

              <div className="edu-divider" />

              {/* Sibugay Matthew Jackson School Inc. */}
              <div className="edu-card">
                <img src={sibugay} alt="Sibugay Matthew Jackson School Inc." className="edu-logo" />
                <div className="edu-info">
                  <span className="edu-school-name">Sibugay Mathew Jackson School inc</span>
                  <span className="edu-level">Strand: TVL ICT Major Computing Programmmer</span>
                  <span className="edu-level">grade 11 – grade 12</span>
                  <span className="edu-year">2022 - 2024</span>
                </div>
                <img src={checkGif} alt="completed" className="edu-check" />
              </div>

              <div className="edu-divider" />

              {/* ZPPSU */}
              <div className="edu-card">
                <img src={zppsu} alt="ZPPSU" className="edu-logo" />
                <div className="edu-info">
                  <span className="edu-school-name">Zamboanga Peninsula Polytechnic State University</span>
                  <span className="edu-level">Course: BS Information System</span>
                  <span className="edu-year edu-year-active">1st yr, 2nd yr, <span className="edu-inprogress">3rd in progress 2026 – 2027</span></span>
                </div>
              </div>

            </div>
            <div className="folder-cover"></div>
          </div>
        </div>

      </div>

      {/* Albums Section Wrapper */}
      <div className="albums-container-wrapper">
        <div className="wave-container">
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
        <div className="dodgerblue-bg">
          {/* Swimming Fishes - Big (Foreground) */}
          <img src={fishGif} className="swimming-fish fish-big fish-1" alt="Fish" />
          <img src={fishGif} className="swimming-fish fish-big fish-2" alt="Fish" />
          <img src={fishGif} className="swimming-fish fish-big fish-3" alt="Fish" />

          {/* Swimming Fishes - Small (Background) */}
          <img src={fishGif} className="swimming-fish fish-small fish-4" alt="Fish" />
          <img src={fishGif} className="swimming-fish fish-small fish-5" alt="Fish" />
          <img src={fishGif} className="swimming-fish fish-small fish-6" alt="Fish" />

          <div className="albums-section">
            <h2 className="albums-title">Albums</h2>
            <div className="albums-grid">
              {[
                { img: design1, title: "Mga patay gutom", description: "Apil og sopas para tipid sa balon sa odto." },
                { img: design2, title: "Bonding sa amoa balay", description: "Bonding gha kaon og manga pero gha cheat sa exam. HAHAHA" },
                { img: design3, title: "Bonding sa paseo", description: "Gha bonding sa paseo kay taga gabie naman tig gawas sa eskwelahan tas ma ngaon sa night market with sisig." },
                { img: design4, title: "Laag dala pitik", description: "Gha laag sa boulevard inig human sa klase para makakita og dagat tas na pitikan WHAHAHAHAHHAA." },
                { img: design5, title: "Tambay sa campus", description: "Tambay sa campus while naga hulat sa exam whahahahahaha" },
                { img: design6, title: "After exam", description: "After exam nag pa picture nasad asa me nag pa picture sa arts technology" },
                { img: design7, title: "Clearance day", description: "Nag pa clearance ang mga peson lets gooo pero gamay pa na perma" },
                { img: design8, title: "Super Baluca edition group", description: "Completo pero naay kulang usa og naay naka salaag duha" }
              ].map((album, index) => (
                <div className="card" key={index}>
                  <img src={album.img} alt={album.title} className="card__image" />
                  <div className="card__content">
                    <p className="card__title">{album.title}</p>
                    <p className="card__description">{album.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Copyright Footer */}
          <br></br>
          <div className="copyright-footer">
            &copy; 2026 Johnrey Viadnes Baluca. All Rights Reserved.
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-top-btn ${showScrollTop ? 'scroll-top-btn--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

    </div>
  );
};

export default AboutMePage;
