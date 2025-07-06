import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "@/components/ui/card";
import { ChartBar, ScrollText, Section } from "lucide-react";
const Benefits = () => {
    return (_jsxs("div", { className: "bg-black py-16 sm:py-20 relative", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black via-primary/5 to-black" }), _jsxs("div", { className: "relative mx-auto max-w-7xl px-6 lg:px-8", children: [_jsxs("div", { className: "mx-auto max-w-2xl text-center mb-8", children: [_jsx("h2", { className: "text-3xl font-bold tracking-tight text-white sm:text-4xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent", children: "Why Choose MedTrack?" }), _jsx("p", { className: "mt-6 text-lg leading-8 text-gray-400", children: "Experience the benefits of having your entire health journey in one secure place" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: benefits.map((benefit, index) => (_jsx(Card, { className: "bg-gray-900/30 border-gray-800 hover:border-primary transition-colors duration-300", children: _jsxs(CardContent, { className: "p-6", children: [_jsx("div", { className: "rounded-lg bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4", children: _jsx(benefit.icon, { className: "h-6 w-6 text-primary" }) }), _jsx("h3", { className: "text-xl font-semibold text-white mb-3", children: benefit.title }), _jsx("p", { className: "text-gray-400", children: benefit.description })] }) }, index))) })] })] }));
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
