import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSection from "@/components/FAQSection";
import DoctorBio from "@/components/DoctorBio";
import Footer from "@/components/Footer";
import Indications from "@/components/Indications";
import AboutProcedure from "@/components/AboutProcedure";
import Benefits from "@/components/Benefits";
import Recovery from "@/components/Recovery";
import Differentials from "@/components/Differentials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <Indications />
        <VideoSection />
        <AboutProcedure />
        <Benefits />
        <Recovery />
        <Differentials />
        <DoctorBio />
        <FAQSection />
        <WhatsAppCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
