import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "@/components/ui/card";
const Testimonials = () => {
    return (_jsxs("div", { className: "bg-black py-16 sm:py-20 relative", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-primary/5 to-black" }), _jsxs("div", { className: "relative mx-auto max-w-7xl px-6 lg:px-8", children: [_jsxs("div", { className: "mx-auto max-w-2xl text-center mb-8", children: [_jsx("h2", { className: "text-3xl font-bold tracking-tight text-white sm:text-4xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent", children: "Trusted by Healthcare Professionals" }), _jsx("p", { className: "mt-6 text-lg leading-8 text-gray-400", children: "See what medical professionals and patients are saying about MedTrack" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: testimonials.map((testimonial, index) => (_jsx(Card, { className: "bg-gray-900/30 border-gray-800 hover:border-primary transition-colors duration-300", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex flex-col h-full", children: [_jsxs("p", { className: "text-gray-400 mb-4 flex-grow", children: ["\"", testimonial.quote, "\""] }), _jsxs("div", { children: [_jsx("p", { className: "text-white font-semibold", children: testimonial.name }), _jsx("p", { className: "text-gray-500 text-sm", children: testimonial.title })] })] }) }) }, index))) })] })] }));
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
