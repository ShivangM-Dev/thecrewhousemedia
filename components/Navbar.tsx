'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X, Radio } from 'lucide-react';
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

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle initial entrance animations
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

    if (ctaRef.current) {
      slideIn(ctaRef.current, { x: 30, delay: 700, duration: 700 });
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 inset-x-0 z-50 select-none font-mono opacity-0 transition-all duration-300 ease-out ${
        scrolled
          ? 'bg-[#080808]/80 backdrop-blur-md border-b border-[var(--border)]'
          : 'bg-transparent border-b border-white/10'
      }`}
    >
      {/* Laser Top Indicator Line */}
      <div
        className={`h-[2px] bg-[var(--brand-red)] transition-all duration-500 ease-in-out shadow-[0_0_10px_var(--brand-red)] ${
          scrolled ? 'w-full' : 'w-0'
        }`}
      />

      <div className="max-w-[1320px] mx-auto px-6 h-20 flex items-center justify-between">
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
        <div ref={linksRef} className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.label} className="nav-link-item opacity-0 flex items-center gap-1.5 group">
              <span className="text-[9px] text-white/20 group-hover:text-[var(--brand-red)] transition-colors">
                {link.id.split('-')[1]}
              </span>
              <a
                href={link.href}
                className="text-white/60 text-[14px] font-semibold tracking-wider uppercase no-underline transition-all duration-200 group-hover:text-[var(--brand-red)] group-hover:drop-shadow-[0_0_8px_rgba(192,38,26,0.5)]"
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
            className="hidden md:flex items-center gap-2 bg-[var(--brand-red)]/10 text-white font-bold text-[13px] tracking-[0.08em] px-5 py-2.5 border border-[var(--brand-red)] rounded-sm uppercase opacity-0 shadow-[0_0_15px_rgba(192,38,26,0.15)] transition-all duration-300 ease-out hover:bg-[var(--brand-red)] hover:shadow-[0_0_25px_rgba(192,38,26,0.5)] group"
          >
            INIT_GROWTH
            <ArrowUpRight
              size={15}
              strokeWidth={2.5}
              className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
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

      {/* Mobile Telemetry Matrix Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#080808]/95 backdrop-blur-xl border-t border-[var(--border)] overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="px-6 flex flex-col gap-5">
          <div className="flex items-center gap-2 text-[10px] text-white/30 tracking-widest border-b border-[var(--border)] pb-2 mb-2">
            <Radio className="h-3.5 w-3.5 text-[var(--brand-red)] animate-pulse" />
            MOBILE_ROUTING_LAYER
          </div>

          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="flex justify-between items-center text-white/70 text-base font-semibold uppercase tracking-wider no-underline hover:text-[var(--brand-red)] transition-colors py-1"
              onClick={() => setMobileOpen(false)}
            >
              <span>{link.label}</span>
              <span className="text-xs text-white/20 font-mono">
                [0{i + 1}]
              </span>
            </a>
          ))}

          <button className="flex items-center justify-center gap-2 mt-4 bg-[var(--brand-red)] text-white font-bold text-[14px] px-6 py-3 rounded-sm w-full tracking-[0.08em] uppercase shadow-[0_0_15px_rgba(192,38,26,0.3)] transition-colors hover:bg-[var(--brand-red)]/80">
            INIT_GROWTH
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </nav>
  );
}