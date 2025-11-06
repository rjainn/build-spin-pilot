const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground">
              R&D VENTURE <span className="font-normal text-gradient">STUDIO</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light tracking-wide text-foreground/90">
              Build. Validate. Spin-Out. Repeat.
            </p>
            
            <div className="max-w-xl pt-4">
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed font-light">
                An innovative founder factory bringing together elite engineers, designers, and strategists to build bold AI-native products from zero to MVP in targeted development sprints.
              </p>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-foreground/60 font-light leading-relaxed max-w-xl">
                We uncover overlooked problems in high-value, complex industries and rapidly spin out companies that reshape these markets.
              </p>
            </div>
          </div>

          {/* Right: Animated Wave Graphic */}
          <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
            <svg
              className="w-full h-full"
              viewBox="0 0 600 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Animated wave paths */}
              <path
                d="M 50 300 Q 150 250, 250 300 T 550 300"
                stroke="hsl(210, 100%, 60%)"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
                className="animate-pulse"
                style={{ animationDuration: '3s' }}
              />
              <path
                d="M 50 320 Q 150 270, 250 320 T 550 320"
                stroke="hsl(210, 100%, 60%)"
                strokeWidth="2"
                fill="none"
                opacity="0.5"
                className="animate-pulse"
                style={{ animationDuration: '4s', animationDelay: '0.5s' }}
              />
              <path
                d="M 50 340 Q 150 290, 250 340 T 550 340"
                stroke="hsl(210, 100%, 60%)"
                strokeWidth="3"
                fill="none"
                opacity="0.7"
                className="animate-pulse"
                style={{ animationDuration: '5s', animationDelay: '1s' }}
              />
              <path
                d="M 50 280 Q 150 230, 250 280 T 550 280"
                stroke="hsl(0, 0%, 100%)"
                strokeWidth="1"
                fill="none"
                opacity="0.2"
                className="animate-pulse"
                style={{ animationDuration: '6s', animationDelay: '1.5s' }}
              />
              
              {/* Dots along waves */}
              <circle cx="150" cy="250" r="3" fill="hsl(210, 100%, 60%)" opacity="0.6">
                <animate attributeName="cy" values="250;270;250" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="350" cy="300" r="4" fill="hsl(0, 0%, 100%)" opacity="0.4">
                <animate attributeName="cy" values="300;320;300" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="450" cy="320" r="3" fill="hsl(210, 100%, 60%)" opacity="0.5">
                <animate attributeName="cy" values="320;340;320" dur="5s" repeatCount="indefinite" />
              </circle>
            </svg>
            
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-accent/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
