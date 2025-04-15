import mongoose from "mongoose";

const SensorDataSchema = new mongoose.Schema({
  heartRate: { type: Number, required: true, default: 0 },
  spo2: { type: Number, required: true, default: 0 },
  temperature: { type: Number, required: true, default: 0 },
  ecg: { type: [Number], required: true, default: [] }, // Default empty array
  bloodPressure: {
    systolic: { type: Number, required: true, default: 120 },
    diastolic: { type: Number, required: true, default: 80 }
  },
  timestamp: { type: Date, default: Date.now }
});

const SensorData = mongoose.model("SensorData", SensorDataSchema);
export default SensorData;