import { CTASection, PageHero, PageShell } from "../site-components";
import { photos } from "../site-data";

const schedule = [
  ["6-7am", "Adult Gi"],
  ["8-9am", "Toddlers Gi (3-5yo) / Kids Gi (6-9yo)"],
  ["9-10am", "Kids Gi (9-12yo) / Teens Gi (13yo+)"],
  ["12-1pm", "Open Mat"],
  ["4-5pm", "Toddlers No-Gi (3-5yo) / Kids No-Gi (6-9yo)"],
  ["5-6pm", "Kids No-Gi (9-12yo) / Teens No-Gi (13yo+)"],
  ["6-7pm", "Adult No-Gi"]
];

export default function SchedulePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Weekly Timetable"
        title="Class Schedule"
        body="Find the perfect class time for your schedule. We offer morning, afternoon, and evening sessions."
        image={photos.training}
      />
      <section className="schedule-list">
        {schedule.map(([time, title]) => (
          <article key={time}>
            <strong>{time}</strong>
            <span>{title}</span>
          </article>
        ))}
      </section>
      <CTASection
        eyebrow="Ready to Start?"
        title="Your first class is always free."
        body="Drop in or sign up online."
        cta="Book Your Free Class"
      />
    </PageShell>
  );
}

