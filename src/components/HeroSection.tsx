import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "10+", label: "Years in Product & Consulting" },
  { value: "$18B", label: "in Annual Premium Processed" },
  { value: "32%", label: "YoY ARR Growth" },
];

const HeroSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div ref={ref} className="max-w-[1100px] mx-auto px-6 py-24 md:py-32">
        <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-6">
          Jashan Ahuja
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.15] mb-6 max-w-4xl">
          Product leader. Builder.{" "}
          <span className="text-primary">Bridge between technical complexity and business growth.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl leading-relaxed">
          I help companies turn hard problems into products people rely on — and products into revenue engines.
        </p>
        <p className="text-base text-muted-foreground mb-10 max-w-3xl leading-relaxed">
          I'm Jashan Ahuja, a product executive with 10+ years building B2B SaaS platforms, marketplaces, and enterprise systems. I've led product from 0→1 as a founding hire, scaled portfolios to 32% YoY ARR growth, and built teams from scratch. My background spans mechanical engineering, management consulting at IBM, and a Cornell MBA — which means I'm just as comfortable in a whiteboard session with engineers as I am presenting strategy to a board.
        </p>

        <Button
          asChild
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans text-sm tracking-wide px-8 h-12 rounded-sm"
        >
          <a href="#contact">Let's connect</a>
        </Button>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 pt-12 border-t border-border">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
