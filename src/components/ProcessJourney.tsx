import { Lightbulb, Search, Users, Calendar, CheckCircle2, TrendingUp } from "lucide-react";

const ProcessJourney = () => {
  const stages = [
    { icon: Lightbulb, title: "Idea." },
    { icon: Search, title: "Research Validation." },
    { icon: Users, title: "Team Assignment." },
    { icon: Calendar, title: "MVP Build Phase." },
    { icon: CheckCircle2, title: "Evaluation." },
    { icon: TrendingUp, title: "Spin Out &\nCapital Rise." }
  ];

  return (
    <section className="relative py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-left mb-12 animate-fade-in">
          <p className="text-lg text-[#13224C] mb-4 uppercase-header uppercase font-bold">HOW IT WORKS</p>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
            Venture Launch Process:<br />
            From Idea To Spin-Out.
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl font-semibold leading-relaxed">
            R&D Venture Studio functions as a founder factory - where capable engineers collaboratively prototype, validate, and launch multiple software businesses simultaneously.
          </p>
        </div>

        {/* Process Diagram */}
        <div className="relative h-[400px] max-w-6xl mx-auto">

          {/* Wavy diagonal line with stages */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="processLineGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(224, 60%, 19%)" stopOpacity="0.5" />
                <stop offset="50%" stopColor="hsl(224, 80%, 55%)" stopOpacity="0.7" />
                <stop offset="100%" stopColor="hsl(51, 92%, 78%)" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            
            {/* Sigmoidal curve path */}
            <path
              d="M 100 360 Q 200 350, 300 320 Q 400 280, 500 220 Q 600 160, 700 120 Q 800 90, 900 70 Q 1000 50, 1100 40"
              stroke="url(#processLineGradient)"
              strokeWidth="3"
              fill="none"
              className="animate-fade-in"
            />
            
            {/* Stage positions along the wavy path */}
            {stages.map((stage, index) => {
              // Calculate positions along the sigmoidal curve
              const positions = [
                { x: 100, y: 360 },
                { x: 300, y: 320 },
                { x: 500, y: 220 },
                { x: 700, y: 120 },
                { x: 900, y: 70 },
                { x: 1100, y: 40 }
              ];
              const pos = positions[index];
              
              return (
                <g key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  {/* White circle background */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r="35"
                    fill="white"
                    className="drop-shadow-lg"
                  />
                </g>
              );
            })}
          </svg>

          {/* Stage markers with icons and labels (HTML positioned) */}
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const positions = [
              { x: 100, y: 360 },
              { x: 300, y: 320 },
              { x: 500, y: 220 },
              { x: 700, y: 120 },
              { x: 900, y: 70 },
              { x: 1100, y: 40 }
            ];
            const pos = positions[index];
            const xPercent = (pos.x / 1200) * 100;
            const yPercent = (pos.y / 400) * 100;
            
            return (
              <div
                key={index}
                className="absolute animate-fade-in"
                style={{
                  left: `${xPercent}%`,
                  top: `${yPercent}%`,
                  transform: 'translate(-50%, -50%)',
                  animationDelay: `${index * 0.15}s`
                }}
              >
                {/* Icon in white circle */}
                <div className="w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center shadow-lg">
                  <Icon className="w-8 h-8 text-gray-800" strokeWidth={1.5} />
                </div>
                
                {/* Label below */}
                <div className="absolute top-[80px] left-1/2 -translate-x-1/2 text-center min-w-[160px]">
                  <p className="text-base text-gray-900 font-semibold whitespace-pre-line leading-tight">
                    {stage.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessJourney;
