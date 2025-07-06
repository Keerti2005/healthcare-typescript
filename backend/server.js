import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import axios from "axios";
import SensorData from "./models/SensorData.js";
import sensorRoutes from "./routes/sensorRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";

dotenv.config(); // Load environment variables

const app = express(); // Initialize Express app

// Middleware
app.use(cors({
  origin: "https://medtrack-world.vercel.app",
  credentials: true, 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/ml-analysis", async (req, res) => {
  try {
    const symptoms = req.body;
    console.log("Received in /api/ml-analysis:", symptoms);

    const response = await axios.post("https://healthcare-typescript.onrender.com/predict", symptoms);
    console.log("Response from ML server:", response.data);

    res.json({ prediction: response.data.prediction });
  } catch (err) {
    console.error("Error in ML analysis:", err.message);
    if (err.response) {
      console.error("ML Server Response Data:", err.response.data);
      console.error("ML Server Status:", err.response.status);
    }
    res.status(500).json({ error: "Error in ML analysis" });
  }
});


// Routes
app.use("/api/sensors", sensorRoutes);
app.use("/api/appointments", appointmentRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error("MongoDB Connection Error:", err));
