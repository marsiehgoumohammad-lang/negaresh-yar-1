'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
  isGold: boolean;
}

function NavigationProgressReset({
  onReset,
}: {
  onReset: () => void;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    onReset();
  }, [pathname, searchParams, onReset]);

  return null;
}

export function TouchFeedbackProvider({ children }: { children: React.ReactNode }) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [navigating, setNavigating] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  const handleResetNavigation = React.useCallback(() => {
    setNavigating(false);
    setProgress(100);
    const timer = setTimeout(() => setProgress(0), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let nextId = 0;

    const handleTouchStart = (e: TouchEvent | PointerEvent) => {
      // Only trigger on primary touch/pointer
      if ('button' in e && e.button !== 0 && e.button !== undefined) return;

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check if touch target is interactive or inside an interactive container
      const interactiveEl = target.closest(
        'button, a, input, select, textarea, [role="button"], [onClick], .cursor-pointer, summary, label, [tabindex]'
      );

      const isInteractive = Boolean(interactiveEl);

      // Get touch/pointer coordinates
      let clientX = 0;
      let clientY = 0;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = (e as PointerEvent).clientX;
        clientY = (e as PointerEvent).clientY;
      }

      if (clientX === 0 && clientY === 0) return;

      // Determine size & color based on target
      const isGold = Boolean(
        interactiveEl &&
          (interactiveEl.classList.contains('bg-[#E5C158]') ||
            interactiveEl.classList.contains('text-[#E5C158]') ||
            interactiveEl.closest('header') ||
            interactiveEl.closest('.gold-accent'))
      );

      const rippleSize = isInteractive ? 54 : 36;
      const id = ++nextId;

      setRipples((prev) => [
        ...prev.slice(-5), // Keep max 6 active ripples for performance
        { id, x: clientX, y: clientY, size: rippleSize, isGold },
      ]);

      // Remove ripple after animation completes (380ms)
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 380);

      // If tapping a Link to navigate, trigger instant top bar loader feedback
      if (interactiveEl && interactiveEl.tagName === 'A') {
        const href = interactiveEl.getAttribute('href');
        if (
          href &&
          href.startsWith('/') &&
          !href.startsWith('#') &&
          href !== pathname
        ) {
          setNavigating(true);
          setProgress(25);
          setTimeout(() => setProgress((p) => (p > 0 && p < 80 ? 65 : p)), 100);
          setTimeout(() => setProgress((p) => (p > 0 && p < 90 ? 85 : p)), 300);
        }
      }
    };

    // Use passive listener for touchstart to prevent scroll blocking
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('pointerdown', handleTouchStart, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('pointerdown', handleTouchStart);
    };
  }, [pathname]);

  return (
    <>
      <Suspense fallback={null}>
        <NavigationProgressReset onReset={handleResetNavigation} />
      </Suspense>

      {/* Top Page Touch/Navigation Progress Bar */}
      {(navigating || progress > 0) && (
        <div
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-slate-800/40 pointer-events-none overflow-hidden"
        >
          <div
            className="h-full bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#3B82F6] shadow-[0_0_10px_rgba(229,193,88,0.8)] transition-all duration-200 ease-out"
            style={{
              width: `${progress}%`,
              opacity: progress === 100 ? 0 : 1,
            }}
          />
        </div>
      )}

      {/* Touch Graphic Ripples Layer */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
      >
        {ripples.map((r) => (
          <span
            key={r.id}
            className={`absolute rounded-full animate-touch-ripple ${
              r.isGold
                ? 'bg-gradient-to-r from-[#E5C158]/50 to-[#D4AF37]/40 border border-[#E5C158]/60 shadow-[0_0_15px_rgba(229,193,88,0.5)]'
                : 'bg-gradient-to-r from-[#3B82F6]/40 to-[#60A5FA]/30 border border-[#60A5FA]/50 shadow-[0_0_12px_rgba(59,130,246,0.4)]'
            }`}
            style={{
              left: `${r.x}px`,
              top: `${r.y}px`,
              width: `${r.size}px`,
              height: `${r.size}px`,
              marginTop: `-${r.size / 2}px`,
              marginLeft: `-${r.size / 2}px`,
            }}
          />
        ))}
      </div>

      {children}
    </>
  );
}
