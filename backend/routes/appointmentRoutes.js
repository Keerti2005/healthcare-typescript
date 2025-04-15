import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import Appointment from "../models/Appointment.js";

dotenv.config();

const router = express.Router();

// Send confirmation email
const sendConfirmationEmail = async (appointment) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: appointment.email,
      subject: "Appointment Confirmation - MedTrack",
      text: `Dear ${appointment.name},\n\nYour appointment with ${appointment.doctor} on ${appointment.date} at ${appointment.time} has been confirmed.\n\nThank you for using MedTrack!`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// Book an appointment
router.post("/book", async (req, res) => {
  try {
    const { name, email, phone, age, gender, issue, doctor, date, time } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !doctor || !date || !time) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Store in MongoDB
    const appointment = new Appointment({ name, email, phone, age, gender, issue, doctor, date, time });
    await appointment.save();

    // Send email confirmation
    await sendConfirmationEmail(appointment);

    res.status(201).json({ message: "Appointment booked successfully!" });
  } catch (error) {
    console.error("Error booking appointment:", error);
    res.status(500).json({ error: "Failed to book appointment" });
  }
});

// Get all appointments
router.get("/appointments", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve appointments" });
  }
});

export default router;