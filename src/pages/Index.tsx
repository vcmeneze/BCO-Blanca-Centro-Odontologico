import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoSection from "@/components/VideoSection";
import DoctorSection from "@/components/DoctorSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FixedCTA from "@/components/FixedCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <StatsCounter />
        <section id="services">
          <ServicesSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <VideoSection />
        <section id="doctor">
          <DoctorSection />
        </section>
        <section id="why-choose">
          <WhyChooseUs />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
      
      {/* Fixed elements */}
      <WhatsAppFloat />
      <FixedCTA />
    </div>
  );
};

export default Index;
