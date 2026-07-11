import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BottomSection from '@/components/BottomSection';
import ServicesSection from '@/components/Services';
import OurWork from '@/components/OurWork';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col relative overflow-hidden">
      
      {/* =========================================
          TRON IMMERSIVE BACKGROUND SYSTEM
      ========================================= */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        
        {/* 1. Circuit Matrix */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{ 
            backgroundImage: 'radial-gradient(rgba(192, 38, 26, 0.8) 1px, transparent 1px)', 
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 50%)'
          }} 
        />

        {/* 2. Cascading Data Streams */}
        <div className="data-stream left-[15%] animation-delay-0 duration-[4s]" />
        <div className="data-stream left-[35%] animation-delay-2s duration-[5s]" />
        <div className="data-stream left-[65%] animation-delay-1s duration-[3.5s]" />
        <div className="data-stream left-[85%] animation-delay-3s duration-[6s]" />

        {/* 3. Horizon Fade Mask */}
        <div className="absolute inset-0 z-10 bg-linear-to-b from-[var(--background)] via-transparent to-[var(--background)]" />

        {/* 4. The Animated 3D Perspective Grid */}
        <div
          className="absolute bottom-[-40%] left-[-50%] w-[200vw] h-[100vh] animate-[tron-scroll_2s_linear_infinite]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(192, 38, 26, 0.35) 1px, transparent 1px), 
              linear-gradient(90deg, rgba(192, 38, 26, 0.35) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'perspective(600px) rotateX(75deg)',
            transformOrigin: 'top center',
          }}
        />

        {/* 5. Floating Neon Geometry */}
        <div className="floating-shape top-[25%] left-[12%] w-10 h-10 animation-delay-0" />
        <div className="floating-shape top-[45%] left-[82%] w-[70px] h-[70px] animation-delay-[1.5s]" />
        <div className="floating-shape top-[15%] left-[65%] w-[25px] h-[25px] animation-delay-[3s]" />
      </div>

      {/* =========================================
          PAGE CONTENT
      ========================================= */}
      <div className="relative z-10 flex flex-col flex-1 w-full">
        <Navbar />
        <div className="flex-1 w-full">
          <HeroSection />
        </div>
        
        <BottomSection />
        <ServicesSection />
        <OurWork/>
      </div>
    </main>
  );
}