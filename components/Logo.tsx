'use client';

import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Red square logo mark */}
      {/* <div
        className="relative flex-shrink-0"
        style={{
          width: 52,
          height: 52,
          backgroundColor: 'var(--brand-red)',
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      > */}
        {/* CH monogram */}
        
      {/* </div> */}

      <div>
        <Image
            src="/img/logo.jpeg"
            alt="Crew House Media Logo"
            width={52}
            height={52}
            style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Text */}
      <div className="leading-none">
        <div
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 800,
            fontSize: 14,
            letterSpacing: '0.12em',
            color: '#ffffff',
            lineHeight: 1.25,
          }}
        >
           THE CREW
        </div>
        <div
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 800,
            fontSize: 14,
            letterSpacing: '0.12em',
            color: '#ffffff',
            lineHeight: 1.25,
          }}
        >
          HOUSE
        </div>
        <div
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 800,
            fontSize: 14,
            letterSpacing: '0.12em',
            color: '#ffffff',
            lineHeight: 1.25,
          }}
        >
          MEDIA
        </div>
      </div>
    </div>
  );
}
