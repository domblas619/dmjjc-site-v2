"use client";

export function FAQAccordion({
  groups
}: {
  groups: { category: string; questions: { question: string; answer: string }[] }[];
}) {
  return (
    <section className="faq-accordion">
      {groups.map((group) => (
        <article className="faq-group" key={group.category}>
          <p className="eyebrow">{group.category}</p>
          <h2>{group.category}</h2>
          <div>
            {group.questions.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

