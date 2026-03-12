import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WritingSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="writing" className="py-24 md:py-32">
      <div ref={ref} className="max-w-[1100px] mx-auto px-6">
        <p className="text-primary font-sans text-xs tracking-[0.25em] uppercase mb-4">Writing</p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Thinking out loud.</h2>
        <p className="text-base text-muted-foreground mb-12 max-w-3xl leading-relaxed">
          I write about product strategy, building teams, and the craft of making good decisions under uncertainty. More coming soon.
        </p>

        <div className="border border-border rounded-lg p-8 bg-card/30 max-w-md">
          <p className="font-serif text-lg text-foreground mb-2">First article coming soon</p>
          <p className="text-sm text-muted-foreground italic">Stay tuned.</p>
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
