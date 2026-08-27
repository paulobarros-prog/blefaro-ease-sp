import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Identification from "@/components/Identification";
import VideoSection from "@/components/VideoSection";
import Naturalness from "@/components/Naturalness";
import AboutProcedure from "@/components/AboutProcedure";
import Improvements from "@/components/Improvements";
import Recovery from "@/components/Recovery";
import Differentials from "@/components/Differentials";
import DoctorBio from "@/components/DoctorBio";
import FAQSection from "@/components/FAQSection";
import Qualification from "@/components/Qualification";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <Identification />
        <VideoSection />
        <Naturalness />
        <AboutProcedure />
        <Improvements />
        <Recovery />
        <Differentials />
        <DoctorBio />
        <FAQSection />
        <Qualification />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
