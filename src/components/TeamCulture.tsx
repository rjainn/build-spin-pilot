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
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold uppercase mb-6">
            Elite <span className="text-gradient">Team Culture</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We attract world-class builders who thrive on ownership, autonomy, and the opportunity to shape entire companies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-10 text-center hover:border-accent/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border border-accent/20 rounded-3xl p-12 text-center">
          <p className="text-2xl font-semibold mb-4">
            Gain exposure to multiple products being built simultaneously
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Unlike traditional startups, studio members experience diverse challenges, technologies, and markets — accelerating their growth and expanding their capabilities exponentially
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamCulture;
