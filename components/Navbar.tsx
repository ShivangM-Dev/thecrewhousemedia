'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X, TerminalSquare, Radio } from 'lucide-react';
import Logo from './Logo';
import { slideIn, staggerFadeUp } from '@/lib/animate';

const navLinks = [
  { label: 'Home', href: '#', id: 'NAV-01' },
  { label: 'Services', href: '#services', id: 'NAV-02' },
  { label: 'Work', href: '#work', id: 'NAV-03' },
  { label: 'About Us', href: '#about', id: 'NAV-04' },
  { label: 'Blog', href: '#blog', id: 'NAV-05' },
  { label: 'Contact', href: '#contact', id: 'NAV-06' },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      navRef.current.style.opacity = '0';
      navRef.current.animate(
        [
          { transform: 'translateY(-60px)', opacity: 0 },
          { transform: 'translateY(0)', opacity: 1 },
        ],
        { duration: 800, delay: 0, fill: 'forwards', easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }
      );
    }

    if (linksRef.current) {
      staggerFadeUp(linksRef.current.querySelectorAll('.nav-link-item'), {
        distance: 20,
        duration: 600,
        startDelay: 300,
        stagger: 80,
      });
    }

    slideIn(ctaRef.current, { x: 30, delay: 700, duration: 700 });
  }, []);

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        opacity: 0,
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: scrolled ? 'rgba(8,8,8,0.75)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid rgba(38,38,38,0.2)',
      }}
      className="select-none font-mono"
    >
      {/* Laser Top Indicator Line */}
      <div 
        style={{
          height: '2px',
          width: scrolled ? '100%' : '0%',
          backgroundColor: 'var(--brand-red)',
          transition: 'width 0.5s ease',
          boxShadow: '0 0 10px var(--brand-red)',
        }} 
      />

      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '0 24px',
          height: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left Module: Branding Frame */}
        <div className="flex items-center gap-4">
          <Logo />
          <div className="hidden lg:flex flex-col border-l border-[var(--border)] pl-4 text-[9px] text-white/30 tracking-wider">
            <span>SYS_NAV_ARRAY // READY</span>
            <span className="text-[var(--brand-red)] flex items-center gap-1">
              <span className="h-1 w-1 bg-[var(--brand-red)] rounded-full animate-pulse" />
              PORTAL_ONLINE
            </span>
          </div>
        </div>

        {/* Desktop links Array */}
        <div
          ref={linksRef}
          style={{ display: 'flex', alignItems: 'center', gap: 32 }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <div key={link.label} className="nav-link-item opacity-0 flex items-center gap-1.5 group">
              <span className="text-[9px] text-white/20 group-hover:text-[var(--brand-red)] transition-colors">
                {link.id.split('-')[1]}
              </span>
              <a
                href={link.href}
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = 'var(--brand-red)';
                  el.style.textShadow = '0 0 8px rgba(192,38,26,0.5)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = 'rgba(255,255,255,0.6)';
                  el.style.textShadow = 'none';
                }}
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>

        {/* Right Module: Call to Action Execute Switch */}
        <div className="flex items-center gap-4">
          <div className="hidden xl:block text-right text-[9px] text-white/20 tracking-widest">
            [STATUS: ACTIVE] <br />
            [AUTH: GRANTED]
          </div>
          
          <button
            ref={ctaRef}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              backgroundColor: 'rgba(192,38,26,0.1)',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: '0.08em',
              padding: '10px 20px',
              border: '1px solid var(--brand-red)',
              cursor: 'pointer',
              borderRadius: 2,
              opacity: 0,
              textTransform: 'uppercase',
              boxShadow: '0 0 15px rgba(192,38,26,0.15)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="hidden md:flex group"
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = 'var(--brand-red)';
              el.style.boxShadow = '0 0 25px rgba(192,38,26,0.5)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = 'rgba(192,38,26,0.1)';
              el.style.boxShadow = '0 0 15px rgba(192,38,26,0.15)';
            }}
          >
            INIT_GROWTH
            <ArrowUpRight size={15} strokeWidth={2.5} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Mobile hamburger matrix switch */}
          <button
            className="flex md:hidden border border-[var(--border)] bg-black/40 p-2 text-white/70 hover:text-[var(--brand-red)] hover:border-[var(--brand-red)]/50 transition-colors"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Telemetry Matrix Menu */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: 'rgba(8,8,8,0.96)',
            borderTop: '1px solid var(--border)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            backdropFilter: 'blur(20px)',
          }}
          className="md:hidden"
        >
          <div className="flex items-center gap-2 text-[10px] text-white/30 tracking-widest border-b border-[var(--border)] pb-2 mb-2">
            <Radio className="h-3.5 w-3.5 text-[var(--brand-red)] animate-pulse" />
            MOBILE_ROUTING_LAYER
          </div>

          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: 16,
                fontWeight: 600,
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              className="hover:text-[var(--brand-red)] transition-colors py-1"
              onClick={() => setMobileOpen(false)}
            >
              <span>{link.label}</span>
              <span className="text-xs text-white/20 font-mono">[0{i + 1}]</span>
            </a>
          ))}

          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              backgroundColor: 'var(--brand-red)',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: 14,
              padding: '12px 24px',
              border: 'none',
              cursor: 'pointer',
              borderRadius: 2,
              width: '100%',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              boxShadow: '0 0 15px rgba(192,38,26,0.3)',
            }}
          >
            INIT_GROWTH
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </button>
        </div>
      )}
    </nav>
  );
}