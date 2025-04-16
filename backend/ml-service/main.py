from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import joblib
import numpy as np
import pandas as pd
import os

# Setup FastAPI app
app = FastAPI()

# Enable CORS (update if needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Your frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model
model_path = os.path.join(os.path.dirname(__file__), "model.pkl")
model = joblib.load(model_path)

# Load symptom list (not directly used here, just for reference)
symptom_file = os.path.join(os.path.dirname(__file__), "predict.csv")
SYMPTOMS = list(pd.read_csv(symptom_file).drop("Diagnosis", axis=1).columns)

# Define input schema
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

# Predict route
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

# Run server
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=5001, reload=True)
