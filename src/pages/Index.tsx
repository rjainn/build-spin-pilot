import Hero from "@/components/Hero";
import ProcessJourney from "@/components/ProcessJourney";
import EquityStructure from "@/components/EquityStructure";
import AdvisoryNetwork from "@/components/AdvisoryNetwork";
import TeamCulture from "@/components/TeamCulture";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProcessJourney />
      <EquityStructure />
      <TeamCulture />
      <AdvisoryNetwork />
      <Footer />
    </div>
  );
};

export default Index;
