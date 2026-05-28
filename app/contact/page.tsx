import { PageHero, PageShell } from "../site-components";
import { photos } from "../site-data";

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact Us"
        title="Get in touch"
        body="Have a question or ready to start training? Drop us a message and we'll get back to you shortly."
        image={photos.coast}
      />
      <section className="contact-grid">
        <article>
          <p className="eyebrow">Visit Us</p>
          <h2>Del Mar, CA 92014</h2>
          <p>2120 Jimmy Durante Blvd #121</p>
        </article>
        <article>
          <p className="eyebrow">Call Us</p>
          <h2>(858) 265-8982</h2>
          <p>Mon-Fri 6:00am-8:00pm<br />Sat 8:00am-11:00am</p>
        </article>
        <article>
          <p className="eyebrow">Email Us</p>
          <h2>info@delmarjiujitsuclub.com</h2>
          <p>Ask about Kids, Adult, Fitness, Self-Defense, or private training.</p>
        </article>
      </section>
      <section className="contact-form">
        <p className="eyebrow">Message</p>
        <h2>Tell us what you're looking for.</h2>
        <div className="fake-form" aria-label="Contact form mockup">
          <span>Name</span>
          <span>Email</span>
          <span>Phone</span>
          <span>Interest: Kids, Adult, Fitness, Self-Defense, Other</span>
          <span>Message</span>
        </div>
      </section>
    </PageShell>
  );
}

