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
    <section className="relative py-32 px-6 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold uppercase mb-6">
            Our <span className="text-gradient">Network</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic partnerships and advisory relationships that accelerate every venture from concept to market
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-accent/10 border border-accent/30 rounded-2xl px-8 py-6 max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Many of our advisors work at firms that would become <span className="text-accent font-semibold">paying customers</span> — creating built-in revenue pipelines for our ventures from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryNetwork;
