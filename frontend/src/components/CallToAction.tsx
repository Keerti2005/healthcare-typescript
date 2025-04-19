import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <div className="bg-black py-16 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/5 to-black" />
      <div className="relative mx-auto max-w-7xl px-6 large:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ready to Transform Your Health Management?
          </h2>
          <p className="mt-6 text-large leading-8 text-gray-400 mb-10">
            Join thousands of users who have already taken control of their health journey with MedTrack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="large" className="bg-primary hover:bg-primary/90 text-white min-w-[200px]">
              Get Started Now
            </Button>
            <Button 
              size="large" 
              className="border-gray-600 text-gray-300 hover:bg-gray-800 min-w-[200px]"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
