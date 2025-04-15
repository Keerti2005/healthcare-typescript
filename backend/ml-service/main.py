# ml-service/main.py
from fastapi import FastAPI, Request
from pydantic import BaseModel
import joblib
import numpy as np
import pandas as pd
import uvicorn

# Load model
model = joblib.load("backend/ml-service/model.pkl")

# Load symptom list (you need this to convert input into a feature vector)
SYMPTOMS = list(pd.read_csv("backend/ml-service/updated_symptom_dataset.csv").drop("Diagnosis", axis=1).columns)

app = FastAPI()
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods
    allow_headers=["*"],  # Allows all headers
)



# Define request body schema
class SymptomInput(BaseModel):
    Fever: int
    Cough: int
    Shortness_of_breath: int
    Headache: int
    Fatigue: int
    Body_aches: int
    Sore_throat: int
    Runny_nose: int
    Nausea: int
    Chills: int
    Diarrhea: int

@app.post("/predict")
def predict(symptoms: SymptomInput):
    data = np.array([[ 
        symptoms.Fever,
        symptoms.Cough,
        symptoms.Shortness_of_breath,
        symptoms.Headache,
        symptoms.Fatigue,
        symptoms.Body_aches,
        symptoms.Sore_throat,
        symptoms.Runny_nose,
        symptoms.Nausea,
        symptoms.Chills,
        symptoms.Diarrhea
    ]])
    prediction = model.predict(data)
    return {"prediction": prediction[0]}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5001)
