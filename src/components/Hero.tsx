const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-wave"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-float"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground mb-4">
            R&D VENTURE <span className="font-normal text-gradient">STUDIO</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light tracking-wide text-foreground/90 mb-8">
            Build. Validate. Spin-Out. Repeat.
          </p>
          
          <div className="max-w-3xl mx-auto pt-4">
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-light">
              An innovative founder factory bringing together elite engineers, designers, and strategists to build bold AI-native products from zero to MVP in targeted development sprints. We uncover overlooked problems in high-value, complex industries and rapidly spin out companies that reshape these markets.
            </p>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-foreground/30 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
