"use client"; // Add the 'use client' directive at the top
import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

const SymptomPrediction: React.FC = () => {
  const [symptomsInput, setSymptomsInput] = useState<string>("");
  const [preventiveMeasures, setPreventiveMeasures] = useState<string | null>(null);
  const [remedies, setRemedies] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSymptomsInput(e.target.value);
  };

  const parseSymptoms = (input: string) => {
    const symptomList = [
      "Fever", "Cough", "Shortness_of_breath", "Headache", "Fatigue", "Body_aches", "Sore_throat", 
      "Runny_nose", "Nausea", "Vomiting", "Diarrhea"
    ];

    const normalizedInput = input.toLowerCase();

    const symptomsMap = symptomList.reduce((acc, symptom) => {
      const normalizedSymptom = symptom.toLowerCase().replace(/_/g, " ");
      acc[symptom] = normalizedInput.includes(normalizedSymptom) ? 1 : 0;
      return acc;
    }, {} as Record<string, number>);

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
      const res = await axios.post("https://healthcare-typescript-1.onrender.com/api/predict", parsedSymptoms);
      setPrediction(res.data.prediction);
      setPreventiveMeasures(res.data.preventive_measures);
      setRemedies(res.data.remedial_measures);
    } catch (error: any) {
      console.error("AxiosError:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        setError(`Prediction failed: ${error.response.data.error || error.message}`);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Heading>Symptom Checker</Heading>
      <div className="max-w-xl mx-auto p-4 space-y-4">
        <input
          type="text"
          className="w-full border-2 rounded p-2"
          value={symptomsInput}
          onChange={handleInputChange}
          placeholder="Enter symptoms like fever, cough, chills, vomiting, etc."
        />

<div className="flex justify-center">
  <Button onClick={getPrediction} isDisabled={loading}>
    {loading ? "Checking..." : "Get Prediction"}
  </Button>
</div>


        {error && <p className="text-red-500">{error}</p>}
        {prediction && (
          <p className="text-green-600 font-medium">
            Prediction: <span className="font-bold">{prediction}</span>
          </p>
        )}

{(preventiveMeasures || remedies) && (
  <div className="bg-gray-800 p-4 rounded-md space-y-4">
    {preventiveMeasures && (
      <div className="space-y-1">
        <h3 className="font-semibold">Preventive Measures</h3>
        <p>{preventiveMeasures}</p>
      </div>
    )}

    {remedies && (
      <div className="space-y-1">
        <h3 className="font-semibold">Remedies</h3>
        <p>{remedies}</p>
      </div>
    )}
  </div>
)}

      </div>
    </div>
  );
};

export default SymptomPrediction;
