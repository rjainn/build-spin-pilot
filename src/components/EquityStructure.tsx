const EquityStructure = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            BUILD, OWN, AND <span className="font-normal text-gradient">SCALE YOUR EQUITY</span>
          </h2>
          <p className="text-base text-foreground/70 max-w-3xl mx-auto font-light">
            Builders receive portfolio equity alongside majority ownership in the company they spin out, subject to vesting
          </p>
        </div>

        {/* Equity Visualization */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16">
          {/* Visual Diagram */}
          <div className="relative w-full max-w-xl aspect-square flex items-center justify-center animate-scale-in">
            {/* Majority Ownership Circle (Large) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-foreground/10">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-card/40 to-card/20 border border-border/20 flex flex-col items-center justify-center backdrop-blur-sm">
                <h3 className="text-2xl font-light mb-1">Majority Ownership</h3>
                <p className="text-foreground/60 text-sm font-light">Your portfolio company</p>
              </div>
            </div>

            {/* Portfolio Equity Circle (Overlapping) */}
            <div className="absolute top-1/2 left-[18%] -translate-y-1/2 w-[220px] h-[220px] rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex flex-col items-center justify-center border border-accent/30 backdrop-blur-sm animate-float">
              <h3 className="text-xl font-light">Portfolio Equity</h3>
              <p className="text-sm text-foreground/70 text-center px-6 mt-1 font-light">Shared Stake In Studio Ventures</p>
            </div>
          </div>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-card/20 backdrop-blur-sm border border-border/20 rounded-lg p-6 hover:border-accent/30 transition-all duration-300 animate-fade-in">
            <h3 className="text-lg font-normal mb-3 text-accent/90">Portfolio Equity</h3>
            <p className="text-foreground/70 text-sm leading-relaxed font-light">
              Every team member receives equity across the entire studio's ventures, creating diversified ownership and aligned incentives
            </p>
          </div>

          <div className="bg-card/20 backdrop-blur-sm border border-border/20 rounded-lg p-6 hover:border-accent/30 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-lg font-normal mb-3 text-accent/90">Majority Control</h3>
            <p className="text-foreground/70 text-sm leading-relaxed font-light">
              Spin-out companies remain in the hands of their builders, with founders maintaining majority ownership post-separation
            </p>
          </div>

          <div className="bg-card/20 backdrop-blur-sm border border-border/20 rounded-lg p-6 hover:border-accent/30 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-normal mb-3 text-accent/90">Growth Path</h3>
            <p className="text-foreground/70 text-sm leading-relaxed font-light">
              Proven builders transition into founding and management roles, backed by advisors and VC connections for rapid scaling
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquityStructure;
