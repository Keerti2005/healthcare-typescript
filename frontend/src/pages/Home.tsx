
import Hero from "@/components/Hero";
import Features from "@/components/features";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
