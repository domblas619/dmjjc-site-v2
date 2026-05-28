import Image from "next/image";
import { CTASection, PageHero, PageShell } from "../site-components";
import { instructors, photos } from "../site-data";

export default function InstructorsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Del Mar Jiu-Jitsu"
        title="Meet Our Instructors"
        body="World-class coaches dedicated to your growth on and off the mat."
        image={photos.team}
      />
      <section className="coach-grid">
        {instructors.map((coach) => (
          <article className="coach-card" key={coach.name}>
            <Image src={coach.image} alt={coach.name} width={710} height={870} />
            <p className="eyebrow">{coach.rank}</p>
            <h2>{coach.name}</h2>
            <p>{coach.role}</p>
          </article>
        ))}
      </section>
      <CTASection />
    </PageShell>
  );
}

