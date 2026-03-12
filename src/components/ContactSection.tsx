import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="contact" className="py-24 md:py-32">
      <div ref={ref} className="max-w-[1100px] mx-auto px-6 text-center">
        <p className="text-primary font-sans text-xs tracking-[0.25em] uppercase mb-4">Contact</p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">Let's talk.</h2>
        <p className="text-base text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
          I'm currently exploring VP of Product, Head of Product, and Director of Product roles — ideally at a scaling startup or growth-stage company where I can build a team, tackle a hard problem, and connect product to real business outcomes.
        </p>
        <p className="text-base text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
          I'm also open to advisory conversations, especially with founders thinking through early product strategy.
        </p>
        <p className="text-base text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          The best way to reach me is LinkedIn or email. I respond to thoughtful outreach.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12 px-8 rounded-sm"
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4 mr-2" />
              Connect on LinkedIn
            </a>
          </Button>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 rounded-sm"
          >
            <a href="mailto:jashan.ahuja11@gmail.com">
              <Mail className="h-4 w-4 mr-2" />
              Send an email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
