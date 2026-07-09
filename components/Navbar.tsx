'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { fadeUp, slideIn, staggerFadeUp } from '@/lib/animate';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About Us', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
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
    // Navbar slide down
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

    // Nav links stagger
    if (linksRef.current) {
      staggerFadeUp(linksRef.current.querySelectorAll('a'), {
        distance: 20,
        duration: 600,
        startDelay: 300,
        stagger: 80,
      });
    }

    // CTA slide in from right
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
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
        backgroundColor: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
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
        <Logo />

        {/* Desktop links */}
        <div
          ref={linksRef}
          style={{ display: 'flex', alignItems: 'center', gap: 40 }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: 15,
                fontWeight: 500,
                textDecoration: 'none',
                letterSpacing: '0.01em',
                transition: 'color 0.2s ease',
                opacity: 0,
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = '#ffffff')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  'rgba(255,255,255,0.85)')
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button
          ref={ctaRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            backgroundColor: 'var(--brand-red)',
            color: '#ffffff',
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: '0.02em',
            padding: '13px 24px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: 4,
            opacity: 0,
            transition: 'background-color 0.2s ease, transform 0.2s ease',
          }}
          className="hidden md:flex"
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.backgroundColor = 'var(--brand-red-light)';
            el.style.transform = 'scale(1.03)';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.backgroundColor = 'var(--brand-red)';
            el.style.transform = 'scale(1)';
          }}
        >
          Let&apos;s Grow
          <ArrowUpRight size={17} strokeWidth={2.5} />
        </button>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden"
          style={{
            background: 'transparent',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            padding: 8,
          }}
          onClick={() => setMobileOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: '#0e0e0e',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}
          className="md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: 18,
                fontWeight: 500,
                textDecoration: 'none',
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              backgroundColor: 'var(--brand-red)',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: 16,
              padding: '14px 24px',
              border: 'none',
              cursor: 'pointer',
              borderRadius: 4,
              width: 'fit-content',
            }}
          >
            Let&apos;s Grow
            <ArrowUpRight size={18} strokeWidth={2.5} />
          </button>
        </div>
      )}
    </nav>
  );
}
