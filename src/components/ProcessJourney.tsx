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
    <section className="relative py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Our <span className="font-normal text-gradient">Process</span>
          </h2>
          <p className="text-base text-foreground/70 max-w-2xl mx-auto font-light">
            From concept to capital-ready company in a systematic, repeatable framework
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Subtle connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-foreground/10 to-transparent -translate-x-1/2 hidden md:block"></div>

          {/* Stages */}
          <div className="space-y-16">
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
                    <div className={`bg-card/30 backdrop-blur-sm border border-border/30 rounded-lg p-6 hover:border-accent/30 transition-all duration-300 ${
                      isLeft ? "animate-fade-in-right" : "animate-fade-in-left"
                    }`}>
                      <h3 className="text-xl font-normal mb-1">
                        {stage.title}
                      </h3>
                      {stage.subtitle && (
                        <p className="text-accent/90 text-sm mb-2 font-light">
                          {stage.subtitle}
                        </p>
                      )}
                      <p className="text-foreground/70 text-sm leading-relaxed font-light">
                        {stage.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-card/50 border border-accent/30 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-accent/90" strokeWidth={1.5} />
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
