import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib

df = pd.read_csv("ml-service/updated_symptom_dataset.csv")

X = df.drop("Diagnosis", axis=1)
y = df["Diagnosis"]

model = RandomForestClassifier()
model.fit(X, y)

joblib.dump(model, "model.pkl")
