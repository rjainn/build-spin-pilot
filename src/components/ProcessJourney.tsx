import { Lightbulb, Search, Users, Calendar, CheckCircle2, TrendingUp } from "lucide-react";

const ProcessJourney = () => {
  const stages = [
    {
      icon: Lightbulb,
      title: "Idea",
      description: "We originate product opportunities through our industry advisor network, proprietary data ingestion, and formal partnerships with external organizations",
      position: "left"
    },
    {
      icon: Search,
      title: "Research Validation",
      description: "Deep market analysis and problem validation across high-value industries",
      position: "right"
    },
    {
      icon: Users,
      title: "Team Assignment",
      description: "Elite engineers, designers, and strategists assembled for optimal execution",
      position: "left"
    },
    {
      icon: Calendar,
      title: "MVP Build Phase",
      subtitle: "(4 Weeks)",
      description: "Rapid development sprints transforming concepts into production-ready products",
      position: "right"
    },
    {
      icon: CheckCircle2,
      title: "Evaluation",
      description: "Rigorous testing in real-world environments to validate market fit and traction",
      position: "left"
    },
    {
      icon: TrendingUp,
      title: "Spin Out & Capital Rise",
      description: "Successful projects become independent portfolio companies prepared for scale",
      position: "right"
    }
  ];

  return (
    <section className="relative py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold uppercase mb-6">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to capital-ready company in a systematic, repeatable framework
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Diagonal connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 via-accent to-accent/50 -translate-x-1/2 hidden md:block"></div>

          {/* Stages */}
          <div className="space-y-24">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isLeft = stage.position === "left";
              
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isLeft ? "md:flex-row-reverse" : ""
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? "md:text-right" : ""}`}>
                    <div className={`bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-glow ${
                      isLeft ? "animate-fade-in-right" : "animate-fade-in-left"
                    }`}>
                      <h3 className="text-2xl font-bold mb-2 uppercase">
                        {stage.title}
                      </h3>
                      {stage.subtitle && (
                        <p className="text-accent font-semibold mb-3">
                          {stage.subtitle}
                        </p>
                      )}
                      <p className="text-muted-foreground leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-card border-4 border-accent/50 flex items-center justify-center shadow-glow hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-accent" />
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessJourney;
