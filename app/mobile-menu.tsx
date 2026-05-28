"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "./site-data";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-menu">
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={open ? "mobile-nav is-open" : "mobile-nav"} aria-label="Mobile navigation">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link className="mobile-nav-cta" href="/free-class" onClick={() => setOpen(false)}>
          Free Trial
        </Link>
      </nav>
    </div>
  );
}
