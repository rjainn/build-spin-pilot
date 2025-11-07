const EquityStructure = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-white text-gray-900">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900">
            BUILD, OWN, AND <span className="font-bold text-gradient">SCALE YOUR EQUITY.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-semibold">
            Builders receive portfolio equity alongside majority ownership in the company they spin out, subject to vesting.
          </p>
        </div>

        {/* Equity Visualization - Side by Side */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 mb-20">
          {/* Majority Ownership Circle */}
          <div className="relative animate-scale-in">
            <div className="w-[280px] h-[280px] rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-300 flex flex-col items-center justify-center shadow-xl">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Majority Ownership</h3>
              <p className="text-gray-600 text-base font-semibold">Your portfolio company.</p>
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#13224C] scale-110"></div>
          </div>

          {/* Plus Symbol with yellow accent */}
          <div className="text-4xl font-bold text-[#FBEB91]">+</div>

          {/* Portfolio Equity Circle */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-[200px] h-[200px] rounded-full bg-gradient-to-br from-[#e8eef5] to-[#d4dfe9] border-2 border-[#13224C] flex flex-col items-center justify-center shadow-xl">
              <h3 className="text-lg font-bold mb-2 text-gray-900">Portfolio Equity</h3>
              <p className="text-sm text-gray-700 text-center px-4 font-semibold">Shared Stake In Studio Ventures.</p>
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#13224C] scale-110"></div>
          </div>
        </div>

        {/* Equity explanation */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center shadow-sm">
            <p className="text-lg text-gray-700 font-semibold leading-relaxed">
              Every team member owns a piece of the entire studio's success while maintaining substantial control 
              of the company they build. This dual ownership structure aligns incentives and creates long-term value.
            </p>
          </div>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-lg p-6 hover:border-[#13224C] hover:shadow-lg transition-all duration-300 animate-fade-in">
            <h3 className="text-2xl font-bold mb-3 text-[#13224C]">Portfolio Equity.</h3>
            <p className="text-gray-600 text-base leading-relaxed font-semibold">
              Every team member receives equity across the entire studio's ventures, creating diversified ownership and aligned incentives.
            </p>
          </div>

          <div className="bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-lg p-6 hover:border-[#13224C] hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-2xl font-bold mb-3 text-[#13224C]">Majority Control.</h3>
            <p className="text-gray-600 text-base leading-relaxed font-semibold">
              Spin-out companies remain in the hands of their builders, with founders maintaining majority ownership post-separation.
            </p>
          </div>

          <div className="bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-lg p-6 hover:border-[#13224C] hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-3 text-[#13224C]">Growth Path.</h3>
            <p className="text-gray-600 text-base leading-relaxed font-semibold">
              Proven builders transition into founding and management roles, backed by advisors and VC connections for rapid scaling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquityStructure;
