const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tight text-gray-900">
              R&D VENTURE <span className="font-bold text-gradient">STUDIO</span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-bold tracking-wide text-gray-800">
              Build. Validate. Spin-Out. Repeat.
            </p>
            
            <div className="max-w-xl pt-4">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-semibold">
                An innovative founder factory bringing together elite engineers, designers, and strategists to build bold AI-native products from zero to MVP in targeted development sprints.
              </p>
            </div>
            
            <div className="pt-4">
              <p className="text-base text-gray-600 font-semibold leading-relaxed max-w-xl">
                We uncover overlooked problems in high-value, complex industries and rapidly spin out companies that reshape these markets.
              </p>
            </div>
          </div>

          {/* Right: Enhanced Wave Graphic with more prominence */}
          <div className="relative h-[600px] lg:h-[700px] flex items-center justify-center">
            <svg
              className="w-full h-full scale-150"
              viewBox="0 0 600 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Animated wave paths with gradient from navy to light blue */}
              <defs>
                <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(224, 60%, 19%)" />
                  <stop offset="100%" stopColor="hsl(224, 80%, 55%)" />
                </linearGradient>
                <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(224, 60%, 19%)" />
                  <stop offset="100%" stopColor="hsl(224, 75%, 50%)" />
                </linearGradient>
                <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(224, 60%, 19%)" />
                  <stop offset="100%" stopColor="hsl(224, 70%, 45%)" />
                </linearGradient>
              </defs>
              <path
                d="M 50 300 Q 150 250, 250 300 T 550 300"
                stroke="url(#waveGradient1)"
                strokeWidth="4"
                fill="none"
                opacity="0.5"
                className="animate-pulse"
                style={{ animationDuration: '3s' }}
              />
              <path
                d="M 50 320 Q 150 270, 250 320 T 550 320"
                stroke="url(#waveGradient2)"
                strokeWidth="5"
                fill="none"
                opacity="0.7"
                className="animate-pulse"
                style={{ animationDuration: '4s', animationDelay: '0.5s' }}
              />
              <path
                d="M 50 340 Q 150 290, 250 340 T 550 340"
                stroke="url(#waveGradient3)"
                strokeWidth="6"
                fill="none"
                opacity="0.9"
                className="animate-pulse"
                style={{ animationDuration: '5s', animationDelay: '1s' }}
              />
              <path
                d="M 50 280 Q 150 230, 250 280 T 550 280"
                stroke="hsl(224, 70%, 60%)"
                strokeWidth="3"
                fill="none"
                opacity="0.4"
                className="animate-pulse"
                style={{ animationDuration: '6s', animationDelay: '1.5s' }}
              />
              
              {/* Dots along waves with yellow accents */}
              <circle cx="150" cy="250" r="5" fill="hsl(51, 92%, 78%)" opacity="0.8">
                <animate attributeName="cy" values="250;270;250" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="350" cy="300" r="6" fill="hsl(224, 60%, 19%)" opacity="0.7">
                <animate attributeName="cy" values="300;320;300" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="450" cy="320" r="5" fill="hsl(51, 92%, 78%)" opacity="0.8">
                <animate attributeName="cy" values="320;340;320" dur="5s" repeatCount="indefinite" />
              </circle>
            </svg>
            
            {/* Enhanced background glow */}
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
