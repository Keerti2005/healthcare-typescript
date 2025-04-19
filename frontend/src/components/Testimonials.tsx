import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  return (
    <div className="bg-black py-16 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-primary/5 to-black" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Trusted by Healthcare Professionals
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            See what medical professionals and patients are saying about MedTrack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-900/30 border-gray-800 hover:border-primary transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <p className="text-gray-400 mb-4 flex-grow">"{testimonial.quote}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    quote: "MedTrack has revolutionized how I manage my patients' care. The comprehensive tracking system is invaluable.",
    name: "Dr. Sarah Johnson",
    title: "Cardiologist",
  },
  {
    quote: "Finally, a platform that helps me keep track of all my medications and appointments in one place.",
    name: "Michael Chen",
    title: "Patient",
  },
  {
    quote: "The analytics and reporting features have made it much easier to monitor patient progress.",
    name: "Dr. James Wilson",
    title: "Family Physician",
  },
];

export default Testimonials;
