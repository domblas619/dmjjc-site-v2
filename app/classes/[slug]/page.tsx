import { notFound } from "next/navigation";
import { ClassAnchorNav, CTASection, ImagePair, PageHero, PageShell } from "../../site-components";
import { classPages, photos } from "../../site-data";

export function generateStaticParams() {
  return Object.keys(classPages).map((slug) => ({ slug }));
}

export default async function ClassDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = classPages[slug as keyof typeof classPages];

  if (!page) {
    notFound();
  }

  const sections = page.panels.map((panel) => ({
    id: panel.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    title: panel.title,
    meta: panel.meta
  }));

  return (
    <PageShell>
      <PageHero eyebrow={page.eyebrow} title={page.title} body={page.body} image={page.image} />
      <ClassAnchorNav sections={sections} />
      <section className="detail-panels">
        {page.panels.map((panel, index) => (
          <article className="detail-panel" id={sections[index].id} key={panel.title}>
            <p className="eyebrow">{panel.meta}</p>
            <h2>{panel.title}</h2>
            <p>{panel.body}</p>
            <ul>
              {panel.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <ImagePair images={[photos.training, photos.team]} />
      <CTASection />
    </PageShell>
  );
}
