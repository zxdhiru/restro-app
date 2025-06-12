
import React from "react";
import Navigation from "~/components/navbar";
import HeroSection from "~/components/heroSection";
import FeatureSection from "~/components/featureSection";
import PricingSection from "~/components/pricingSection";
import TestimonySection from "~/components/testimonySection";
import ContactSection from "~/components/contactSection";
import FooterSection from "~/components/footerSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navigation />
      <HeroSection />
      <FeatureSection />
      <PricingSection />
      <TestimonySection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
