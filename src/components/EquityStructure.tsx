const EquityStructure = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            BUILD, OWN, AND <span className="font-normal text-gradient">SCALE YOUR EQUITY</span>
          </h2>
          <p className="text-base text-foreground/70 max-w-3xl mx-auto font-light">
            Builders receive portfolio equity alongside majority ownership in the company they spin out, subject to vesting
          </p>
        </div>

        {/* Equity Visualization - Side by Side */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 mb-20">
          {/* Majority Ownership Circle */}
          <div className="relative animate-scale-in">
            <div className="w-[280px] h-[280px] rounded-full bg-gradient-to-br from-foreground/5 to-foreground/10 border border-foreground/20 flex flex-col items-center justify-center backdrop-blur-sm">
              <h3 className="text-2xl font-light mb-2">Majority Ownership</h3>
              <p className="text-foreground/60 text-sm font-light">Your portfolio company</p>
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border border-accent/20 scale-110"></div>
          </div>

          {/* Plus Symbol */}
          <div className="text-4xl font-light text-foreground/30">+</div>

          {/* Portfolio Equity Circle */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-[240px] h-[240px] rounded-full bg-gradient-to-br from-accent/10 to-accent/20 border border-accent/30 flex flex-col items-center justify-center backdrop-blur-sm">
              <h3 className="text-xl font-light mb-2">Portfolio Equity</h3>
              <p className="text-sm text-foreground/70 text-center px-6 font-light">Shared Stake In Studio Ventures</p>
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border border-accent/30 scale-110"></div>
          </div>
        </div>

        {/* Equity explanation */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/5 border border-foreground/10 rounded-lg p-8 text-center">
            <p className="text-base text-foreground/70 font-light leading-relaxed">
              Every team member owns a piece of the entire studio's success while maintaining substantial control 
              of the company they build. This dual ownership structure aligns incentives and creates long-term value.
            </p>
          </div>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-foreground/10 rounded-lg p-6 hover:border-accent/30 transition-all duration-300 animate-fade-in">
            <h3 className="text-lg font-normal mb-3">Portfolio Equity</h3>
            <p className="text-foreground/60 text-sm leading-relaxed font-light">
              Every team member receives equity across the entire studio's ventures, creating diversified ownership and aligned incentives
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-foreground/10 rounded-lg p-6 hover:border-accent/30 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-lg font-normal mb-3">Majority Control</h3>
            <p className="text-foreground/60 text-sm leading-relaxed font-light">
              Spin-out companies remain in the hands of their builders, with founders maintaining majority ownership post-separation
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-foreground/10 rounded-lg p-6 hover:border-accent/30 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-normal mb-3">Growth Path</h3>
            <p className="text-foreground/60 text-sm leading-relaxed font-light">
              Proven builders transition into founding and management roles, backed by advisors and VC connections for rapid scaling
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquityStructure;
