import { CTASection, ImagePair, PageHero, PageShell } from "../site-components";
import { photos } from "../site-data";

const features = [
  ["Strength & Conditioning", "Full weight room with free weights, machines, and functional training equipment."],
  ["Recovery Suite", "Cold plunge, sauna, and stretching area to help you recover faster."],
  ["24/7 Access", "Members enjoy around-the-clock access to the performance center."]
];

export default function PerformanceCenterPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Fitness + Recovery"
        title="Performance Center"
        body="Train and recover in our 4,500 sq ft of combined indoor/outdoor fitness space - equipped with wall-to-wall Rogue racks, full plate sets, Assault cardio machines, plus a recovery suite with sauna and cold plunge. Members enjoy 24/7 access, and parents can work out free while their kids are on the mat."
        image={photos.facility}
      />
      <section className="detail-panels">
        {features.map(([title, body]) => (
          <article className="detail-panel" key={title}>
            <p className="eyebrow">What's Inside</p>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>
      <ImagePair images={[photos.performance, photos.recovery]} />
      <CTASection
        eyebrow="Start Training Today"
        title="Train beyond the mat."
        body="Members enjoy 24/7 access to a complete strength, conditioning, and recovery space."
        cta="Book A Tour"
      />
    </PageShell>
  );
}

