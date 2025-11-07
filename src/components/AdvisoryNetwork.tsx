import { Users, TrendingUp, Building2 } from "lucide-react";

const AdvisoryNetwork = () => {
  const advantages = [
    {
      icon: Users,
      title: "Industry-Leading Advisory Board.",
      description: "Advisors from private equity, legal, healthcare, real estate, and emerging-market finance supply novel ideas and market insights, functioning as world-class ideation pipelines.",
    },
    {
      icon: TrendingUp,
      title: "Venture-Capital Connections.",
      description: "Close relationships with multiple VCs place spin-outs at the top of diligence pipelines when raising capital.",
    },
    {
      icon: Building2,
      title: "Strategic Capital Pool.",
      description: "R&D maintains its own capital pool to fund especially promising projects beyond initial resource costs.",
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900">
            Our <span className="font-bold text-gradient">Network.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-semibold">
            Strategic partnerships and advisory relationships that accelerate every venture from concept to market.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-lg p-6 hover:border-[#13224C] hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-[#13224C]/10 flex items-center justify-center mb-4 group-hover:bg-[#13224C]/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#13224C]" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#13224C]">{item.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed font-semibold">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-[#e8eef5] to-[#d4dfe9] border border-[#13224C]/30 rounded-lg px-6 py-4 max-w-3xl shadow-sm">
            <p className="text-base text-gray-700 leading-relaxed font-semibold">
              Many of our advisors work at firms that would become <span className="text-[#13224C] font-bold">paying customers</span> — creating built-in revenue pipelines for our ventures from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryNetwork;
