import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProcessJourney from "@/components/ProcessJourney";
import EquityStructure from "@/components/EquityStructure";
import AdvisoryNetwork from "@/components/AdvisoryNetwork";
import TeamCulture from "@/components/TeamCulture";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      
      {/* Global Synthetic Wave Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" style={{ opacity: 0.08 }}>
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1200 4000"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bgWaveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(224, 60%, 19%)" />
              <stop offset="70%" stopColor="hsl(224, 80%, 55%)" />
              <stop offset="100%" stopColor="hsl(51, 92%, 78%)" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="bgWaveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(224, 60%, 19%)" />
              <stop offset="100%" stopColor="hsl(224, 75%, 50%)" />
            </linearGradient>
            <linearGradient id="bgWaveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(224, 60%, 19%)" />
              <stop offset="100%" stopColor="hsl(224, 70%, 45%)" />
            </linearGradient>
          </defs>
          {/* Animated wave paths spanning entire page */}
          <path
            d="M 0 200 Q 300 100, 600 200 T 1200 200 L 1200 400 Q 900 300, 600 400 T 0 400 L 0 600 Q 300 500, 600 600 T 1200 600 L 1200 800 Q 900 700, 600 800 T 0 800 L 0 1000 Q 300 900, 600 1000 T 1200 1000 L 1200 1200 Q 900 1100, 600 1200 T 0 1200 L 0 1400 Q 300 1300, 600 1400 T 1200 1400 L 1200 1600 Q 900 1500, 600 1600 T 0 1600 L 0 1800 Q 300 1700, 600 1800 T 1200 1800 L 1200 2000 Q 900 1900, 600 2000 T 0 2000 L 0 2200 Q 300 2100, 600 2200 T 1200 2200 L 1200 2400 Q 900 2300, 600 2400 T 0 2400 L 0 2600 Q 300 2500, 600 2600 T 1200 2600 L 1200 2800 Q 900 2700, 600 2800 T 0 2800 L 0 3000 Q 300 2900, 600 3000 T 1200 3000 L 1200 3200 Q 900 3100, 600 3200 T 0 3200 L 0 3400 Q 300 3300, 600 3400 T 1200 3400 L 1200 3600 Q 900 3500, 600 3600 T 0 3600 L 0 3800 Q 300 3700, 600 3800 T 1200 3800"
            stroke="url(#bgWaveGradient1)"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
            className="animate-pulse"
            style={{ animationDuration: '4s' }}
          />
          <path
            d="M 0 220 Q 300 120, 600 220 T 1200 220 L 1200 420 Q 900 320, 600 420 T 0 420 L 0 620 Q 300 520, 600 620 T 1200 620 L 1200 820 Q 900 720, 600 820 T 0 820 L 0 1020 Q 300 920, 600 1020 T 1200 1020 L 1200 1220 Q 900 1120, 600 1220 T 0 1220 L 0 1420 Q 300 1320, 600 1420 T 1200 1420 L 1200 1620 Q 900 1520, 600 1620 T 0 1620 L 0 1820 Q 300 1720, 600 1820 T 1200 1820 L 1200 2020 Q 900 1920, 600 2020 T 0 2020 L 0 2220 Q 300 2120, 600 2220 T 1200 2220 L 1200 2420 Q 900 2320, 600 2420 T 0 2420 L 0 2620 Q 300 2520, 600 2620 T 1200 2620 L 1200 2820 Q 900 2720, 600 2820 T 0 2820 L 0 3020 Q 300 2920, 600 3020 T 1200 3020 L 1200 3220 Q 900 3120, 600 3220 T 0 3220 L 0 3420 Q 300 3320, 600 3420 T 1200 3420 L 1200 3620 Q 900 3520, 600 3620 T 0 3620 L 0 3820 Q 300 3720, 600 3820 T 1200 3820"
            stroke="url(#bgWaveGradient2)"
            strokeWidth="3"
            fill="none"
            opacity="0.6"
            className="animate-pulse"
            style={{ animationDuration: '5s', animationDelay: '0.5s' }}
          />
          <path
            d="M 0 240 Q 300 140, 600 240 T 1200 240 L 1200 440 Q 900 340, 600 440 T 0 440 L 0 640 Q 300 540, 600 640 T 1200 640 L 1200 840 Q 900 740, 600 840 T 0 840 L 0 1040 Q 300 940, 600 1040 T 1200 1040 L 1200 1240 Q 900 1140, 600 1240 T 0 1240 L 0 1440 Q 300 1340, 600 1440 T 1200 1440 L 1200 1640 Q 900 1540, 600 1640 T 0 1640 L 0 1840 Q 300 1740, 600 1840 T 1200 1840 L 1200 2040 Q 900 1940, 600 2040 T 0 2040 L 0 2240 Q 300 2140, 600 2240 T 1200 2240 L 1200 2440 Q 900 2340, 600 2440 T 0 2440 L 0 2640 Q 300 2540, 600 2640 T 1200 2640 L 1200 2840 Q 900 2740, 600 2840 T 0 2840 L 0 3040 Q 300 2940, 600 3040 T 1200 3040 L 1200 3240 Q 900 3140, 600 3240 T 0 3240 L 0 3440 Q 300 3340, 600 3440 T 1200 3440 L 1200 3640 Q 900 3540, 600 3640 T 0 3640 L 0 3840 Q 300 3740, 600 3840 T 1200 3840"
            stroke="url(#bgWaveGradient3)"
            strokeWidth="4"
            fill="none"
            opacity="0.8"
            className="animate-pulse"
            style={{ animationDuration: '6s', animationDelay: '1s' }}
          />
        </svg>
      </div>
      
      {/* Content with relative positioning */}
      <div className="relative z-10 pt-16">
        <Hero />
        <ProcessJourney />
        <EquityStructure />
        <TeamCulture />
        <AdvisoryNetwork />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
