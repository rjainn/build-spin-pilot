import { Users, TrendingUp, Building2 } from "lucide-react";

const AdvisoryNetwork = () => {
  const advantages = [
    {
      icon: Users,
      title: "Industry-Leading Advisory Board",
      description: "Advisors from private equity, legal, healthcare, real estate, and emerging-market finance supply novel ideas and market insights, functioning as world-class ideation pipelines",
    },
    {
      icon: TrendingUp,
      title: "Venture-Capital Connections",
      description: "Close relationships with multiple VCs place spin-outs at the top of diligence pipelines when raising capital",
    },
    {
      icon: Building2,
      title: "Strategic Capital Pool",
      description: "R&D maintains its own capital pool to fund especially promising projects beyond initial resource costs",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-card/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Our <span className="font-normal text-gradient">Network</span>
          </h2>
          <p className="text-base text-foreground/70 max-w-3xl mx-auto font-light">
            Strategic partnerships and advisory relationships that accelerate every venture from concept to market
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-card/20 backdrop-blur-sm border border-border/20 rounded-lg p-6 hover:border-accent/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-accent/90" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-normal mb-3">{item.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed font-light">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-accent/5 border border-accent/20 rounded-lg px-6 py-4 max-w-3xl">
            <p className="text-sm text-foreground/80 leading-relaxed font-light">
              Many of our advisors work at firms that would become <span className="text-accent/90 font-normal">paying customers</span> — creating built-in revenue pipelines for our ventures from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryNetwork;
