import Image from "next/image";
import { SiteFooter, SiteHeader } from "./site-components";
import { SiteInteractions } from "./site-interactions";
import { homePrograms, notes, photos } from "./site-data";

export default function Home() {
  return (
    <main>
      <SiteInteractions />
      <SiteHeader />
      <Hero />
      <StudioSection />
      <ProgramSection />
      <GallerySection />
      <VisitSection />
      <SiteFooter />
    </main>
  );
}

function Hero() {
  return (
    <section className="hero grid-shell" id="top">
      <div className="hero-title cell span-2">
        <p className="wordmark">Del Mar Jiu-Jitsu Club</p>
        <span className="arrow" aria-hidden="true">↘</span>
      </div>
      <div className="cell hide-mobile">
        <Image src={photos.mats} alt="" width={640} height={426} className="thumb grayscale" priority />
        <p className="caption">Inside The Club</p>
      </div>
      <div className="cell nav-list hide-mobile">
        <a href="/classes">Classes</a>
        <a href="/schedule">Schedule</a>
        <a href="/instructors">Instructors</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="cell span-2 hero-note">
        <p>A premium, family-centered Jiu-Jitsu academy in Del Mar where kids, teens, and adults build confidence, discipline, and real skill in a safe, welcoming environment.</p>
        <strong>2026</strong>
      </div>
      <div className="hero-image cell span-4">
        <Image src={photos.arrival} alt="Del Mar Jiu-Jitsu Club students and families gathered outside the academy." width={2000} height={1333} priority />
      </div>
      <div className="hero-statement cell span-2">
        <p className="eyebrow">Del Mar Jiu-Jitsu Club</p>
        <h1>More Than Jiu-Jitsu in Del Mar</h1>
        <div className="hero-actions">
          <a className="button button-cyan" href="/free-class">Book a Free Trial Class</a>
          <a className="button button-outline" href="/classes">View Programs</a>
        </div>
        <div className="stat-row">
          <div>
            <strong>75+</strong>
            <span>Weekly classes</span>
          </div>
          <span className="arrow" aria-hidden="true">↘</span>
        </div>
      </div>
    </section>
  );
}

function StudioSection() {
  return (
    <section className="split-section dark">
      <div className="section-copy">
        <p className="eyebrow">What Students Build Here</p>
        <h2>Confidence is built one class at a time.</h2>
        <p>
          Students learn to listen, move, problem-solve, handle pressure, and keep showing up. Over time, those small moments turn into confidence that parents can see and students can feel.
        </p>
      </div>
      <div className="stacked-media">
        <Image src={photos.training} alt="Students training Jiu-Jitsu on the mat." width={1386} height={924} />
        <Image src={photos.portrait} alt="A Del Mar Jiu-Jitsu Club student in training." width={1536} height={1920} />
      </div>
    </section>
  );
}

function ProgramSection() {
  return (
    <section className="programs grid-shell" id="programs">
      <div className="cell span-2">
        <p className="eyebrow">Programs</p>
        <h2>Programs for every stage of training.</h2>
      </div>
      <div className="cell span-4 intro-copy">
        <p>
          Del Mar Jiu-Jitsu Club offers kids classes, adult Jiu-Jitsu, No-Gi training, private lessons, and beginner-friendly instruction for students at every level.
        </p>
      </div>
      {homePrograms.map((program, index) => (
        <article className="program-card cell span-3" key={program.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{program.title}</h3>
          <p className="meta">{program.meta}</p>
          <p>{program.text}</p>
        </article>
      ))}
    </section>
  );
}

function GallerySection() {
  return (
    <section className="gallery dark">
      <div className="gallery-header">
        <p className="eyebrow">Life at The Club</p>
        <h2>Real training, real coaching, and a community families can trust.</h2>
      </div>
      <div className="gallery-grid">
        <Image src={photos.kids} alt="Kids from Del Mar Jiu-Jitsu Club smiling together." width={2000} height={1333} />
        <Image src={photos.gym} alt="Del Mar performance center training space." width={2000} height={1124} />
        <Image src={photos.team} alt="Del Mar Jiu-Jitsu Club team members together." width={1920} height={1280} />
        <Image src={photos.coast} alt="Coastal Del Mar scene near the academy." width={2560} height={1170} />
      </div>
    </section>
  );
}

function VisitSection() {
  return (
    <section className="visit" id="visit">
      <div className="quote">
        <span aria-hidden="true">“</span>
        <h2>Learn Jiu-Jitsu. Build confidence. Belong at The Club.</h2>
      </div>
      <div className="visit-grid" id="schedule">
        <div>
          <p className="eyebrow">Start with a free trial class</p>
          <h3>2120 Jimmy Durante Blvd #121<br />Del Mar, CA 92014</h3>
        </div>
        <div>
          <p className="eyebrow">Start here</p>
          <p>Come see if Del Mar Jiu-Jitsu Club is the right fit for your child, your teen, or yourself. Book a free class, tour the facility, or send us a message with questions.</p>
          <a className="button button-cyan" href="/free-class">Book a Free Trial Class</a>
        </div>
        <div id="contact">
          <p className="eyebrow">Contact</p>
          <a href="mailto:info@delmarjiujitsuclub.com">info@delmarjiujitsuclub.com</a>
          <a href="https://www.instagram.com/delmarjiujitsuclub/">@delmarjiujitsuclub</a>
          <p className="local-note">Serving families from Del Mar, Carmel Valley, Solana Beach, Encinitas, and nearby San Diego communities.</p>
        </div>
      </div>
      <div className="ticker" aria-label="DMJJC highlights">
        {[...notes, ...notes].map((note, index) => (
          <span key={`${note}-${index}`}>{note}</span>
        ))}
      </div>
    </section>
  );
}
