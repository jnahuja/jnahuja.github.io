import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const caseStudies = [
  {
    id: "ichra",
    title: "Finding a New Growth Lever",
    subtitle: "How I validated a new product line from signal to live launch — ICHRA at Ideon",
    tagline:
      "What this shows: I know how to spot early signals, validate rigorously, and manage investment carefully. New product bets should be earned, not assumed.",
    content: [
      "The short version: I identified an emerging market shift in health benefits, validated it from three angles, and launched a new product line that hit 100% accuracy with less than 1 day enrollment speed in its first Open Enrollment season.",
      "The challenge: In 2020, the U.S. government opened up ICHRA (Individual Coverage HRAs) — a new way for employers to fund individual health benefits instead of offering traditional group plans. At Ideon, we were primarily a group enrollment platform. The question was: was this a real opportunity, or a distraction?",
      "What I did: I noticed a signal in our own platform data — ICHRA quote volume was growing at 190% per year. Small numbers, but compounding fast. I decided to investigate, but I'd learned that conviction without validation is just a guess. So I ran a 3-part validation:",
      "Customer validation: Working with Sales, I identified the top 20 potential prospects with meaningful ICHRA volume. We approached them through existing account relationships and validated pain points. They wanted speed and accuracy — and our existing capabilities were a natural fit.",
      "Technical validation: ICHRA required payment processing capabilities we didn't have. Rather than build from scratch, I identified a payment processing partner, pitched a revenue-sharing arrangement to our CTO and exec team, and removed the technical blocker while also reducing time-to-market and investment risk.",
      "Business validation: I modeled out pricing and margins — landing at $12/member with 70–80% margin achievable at scale, consistent with our existing product economics.",
      "How I de-risked the launch: Even with positive validation, I didn't greenlight a full build. I set 3 sequential milestones: (1) Sign 4 pilot customers before building anything. (2) Build the 5 key integrations on time. (3) Prove enrollment speed and accuracy during live Open Enrollment.",
      "The outcome: We signed 4 pilot customers by May 2025, built all required integrations by September, and ran our first live Open Enrollment season in November/December — achieving less than 1 day average enrollment speed and 100% accuracy rate. We entered 2026 with a validated product, 4 happy customers, and a go-to-market story built on real proof.",
    ],
  },
  {
    id: "metlife",
    title: "High-Stakes Delivery",
    subtitle:
      "How I won and delivered a complex MetLife enterprise integration in 2.5 months — on a hard deadline",
    tagline:
      "What this shows: Delivery isn't just project management. It's trust-building, proactive communication, and keeping everyone's eyes on the same goal.",
    content: [
      "The short version: I won and delivered a complex enterprise integration in 2.5 months, on a hard deadline, with a Fortune 15 company — by building unusually high trust and running a tight, transparent process.",
      "The challenge: MetLife needed a connection to Ideon's platform to source and transmit one of their largest pools of employer-purchased benefits. The deadline was September 15th — the start of Open Enrollment season — which was immovable. The timeline from proof-of-concept to go-live was 2.5 months.",
      "What I did: I was both the deal lead and the project lead. On the sales side, I built the proof-of-concept and drove the commercial process. Once signed, I ran the delivery.",
      "I set up three-times-weekly syncs between our Product and Engineering team, Customer Success, and the MetLife team. I was deliberate about building a high-trust relationship with MetLife's executives — personal numbers, honest conversations, real transparency about risks and milestones. That trust level meant I could raise blockers early and get them cleared fast.",
      "We went live on September 15th.",
      "The outcome: The MetLife connection processed 300,000 members in its first enrollment season and grew from $500K ARR to $1.4M ARR over three years — making it Ideon's largest and most successful customer partnership during that time.",
    ],
  },
  {
    id: "zero-to-one",
    title: "Building 0→1",
    subtitle:
      "How I joined as founding PM at a 30-person startup and helped build it into an $18B platform",
    tagline:
      "What this shows: I can operate in ambiguity, build structure where there isn't any, and grow into larger scope as a company scales. I don't need a playbook — I write one.",
    content: [
      "The short version: I joined as founding PM at a 30-person startup mid-pandemic, built the product function from scratch, and drove 40x growth in platform membership in year one.",
      "The challenge: Ideon had early customers and early signal, but no formal product function and no product documentation. I was hire #1 on the product side. There was no playbook.",
      "What I did: I started by getting close to everything — customers, engineers, the data, the edge cases. I ran biweekly sprints, wrote nearly every ticket myself, and became the connective tissue between what customers needed and what engineering could build.",
      "Over 18 months I expanded from execution to leadership — taking over the full product function, building a team of up to 7 direct reports, and establishing the operating cadence and roadmap processes that would carry the company forward.",
      "The outcome: 40x growth in enrollment membership through the platform in year one. A platform that now processes $18B in annually quoted premium. A product team and culture built from the ground up.",
    ],
  },
];

const CaseStudiesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="case-studies" className="py-24 md:py-32">
      <div ref={ref} className="max-w-[1100px] mx-auto px-6">
        <p className="text-primary font-sans text-xs tracking-[0.25em] uppercase mb-4">Case Studies</p>
        <p className="text-base text-muted-foreground mb-12 max-w-3xl leading-relaxed">
          Product leadership is hard to show when you've built for other companies. These stories show how I think, how I work, and what I care about.
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {caseStudies.map((cs) => (
            <AccordionItem
              key={cs.id}
              value={cs.id}
              className="border border-border rounded-lg px-6 bg-card/50"
            >
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="text-left flex-1">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{cs.title}</h3>
                  <p className="text-sm text-muted-foreground">{cs.subtitle}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <p className="text-sm font-semibold text-primary mb-6 leading-relaxed">{cs.tagline}</p>
                <div className="space-y-4">
                  {cs.content.map((paragraph, i) => (
                    <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
