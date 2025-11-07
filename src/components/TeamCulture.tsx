import { Target, Zap, Award } from "lucide-react";

const TeamCulture = () => {
  const principles = [
    {
      icon: Target,
      title: "High Responsibility.",
      description: "Team members have significant ownership over product development, strategy, and execution.",
    },
    {
      icon: Zap,
      title: "Rapid Iteration.",
      description: "Elite engineers, designers, and strategists moving fast from concept to production.",
    },
    {
      icon: Award,
      title: "Founder Trajectory.",
      description: "Many team members transition to run companies as founders and executives post-spin-out.",
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900">
            Elite <span className="font-bold text-gradient">Team Culture.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-semibold">
            We attract world-class builders who thrive on ownership, autonomy, and the opportunity to shape entire companies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className="bg-white backdrop-blur-sm border border-gray-200 rounded-lg p-6 text-center hover:border-[#13224C] hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-[#13224C]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-[#13224C]" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#13224C]">{principle.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed font-semibold">{principle.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#e8eef5] via-white to-[#e8eef5] border border-gray-200 rounded-lg p-8 text-center shadow-sm">
          <p className="text-xl font-bold mb-2 text-gray-900">
            Gain exposure to multiple products being built simultaneously.
          </p>
          <p className="text-base text-gray-600 max-w-3xl mx-auto font-semibold">
            Unlike traditional startups, studio members experience diverse challenges, technologies, and markets — accelerating their growth and expanding their capabilities exponentially.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamCulture;
