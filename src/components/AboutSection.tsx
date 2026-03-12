import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  {
    title: "Customer first, metrics always.",
    body: "I validate before I build, and I measure what matters. Every roadmap decision should connect to a customer outcome and a business result.",
  },
  {
    title: "Player-coach leadership.",
    body: "I build strong product teams and develop PMs — but I'm never too senior to roll up my sleeves, write a ticket, or sit in a customer call.",
  },
  {
    title: "Technical depth as a superpower.",
    body: "My engineering and consulting background means I can go deep with engineers, challenge assumptions, and architect solutions — not just describe them.",
  },
];

const AboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32">
      <div ref={ref} className="max-w-[1100px] mx-auto px-6">
        <p className="text-primary font-sans text-xs tracking-[0.25em] uppercase mb-4">About</p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-12">
          The long version <span className="text-muted-foreground font-normal italic">(worth reading)</span>
        </h2>

        <div className="max-w-3xl space-y-6 text-base text-muted-foreground leading-relaxed mb-16">
          <p>
            I started my career as a mechanical engineer, which taught me something that still shapes how I work: systems have logic, and if you understand the logic deeply enough, you can improve almost anything.
          </p>
          <p>
            That instinct led me to management consulting at IBM, where I spent 7 years working as a product and technology architect for over 20 clients across industries. I founded IBM's Workday Financials Practice from scratch and grew it to 40+ people. I led Airbnb through the design and deployment of their global banking system — a month of architecture followed by two intensive weeks onsite with 50 people from Singapore, Dublin, and San Francisco. I won client satisfaction awards and presented at Workday's annual conference alongside Airbnb's Head of Business Systems.
          </p>
          <p>
            But consulting taught me something about myself: I wanted to build things that lasted longer than a project. I wanted to set vision, own outcomes, and see what happened next. So I earned an MBA with Distinction from Cornell's Johnson School and made the leap to product.
          </p>
          <p>
            I joined Ideon in 2020 as their first product hire — during a pandemic, at a company of roughly 30 people, in an industry (health benefits) I'd never worked in. Five years later, I'd scaled a team of 7 product managers, grown a 2-sided marketplace that processes $18B in annually quoted insurance premium, and helped drive 32% year-over-year ARR growth while maintaining 90%+ customer retention.
          </p>
          <p>
            What I've learned along the way: great product leadership isn't about having all the answers. It's about asking the right questions, earning deep trust with customers and teams, and making decisions with clarity and conviction even when the data is incomplete.
          </p>
          <p>
            I bring a founder's mentality to every role — broad ownership, high accountability, and genuine excitement about solving hard problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {values.map((v) => (
            <div key={v.title} className="border-l-2 border-primary pl-6 py-2">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground italic">
          Outside work, I'm a 2026 MIT Puzzle Hunt winner, a canoeing and wilderness first aid instructor, an origami teacher, and a NYC Taiko drummer.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
