import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <div className="bg-black py-16 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-black to-black" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How MedTrack Works
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Get started with MedTrack in three simple steps
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-5xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative text-center group rounded-2xl bg-gray-900/30 p-8 ring-1 ring-gray-800 hover:ring-primary transition-all duration-300"
              >
                <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-8 text-white group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button 
              size="large" 
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const steps = [
  {
    title: "Create Your Account",
    description: "Sign up in minutes with our simple registration process",
  },
  {
    title: "Input Your Information",
    description: "Add your medications, appointments, and health metrics",
  },
  {
    title: "Stay on Track",
    description: "Receive reminders and track your progress effortlessly",
  },
];

export default HowItWorks;