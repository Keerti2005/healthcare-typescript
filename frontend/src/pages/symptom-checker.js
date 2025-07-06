"use client"; // Add the 'use client' directive at the top
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
const SymptomPrediction = () => {
    const [symptomsInput, setSymptomsInput] = useState("");
    const [preventiveMeasures, setPreventiveMeasures] = useState(null);
    const [remedies, setRemedies] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleInputChange = (e) => {
        setSymptomsInput(e.target.value);
    };
    const parseSymptoms = (input) => {
        const symptomList = [
            "Fever", "Cough", "Shortness_of_breath", "Headache", "Fatigue", "Body_aches", "Sore_throat",
            "Runny_nose", "Nausea", "Vomiting", "Diarrhea"
        ];
        const normalizedInput = input.toLowerCase();
        const symptomsMap = symptomList.reduce((acc, symptom) => {
            const normalizedSymptom = symptom.toLowerCase().replace(/_/g, " ");
            acc[symptom] = normalizedInput.includes(normalizedSymptom) ? 1 : 0;
            return acc;
        }, {});
        return symptomsMap;
    };
    const getPrediction = async () => {
        setLoading(true);
        setError(null);
        setPreventiveMeasures(null);
        setRemedies(null);
        setPrediction(null);
        try {
            const parsedSymptoms = parseSymptoms(symptomsInput);
            const res = await axios.post("http://localhost:5001/predict", parsedSymptoms);
            setPrediction(res.data.prediction);
            setPreventiveMeasures(res.data.preventive_measures);
            setRemedies(res.data.remedial_measures);
        }
        catch (error) {
            console.error("AxiosError:", error.message);
            if (error.response) {
                console.error("Response data:", error.response.data);
                setError(`Prediction failed: ${error.response.data.error || error.message}`);
            }
            else {
                setError("An unexpected error occurred. Please try again.");
            }
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsxs("div", { children: [_jsx(Heading, { children: "Symptom Checker" }), _jsxs("div", { className: "max-w-xl mx-auto p-4 space-y-4", children: [_jsx("input", { type: "text", className: "w-full border-2 rounded p-2", value: symptomsInput, onChange: handleInputChange, placeholder: "Enter symptoms like fever, cough, chills, vomiting, etc." }), _jsx("div", { className: "flex justify-center", children: _jsx(Button, { onClick: getPrediction, isDisabled: loading, children: loading ? "Checking..." : "Get Prediction" }) }), error && _jsx("p", { className: "text-red-500", children: error }), prediction && (_jsxs("p", { className: "text-green-600 font-medium", children: ["Prediction: ", _jsx("span", { className: "font-bold", children: prediction })] })), (preventiveMeasures || remedies) && (_jsxs("div", { className: "bg-gray-800 p-4 rounded-md space-y-4", children: [preventiveMeasures && (_jsxs("div", { className: "space-y-1", children: [_jsx("h3", { className: "font-semibold", children: "Preventive Measures" }), _jsx("p", { children: preventiveMeasures })] })), remedies && (_jsxs("div", { className: "space-y-1", children: [_jsx("h3", { className: "font-semibold", children: "Remedies" }), _jsx("p", { children: remedies })] }))] }))] })] }));
};
export default SymptomPrediction;
