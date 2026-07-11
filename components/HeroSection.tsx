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
    <section className="relative min-h-screen pt-[100px] overflow-hidden select-none z-10">
      {/* Background system glow */}
      <div className="absolute top-[5%] right-[5%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-[radial-gradient(circle,rgba(192,38,26,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center min-h-[calc(100vh-100px)] gap-10 lg:gap-14">
        
        {/* Left Side: System Controls & Readout */}
        <div className="pt-5 pb-10 font-mono">
          
          {/* Tagline / System Core Indicator */}
          <div ref={taglineRef} className="flex items-center gap-2 text-[var(--brand-red)] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6 opacity-0">
            <Radio className="h-3.5 w-3.5 md:h-4 md:w-4 animate-pulse" />
            SYS_INIT_SEQUENCE // 0.2.6
          </div>

          {/* Heading with Cyber Sub-bracketing */}
          <div className="relative mb-7">
            <div className="absolute -top-3.5 left-0 text-[9px] md:text-[10px] text-white/30 tracking-widest">
              [SRC_MODULE // BRAND_BOOST]
            </div>
            <h1
              ref={headingRef}
              className="text-[clamp(40px,10vw,72px)] font-black leading-[1.05] text-white opacity-0 tracking-[-0.03em] uppercase"
            >
              We Build Digital
              <br />
              Systems That
              <br />
              <span className="text-[var(--brand-red)] drop-shadow-[0_0_20px_rgba(192,38,26,0.3)]">Scale Brands.</span>
            </h1>
          </div>

          {/* Terminal Descriptive Text */}
          <p
            ref={subRef}
            className="text-[14px] md:text-[15px] leading-[1.7] text-white/55 max-w-[500px] mb-10 opacity-0 border-l-2 border-[var(--border)] pl-4 font-sans"
          >
            From strategy to execution — we craft high-performing engines, 
            optimized deployment channels, and data-driven loops engineered to capture real target traction.
          </p>

          {/* Execute Function Switches */}
          <div
            ref={buttonsRef}
            className="flex items-center gap-4 flex-wrap mb-12"
          >
            <button className="flex items-center gap-2.5 bg-[var(--brand-red)] text-white font-bold text-[12px] md:text-[14px] px-5 py-3 md:px-6 md:py-3.5 rounded-sm opacity-0 tracking-[0.05em] uppercase shadow-[0_0_15px_rgba(192,38,26,0.3)] transition-all duration-300 hover:bg-[var(--brand-red-light)] hover:shadow-[0_0_25px_rgba(192,38,26,0.6)] group">
              RUN_CORE_SERVICES
              <ArrowUpRight size={15} strokeWidth={2.5} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button className="flex items-center gap-2.5 bg-white/5 text-white font-semibold text-[12px] md:text-[14px] px-5 py-3 md:px-6 md:py-3.5 border border-white/15 rounded-sm opacity-0 tracking-[0.05em] uppercase transition-all duration-300 hover:border-[var(--brand-red)] hover:bg-[var(--brand-red)]/10">
              VIEW_SYSTEM_LOGS
            </button>
          </div>

          {/* Bottom Live System Metrics Panel */}
          <div
            ref={annotationRef}
            className="flex flex-col gap-2 opacity-0 border border-[var(--border)] bg-black/30 p-4 max-w-[400px] rounded-md backdrop-blur-sm"
          >
            <div className="flex w-full justify-between text-[9px] md:text-[10px] text-white/30 tracking-widest">
              <span>TELEMETRY_LOG_FEED</span>
              <span className="animate-pulse text-[var(--brand-red)]">ONLINE</span>
            </div>
            <p className="text-[11px] md:text-[12px] text-white/70 leading-[1.4] mt-1 font-sans">
              &gt; Ready to execute deployment parameters. <br />
              &gt; Status: Let&apos;s build something epic!
            </p>
          </div>
        </div>

        {/* Right Side: The Telemetry Tracking Canvas */}
        <div
          ref={rocketRef}
          className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center border border-[var(--border)] bg-black/20 rounded-md shadow-[inset_0_0_30px_rgba(192,38,26,0.03)] opacity-0 mt-4 lg:mt-0"
        >
          {/* Cyber HUD Overlays directly over the Canvas */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[size:100%_4px] pointer-events-none z-20 opacity-40 rounded-md" />
          
          <div className="absolute top-4 left-4 font-mono text-[9px] md:text-[10px] text-white/30 z-20 flex items-center gap-2">
            <TerminalSquare className="h-3 w-3 md:h-3.5 md:w-3.5 text-[var(--brand-red)]" />
            MODEL: THRUST_ENGINE_3D
          </div>
          
          <div className="absolute bottom-4 right-4 font-mono text-[9px] md:text-[10px] text-[var(--brand-red)] z-20 tracking-widest flex items-center gap-1.5">
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
    </section>
  );
}