import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Linkedin, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dylan Gerstenhaber",
      role: "Co-Founder and Managing Partner",
      bio: "Experienced leader in venture building and strategic partnerships",
      linkedin: "https://www.linkedin.com/in/dylan-gerstenhaber-a2788324a/",
      email: "dylan@rdventure.studio",
      image: "/dylan-gerstenhaber.png"
    },
    {
      name: "Raj Jain",
      role: "Co-Founder and Managing Partner",
      bio: "Technology entrepreneur with expertise in AI and software development",
      linkedin: "https://www.linkedin.com/in/raj-jain-1d/",
      email: "raj@rdventure.studio",
      image: "/raj-jain.png"
    },
    {
      name: "Luca Cuffe",
      role: "Co-Founder and Managing Partner",
      bio: "Experienced in investment banking, venture capital, and financial markets with deep expertise in capital formation",
      linkedin: "https://www.linkedin.com/in/luca-cuffe/",
      email: "luca@rdventure.studio",
      image: "/luca-cuffe.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative">
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
            <linearGradient id="teamWaveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(224, 60%, 19%)" />
              <stop offset="100%" stopColor="hsl(224, 80%, 55%)" />
            </linearGradient>
            <linearGradient id="teamWaveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(224, 60%, 19%)" />
              <stop offset="100%" stopColor="hsl(224, 75%, 50%)" />
            </linearGradient>
            <linearGradient id="teamWaveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(224, 60%, 19%)" />
              <stop offset="100%" stopColor="hsl(224, 70%, 45%)" />
            </linearGradient>
          </defs>
          <path
            d="M 0 200 Q 300 100, 600 200 T 1200 200 L 1200 400 Q 900 300, 600 400 T 0 400 L 0 600 Q 300 500, 600 600 T 1200 600 L 1200 800 Q 900 700, 600 800 T 0 800 L 0 1000 Q 300 900, 600 1000 T 1200 1000 L 1200 1200 Q 900 1100, 600 1200 T 0 1200 L 0 1400 Q 300 1300, 600 1400 T 1200 1400 L 1200 1600 Q 900 1500, 600 1600 T 0 1600 L 0 1800 Q 300 1700, 600 1800 T 1200 1800 L 1200 2000 Q 900 1900, 600 2000 T 0 2000 L 0 2200 Q 300 2100, 600 2200 T 1200 2200 L 1200 2400 Q 900 2300, 600 2400 T 0 2400 L 0 2600 Q 300 2500, 600 2600 T 1200 2600 L 1200 2800 Q 900 2700, 600 2800 T 0 2800 L 0 3000 Q 300 2900, 600 3000 T 1200 3000 L 1200 3200 Q 900 3100, 600 3200 T 0 3200 L 0 3400 Q 300 3300, 600 3400 T 1200 3400 L 1200 3600 Q 900 3500, 600 3600 T 0 3600 L 0 3800 Q 300 3700, 600 3800 T 1200 3800"
            stroke="url(#teamWaveGradient1)"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
            className="animate-pulse"
            style={{ animationDuration: '4s' }}
          />
          <path
            d="M 0 220 Q 300 120, 600 220 T 1200 220 L 1200 420 Q 900 320, 600 420 T 0 420 L 0 620 Q 300 520, 600 620 T 1200 620 L 1200 820 Q 900 720, 600 820 T 0 820 L 0 1020 Q 300 920, 600 1020 T 1200 1020 L 1200 1220 Q 900 1120, 600 1220 T 0 1220 L 0 1420 Q 300 1320, 600 1420 T 1200 1420 L 1200 1620 Q 900 1520, 600 1620 T 0 1620 L 0 1820 Q 300 1720, 600 1820 T 1200 1820 L 1200 2020 Q 900 1920, 600 2020 T 0 2020 L 0 2220 Q 300 2120, 600 2220 T 1200 2220 L 1200 2420 Q 900 2320, 600 2420 T 0 2420 L 0 2620 Q 300 2520, 600 2620 T 1200 2620 L 1200 2820 Q 900 2720, 600 2820 T 0 2820 L 0 3020 Q 300 2920, 600 3020 T 1200 3020 L 1200 3220 Q 900 3120, 600 3220 T 0 3220 L 0 3420 Q 300 3320, 600 3420 T 1200 3420 L 1200 3620 Q 900 3520, 600 3620 T 0 3620 L 0 3820 Q 300 3720, 600 3820 T 1200 3820"
            stroke="url(#teamWaveGradient2)"
            strokeWidth="3"
            fill="none"
            opacity="0.6"
            className="animate-pulse"
            style={{ animationDuration: '5s', animationDelay: '0.5s' }}
          />
          <path
            d="M 0 240 Q 300 140, 600 240 T 1200 240 L 1200 440 Q 900 340, 600 440 T 0 440 L 0 640 Q 300 540, 600 640 T 1200 640 L 1200 840 Q 900 740, 600 840 T 0 840 L 0 1040 Q 300 940, 600 1040 T 1200 1040 L 1200 1240 Q 900 1140, 600 1240 T 0 1240 L 0 1440 Q 300 1340, 600 1440 T 1200 1440 L 1200 1640 Q 900 1540, 600 1640 T 0 1640 L 0 1840 Q 300 1740, 600 1840 T 1200 1840 L 1200 2040 Q 900 1940, 600 2040 T 0 2040 L 0 2240 Q 300 2140, 600 2240 T 1200 2240 L 1200 2440 Q 900 2340, 600 2440 T 0 2440 L 0 2640 Q 300 2540, 600 2640 T 1200 2640 L 1200 2840 Q 900 2740, 600 2840 T 0 2840 L 0 3040 Q 300 2940, 600 3040 T 1200 3040 L 1200 3240 Q 900 3140, 600 3240 T 0 3240 L 0 3440 Q 300 3340, 600 3440 T 1200 3440 L 1200 3640 Q 900 3540, 600 3640 T 0 3640 L 0 3840 Q 300 3740, 600 3840 T 1200 3840"
            stroke="url(#teamWaveGradient3)"
            strokeWidth="4"
            fill="none"
            opacity="0.8"
            className="animate-pulse"
            style={{ animationDuration: '6s', animationDelay: '1s' }}
          />
        </svg>
      </div>

      <Header />

      {/* Content with relative positioning */}
      <div className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="relative py-32 px-6 bg-white overflow-hidden">
          {/* Decorative bubbles with yellow accents */}
          <div className="absolute top-20 left-10 w-48 h-48 bg-[#FBEB91]/20 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-56 h-56 bg-[#13224C]/12 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#13224C]/20 rounded-full blur-lg"></div>
          <div className="absolute top-60 right-1/3 w-44 h-44 bg-[#FBEB91]/15 rounded-full blur-xl"></div>
          <div className="absolute bottom-40 right-10 w-36 h-36 bg-[#13224C]/15 rounded-full blur-lg"></div>
          <div className="absolute top-32 left-1/3 w-32 h-32 bg-[#FBEB91]/12 rounded-full blur-2xl"></div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-20 animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-[#13224C]/10 flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-[#13224C]" strokeWidth={1.5} />
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gray-900">
                Meet The <span className="font-bold text-gradient">Team.</span>
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto font-semibold leading-relaxed">
                A collective of experienced founders, engineers, and strategists dedicated to building the next generation of software companies.
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="relative py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:border-blue-300 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Profile Picture */}
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-gray-200">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{member.name}</h3>
                  <p className="text-[#13224C] font-semibold mb-4 text-base">{member.role}.</p>
                  <p className="text-gray-600 text-base leading-relaxed font-semibold mb-6">
                    {member.bio}
                  </p>
                  
                  {/* Contact Links */}
                  <div className="flex items-center gap-4">
                    <a 
                      href={member.linkedin}
                      className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" strokeWidth={1.5} />
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="relative py-32 px-6 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
              Join Our <span className="font-bold text-gradient">Mission.</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-semibold leading-relaxed mb-8">
              We're always looking for exceptional talent to join our ventures. If you're passionate about building innovative products and want to be part of a founder factory, we'd love to hear from you.
            </p>
            <a 
              href="mailto:careers@rdventure.studio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#13224C] text-white rounded-lg hover:bg-[#0d1730] transition-colors font-semibold shadow-md"
            >
              <Mail className="w-5 h-5" strokeWidth={1.5} />
              Get In Touch
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Team;

