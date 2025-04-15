"use client";
//hello
import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

const SymptomPrediction: React.FC = () => {
  const [symptomsInput, setSymptomsInput] = useState<string>("");
  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSymptomsInput(e.target.value);
  };

  const parseSymptoms = (input: string) => {
    const symptomList = [
      "Fever",
      "Cough",
      "Shortness_of_breath",
      "Headache",
      "Fatigue",
      "Body_aches",
      "Sore_throat",
      "Runny_nose",
      "Nausea",
      "Chills",
      "Diarrhea",
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
    setPrediction(null);
    try {
      const parsedSymptoms = parseSymptoms(symptomsInput);
      const res = await axios.post("http://localhost:5000/api/ml-analysis", parsedSymptoms);
      setPrediction(res.data.prediction);
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
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-semibold">Symptom Checker</h2>

      <input
        type="text"
        className="w-full border rounded p-2"
        value={symptomsInput}
        onChange={handleInputChange}
        placeholder="Enter symptoms like fever, cough, chills"
      />

      <Button onClick={getPrediction} isDisabled={loading}>
        {loading ? "Checking..." : "Get Prediction"}
      </Button>

      {error && <p className="text-red-500">{error}</p>}
      {prediction && (
        <p className="text-green-600 font-medium">
          Prediction: <span className="font-bold">{prediction}</span>
        </p>
      )}
    </div>
  );
};

export default SymptomPrediction;
