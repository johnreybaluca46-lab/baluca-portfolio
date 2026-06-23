import { useEffect, useState } from 'react';
import logoImg from '../../assets/logo/Baluca-portpolio logo.png';

const SplashScreen = ({ onComplete }) => {
  const [mounted, setMounted] = useState(false);
  const [entering, setEntering] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (entering) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            // Call onComplete after a short delay so the user sees 100%
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 600);
            return 100;
          }
          // Dynamic realistic progress increment
          const increment = Math.floor(Math.random() * 4) + 1;
          return Math.min(prev + increment, 100);
        });
      }, 60);
      return () => clearInterval(timer);
    }
  }, [entering, onComplete]);

  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">

      {/* Animated Background Floating Circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Circle 1 */}
        <div
          className="absolute rounded-full bg-[#1e90ff]/60 filter blur-2xl circle-float-a"
          style={{
            top: '12%',
            left: '8%',
            width: '240px',
            height: '240px',
            '--dur': '12s',
            '--pulse': '4s',
          }}
        />
        {/* Circle 2 */}
        <div
          className="absolute rounded-full bg-[#1e90ff]/65 filter blur-xl circle-float-b"
          style={{
            top: '25%',
            right: '12%',
            width: '180px',
            height: '180px',
            '--dur': '16s',
            '--pulse': '5s',
          }}
        />
        {/* Circle 3 */}
        <div
          className="absolute rounded-full bg-[#1e90ff]/55 filter blur-3xl circle-float-c"
          style={{
            bottom: '38%',
            left: '22%',
            width: '320px',
            height: '320px',
            '--dur': '20s',
            '--pulse': '6s',
          }}
        />
        {/* Circle 4 */}
        <div
          className="absolute rounded-full bg-[#1e90ff]/60 filter blur-xl circle-float-a"
          style={{
            bottom: '45%',
            right: '18%',
            width: '150px',
            height: '150px',
            '--dur': '14s',
            '--pulse': '4.5s',
          }}
        />
        {/* Circle 5 */}
        <div
          className="absolute rounded-full bg-[#1e90ff]/55 filter blur-3xl circle-float-b"
          style={{
            top: '8%',
            left: '45%',
            width: '280px',
            height: '280px',
            '--dur': '18s',
            '--pulse': '5.5s',
          }}
        />
        {/* Circle 6 */}
        <div
          className="absolute rounded-full bg-[#1e90ff]/60 filter blur-2xl circle-float-c"
          style={{
            top: '55%',
            left: '5%',
            width: '120px',
            height: '120px',
            '--dur': '10s',
            '--pulse': '3.5s',
          }}
        />
        {/* Circle 7 */}
        <div
          className="absolute rounded-full bg-[#1e90ff]/55 filter blur-2xl circle-float-a"
          style={{
            top: '40%',
            right: '35%',
            width: '200px',
            height: '200px',
            '--dur': '15s',
            '--pulse': '4.8s',
          }}
        />
        {/* Circle 8 */}
        <div
          className="absolute rounded-full bg-[#1e90ff]/50 filter blur-xl circle-float-b"
          style={{
            bottom: '20%',
            left: '45%',
            width: '160px',
            height: '160px',
            '--dur': '17s',
            '--pulse': '5.2s',
          }}
        />
        {/* Circle 9 */}
        <div
          className="absolute rounded-full bg-[#1e90ff]/50 filter blur-2xl circle-float-c"
          style={{
            top: '45%',
            left: '30%',
            width: '140px',
            height: '140px',
            '--dur': '19s',
            '--pulse': '5.8s',
          }}
        />
        {/* Circle 10 */}
        <div
          className="absolute rounded-full bg-[#1e90ff]/60 filter blur-3xl circle-float-a"
          style={{
            top: '60%',
            right: '8%',
            width: '220px',
            height: '220px',
            '--dur': '13s',
            '--pulse': '4.2s',
          }}
        />
      </div>

      {/* Logo + Text centered in white area above wave */}
      <div
        className={`absolute inset-0 z-10 flex flex-col items-center justify-center transition-all duration-700 ease-out transform ${entering
            ? '-translate-y-8 opacity-0 scale-95'
            : mounted
              ? 'translate-y-0 opacity-100 scale-100'
              : 'translate-y-10 opacity-0 scale-95'
          } px-4`}
        style={{ marginBottom: '25vh' }}
      >
        <img
          src={logoImg}
          alt="Baluca Portfolio Logo"
          className="relative z-10 w-24 sm:w-32 md:w-48 lg:w-64 object-contain drop-shadow-xl"
        />

        {/* Typography */}
        <h1 className="mt-3 text-xl sm:text-3xl md:text-5xl font-extrabold tracking-wide flex items-center justify-center">
          <span className="text-[#1e90ff]">BALUCA</span>
          <span className="text-black ml-2">PORTFOLIO</span>
        </h1>

        {/* Decorative Line under text */}
        <div className="relative flex items-center justify-center w-[80%] max-w-xs mt-3">
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#1e90ff] to-transparent opacity-80"></div>
          <div className="absolute w-2 h-2 bg-[#1e90ff] rounded-full shadow-[0_0_5px_#1e90ff]"></div>
        </div>

        {/* ENTER Button */}
        <button
          onClick={() => setEntering(true)}
          className={`enter-btn mt-6 w-48 sm:w-72 md:w-80 h-12 sm:h-14 md:h-16 shadow-lg ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          style={{ transitionDelay: '400ms' }}
        >
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
            <span>ENTER</span>
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
      </div>

      {/* Decorative Bottom Wave - slides down on enter */}
      <div
        className={`absolute bottom-0 left-0 w-full overflow-hidden transition-all duration-700 ease-in ${entering ? 'translate-y-full opacity-0' : mounted ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        style={{ height: '35vh', minHeight: '180px', marginBottom: '-7px' }}
      >
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
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

        {/* Copyright Footer */}
        <div className="absolute bottom-4 w-full text-center text-white/90 font-['Poppins'] font-semibold text-xs sm:text-sm tracking-wide sm:tracking-widest z-10 px-2">
          &copy; 2026 All Rights Reserved. Baluca Johnrey
        </div>
      </div>

      {/* Loading Screen Overlay */}
      <div
        className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-white transition-all duration-700 ${entering ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        style={{ transitionDelay: entering ? '300ms' : '0ms' }}
      >
        {/* 3D Cube Spinner */}
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Progress Bar */}
        <div className="mt-12 w-64 sm:w-80">
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#1e90ff] rounded-full transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-3 text-center text-[#1e90ff] font-bold text-lg tracking-widest">
            {progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
