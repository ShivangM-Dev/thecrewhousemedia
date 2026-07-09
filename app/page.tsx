import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BottomSection from '@/components/BottomSection';
import ServicesSection from '@/components/Services';

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--background)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* =========================================
          TRON IMMERSIVE BACKGROUND SYSTEM
      ========================================= */}
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* 1. Circuit Matrix (Faint top pattern) */}
        <div 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            opacity: 0.15, 
            backgroundImage: 'radial-gradient(rgba(192, 38, 26, 0.8) 1px, transparent 1px)', 
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 50%)'
          }} 
        />

        {/* 2. Cascading Data Streams (Styles in globals.css) */}
        <div className="data-stream" style={{ left: '15%', animationDelay: '0s', animationDuration: '4s' }} />
        <div className="data-stream" style={{ left: '35%', animationDelay: '2s', animationDuration: '5s' }} />
        <div className="data-stream" style={{ left: '65%', animationDelay: '1s', animationDuration: '3.5s' }} />
        <div className="data-stream" style={{ left: '85%', animationDelay: '3s', animationDuration: '6s' }} />

        {/* 3. Horizon Fade Mask (Blends grid into the dark background) */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 10,
            background: 'linear-gradient(to bottom, var(--background) 15%, transparent 55%, var(--background) 95%)',
          }} 
        />

        {/* 4. The Animated 3D Perspective Grid */}
        <div
          style={{
            position: 'absolute',
            bottom: '-40%',
            left: '-50%', // Centers the over-sized grid
            width: '200vw',
            height: '100vh',
            backgroundImage: `
              linear-gradient(rgba(192, 38, 26, 0.35) 1px, transparent 1px), 
              linear-gradient(90deg, rgba(192, 38, 26, 0.35) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'perspective(600px) rotateX(75deg)',
            transformOrigin: 'top center',
            animation: 'tron-scroll 2s linear infinite', /* Animation in globals.css */
          }}
        />

        {/* 5. Floating Neon Geometry (Styles in globals.css) */}
        <div className="floating-shape" style={{ top: '25%', left: '12%', width: '40px', height: '40px', animationDelay: '0s' }} />
        <div className="floating-shape" style={{ top: '45%', left: '82%', width: '70px', height: '70px', animationDelay: '1.5s' }} />
        <div className="floating-shape" style={{ top: '15%', left: '65%', width: '25px', height: '25px', animationDelay: '3s' }} />
      </div>

      {/* =========================================
          PAGE CONTENT
      ========================================= */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <HeroSection />
        </div>
        
        <BottomSection />
        <ServicesSection />
      </div>
    </main>
  );
}