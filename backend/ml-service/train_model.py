import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load your CSV file
df = pd.read_csv("backend/ml-service/disease.csv")

# Define features and target
X = df.drop(columns=["Disease", "Preventive_Measures", "Remedial_Measures"])
y = df["Disease"]

model = RandomForestClassifier()
model.fit(X, y)

joblib.dump(model, "backend/ml-service/model.pkl")

print("Model trained and saved successfully!")
