import logo from "@/assets/logo-vertice.png";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Vértice" className="h-10 w-auto" />
            <div>
              <span className="text-lg font-serif text-foreground">Vértice</span>
              <p className="text-[9px] tracking-[0.15em] text-primary uppercase">
                Solução Jurídica e Empresarial
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#quem-somos" className="hover:text-primary transition-colors">
              Quem Somos
            </a>
            <a href="#solucoes" className="hover:text-primary transition-colors">
              Soluções
            </a>
            <a href="#diferenciais" className="hover:text-primary transition-colors">
              Diferenciais
            </a>
            <a href="#servicos" className="hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#contato" className="hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} Vértice. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
