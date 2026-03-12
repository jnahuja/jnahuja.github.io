import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-lg shadow-background/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-16">
        <a href="#home" className="font-serif text-xl font-semibold text-foreground tracking-tight">
          Jashan Ahuja
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden text-foreground">
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-border w-64">
            <div className="flex flex-col gap-6 mt-12">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-serif text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
