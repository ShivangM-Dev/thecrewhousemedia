'use client';

import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { fadeUp, slideIn, staggerFadeUp } from '@/lib/animate';
import { Canvas } from '@react-three/fiber';
import RocketModel from "@/components/Rocket"
import StudioLights from './three/StudioLightes';
import { Environment, Float, PresentationControls } from '@react-three/drei'

export default function HeroSection() {
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const annotationRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);

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

    if (ringsRef.current) {
      staggerFadeUp(ringsRef.current.children as unknown as NodeListOf<Element>, {
        distance: 0,
        duration: 800,
        startDelay: 600,
        stagger: 150,
      });
    }
  }, []);

  return (
    <section
      style={{
        minHeight: '100vh',
        paddingTop: 80,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(192,38,26,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          minHeight: 'calc(100vh - 80px)',
          gap: 40,
        }}
        className="hero-grid"
      >
        {/* Left content */}
        <div style={{ paddingTop: 40, paddingBottom: 40 }}>
          <p
            ref={taglineRef}
            style={{
              color: 'var(--brand-red)',
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: 24,
              opacity: 0,
            }}
          >
            BUILD. GROW. SCALE.
          </p>

          <h1
            ref={headingRef}
            style={{
              fontSize: 'clamp(46px, 5.5vw, 78px)',
              fontWeight: 900,
              lineHeight: 1.05,
              color: '#ffffff',
              marginBottom: 28,
              opacity: 0,
              letterSpacing: '-0.02em',
            }}
          >
            We Build Digital
            <br />
            Systems That
            <br />
            <span style={{ color: 'var(--brand-red)' }}>Scale Brands.</span>
          </h1>

          <p
            ref={subRef}
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.65)',
              maxWidth: 460,
              marginBottom: 44,
              opacity: 0,
            }}
          >
            From strategy to execution — we craft high-performing websites,
            powerful content, and data-driven campaigns that deliver real growth.
          </p>

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
                fontSize: 15,
                padding: '15px 28px',
                border: 'none',
                cursor: 'pointer',
                borderRadius: 4,
                opacity: 0,
                transition:
                  'background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = 'var(--brand-red-light)';
                el.style.transform = 'translateY(-2px)';
                el.style.boxShadow = '0 8px 24px rgba(192,38,26,0.4)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = 'var(--brand-red)';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
              }}
            >
              Explore Services
              <ArrowUpRight size={17} strokeWidth={2.5} />
            </button>

            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                backgroundColor: 'transparent',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: 15,
                padding: '14px 28px',
                border: '1.5px solid rgba(255,255,255,0.25)',
                cursor: 'pointer',
                borderRadius: 4,
                opacity: 0,
                transition:
                  'border-color 0.2s ease, transform 0.2s ease, background-color 0.2s ease',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.6)';
                el.style.backgroundColor = 'rgba(255,255,255,0.05)';
                el.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.25)';
                el.style.backgroundColor = 'transparent';
                el.style.transform = 'translateY(0)';
              }}
            >
              See Our Work
            </button>
          </div>

          {/* Handwritten annotation */}
          <div
            ref={annotationRef}
            style={{ display: 'flex', alignItems: 'center', gap: 16, opacity: 0 }}
          >
            <svg
              width="56"
              height="44"
              viewBox="0 0 56 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ flexShrink: 0 }}
            >
              <path
                d="M4 4C8 16 28 20 44 12"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M40 8L44 12L38 14"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p
              style={{
                fontFamily: 'var(--font-dancing)',
                fontSize: 22,
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.3,
              }}
            >
              Let&apos;s build
              <br />
              something epic!
            </p>
          </div>
        </div>

 {/* Right: Rocket */}
       {/* Right: Rocket */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Canvas
            id="canvas"
            // Re-added the Z-position for the camera (was missing a number in your snippet)
            camera={{ position: [0, 0, 14], fov:45, near: 0.1, far: 200 }}
            style={{ width: '100%', height: '100%' }}
          >
            <StudioLights />
            <Environment preset="city" />

            <PresentationControls
              global={false}
              cursor={true}
              snap={true} 
              speed={1} 
              // Changed the default viewing angle so it faces left/forward slightly
              rotation={[0, -0.6, 0]} 
              polar={[-0.2, 0.2]}
              azimuth={[-Math.PI / 4, Math.PI / 4]}
            >
              <Float
                speed={2}
                rotationIntensity={0.2} // Lowered slightly so the tilt stays prominent
                floatIntensity={1.5}
                floatingRange={[-0.2, 0.2]}
              >
                <RocketModel
                  scale={6} // Slightly increased to fill the space well
                  // Moved it slightly right (X) and down (Y) to match the composition
                  position={[-9, -3, 0]} 
                  // The magic numbers to match your reference image:
                  // X: Tilts it forward/back
                  // Y: Rotates the logo to face the camera
                  // Z: Gives it that severe "launching up and to the right" tilt
                  rotation={[0.4, 0.5, -0.8]} 
                />
              </Float>
            </PresentationControls>
          </Canvas>
        </div>
      
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
