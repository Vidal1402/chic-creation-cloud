import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-vertice.png";
const navLinks = [{
  href: "#sobre",
  label: "Sobre"
}, {
  href: "#processo",
  label: "Processo"
}, {
  href: "#diferenciais",
  label: "Diferenciais"
}, {
  href: "#swot",
  label: "SWOT"
}, {
  href: "#depoimentos",
  label: "Depoimentos"
}, {
  href: "#contato",
  label: "Contato"
}];
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <motion.header initial={{
    y: -100,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.6,
    ease: "easeOut"
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/50 py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img src={logo} alt="Vértice" className="h-20 md:h-24 w-auto transition-transform duration-300 group-hover:scale-105" />
          
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => <a key={link.href} href={link.href} className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 rounded-lg hover:bg-primary/5">
              {link.label}
            </a>)}
          <a href="#contato" className="ml-4 btn-primary text-sm py-3 px-6">
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-foreground hover:text-primary transition-colors" aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border/50">
            <nav className="container mx-auto py-6 flex flex-col gap-2">
              {navLinks.map(link => <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-lg font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                  {link.label}
                </a>)}
              <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 btn-primary text-center">
                Fale Conosco
              </a>
            </nav>
          </motion.div>}
      </AnimatePresence>
    </motion.header>;
}