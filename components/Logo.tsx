'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Logo() {
  const [typedText, setTypedText] = useState({ line1: '', line2: '', line3: '' });
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const l1 = "THE CREW";
    const l2 = "HOUSE";
    const l3 = "MEDIA";
    const totalLength = l1.length + l2.length + l3.length;
    let currentStep = 0;

    // Terminal typing effect logic
    const typingInterval = setInterval(() => {
      if (currentStep <= l1.length) {
        setTypedText((prev) => ({ ...prev, line1: l1.slice(0, currentStep) }));
      } else if (currentStep <= l1.length + l2.length) {
        setTypedText((prev) => ({ ...prev, line2: l2.slice(0, currentStep - l1.length) }));
      } else if (currentStep <= totalLength) {
        setTypedText((prev) => ({ ...prev, line3: l3.slice(0, currentStep - l1.length - l2.length) }));
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
      currentStep++;
    }, 60); // Adjust typing speed here (lower is faster)

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="flex items-center gap-4 group cursor-pointer select-none">
      
      {/* System Style Image Wrapper */}
      <div className="relative flex items-center justify-center">
        {/* Tech brackets around the logo mark */}
        <div className="absolute -left-1 top-0 bottom-0 w-[2px] bg-[var(--brand-red)] opacity-50 group-hover:opacity-100 transition-opacity" />
        <div className="absolute -right-1 top-0 bottom-0 w-[2px] bg-[var(--brand-red)] opacity-50 group-hover:opacity-100 transition-opacity" />
        
        <div className="relative border border-[var(--border)] bg-black/40 p-1 transition-colors group-hover:border-[var(--brand-red)]/50">
          <Image
            src="/img/logo.jpeg"
            alt="Crew House Media Logo"
            width={48}
            height={48}
            style={{ objectFit: 'contain' }}
            className="opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </div>

      {/* Terminal Animated Text */}
      <div className="leading-[1.2] font-mono flex flex-col">
        {/* Micro-header */}
        <div className="text-[8px] text-[var(--brand-red)] tracking-[0.2em] mb-1 opacity-60 flex items-center gap-1">
          <span className="inline-block w-1 h-1 bg-[var(--brand-red)] rounded-full animate-pulse" />
          SYS_ID: CHM-01
        </div>

        {/* Line 1 */}
        <div className="font-bold text-[13px] md:text-[14px] tracking-[0.15em] text-white group-hover:text-[var(--brand-red)] transition-colors">
          {typedText.line1}
          {isTyping && typedText.line1.length < 8 && <span className="text-[var(--brand-red)] animate-pulse">_</span>}
        </div>
        
        {/* Line 2 */}
        <div className="font-bold text-[13px] md:text-[14px] tracking-[0.15em] text-white group-hover:text-[var(--brand-red)] transition-colors">
          {typedText.line2}
          {isTyping && typedText.line1.length === 8 && typedText.line2.length < 5 && <span className="text-[var(--brand-red)] animate-pulse">_</span>}
        </div>
        
        {/* Line 3 */}
        <div className="font-bold text-[13px] md:text-[14px] tracking-[0.15em] text-white group-hover:text-[var(--brand-red)] transition-colors">
          {typedText.line3}
          {/* Persistent blinking cursor at the end once typing finishes */}
          {(!isTyping || (typedText.line2.length === 5 && typedText.line3.length <= 5)) && (
            <span className="text-[var(--brand-red)] animate-pulse ml-0.5">_</span>
          )}
        </div>
      </div>
      
    </div>
  );
}