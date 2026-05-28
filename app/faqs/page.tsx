import { CTASection, PageHero, PageShell } from "../site-components";
import { photos } from "../site-data";

const faqs = [
  ["Free Trial", "Who is eligible for a free trial?", "What classes can trial students access?", "What gear is required for the trial?"],
  ["Cancellations & Holds", "What is the cancellation policy?", "What happens if I rejoin after cancellation?", "Do you offer vacation holds or membership pauses?", "Do you offer medical holds?", "Are membership rates subject to change?"],
  ["Visitor Rates", "Are visitors welcome?", "What is the drop-in fee?", "Are outside filming and photography permitted?"],
  ["Uniform Policy", "What are the requirements for gi classes?", "What about no-gi uniforms?", "Are uniform rentals available?", "Which brands are recommended?"],
  ["Membership", "Where can I find membership rate information?"],
  ["Private Lessons", "How do I get information about private lessons?"],
  ["Conduct", "What is the training environment like?", "How should I address instructors?", "What are the general conduct expectations?", "What items are restricted in the mat area?", "Are jewelry and piercings allowed?", "What if I arrive late?", "What about leaving during class?", "Where should bags go?", "What about belt maintenance?", "Is outside coaching allowed?", "Any final advice?"]
];

export default function FAQsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Everything You Need to Know to Hit the Mats"
        title="FAQ's"
        body="Check out our most common questions and get ready for your journey with Del Mar Jiu-Jitsu Club."
        image={photos.mats}
      />
      <section className="faq-grid">
        {faqs.map(([category, ...questions]) => (
          <article className="detail-panel" key={category}>
            <p className="eyebrow">{category}</p>
            <h2>{category}</h2>
            <ul>
              {questions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <CTASection
        eyebrow="Still Have Questions?"
        title="We're happy to help."
        body="Reach out anytime or come visit the academy."
        cta="Contact Us"
      />
    </PageShell>
  );
}

