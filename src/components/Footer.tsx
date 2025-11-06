const Footer = () => {
  return (
    <footer className="relative py-16 px-6 border-t border-border/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold uppercase">
            R&D VENTURE <span className="text-gradient">STUDIO</span>
          </h3>
          <p className="text-muted-foreground text-lg">
            Build. Validate. Spin-Out. Repeat.
          </p>
          <div className="pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} R&D Venture Studio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
