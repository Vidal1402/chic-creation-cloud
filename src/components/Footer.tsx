import logo from "@/assets/logo-vertice.png";
import { Linkedin, Instagram, Mail } from "lucide-react";
import { INSTAGRAM_URL, EMAIL, ENDERECO } from "@/lib/contact";

const footerLinks = {
  empresa: [
    { label: "Sobre", href: "#sobre" },
    { label: "Processo", href: "#processo" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Depoimentos", href: "#depoimentos" },
  ],
  servicos: [
    { label: "Licenciamento", href: "#" },
    { label: "Incentivos Fiscais", href: "#" },
    { label: "PPB", href: "#" },
    { label: "Consultoria ESG", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative pt-20 pb-8 border-t border-border/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Vértice" className="h-12 w-auto" />
              <div>
                <span className="text-xl font-serif text-foreground">Vértice</span>
                <p className="text-[9px] tracking-[0.2em] text-primary uppercase">
                  Solução Jurídica e Empresarial
                </p>
              </div>
            </a>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
              Especialistas em implantação e expansão de empresas na Amazônia Legal, 
              com foco na Zona Franca de Manaus. Sua parceira estratégica para o sucesso.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vértice Consultoria. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground/60">
            {ENDERECO}
          </p>
        </div>
      </div>
    </footer>
  );
}
