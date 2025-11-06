const EquityStructure = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold uppercase mb-6">
            BUILD, OWN, AND <span className="text-gradient">SCALE YOUR EQUITY</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Builders receive portfolio equity alongside majority ownership in the company they spin out, subject to vesting
          </p>
        </div>

        {/* Equity Visualization */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mb-20">
          {/* Visual Diagram */}
          <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center animate-scale-in">
            {/* Majority Ownership Circle (Large) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-4 border-foreground/20 flex items-center justify-center">
              <div className="w-[350px] h-[350px] rounded-full bg-gradient-to-br from-navy-light to-navy-deep border border-border/30 flex flex-col items-center justify-center shadow-2xl">
                <h3 className="text-3xl font-bold mb-2">Majority Ownership</h3>
                <p className="text-muted-foreground text-center px-8">Your portfolio company.</p>
              </div>
            </div>

            {/* Portfolio Equity Circle (Overlapping) */}
            <div className="absolute top-1/2 left-[15%] -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-gradient-to-br from-accent to-accent/80 flex flex-col items-center justify-center shadow-glow animate-float border-4 border-accent/30">
              <h3 className="text-2xl font-bold">Portfolio Equity</h3>
              <p className="text-sm text-center px-6 mt-2">Shared Stake In Studio Ventures</p>
            </div>
          </div>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in">
            <h3 className="text-xl font-bold uppercase mb-4 text-accent">Portfolio Equity</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every team member receives equity across the entire studio's ventures, creating diversified ownership and aligned incentives
            </p>
          </div>

          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-bold uppercase mb-4 text-accent">Majority Control</h3>
            <p className="text-muted-foreground leading-relaxed">
              Spin-out companies remain in the hands of their builders, with founders maintaining majority ownership post-separation
            </p>
          </div>

          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-bold uppercase mb-4 text-accent">Growth Path</h3>
            <p className="text-muted-foreground leading-relaxed">
              Proven builders transition into founding and management roles, backed by advisors and VC connections for rapid scaling
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquityStructure;
