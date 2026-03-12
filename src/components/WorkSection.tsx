import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const roles = [
  {
    id: "ideon-vp",
    company: "Ideon",
    title: "Vice President of Product",
    dates: "2023–2025",
    tag: "Health Benefits Marketplace · B2B SaaS",
    description:
      "Ideon is a 2-sided marketplace connecting 500+ insurance carriers with 80+ benefits platforms, processing $18B in annually quoted insurance premium each year. As VP of Product, I owned the full product vision across 4 product suites and led a team of 7 PMs.",
    bullets: [
      "Oriented product strategy around robust unit economics, refashioning the product mix to generate 70–80% gross margins",
      "Orchestrated GTM motion across product families, contributing to record 32% YoY ARR growth",
      "Maintained 90%+ customer retention across an enterprise B2B customer base",
      "Developed the company's AI strategy spanning internal efficiency, customer success tooling, and next-generation products",
      "Established a product operating cadence aligning 7 PMs, 20 engineers, and executive leadership around metrics-driven roadmaps",
    ],
  },
  {
    id: "ideon-gpm",
    company: "Ideon",
    title: "Group Product Manager",
    dates: "2020–2023",
    tag: "Founding Product Hire · Promoted from Senior PM",
    description:
      "Joined as the company's first product-specific hire during COVID, when Ideon had roughly 30 people. Built the product function from the ground up.",
    bullets: [
      "Defined core product requirements, created initial documentation, and drove early proofs-of-concept",
      'Owned the multi-year roadmap for "Enrollments," driving 40x growth in platform membership in year one',
      "Led the MetLife enterprise deal from proof-of-concept through 2.5-month delivery — 300K members processed, grew from $500K to $1.4M ARR over 3 years",
      "Built and managed a team of PMs with direct responsibility for 3 engineering teams (~15 engineers)",
    ],
  },
  {
    id: "ibm",
    company: "IBM",
    title: "Managing Consultant / Product Architect",
    dates: "2012–2019",
    tag: "Promoted from Consultant → Senior Consultant → Managing Consultant",
    description:
      "Spent 7 years at IBM as a technology and product architect, leading complex system transformation engagements for enterprise clients across industries.",
    bullets: [
      "Founded the Workday Financials Practice at IBM and grew it to 40+ people",
      "Served as Lead Solution Architect for 20+ clients across industries",
      "Led Airbnb through the design, configuration, and testing of their global banking system — presented at Workday's annual conference alongside Airbnb's Head of Business Systems",
      "Recipient of 2 client satisfaction awards",
    ],
  },
];

const WorkSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="work" className="py-24 md:py-32">
      <div ref={ref} className="max-w-[1100px] mx-auto px-6">
        <p className="text-primary font-sans text-xs tracking-[0.25em] uppercase mb-4">Experience</p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-12">
          Where I've been — and what I actually did there.
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {roles.map((role) => (
            <AccordionItem
              key={role.id}
              value={role.id}
              className="border border-border rounded-lg px-6 bg-card/50"
            >
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="text-left flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span className="font-serif text-xl font-semibold text-foreground">
                      {role.company}
                    </span>
                    <span className="text-muted-foreground text-sm">· {role.dates}</span>
                  </div>
                  <div className="text-base text-foreground/80 mb-2">{role.title}</div>
                  <Badge variant="outline" className="text-xs font-normal text-muted-foreground border-border">
                    {role.tag}
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">{role.description}</p>
                <ul className="space-y-2">
                  {role.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-3">
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default WorkSection;
