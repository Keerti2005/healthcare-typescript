import { Pill, CalendarHeart, ChartBar, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  return (
    <div id="features" className="bg-black py-16 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-black to-black" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Everything you need to manage your health
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Comprehensive health tracking tools designed to make your healthcare journey seamless and efficient
          </p>
        </div>
        
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:mt-10 lg:max-w-none lg:grid-cols-4">
          {features.map((feature) => (
            <Card 
              key={feature.name}
              className="bg-gray-900/30 border-gray-800 hover:border-primary transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                    {feature.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    name: "Medication Tracking",
    description: "Never miss a dose with smart medication reminders and tracking.",
    icon: Pill,
  },
  {
    name: "Appointment Management",
    description: "Schedule and track medical appointments with ease.",
    icon: CalendarHeart,
  },
  {
    name: "Health Analytics",
    description: "Visualize your health trends with intuitive charts and graphs.",
    icon: ChartBar,
  },
  {
    name: "Data Security",
    description: "Your health data is encrypted and secured to the highest standards.",
    icon: Shield,
  },
];

export default Features;
