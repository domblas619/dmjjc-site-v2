import Image from "next/image";
import Link from "next/link";
import { CTASection, PageHero, PageShell } from "../site-components";
import { classSummaries, photos } from "../site-data";

export default function ClassesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Programs for Every Level"
        title="Jiu-Jitsu Classes in San Diego"
        body="From kids to adults, beginners to competitors - find the class that fits your goals."
        image={photos.mats}
      />
      <section className="listing-grid">
        {classSummaries.map((item) => (
          <Link className="listing-card" href={item.href} key={item.href}>
            <Image src={item.image} alt="" width={900} height={675} />
            <p className="eyebrow">{item.eyebrow}</p>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </Link>
        ))}
      </section>
      <CTASection
        eyebrow="Try a Free Class Today"
        title="No commitment, no experience needed."
        body="Come see what Jiu-Jitsu can do for you."
        cta="Sign Up Now"
      />
    </PageShell>
  );
}

