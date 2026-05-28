import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import { footerLinks, navLinks, photos } from "./site-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Del Mar Jiu-Jitsu Club home">
        <img src="/icon.svg" alt="" />
        <span>
          <strong>Del Mar Jiu-Jitsu Club</strong>
          <small>Del Mar, CA</small>
        </span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <Link className="button button-dark" href="/free-class">
        Free Trial
      </Link>
      <MobileMenu />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="brand footer-brand" href="/">
          <img src="/icon.svg" alt="" />
          <span>
            <strong>Del Mar Jiu-Jitsu Club</strong>
            <small>More Than Jiu-Jitsu in Del Mar</small>
          </span>
        </Link>
        <p>
          Serving families from Del Mar, Carmel Valley, Solana Beach, Encinitas, and nearby San Diego communities.
        </p>
      </div>
      <nav aria-label="Footer navigation">
        {footerLinks.map((link) => (
          <Link href={link.href} key={`${link.href}-${link.label}`}>
            {link.label}
          </Link>
        ))}
      </nav>
      <div>
        <p>2120 Jimmy Durante Blvd #121<br />Del Mar, CA 92014</p>
        <a href="tel:8582658982">(858) 265-8982</a>
        <a href="mailto:info@delmarjiujitsuclub.com">info@delmarjiujitsuclub.com</a>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  image = photos.arrival
}: {
  eyebrow: string;
  title: string;
  body: string;
  image?: string;
}) {
  return (
    <section className="subpage-hero">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      <Image src={image} alt="" width={1400} height={950} priority />
    </section>
  );
}

export function CTASection({
  eyebrow = "Start here",
  title = "Start with a free trial class",
  body = "Come see if Del Mar Jiu-Jitsu Club is the right fit for your child, your teen, or yourself.",
  cta = "Book a Free Trial Class"
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  cta?: string;
}) {
  return (
    <section className="sub-cta">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
      <Link className="button button-cyan" href="/free-class">
        {cta}
      </Link>
    </section>
  );
}

export function ImagePair({ images }: { images: string[] }) {
  return (
    <div className="image-pair">
      {images.map((image) => (
        <Image src={image} alt="" width={1100} height={820} key={image} />
      ))}
    </div>
  );
}
