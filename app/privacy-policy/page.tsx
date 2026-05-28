import { PageHero, PageShell } from "../site-components";
import { photos } from "../site-data";

const sections = [
  ["Information We Collect", "We may collect contact details, trial class inquiries, membership information, messages, and website usage data submitted through forms or collected through analytics."],
  ["How We Use Your Information", "We use information to respond to inquiries, schedule classes, manage memberships, improve the website, communicate with students and parents, and support academy operations."],
  ["Children's Information", "Parents or guardians should provide information for children. We use children's information only to support program participation and communication with families."],
  ["Photos and Videos", "Photos and videos may be used to share academy life, events, and training moments. Families may contact us with privacy preferences."],
  ["How We Share Information", "We do not sell personal information. We may share information with service providers that help us operate the website, process forms, communicate, or manage the academy."],
  ["Cookies and Analytics", "The website may use cookies and analytics tools to understand traffic, improve content, and maintain performance."],
  ["Email and Text Communications", "By contacting us, you consent to receive responses about your inquiry, trial class, or membership. You can opt out of marketing communications."],
  ["Data Security and Retention", "We use reasonable safeguards and retain information only as long as needed for academy operations, legal compliance, or legitimate business purposes."],
  ["Your Privacy Choices", "You may request access, correction, or deletion of personal information by contacting Del Mar Jiu-Jitsu Club."],
  ["California Privacy Notice", "California residents may have additional rights regarding access, deletion, correction, and information about how personal information is used."],
  ["Third-Party Links", "Our website may link to third-party services. Their privacy practices are governed by their own policies."],
  ["Changes and Contact", "This policy may be updated over time. Contact us at info@delmarjiujitsuclub.com with questions."]
];

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Last Updated May 21, 2026"
        title="Privacy Policy"
        body="Del Mar Jiu-Jitsu Club respects your privacy and is committed to protecting the information shared with us."
        image={photos.coast}
      />
      <LegalSections sections={sections} />
    </PageShell>
  );
}

function LegalSections({ sections }: { sections: string[][] }) {
  return (
    <section className="legal-list">
      {sections.map(([title, body]) => (
        <article key={title}>
          <h2>{title}</h2>
          <p>{body}</p>
        </article>
      ))}
    </section>
  );
}

