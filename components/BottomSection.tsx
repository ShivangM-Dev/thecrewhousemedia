'use client';

import { useEffect, useRef } from 'react';
import { slideIn, staggerFadeUp, countUp } from '@/lib/animate';

const stats = [
  { value: 150, suffix: '+', label: 'Brands Scaled' },
  { value: 50, suffix: 'Cr+', label: 'Revenue Generated' },
  { value: 100, suffix: 'Cr+', label: 'Ad Spend Managed' },
  { value: 8, suffix: '+', label: 'Years of Growth' },
];

const brands = ['boAt', 'mamaearth', 'cult.fit', 'The Man Company', 'SUGAR'];

export default function BottomSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const brandContainerRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;

          // Section slide up
          slideIn(sectionRef.current, { y: 50, duration: 800 });

          // Count up each stat
          stats.forEach((stat, i) => {
            countUp(countersRef.current[i], stat.value, {
              duration: 2000,
              delay: 200 + i * 150,
            });
          });

          // Brand logos stagger
          if (brandContainerRef.current) {
            staggerFadeUp(
              brandContainerRef.current.querySelectorAll('.brand-logo'),
              { distance: 16, duration: 500, startDelay: 600, stagger: 80 }
            );
          }
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        backgroundColor: '#0e0e0e',
        borderRadius: '16px 16px 0 0',
        border: '1px solid rgba(255,255,255,0.07)',
        borderBottom: 'none',
        opacity: 0,
        marginTop: -2,
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '40px 24px',
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 0,
        }}
        className="bottom-inner"
      >
        {/* Stats */}
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              padding: '0 32px',
              borderRight: '1px solid rgba(255,255,255,0.08)',
            }}
            className="stat-item"
          >
            <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 6 }}>
              <span
                ref={(el) => { countersRef.current[i] = el; }}
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 46px)',
                  fontWeight: 800,
                  color: 'var(--brand-red)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                0
              </span>
              <span
                style={{
                  fontSize: 'clamp(20px, 2.5vw, 32px)',
                  fontWeight: 800,
                  color: 'var(--brand-red)',
                  lineHeight: 1,
                }}
              >
                {stat.suffix}
              </span>
            </div>
            <p
              style={{
                fontSize: 13,
                color: 'rgba(255,255,255,0.5)',
                fontWeight: 500,
                letterSpacing: '0.02em',
                margin: 0,
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}

        {/* Trusted by */}
        <div
          style={{
            padding: '0 32px',
            borderRight: '1px solid rgba(255,255,255,0.08)',
          }}
          className="stat-item"
        >
          <p
            style={{
              fontSize: 13,
              color: 'rgba(255,255,255,0.4)',
              fontWeight: 500,
              letterSpacing: '0.05em',
              lineHeight: 1.5,
              margin: 0,
              textTransform: 'uppercase',
            }}
          >
            Trusted by
            <br />
            ambitious brands
          </p>
        </div>

        {/* Brand logos */}
        <div
          ref={brandContainerRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 36,
            paddingLeft: 32,
            flexWrap: 'wrap',
            flex: 1,
          }}
        >
          {brands.map((brand) => (
            <span
              key={brand}
              className="brand-logo"
              style={{
                fontWeight: brand === 'boAt' || brand === 'SUGAR' ? 900 : 700,
                fontSize:
                  brand === 'boAt' || brand === 'SUGAR'
                    ? 22
                    : brand === 'The Man Company'
                    ? 11
                    : 15,
                letterSpacing:
                  brand === 'The Man Company'
                    ? '0.1em'
                    : brand === 'SUGAR'
                    ? '0.08em'
                    : '0',
                color: 'rgba(255,255,255,0.5)',
                opacity: 0,
                cursor: 'default',
                userSelect: 'none',
                transition: 'color 0.2s ease',
                textTransform: brand === 'The Man Company' ? 'uppercase' : 'none',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.9)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)';
              }}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .bottom-inner {
            gap: 24px 0 !important;
          }
          .stat-item {
            padding: 0 16px !important;
          }
        }
        @media (max-width: 600px) {
          .bottom-inner {
            flex-wrap: wrap !important;
          }
          .stat-item {
            min-width: 50% !important;
            padding: 12px 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
