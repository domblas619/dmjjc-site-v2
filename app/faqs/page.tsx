import { FAQAccordion } from "../faq-accordion";
import { CTASection, PageHero, PageShell } from "../site-components";
import { photos } from "../site-data";

const faqs = [
  {
    category: "Free Trial",
    questions: [
      ["Who is eligible for a free trial?", "New students are welcome to start with a free trial class so they can experience the academy before joining."],
      ["What classes can trial students access?", "We will help match you or your child with the best class based on age, experience, and goals."],
      ["What gear is required for the trial?", "Come in comfortable athletic clothing. If a specific uniform is needed, the team will guide you before class."]
    ]
  },
  {
    category: "Cancellations & Holds",
    questions: [
      ["What is the cancellation policy?", "Membership changes should be handled directly with the academy so the team can confirm timing and account details."],
      ["What happens if I rejoin after cancellation?", "Rejoining students can contact the team to review current membership options and class fit."],
      ["Do you offer vacation holds or membership pauses?", "Some holds may be available depending on the situation and membership type."],
      ["Do you offer medical holds?", "Medical holds may be reviewed with the academy team."],
      ["Are membership rates subject to change?", "Rates and policies may change over time. The academy can confirm the current options."]
    ]
  },
  {
    category: "Visitor Rates",
    questions: [
      ["Are visitors welcome?", "Visitors are welcome when arranged with the academy in advance."],
      ["What is the drop-in fee?", "Contact the team for current visitor and drop-in details."],
      ["Are outside filming and photography permitted?", "Please ask the academy before filming or photographing classes."]
    ]
  },
  {
    category: "Uniform Policy",
    questions: [
      ["What are the requirements for gi classes?", "Gi classes require the approved academy uniform and patch standards."],
      ["What about no-gi uniforms?", "No-gi classes require the Del Mar Jiu-Jitsu Club branded no-gi uniform."],
      ["Are uniform rentals available?", "Ask the front desk about current trial and rental options."],
      ["Which brands are recommended?", "The academy team can point you toward approved uniforms and fit guidance."]
    ]
  },
  {
    category: "Membership",
    questions: [["Where can I find membership rate information?", "Contact Del Mar Jiu-Jitsu Club directly for the latest membership options and current rates."]]
  },
  {
    category: "Private Lessons",
    questions: [["How do I get information about private lessons?", "Private lessons are scheduled directly with the academy and can be tailored to specific goals, ages, and experience levels."]]
  },
  {
    category: "Conduct",
    questions: [
      ["What is the training environment like?", "The academy is structured, respectful, family-centered, and focused on helping students grow safely."],
      ["How should I address instructors?", "Black belt instructors should be addressed as Professor."],
      ["What are the general conduct expectations?", "Students should follow instructor direction, respect training partners, and bring clean gear and a good attitude."],
      ["What items are restricted in the mat area?", "Shoes, food, drinks, jewelry, and loose personal items should stay off the mat."],
      ["What if I arrive late?", "Wait at the edge of the mat until the instructor invites you in."],
      ["Is outside coaching allowed?", "Outside coaching is not allowed during class so students can focus on the instructor leading the session."],
      ["Any final advice?", "Know your limits, work together, stay consistent, and have fun."]
    ]
  }
];

const faqGroups = faqs.map((group) => ({
  category: group.category,
  questions: group.questions.map(([question, answer]) => ({ question, answer }))
}));

export default function FAQsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Everything You Need to Know to Hit the Mats"
        title="FAQ's"
        body="Check out our most common questions and get ready for your journey with Del Mar Jiu-Jitsu Club."
        image={photos.mats}
      />
      <FAQAccordion groups={faqGroups} />
      <CTASection
        eyebrow="Still Have Questions?"
        title="We're happy to help."
        body="Reach out anytime or come visit the academy."
        cta="Contact Us"
      />
    </PageShell>
  );
}
