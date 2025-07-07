from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import joblib
import pandas as pd
import numpy as np
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://medtrack-world.vercel.app"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

base_dir = os.path.dirname(__file__)
model_path = os.path.join(base_dir, "model.pkl")
csv_path = os.path.join(base_dir, "disease.csv")

model = joblib.load(model_path)
df = pd.read_csv(csv_path)
preventive_data = df.set_index("Disease")[["Preventive_Measures", "Remedial_Measures"]]

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
    Vomiting: int
    Diarrhea: int

@app.post("/predict")
def predict(symptoms: SymptomInput):
    try:
        features_df = pd.DataFrame([{
            "Fever": symptoms.Fever,
            "Cough": symptoms.Cough,
            "Shortness_of_breath": symptoms.Shortness_of_breath,
            "Headache": symptoms.Headache,
            "Fatigue": symptoms.Fatigue,
            "Body_aches": symptoms.Body_aches,
            "Sore_throat": symptoms.Sore_throat,
            "Runny_nose": symptoms.Runny_nose,
            "Nausea": symptoms.Nausea,
            "Vomiting": symptoms.Vomiting,
            "Diarrhea": symptoms.Diarrhea
        }])

        prediction = model.predict(features_df)[0]

        if prediction not in preventive_data.index:
            raise HTTPException(status_code=404, detail="Disease data not found in the database.")

        preventive = preventive_data.loc[prediction, "Preventive_Measures"]
        remedial = preventive_data.loc[prediction, "Remedial_Measures"]

        return {
            "prediction": prediction,
            "preventive_measures": preventive,
            "remedial_measures": remedial
        }
    except Exception as e:
        print(f"Prediction error: {e}")
        raise HTTPException(status_code=500, detail="Error during prediction")
