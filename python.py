import csv

# Data for diseases, symptoms, preventive measures, and remedial measures
disease_data = {
    "COVID-19": {
        "symptoms": [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
        "preventive_measures": "Wear a mask, practice social distancing, get vaccinated, wash hands frequently.",
        "remedial_measures": "Stay hydrated, rest, take fever reducers, follow medical advice, monitor oxygen levels."
    },
    "Flu": {
        "symptoms": [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
        "preventive_measures": "Get vaccinated, wash hands regularly, avoid close contact with sick people.",
        "remedial_measures": "Take antiviral medications, stay hydrated, get enough rest."
    },
    "Normal": {
        "symptoms": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "preventive_measures": "Maintain a healthy lifestyle, exercise regularly, eat a balanced diet.",
        "remedial_measures": "No treatment needed for normal health."
    },
    "Pneumonia": {
        "symptoms": [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1],
        "preventive_measures": "Vaccination, good hygiene practices, avoid smoking.",
        "remedial_measures": "Antibiotics, stay hydrated, rest, follow medical advice."
    },
    "Bronchitis": {
        "symptoms": [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0],
        "preventive_measures": "Avoid smoking, avoid exposure to pollutants, get a flu shot.",
        "remedial_measures": "Use cough suppressants, stay hydrated, rest."
    },
    "Cold": {
        "symptoms": [1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0],
        "preventive_measures": "Wash hands frequently, avoid close contact with infected individuals.",
        "remedial_measures": "Rest, drink fluids, use over-the-counter cold medications."
    },
    "Allergies": {
        "symptoms": [0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0],
        "preventive_measures": "Avoid allergens, use air purifiers, keep windows closed during allergy season.",
        "remedial_measures": "Antihistamines, nasal sprays, avoid exposure to allergens."
    },
    "Strep Throat": {
        "symptoms": [1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0],
        "preventive_measures": "Avoid close contact with infected individuals, wash hands frequently.",
        "remedial_measures": "Antibiotics, rest, stay hydrated."
    },
    "Gastroenteritis": {
        "symptoms": [1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1],
        "preventive_measures": "Wash hands frequently, avoid contaminated food or water.",
        "remedial_measures": "Stay hydrated, use electrolyte solutions, take anti-nausea medications."
    },
    "Sinusitis": {
        "symptoms": [0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
        "preventive_measures": "Avoid allergens, use air purifiers, stay hydrated.",
        "remedial_measures": "Decongestants, pain relievers, warm compresses."
    },
    "Asthma": {
        "symptoms": [1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0],
        "preventive_measures": "Avoid asthma triggers, use inhalers, get regular exercise.",
        "remedial_measures": "Use rescue inhalers, avoid allergens, stay hydrated."
    },
    "Tuberculosis": {
        "symptoms": [1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0],
        "preventive_measures": "Get vaccinated, avoid close contact with infected individuals.",
        "remedial_measures": "Antibiotics, isolation, medical supervision."
    },
    "Seasonal Allergies": {
        "symptoms": [0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0],
        "preventive_measures": "Avoid allergens, use air purifiers, take antihistamines.",
        "remedial_measures": "Nasal sprays, decongestants, avoid exposure to allergens."
    },
    "Sinus Infection": {
        "symptoms": [1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
        "preventive_measures": "Avoid allergens, use humidifiers, stay hydrated.",
        "remedial_measures": "Decongestants, antibiotics, nasal sprays."
    },
    "Meningitis": {
        "symptoms": [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
        "preventive_measures": "Get vaccinated (meningitis vaccine), practice good hygiene.",
        "remedial_measures": "Antibiotics, pain relievers, rest."
    },
    "Tonsillitis": {
        "symptoms": [1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0],
        "preventive_measures": "Avoid close contact with infected individuals, wash hands frequently.",
        "remedial_measures": "Antibiotics, pain relievers, rest."
    },
    "Food Poisoning": {
        "symptoms": [1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1],
        "preventive_measures": "Avoid contaminated food and water, wash hands regularly.",
        "remedial_measures": "Stay hydrated, use electrolyte solutions, avoid solid foods until symptoms subside."
    },
    "Dengue": {
        "symptoms": [1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1],
        "preventive_measures": "Avoid mosquito bites, use insect repellent, eliminate mosquito breeding sites.",
        "remedial_measures": "Rest, stay hydrated, use pain relievers for fever and body aches."
    },
    "Malaria": {
        "symptoms": [1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1],
        "preventive_measures": "Use mosquito nets, take antimalarial drugs, avoid mosquito bites.",
        "remedial_measures": "Antimalarial medication, rest, stay hydrated."
    },
    "Typhoid": {
        "symptoms": [1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
        "preventive_measures": "Vaccination, drink clean water, avoid unclean food.",
        "remedial_measures": "Antibiotics, stay hydrated, rest."
    },
    "RSV": {
        "symptoms": [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0],
        "preventive_measures": "Wash hands frequently, avoid close contact with infected individuals.",
        "remedial_measures": "Rest, stay hydrated, use inhalers for breathing difficulties."
    },
    "Whooping Cough": {
        "symptoms": [1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
        "preventive_measures": "Get vaccinated, wash hands regularly.",
        "remedial_measures": "Antibiotics, rest, stay hydrated."
    },
    "COVID-19 Variant": {
        "symptoms": [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
        "preventive_measures": "Wear a mask, practice social distancing, get vaccinated.",
        "remedial_measures": "Stay hydrated, rest, take fever reducers, monitor oxygen levels."
    },
    "Swine Flu": {
        "symptoms": [1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0],
        "preventive_measures": "Get vaccinated, wash hands frequently.",
        "remedial_measures": "Rest, stay hydrated, use antiviral medications."
    },
    "Measles": {
        "symptoms": [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0],
        "preventive_measures": "Get vaccinated (MMR vaccine), avoid exposure to infected individuals.",
        "remedial_measures": "Rest, stay hydrated, use fever-reducing medications."
    },
}

# Define the CSV file path
csv_file = "disease_diagnosis_complete.csv"

# Function to write the disease data to a CSV file
def create_csv():
    with open(csv_file, mode="w", newline="") as file:
        writer = csv.writer(file)
        
        # Write the header row
        writer.writerow([
            "Disease",
            "Fever", "Cough", "Shortness_of_breath", "Headache", "Fatigue", 
            "Body_aches", "Sore_throat", "Runny_nose", "Nausea", "Vomiting", "Diarrhea", 
            "Preventive_Measures", "Remedial_Measures"
        ])
        
        # Write data for each disease
        for disease, details in disease_data.items():
            writer.writerow([disease] + details["symptoms"] + [details["preventive_measures"], details["remedial_measures"]])

# Call the function to create the CSV
create_csv()

print("CSV file 'disease_diagnosis_complete.csv' has been created successfully!")
