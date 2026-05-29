import Image from "next/image";
import { PageHero, PageShell } from "../site-components";
import { blogPosts, photos } from "../site-data";

export default function BlogPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Blog"
        title="News, technique breakdowns, competition recaps, and community stories."
        body="Stories and resources from Del Mar Jiu-Jitsu Club."
        image={photos.blogOne}
      />
      <section className="blog-grid">
        {blogPosts.map(([category, date, title, image]) => (
          <article className="blog-card" key={title}>
            <Image className="reveal-media" src={image} alt="" width={600} height={640} />
            <p className="eyebrow">{category} / {date}</p>
            <h2>{title}</h2>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
