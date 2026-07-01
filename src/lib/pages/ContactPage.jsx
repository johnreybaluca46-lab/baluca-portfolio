import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

import { useState, useEffect, useRef } from 'react';
import '../stylesheet css/ContactPage.css';
import bpLogo from '../../assets/logo/Baluca-portpolio logo.png';

// Contact Icons
import gmailIcon from '../../assets/icon/gmail.png';
import phoneIcon from '../../assets/icon/telephone.png';
import locationIcon from '../../assets/icon/location.png';

// Social Icons
import facebookIcon from '../../assets/icon/facebook.png';
import discordIcon from '../../assets/icon/discord.png';
import tiktokIcon from '../../assets/icon/tik-tok.png';

const ContactPage = ({ show, setCurrentPage }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [subErrorMessage, setSubErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const sectionRef = useRef(null);
  const messageRef = useRef(null);

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
          messageRef.current,
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

    if (show) {
      runAnimation();
    }

    return () => cleanups.forEach((fn) => fn());
  }, [show]);

  const scrollToTop = () => {
    sectionRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Required field missing");
      setSubErrorMessage("Please fill out all fields");
      setShowErrorAlert(true);
      setShowSuccessAlert(false);
      setTimeout(() => setShowErrorAlert(false), 4000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Invalid email");
      setSubErrorMessage("Please enter a valid email address");
      setShowErrorAlert(true);
      setShowSuccessAlert(false);
      setTimeout(() => setShowErrorAlert(false), 4000);
      return;
    }

    try {
      // Save to Firebase Firestore
      await addDoc(collection(db, 'messages'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(),
      });

      // Send Email to Gmail via EmailJS
      await emailjs.send(
        'service_1n2k6sf',    // 🔴 Replace with your EmailJS Service ID
        'template_jezj2be',   // 🔴 Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'fy21VopOUVrxljrdC'     // 🔴 Replace with your EmailJS Public Key
      );

      setShowErrorAlert(false);
      setShowSuccessAlert(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setShowSuccessAlert(false), 4000);

    } catch (error) {
      console.error('Error sending message:', error);
      setErrorMessage("Failed to send message");
      setSubErrorMessage("Please try again later");
      setShowErrorAlert(true);
      setShowSuccessAlert(false);
      setTimeout(() => setShowErrorAlert(false), 4000);
    }
  };


  return (
    <div className={`contact-page-section ${show ? 'show' : ''}`} id="contact" ref={sectionRef}>

      {/* SUCCESS ALERT NOTIFICATION */}
      {showSuccessAlert && (
        <div className="success-alert-container">
          <div className="success-alert-card">
            <svg className="success-alert-wave" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0,256L11.4,240C22.9,224,46,192,69,192C91.4,192,114,224,137,234.7C160,245,183,235,206,213.3C228.6,192,251,160,274,149.3C297.1,139,320,149,343,181.3C365.7,213,389,267,411,282.7C434.3,299,457,277,480,250.7C502.9,224,526,192,549,181.3C571.4,171,594,181,617,208C640,235,663,277,686,256C708.6,235,731,149,754,122.7C777.1,96,800,128,823,165.3C845.7,203,869,245,891,224C914.3,203,937,117,960,112C982.9,107,1006,181,1029,197.3C1051.4,213,1074,171,1097,144C1120,117,1143,107,1166,133.3C1188.6,160,1211,224,1234,218.7C1257.1,213,1280,139,1303,133.3C1325.7,128,1349,192,1371,192C1394.3,192,1417,128,1429,96L1440,64L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"
                fillOpacity="1"
              ></path>
            </svg>

            <div className="success-alert-icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                strokeWidth="0"
                fill="currentColor"
                stroke="currentColor"
                className="success-alert-icon"
              >
                <path
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
                ></path>
              </svg>
            </div>
            <div className="success-alert-message-container">
              <p className="success-alert-message-text">Success message</p>
              <p className="success-alert-sub-text">Everything seems great</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 15 15"
              strokeWidth="0"
              fill="none"
              stroke="currentColor"
              className="success-alert-cross-icon"
              onClick={() => setShowSuccessAlert(false)}
            >
              <path
                fill="currentColor"
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      )}

      {/* ERROR ALERT NOTIFICATION */}
      {showErrorAlert && (
        <div className="error-alert-container">
          <div className="error-alert-card">
            <svg className="error-alert-wave" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0,256L11.4,240C22.9,224,46,192,69,192C91.4,192,114,224,137,234.7C160,245,183,235,206,213.3C228.6,192,251,160,274,149.3C297.1,139,320,149,343,181.3C365.7,213,389,267,411,282.7C434.3,299,457,277,480,250.7C502.9,224,526,192,549,181.3C571.4,171,594,181,617,208C640,235,663,277,686,256C708.6,235,731,149,754,122.7C777.1,96,800,128,823,165.3C845.7,203,869,245,891,224C914.3,203,937,117,960,112C982.9,107,1006,181,1029,197.3C1051.4,213,1074,171,1097,144C1120,117,1143,107,1166,133.3C1188.6,160,1211,224,1234,218.7C1257.1,213,1280,139,1303,133.3C1325.7,128,1349,192,1371,192C1394.3,192,1417,128,1429,96L1440,64L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"
                fillOpacity="1"
              ></path>
            </svg>

            <div className="error-alert-icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 15 15"
                strokeWidth="0"
                fill="none"
                stroke="currentColor"
                className="error-alert-icon"
              >
                <path
                  fill="currentColor"
                  d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="error-alert-message-container">
              <p className="error-alert-message-text">{errorMessage}</p>
              <p className="error-alert-sub-text">{subErrorMessage}</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 15 15"
              strokeWidth="0"
              fill="none"
              stroke="currentColor"
              className="error-alert-cross-icon"
              onClick={() => setShowErrorAlert(false)}
            >
              <path
                fill="currentColor"
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      )}

      {/* Navigation */}
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
          <a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); setIsMenuOpen(false); }}>Home</a>
          <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); setIsMenuOpen(false); }}>About me</a>
          <a href="#skills" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('skills'); setIsMenuOpen(false); }}>Skills</a>
          <a href="#projects" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); setIsMenuOpen(false); }}>My project</a>
          <a href="#service" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('service'); setIsMenuOpen(false); }}>Service</a>
          <a href="#contact" className="nav-link active" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); setIsMenuOpen(false); }}>Contact</a>
        </div>
      </nav>

      {/* Header Title */}
      <div className="contact-header-container">
        <div className="contact-title-content">
          <h2>GET IN TOUCH</h2>
          <h2>GET IN TOUCH</h2>
        </div>
      </div>

      <p className="contact-description">
        I'd love to hear from you! Whether you have a question, a project idea, or simply want to say hello, feel free to reach out. I'm always happy to connect, discuss new opportunities, share ideas, and explore ways we can work together. Your message is always welcome, and I'll respond as soon as possible.
      </p>
      <div className="contact-grid">
        {/* Left Column: Contact Info & Socials */}
        <div className="contact-left">

          <br></br>
          <div className="contact-info-card">
            <div className="contact-border-top"></div>
            <div className="contact-border-left"></div>
            <div className="contact-border-bottom"></div>
            <div className="contact-border-right"></div>
            <img src={gmailIcon} alt="Email" className="contact-icon" />
            <div className="contact-info-text">
              <h3 className="contact-info-title">EMAIL</h3>
              <p className="contact-info-value">johnreybaluca46@gmail.com</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-border-top"></div>
            <div className="contact-border-left"></div>
            <div className="contact-border-bottom"></div>
            <div className="contact-border-right"></div>
            <img src={phoneIcon} alt="Phone" className="contact-icon" />
            <div className="contact-info-text">
              <h3 className="contact-info-title">CONTACT NUMBER</h3>
              <p className="contact-info-value">09679330142</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-border-top"></div>
            <div className="contact-border-left"></div>
            <div className="contact-border-bottom"></div>
            <div className="contact-border-right"></div>
            <img src={locationIcon} alt="Location" className="contact-icon" />
            <div className="contact-info-text">
              <h3 className="contact-info-title">LOCATION</h3>
              <p className="contact-info-value">Purok Sunflower, Katipunan, R.T. Lim, Zamboanga Sibugay</p>
            </div>

            {/* Map Tooltip */}
            <div className="tooltip-container">
              <div className="tooltip-icon">
                {/* Map Pin Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
              </div>
              <div className="tooltip map-tooltip">
                <a
                  href="https://www.google.com/maps/place/Katipunan,+Roseller+T.+Lim,+Zamboanga+Sibugay/@7.6550444,122.459018,279m/data=!3m1!1e3!4m6!3m5!1s0x32517a31884abc53:0xc37383bf21a67351!8m2!3d7.6550431!4d122.4596617!16s%2Fg%2F11h1kr6x8r?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'block', width: '100%', height: '100%' }}
                >
                  <iframe
                    title="Location Map"
                    src="https://maps.google.com/maps?q=Katipunan,+Roseller+T.+Lim,+Zamboanga+Sibugay&t=k&z=17&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '4px', display: 'block' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="contact-social-section">
            <h3 className="contact-social-title">CONNECT WITH ME</h3>
            <div className="sliding-social-card">
              <span>Social</span>
              <a className="sliding-social-link" href="https://web.facebook.com/johnreyvaidnes.baluca" target="_blank" rel="noopener noreferrer" title="Facebook">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a className="sliding-social-link" href="mailto:johnreybaluca46@gmail.com" title="Gmail">
                <img src={gmailIcon} alt="Gmail" />
              </a>
              <a className="sliding-social-link" href="https://discord.com/users/impostor0948_18164" target="_blank" rel="noopener noreferrer" title="Discord">
                <img src={discordIcon} alt="Discord" />
              </a>
              <a className="sliding-social-link" href="https://www.tiktok.com/@johnreyviadnesbaluca" target="_blank" rel="noopener noreferrer" title="TikTok">
                <img src={tiktokIcon} alt="TikTok" />
              </a>
            </div>
          </div>

        </div>

        <div className="contact-right">
          <h3 className="contact-message-title" ref={messageRef}>MESSAGE ME</h3>
          <div className="contact-folder-wrapper">
            <div className="contact-folder-book">
              <div className="contact-folder-tab"></div>
              <div className="contact-folder-book-content">
                <div className="contact-folder-paper">
                  <input type="text" placeholder="Your name" name="name" value={formData.name} onChange={handleInputChange} className="contact-input" />
                  <input type="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleInputChange} className="contact-input" />
                  <textarea placeholder="Your Message" name="message" value={formData.message} onChange={handleInputChange} className="contact-input"></textarea>

                  <div className="contact-btn-wrapper">
                    <button className="contact-btn" onClick={handleSendMessage}>
                      <i className="animation"></i>
                      Send message
                      <i className="animation"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="contact-folder-cover"></div>
            </div>
          </div>
        </div>
      </div>

      {/* WATER TRANSITION ZONE */}
      <div className="contact-water-zone">
        <div className="contact-waves-container">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="contact-gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#contact-gentle-wave" x="48" y="0" fill="rgba(30,144,255,0.7)" />
              <use xlinkHref="#contact-gentle-wave" x="48" y="3" fill="rgba(30,144,255,0.5)" />
              <use xlinkHref="#contact-gentle-wave" x="48" y="5" fill="rgba(30,144,255,0.3)" />
              <use xlinkHref="#contact-gentle-wave" x="48" y="7" fill="dodgerblue" />
            </g>
          </svg>
        </div>

        {/* Underwater footer */}
        <div className="contact-underwater-bg">
          <div className="contact-copyright-footer">
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

export default ContactPage;
