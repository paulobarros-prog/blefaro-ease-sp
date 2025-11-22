import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSection from "@/components/FAQSection";
import DoctorBio from "@/components/DoctorBio";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <VideoSection />
        <WhatsAppCTA />
        <FAQSection />
        <DoctorBio />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
