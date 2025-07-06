import express from "express";
import SensorData from "../models/SensorData.js";
import { PythonShell } from 'python-shell';
const router = express.Router();


router.post("/add", async (req, res) => {
  try {
    const dataArray = req.body;

    if (!Array.isArray(dataArray) || dataArray.length === 0) {
      return res.status(400).json({ error: "Request body must be a non-empty array" });
    }

    // Validate each entry in the array
    for (const data of dataArray) {
      if (!Array.isArray(data.ecg) || data.ecg.length === 0) {
        return res.status(400).json({ error: "Each ECG data must be a non-empty array" });
      }

      if (
        !data.bloodPressure || typeof data.bloodPressure !== "object" ||
        !data.bloodPressure.systolic || !data.bloodPressure.diastolic
      ) {
        return res.status(400).json({ error: "Invalid blood pressure format" });
      }
    }

    // Insert multiple documents into MongoDB
    const insertedData = await SensorData.insertMany(dataArray);

    res.status(201).json(insertedData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await SensorData.find().sort({ timestamp: -1 });
    res.json(data);
  } catch (error) {
    console.error("Error fetching sensor data:", error);
    res.status(500).json({ error: "Failed to fetch sensor data" });
  }
});

export default router;