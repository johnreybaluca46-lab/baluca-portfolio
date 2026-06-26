import { useEffect, useState } from 'react';

const PageTransition = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        const increment = Math.floor(Math.random() * 6) + 2;
        return Math.min(prev + increment, 100);
      });
    }, 40);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      {/* Animated background circles */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[
          { top: '10%', left: '5%', size: 200, dur: '12s', pulse: '4s', cls: 'circle-float-a' },
          { top: '20%', right: '10%', size: 160, dur: '16s', pulse: '5s', cls: 'circle-float-b' },
          { bottom: '30%', left: '20%', size: 280, dur: '20s', pulse: '6s', cls: 'circle-float-c' },
          { bottom: '40%', right: '15%', size: 130, dur: '14s', pulse: '4.5s', cls: 'circle-float-a' },
          { top: '5%', left: '40%', size: 240, dur: '18s', pulse: '5.5s', cls: 'circle-float-b' },
          { top: '50%', right: '5%', size: 190, dur: '13s', pulse: '4.2s', cls: 'circle-float-c' },
        ].map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-[#1e90ff]/55 filter blur-2xl ${c.cls} ${i >= 3 ? 'hidden md:block' : ''}`}
            style={{
              top: c.top,
              left: c.left,
              right: c.right,
              bottom: c.bottom,
              width: c.size,
              height: c.size,
              '--dur': c.dur,
              '--pulse': c.pulse,
            }}
          />
        ))}
      </div>

      {/* 3D Cube Spinner */}
      <div className="spinner">
        <div></div><div></div><div></div>
        <div></div><div></div><div></div>
      </div>

      {/* Progress Bar */}
      <div style={{ marginTop: '3rem', width: '20rem' }}>
        <div style={{ width: '100%', height: '8px', backgroundColor: '#e5e7eb', borderRadius: '9999px', overflow: 'hidden' }}>
          <div
            style={{
              height: '100%',
              backgroundColor: '#1e90ff',
              borderRadius: '9999px',
              width: `${progress}%`,
              transition: 'width 80ms linear',
            }}
          />
        </div>
        <p style={{ marginTop: '0.75rem', textAlign: 'center', color: '#1e90ff', fontWeight: 'bold', fontSize: '1.1rem', letterSpacing: '0.15em' }}>
          {progress}%
        </p>
      </div>
    </div>
  );
};

export default PageTransition;
