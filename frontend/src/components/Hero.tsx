import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-black to-black" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-black to-black" />
    <div className="relative z-10 container mx-auto px-6 py-12 text-center"> {/* Reduced py-16 to py-12 */}
      <div className="space-y-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white animate-fade-in mt-[-3rem]">
          <span className="block">Take Control of Your</span>
          <span className="block text-primary">Health Journey</span>
        </h1>
  
        <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
          Track medications, manage appointments, and monitor your health metrics all in one secure platform.
        </p>
  
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 animate-fade-in [animation-delay:400ms]"> {/* Reduced mt-10 to mt-6 */}
          <Button size="large" className="bg-primary hover:bg-primary/90 text-white min-w-[200px]">
            Start Free Trial
          </Button>
          <Button
            size="large"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 min-w-[200px]"
          >
            Watch Demo
          </Button>
        </div>
      </div>
  
      <button
        onClick={scrollToFeatures}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to features"
      >
        <ArrowDown size={32} />
      </button>
    </div>
  </div>
  
  );
};

export default Hero;
