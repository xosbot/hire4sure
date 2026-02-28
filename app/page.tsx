import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Differentiation from "@/components/Differentiation";
import Pricing from "@/components/Pricing";
import Urgency from "@/components/Urgency";
import Trust from "@/components/Trust";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <Differentiation />
        <Pricing />
        <Urgency />
        <Trust />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
