const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Waves */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl animate-wave"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-2xl animate-float"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-foreground uppercase mb-6">
            R&D VENTURE <span className="text-gradient">STUDIO</span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold text-accent uppercase tracking-wide mb-8">
            Build. Validate. Spin-Out. Repeat.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              R&D Venture Studio is an innovative founder factory bringing together elite engineers, designers, and strategists to build bold AI-native products from zero to MVP in targeted development sprints. We uncover overlooked problems in high-value, complex industries and rapidly spin out companies that reshape these markets.
            </p>
          </div>

          <div className="pt-8">
            <div className="inline-block px-8 py-4 rounded-full border-2 border-accent/30 backdrop-blur-sm animate-pulse-glow">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                We don't just validate ideas — we assemble teams, ship products, and prepare them for scale
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
