const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-border/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-light">
            R&D VENTURE <span className="font-normal text-gradient">STUDIO</span>
          </h3>
          <p className="text-foreground/60 text-sm font-light">
            Build. Validate. Spin-Out. Repeat.
          </p>
          <div className="pt-6 border-t border-border/20">
            <p className="text-xs text-foreground/50 font-light">
              © {new Date().getFullYear()} R&D Venture Studio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
