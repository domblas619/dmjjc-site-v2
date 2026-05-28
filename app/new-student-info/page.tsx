import { CTASection, PageHero, PageShell } from "../site-components";
import { photos } from "../site-data";

const groups = [
  {
    title: "Class Protocol",
    items: [
      "Classes begin with a formal bow to the instructor.",
      "Bow when entering or leaving the mat.",
      "Bow to your partner before and after training.",
      "Arrive late by waiting outside the mat until the instructor invites you in.",
      "Ask permission before leaving the mat or class early."
    ]
  },
  {
    title: "Uniform & Appearance",
    items: [
      "Wear the official patch and an all-white gi for gi classes.",
      "Wear a rash guard and the official no-gi uniform for no-gi classes.",
      "Face the wall when tying your belt.",
      "Remove jewelry and keep nails trimmed."
    ]
  },
  {
    title: "Mat Safety & Etiquette",
    items: [
      "No shoes, food, or drinks on the mat.",
      "Do not train when sick or with open wounds.",
      "Address black belts as Professor.",
      "Keep talking minimal and avoid outside coaching.",
      "Store bags neatly, silence phones, bring clean gear, and keep a good attitude."
    ]
  }
];

export default function NewStudentInfoPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="New Student Information"
        title="Welcome to DMJJC!"
        body="Everything you need to know before your first class at Del Mar Jiu-Jitsu Club. Students and parents should take some time to review and familiarize themselves with the dojo rules before training."
        image={photos.recovery}
      />
      <section className="detail-panels">
        {groups.map((group) => (
          <article className="detail-panel" key={group.title}>
            <p className="eyebrow">Dojo Rules</p>
            <h2>{group.title}</h2>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <CTASection
        eyebrow="Ready to Get Started?"
        title="Your first class is free."
        body="Sign up below and we'll see you on the mat."
        cta="Sign Up Now"
      />
    </PageShell>
  );
}

