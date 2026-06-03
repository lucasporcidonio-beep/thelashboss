const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-white">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display font-bold text-lg mb-1">
          <span className="text-foreground/40 font-light tracking-widest text-sm uppercase">The </span>
          <span className="text-gradient-gold">LASH</span>{" "}
          <span className="text-foreground">BOSS</span>
        </p>
        <p className="text-xs font-body text-muted-foreground tracking-wider mb-1">
          Sorocaba – SP
        </p>
        <p className="text-xs font-body text-muted-foreground tracking-wider">
          Crescimento • Propósito • Estratégia
        </p>
        <p className="text-xs font-body text-muted-foreground mt-4">
          © 2026 The Lash Boss Sorocaba. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
