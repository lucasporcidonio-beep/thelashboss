import logo from "@/assets/logo-wide.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-white">
      <div className="container mx-auto px-6 text-center">
        <img
          src={logo}
          alt="The Lash Boss"
          className="w-32 mx-auto mb-3 opacity-90 mix-blend-multiply"
        />
        <p className="text-xs font-body text-muted-foreground tracking-wider mb-1">
          Sorocaba – SP · 22 de Junho de 2026
        </p>
        <p className="text-xs font-body text-muted-foreground tracking-wider">
          Crescimento • Propósito • Estratégia
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <a
            href="https://wa.me/5515997707464"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-body text-primary hover:text-gold-dark transition-colors tracking-wider"
          >
            WhatsApp
          </a>
          <span className="text-border">·</span>
          <a
            href="https://www.instagram.com/thelashboss_sorocaba/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-body text-primary hover:text-gold-dark transition-colors tracking-wider"
          >
            @thelashboss_sorocaba
          </a>
        </div>
        <p className="text-xs font-body text-muted-foreground mt-4">
          © 2026 The Lash Boss Sorocaba. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
