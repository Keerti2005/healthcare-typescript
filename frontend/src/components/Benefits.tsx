import { Card, CardContent } from "@/components/ui/card";
import { ChartBar, ScrollText, Section } from "lucide-react";

const Benefits = () => {
  return (
    <div className="bg-black py-16 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/5 to-black" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Why Choose MedTrack?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Experience the benefits of having your entire health journey in one secure place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-gray-900/30 border-gray-800 hover:border-primary transition-colors duration-300">
              <CardContent className="p-6">
                <div className="rounded-lg bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const benefits = [
  {
    title: "Data Visualization",
    description: "View your health trends with intuitive charts and analytics dashboards.",
    icon: ChartBar,
  },
  {
    title: "Comprehensive Reports",
    description: "Generate detailed health reports to share with your healthcare providers.",
    icon: ScrollText,
  },
  {
    title: "Organized Information",
    description: "Keep all your health information structured and easily accessible.",
    icon: Section,
  },
];

export default Benefits;
