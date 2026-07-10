'use client';

import { useEffect, useRef } from 'react';
import { ArrowUpRight, TerminalSquare, Radio, ShieldAlert } from 'lucide-react';
import { fadeUp, slideIn, staggerFadeUp } from '@/lib/animate';
import { Canvas } from '@react-three/fiber';
import RocketModelFix from "@/components/Rocketmodelfix"
import StudioLights from './three/StudioLightes';
import { Environment, Float, PresentationControls } from '@react-three/drei'

export default function HeroSection() {
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const annotationRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fadeUp(taglineRef.current, { delay: 200, duration: 700 });
    fadeUp(headingRef.current, { delay: 400, duration: 900, distance: 50 });
    fadeUp(subRef.current, { delay: 700, duration: 700 });

    if (buttonsRef.current) {
      staggerFadeUp(buttonsRef.current.children as unknown as NodeListOf<Element>, {
        distance: 20,
        duration: 600,
        startDelay: 900,
        stagger: 120,
      });
    }

    slideIn(annotationRef.current, { x: -20, delay: 1200, duration: 700 });
    slideIn(rocketRef.current, { x: 80, delay: 500, duration: 1000 });
  }, []);

  return (
    <section
      style={{
        minHeight: '100vh',
        paddingTop: 100,
        position: 'relative',
        overflow: 'hidden',
      }}
      className="select-none z-10"
    >
      {/* Background system glow */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          right: '5%',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192,38,26,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          alignItems: 'center',
          minHeight: 'calc(100vh - 100px)',
          gap: 60,
        }}
        className="hero-grid"
      >
        {/* Left Side: System Controls & Readout */}
        <div style={{ paddingTop: 20, paddingBottom: 40 }} className="font-mono">
          
          {/* Tagline / System Core Indicator */}
          <div ref={taglineRef} className="flex items-center gap-2 text-[var(--brand-red)] text-xs font-bold tracking-[0.3em] uppercase mb-6 opacity-0">
            <Radio className="h-4 w-4 animate-pulse" />
            SYS_INIT_SEQUENCE // 0.2.6
          </div>

          {/* Heading with Cyber Sub-bracketing */}
          <div style={{ position: 'relative', marginBottom: 28 }}>
            <div style={{ position: 'absolute', top: -10, left: 0, fontSize: 10, color: 'rgba(255,255,255,0.2)' }}>
              [SRC_MODULE // BRAND_BOOST]
            </div>
            <h1
              ref={headingRef}
              style={{
                fontSize: 'clamp(40px, 5vw, 72px)',
                fontWeight: 900,
                lineHeight: 1.05,
                color: '#ffffff',
                opacity: 0,
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
              }}
            >
              We Build Digital
              <br />
              Systems That
              <br />
              <span style={{ color: 'var(--brand-red)', textShadow: '0 0 20px rgba(192,38,26,0.3)' }}>Scale Brands.</span>
            </h1>
          </div>

          {/* Terminal Descriptive Text */}
          <p
            ref={subRef}
            style={{
              fontSize: 15,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.55)',
              maxWidth: 500,
              marginBottom: 40,
              opacity: 0,
              borderLeft: '2px solid var(--border)',
              paddingLeft: 16,
              fontFamily: 'var(--font-sans), sans-serif',
            }}
          >
            From strategy to execution — we craft high-performing engines, 
            optimized deployment channels, and data-driven loops engineered to capture real target traction.
          </p>

          {/* Execute Function Switches */}
          <div
            ref={buttonsRef}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              flexWrap: 'wrap',
              marginBottom: 48,
            }}
          >
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                backgroundColor: 'var(--brand-red)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: 14,
                padding: '14px 24px',
                border: 'none',
                cursor: 'pointer',
                borderRadius: 2,
                opacity: 0,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                boxShadow: '0 0 15px rgba(192,38,26,0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = 'var(--brand-red-light)';
                el.style.boxShadow = '0 0 25px rgba(192,38,26,0.6)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = 'var(--brand-red)';
                el.style.boxShadow = '0 0 15px rgba(192,38,26,0.3)';
              }}
            >
              RUN_CORE_SERVICES
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </button>

            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                backgroundColor: 'rgba(255,255,255,0.02)',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: 14,
                padding: '13px 24px',
                border: '1px solid rgba(255,255,255,0.15)',
                cursor: 'pointer',
                borderRadius: 2,
                opacity: 0,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'var(--brand-red)';
                el.style.backgroundColor = 'rgba(192,38,26,0.05)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.15)';
                el.style.backgroundColor = 'rgba(255,255,255,0.02)';
              }}
            >
              VIEW_SYSTEM_LOGS
            </button>
          </div>

          {/* Bottom Live System Metrics Panel */}
          <div
            ref={annotationRef}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 8, 
              opacity: 0, 
              border: '1px solid var(--border)',
              backgroundColor: 'rgba(0,0,0,0.3)',
              padding: '16px',
              maxWidth: 400,
              borderRadius: 4
            }}
          >
          <div className="flex w-full justify-between text-[10px] text-white/30">
            <span>TELEMETRY_LOG_FEED</span>
            <span className="animate-pulse text-[var(--brand-red)]">ONLINE</span>
          </div>
            <p
              style={{
                fontSize: 12,
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.4,
              }}
            >
              &gt; Ready to execute deployment parameters. <br />
              &gt; Status: Let&apos;s build something epic!
            </p>
          </div>
        </div>

        {/* Right Side: The Telemetry Tracking Canvas */}
        <div
          ref={rocketRef}
          style={{
            position: 'relative',
            width: '100%',
            height: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--border)',
            backgroundColor: 'rgba(0,0,0,0.2)',
            borderRadius: 6,
            boxShadow: 'inset 0 0 30px rgba(192,38,26,0.03)',
            opacity: 0,
          }}
        >
          {/* Cyber HUD Overlays directly over the Canvas */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[size:100%_4px] pointer-events-none z-20 opacity-40" />
          
          <div className="absolute top-4 left-4 font-mono text-[10px] text-white/30 z-20 flex items-center gap-2">
            <TerminalSquare className="h-3.5 w-3.5 text-[var(--brand-red)]" />
            MODEL: THRUST_ENGINE_3D
          </div>
          
          <div className="absolute bottom-4 right-4 font-mono text-[10px] text-[var(--brand-red)] z-20 tracking-widest flex items-center gap-1.5">
            <ShieldAlert className="h-3 w-3 animate-ping" />
            VECTOR_TARGET_LOCKED
          </div>

          <Canvas
            id="canvas"
            camera={{ position: [0, 0, 14], fov: 45, near: 0.1, far: 200 }}
            style={{ width: '100%', height: '100%' }}
          >
            <StudioLights />
            <Environment preset="city" />

            <PresentationControls
              global={false}
              cursor={true}
              snap={true} 
              speed={1} 
              rotation={[0, -0.6, 0]}
              polar={[-0.2, 0.2]}
              azimuth={[-Math.PI / 4, Math.PI / 4]}
            >
              <Float
                speed={2}
                rotationIntensity={0.15}
                floatIntensity={1.2}
                floatingRange={[-0.2, 0.2]}
              >
                <RocketModelFix
                  scale={6} 
                  position={[-9, -3, 0]} 
                  rotation={[0.4, 0.5, -0.8]} 
                />
              </Float>
            </PresentationControls>
          </Canvas>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}