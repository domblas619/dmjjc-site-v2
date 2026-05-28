import { CTASection, PageHero, PageShell } from "../site-components";
import { photos } from "../site-data";

export default function FreeClassPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Sign Up for a Free Jiu-Jitsu Class!"
        title="Start Your Journey Today"
        body="Experience the community and technique that set Del Mar Jiu-Jitsu apart - your first class is on us."
        image={photos.recovery}
      />
      <section className="text-band">
        <p className="eyebrow">Risk-Free</p>
        <h2>Your First Class Is On Us</h2>
        <p>
          Are you interested in trying out jiu-jitsu, but not quite sure if it is right for you? No problem at all! We offer a 100% risk-free jiu-jitsu class to help you learn more about the art firsthand. Regardless of your grappling experience or fitness level, with help from our coaches, you will be able to get through our free intro class with ease.
        </p>
        <p>
          Give us a call or message us through the contact form below with any questions and to sign up for a free intro class. We look forward to meeting you and helping you kickstart your jiu-jitsu journey.
        </p>
        <a href="tel:8582658982">Call: 858-265-8982</a>
      </section>
      <section className="stat-grid">
        {["Established", "Sq Ft Facility", "5-Star Reviews", "Black Belt Instructors"].map((item) => (
          <article key={item}>
            <strong>{item}</strong>
          </article>
        ))}
      </section>
      <CTASection
        eyebrow="Don't Wait"
        title="Your first class is free."
        body="No experience needed. Just show up and we'll handle the rest."
        cta="Sign Up Now"
      />
    </PageShell>
  );
}

