import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  age: Number,
  gender: String,
  issue: String,
  doctor: String,
  date: String,
  time: String,
});

export default mongoose.model("Appointment", appointmentSchema);
