import { PageHero, PageShell } from "../site-components";
import { photos } from "../site-data";

const sections = [
  ["About Del Mar Jiu-Jitsu Club", "Del Mar Jiu-Jitsu Club provides Jiu-Jitsu classes, kids programs, adult training, private lessons, fitness, recovery, and related academy services."],
  ["Website Use", "You agree to use this website for lawful purposes and not interfere with its operation, security, or content."],
  ["Trial Classes and Program Inquiries", "Trial classes and inquiries are subject to availability, eligibility, scheduling, and academy approval."],
  ["Memberships and Payments", "Membership terms, billing, rates, pauses, cancellations, and refunds are governed by the membership agreement or policies provided at enrollment."],
  ["Recurring Billing and Cancellation Policy", "Recurring billing may continue until canceled under the applicable policy. Cancellation requests must follow the procedures provided by the academy."],
  ["Holds and Pauses", "Vacation, medical, or other holds may be available under academy policy and may require advance notice or documentation."],
  ["Class Schedules", "Class schedules, instructors, programs, and availability may change at any time."],
  ["Participation and Safety", "Jiu-Jitsu and fitness training involve physical activity and inherent risk. Students are responsible for training safely, following instructor guidance, and communicating limitations."],
  ["Waivers", "Participation may require signed waivers, parent or guardian consent for minors, and completion of required forms."],
  ["Kids Programs", "Parents and guardians are responsible for reviewing academy rules with children and supporting respectful conduct."],
  ["Conduct", "Students and visitors must follow mat etiquette, instructor directions, uniform policies, and academy standards for respectful behavior."],
  ["Uniforms", "Gi and no-gi uniform requirements may apply. The academy may require official uniforms for certain classes."],
  ["Events and Photos", "Academy events, photos, videos, and media may be used for community and promotional purposes unless other arrangements are made."],
  ["Website Content", "All website content belongs to Del Mar Jiu-Jitsu Club or its licensors and may not be copied without permission."],
  ["Third-Party Links", "This website may link to third-party websites or services. Del Mar Jiu-Jitsu Club is not responsible for their content or practices."],
  ["No Guarantee", "Results vary by student. The academy does not guarantee outcomes, ranks, competition results, or fitness results."],
  ["Limitation of Liability", "To the fullest extent permitted by law, Del Mar Jiu-Jitsu Club is not liable for indirect, incidental, or consequential damages arising from website use or services."],
  ["Indemnification", "You agree to indemnify Del Mar Jiu-Jitsu Club from claims related to misuse of the website or violation of these terms."],
  ["Communication Consent", "By contacting us, you consent to receive communications related to your inquiry, trial class, membership, or academy updates."],
  ["Governing Law", "These terms are governed by the laws of California."],
  ["Changes and Contact Information", "These terms may be updated over time. Contact info@delmarjiujitsuclub.com with questions."]
];

export default function TermsOfServicePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Last Updated May 21, 2026"
        title="Terms of Service"
        body="Welcome to the Del Mar Jiu-Jitsu Club website. By using this site or submitting information through it, you agree to these terms."
        image={photos.mats}
      />
      <section className="legal-list">
        {sections.map(([title, body]) => (
          <article key={title}>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
