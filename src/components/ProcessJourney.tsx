import { Lightbulb, Search, Users, Calendar, CheckCircle2, TrendingUp } from "lucide-react";

const ProcessJourney = () => {
  const stages = [
    { icon: Lightbulb, title: "Idea", y: 85 },
    { icon: Search, title: "Research Validation", y: 70 },
    { icon: Users, title: "Team Assignment", y: 55 },
    { icon: Calendar, title: "MVP Build (4 Weeks)", y: 40 },
    { icon: CheckCircle2, title: "Evaluation", y: 25 },
    { icon: TrendingUp, title: "Spin Out & Capital Rise", y: 10 }
  ];

  return (
    <section className="relative py-32 px-6 bg-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Our <span className="font-normal text-gradient">Process</span>
          </h2>
          <p className="text-base text-foreground/70 max-w-2xl mx-auto font-light">
            From concept to capital-ready company in a systematic, repeatable framework
          </p>
        </div>

        {/* Process Graph */}
        <div className="relative h-[600px] max-w-5xl mx-auto">
          {/* Y-axis label */}
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 text-xs text-foreground/50 font-light whitespace-nowrap">
            Value & Maturity
          </div>
          
          {/* X-axis label */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 text-xs text-foreground/50 font-light">
            Time
          </div>

          {/* Graph container */}
          <div className="relative w-full h-full border-l border-b border-foreground/10">
            {/* Diagonal progression line */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(210, 100%, 60%)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(210, 100%, 60%)" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <path
                d="M 5 95 L 95 5"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                vectorEffect="non-scaling-stroke"
                className="animate-fade-in"
              />
            </svg>

            {/* Stage markers */}
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const x = (index / (stages.length - 1)) * 90 + 5; // Distribute along x-axis
              
              return (
                <div
                  key={index}
                  className="absolute group animate-fade-in"
                  style={{
                    left: `${x}%`,
                    top: `${stage.y}%`,
                    animationDelay: `${index * 0.15}s`
                  }}
                >
                  {/* Connection dot */}
                  <div className="absolute -translate-x-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 rounded-full bg-accent border-2 border-background shadow-lg"></div>
                  </div>
                  
                  {/* Stage card */}
                  <div className="absolute left-0 -translate-x-1/2 translate-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-card/95 backdrop-blur-sm border border-border/30 rounded-lg p-4 shadow-xl min-w-[180px]">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-sm font-normal">{stage.title}</h3>
                      </div>
                    </div>
                  </div>
                  
                  {/* Always visible label */}
                  <div className="absolute left-0 -translate-x-1/2 translate-y-8 text-center">
                    <div className="bg-background/80 backdrop-blur-sm border border-border/20 rounded px-3 py-1 min-w-[140px]">
                      <p className="text-xs text-foreground/80 font-light whitespace-nowrap">{stage.title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Description box */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-card/20 border border-border/20 rounded-lg p-6 text-center">
            <p className="text-sm text-foreground/70 font-light leading-relaxed">
              We originate product opportunities through our industry advisor network, proprietary data ingestion, 
              and formal partnerships with external organizations. Each stage builds momentum toward a capital-ready spin-out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessJourney;
