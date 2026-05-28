import Image from "next/image";

const photos = {
  arrival:
    "https://cdn.sanity.io/images/d26yk9dk/production/65a00dcbe8861e6a77b224b223fea36e74f24b61-2000x1333.jpg",
  mats:
    "https://cdn.sanity.io/images/d26yk9dk/production/72206a40b6a095babe1a6f85ae4aa9db17540290-1920x1280.jpg",
  kids:
    "https://cdn.sanity.io/images/d26yk9dk/production/14e96827abc158582c46d035bcf8c6f544821ce2-2000x1333.jpg",
  training:
    "https://cdn.sanity.io/images/d26yk9dk/production/92e83847c7d524dcd3431167e6ecba3ef60c5dac-1386x924.jpg",
  portrait:
    "https://cdn.sanity.io/images/d26yk9dk/production/e851c102cf5a2e46ddefa5ef5e75ab20efd363b2-1536x1920.jpg",
  gym:
    "https://cdn.sanity.io/images/d26yk9dk/production/aad08b0aedefe8c36eda5d129fdf6bbbe30803d5-2000x1124.jpg",
  team:
    "https://cdn.sanity.io/images/d26yk9dk/production/23ddfd868ef32f1b08405f8dc3fc26649e8d734c-1920x1280.jpg",
  coast:
    "https://cdn.sanity.io/images/d26yk9dk/production/b9f023766e18aaf7f73d1c243b087a19ebadf42a-2560x1170.jpg"
};

const programs = [
  {
    title: "Kids Jiu-Jitsu",
    meta: "Ages 4+",
    text: "Confidence, coordination, discipline, and problem solving through movement-rich training."
  },
  {
    title: "Adult Gi",
    meta: "Beginner to advanced",
    text: "A technical curriculum for learning positions, pressure, escapes, and control."
  },
  {
    title: "No-Gi",
    meta: "All levels",
    text: "Fast-paced grappling for athletes who want sharp movement and practical transitions."
  },
  {
    title: "Private Training",
    meta: "By appointment",
    text: "Focused sessions for new students, competitors, families, and specific skill goals."
  }
];

const notes = [
  "Del Mar, Solana Beach, Carmel Valley, Encinitas",
  "4,500+ sq ft facility",
  "Jiu-Jitsu, fitness, recovery, community",
  "Black belt instruction"
];

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <StudioSection />
      <ProgramSection />
      <GallerySection />
      <VisitSection />
    </main>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Del Mar Jiu-Jitsu Club home">
        <img src="/icon.svg" alt="" />
        <span>
          <strong>dmjjc.</strong>
          <small>Del Mar, CA</small>
        </span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#programs">Programs</a>
        <a href="#schedule">Schedule</a>
        <a href="#visit">Visit</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="button button-dark" href="#visit">Free Class</a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero grid-shell" id="top">
      <div className="hero-title cell span-2">
        <p className="wordmark">dmjjc.</p>
        <span className="arrow" aria-hidden="true">↘</span>
      </div>
      <div className="cell hide-mobile">
        <Image src={photos.mats} alt="" width={640} height={426} className="thumb grayscale" priority />
        <p className="caption">Mat Study 001</p>
      </div>
      <div className="cell nav-list hide-mobile">
        <a href="#programs">About</a>
        <a href="#programs">Programs</a>
        <a href="#schedule">Schedule</a>
        <a href="#visit">Contact</a>
      </div>
      <div className="cell span-2 hero-note">
        <p>A serious academy with a coastal edge, built around discipline, family, and the quiet work that happens on the mat.</p>
        <strong>2026</strong>
      </div>
      <div className="hero-image cell span-4">
        <Image src={photos.arrival} alt="Del Mar Jiu-Jitsu Club students and families gathered outside the academy." width={2000} height={1333} priority />
      </div>
      <div className="hero-statement cell span-2">
        <p className="eyebrow">Del Mar Jiu-Jitsu Club</p>
        <h1>The Mat Where Discipline Meets Community.</h1>
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
        <p className="eyebrow">The work behind the work</p>
        <h2>The best progress is usually quiet.</h2>
        <p>
          Showing up, drilling patiently, learning to breathe under pressure, and leaving with a little more composure than you brought in.
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
        <h2>Not everything we do is seen.</h2>
      </div>
      <div className="cell span-4 intro-copy">
        <p>
          DMJJC blends technical Jiu-Jitsu, athletic development, and a welcoming community for kids, adults, competitors, and first-day beginners.
        </p>
      </div>
      {programs.map((program, index) => (
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
        <p className="eyebrow">Fragments of training</p>
        <h2>Jiu-Jitsu, fitness, recovery, and family.</h2>
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
        <h2>Train like a champion. Belong like family.</h2>
      </div>
      <div className="visit-grid" id="schedule">
        <div>
          <p className="eyebrow">Visit the academy</p>
          <h3>2120 Jimmy Durante Blvd #121<br />Del Mar, CA 92014</h3>
        </div>
        <div>
          <p className="eyebrow">Start here</p>
          <p>Book a free class, tour the facility, or ask which program is the best fit.</p>
          <a className="button button-cyan" href="https://delmarjiujitsuclub.com/contact">Book a Free Class</a>
        </div>
        <div id="contact">
          <p className="eyebrow">Contact</p>
          <a href="mailto:info@delmarjiujitsuclub.com">info@delmarjiujitsuclub.com</a>
          <a href="https://www.instagram.com/delmarjiujitsuclub/">@delmarjiujitsuclub</a>
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
