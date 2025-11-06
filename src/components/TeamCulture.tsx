import { Target, Zap, Award } from "lucide-react";

const TeamCulture = () => {
  const principles = [
    {
      icon: Target,
      title: "High Responsibility",
      description: "Team members have significant ownership over product development, strategy, and execution",
    },
    {
      icon: Zap,
      title: "Rapid Iteration",
      description: "Elite engineers, designers, and strategists moving fast from concept to production",
    },
    {
      icon: Award,
      title: "Founder Trajectory",
      description: "Many team members transition to run companies as founders and executives post-spin-out",
    },
  ];

  return (
    <section className="relative py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Elite <span className="font-normal text-gradient">Team Culture</span>
          </h2>
          <p className="text-base text-foreground/70 max-w-3xl mx-auto font-light">
            We attract world-class builders who thrive on ownership, autonomy, and the opportunity to shape entire companies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-foreground/10 rounded-lg p-6 text-center hover:border-accent/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-foreground/70" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-normal mb-3">{principle.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed font-light">{principle.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-white/5 via-white/10 to-white/5 border border-foreground/10 rounded-lg p-8 text-center">
          <p className="text-lg font-light mb-2">
            Gain exposure to multiple products being built simultaneously
          </p>
          <p className="text-sm text-foreground/60 max-w-3xl mx-auto font-light">
            Unlike traditional startups, studio members experience diverse challenges, technologies, and markets — accelerating their growth and expanding their capabilities exponentially
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamCulture;
