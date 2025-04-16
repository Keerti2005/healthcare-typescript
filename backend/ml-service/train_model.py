import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib

df = pd.read_csv("backend/ml-service/predict.csv")

X = df.drop("Diagnosis", axis=1)
y = df["Diagnosis"]

model = RandomForestClassifier()
model.fit(X, y)

joblib.dump(model, "backend/ml-service/model.pkl")
