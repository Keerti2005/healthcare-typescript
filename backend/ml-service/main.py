from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import joblib
import numpy as np
import pandas as pd
import os

# Setup FastAPI app
app = FastAPI()

# Enable CORS (update origin if needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Make sure the frontend URL is correct
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define file paths
base_dir = os.path.dirname(__file__)
model_path = os.path.join(base_dir, "model.pkl")
csv_path = os.path.join(base_dir, "disease.csv")

# Load model and data
model = joblib.load(model_path)
df = pd.read_csv(csv_path)

# Extract necessary parts
preventive_data = df.set_index("Disease")[["Preventive_Measures", "Remedial_Measures"]]

# Define input schema with new symptoms (including Vomiting)
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
    Vomiting: int  # New symptom added
    Diarrhea: int

# Predict route
@app.post("/predict")
def predict(symptoms: SymptomInput):
    # Convert input to model format
    features = np.array([[  # Extract feature values from the symptoms input
        symptoms.Fever,
        symptoms.Cough,
        symptoms.Shortness_of_breath,
        symptoms.Headache,
        symptoms.Fatigue,
        symptoms.Body_aches,
        symptoms.Sore_throat,
        symptoms.Runny_nose,
        symptoms.Nausea,
        symptoms.Vomiting,  # New symptom value included
        symptoms.Diarrhea
    ]])

    prediction = model.predict(features)[0]

    if prediction not in preventive_data.index:
        raise HTTPException(status_code=404, detail="Disease data not found in the database.")

    preventive = preventive_data.loc[prediction, "Preventive_Measures"]
    remedial = preventive_data.loc[prediction, "Remedial_Measures"]

    return {
        "prediction": prediction,
        "preventive_measures": preventive,
        "remedial_measures": remedial
    }

# Optional: Run server if executing this file directly
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=5001, reload=True)
