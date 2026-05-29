"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteInteractions() {
  const [progress, setProgress] = useState(0);
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = scrollable > 0 ? window.scrollY / scrollable : 0;

      setProgress(Math.min(1, Math.max(0, currentProgress)));
      setShowStickyCta(window.scrollY > window.innerHeight * 0.65);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>
      <Link className={showStickyCta ? "mobile-sticky-cta is-visible" : "mobile-sticky-cta"} href="/free-class">
        Book a Free Trial Class
      </Link>
    </>
  );
}

