// easeOutExpo approximation via CSS cubic-bezier
export const EASE_OUT_EXPO = 'cubic-bezier(0.16, 1, 0.3, 1)';
export const EASE_OUT_QUART = 'cubic-bezier(0.25, 1, 0.5, 1)';

interface FadeUpOptions {
  delay?: number;
  duration?: number;
  distance?: number;
  easing?: string;
}

export function fadeUp(el: Element | null, opts: FadeUpOptions = {}) {
  if (!el) return;
  const {
    delay = 0,
    duration = 700,
    distance = 30,
    easing = EASE_OUT_EXPO,
  } = opts;

  (el as HTMLElement).style.opacity = '0';
  el.animate(
    [
      { transform: `translateY(${distance}px)`, opacity: 0 },
      { transform: 'translateY(0)', opacity: 1 },
    ],
    { duration, delay, fill: 'forwards', easing }
  );
}

export function fadeIn(el: Element | null, opts: { delay?: number; duration?: number } = {}) {
  if (!el) return;
  const { delay = 0, duration = 600 } = opts;
  (el as HTMLElement).style.opacity = '0';
  el.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration,
    delay,
    fill: 'forwards',
    easing: EASE_OUT_EXPO,
  });
}

export function slideIn(
  el: Element | null,
  opts: { delay?: number; duration?: number; x?: number; y?: number } = {}
) {
  if (!el) return;
  const { delay = 0, duration = 700, x = 0, y = 0 } = opts;
  (el as HTMLElement).style.opacity = '0';
  el.animate(
    [
      { transform: `translate(${x}px, ${y}px)`, opacity: 0 },
      { transform: 'translate(0, 0)', opacity: 1 },
    ],
    { duration, delay, fill: 'forwards', easing: EASE_OUT_EXPO }
  );
}

export function staggerFadeUp(
  els: NodeListOf<Element> | Element[],
  opts: FadeUpOptions & { startDelay?: number; stagger?: number } = {}
) {
  const { startDelay = 0, stagger = 80, ...rest } = opts;
  Array.from(els).forEach((el, i) => {
    fadeUp(el, { ...rest, delay: startDelay + i * stagger });
  });
}

export function countUp(
  el: HTMLElement | null,
  target: number,
  opts: { duration?: number; delay?: number } = {}
) {
  if (!el) return;
  const { duration = 2000, delay = 0 } = opts;
  let start: number | null = null;
  const startVal = 0;

  const step = (timestamp: number) => {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    // easeOutExpo
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    el.textContent = Math.floor(startVal + eased * (target - startVal)).toString();
    if (progress < 1) requestAnimationFrame(step);
  };

  setTimeout(() => requestAnimationFrame(step), delay);
}
