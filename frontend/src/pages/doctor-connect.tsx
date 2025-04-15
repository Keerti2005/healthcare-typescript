"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Heading } from "@/components/ui/heading";

interface Doctor {
  name: string;
  availableDates: string[];
  availableTimes: string[];
}

type AppointmentForm = {
  name: string;
  email: string;
  phone: string;
  age: string;
  gender: string;
  issue: string;
  doctor: string;
  date: string;
  time: string;
};

const DoctorAppointmentForm = () => {
  const [formData, setFormData] = useState<AppointmentForm>({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    issue: "",
    doctor: "",
    date: "",
    time: "",
  });

  const doctors: Doctor[] = [
    {
      name: "Dr. Smith",
      availableDates: ["2025-03-20", "2025-03-22"],
      availableTimes: ["10:00 AM", "2:00 PM"],
    },
    {
      name: "Dr. Johnson",
      availableDates: ["2025-03-21", "2025-03-23"],
      availableTimes: ["11:00 AM", "3:00 PM"],
    },
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Swal.fire({
      title: "Processing...",
      text: "Your appointment is being processed.",
      icon: "info",
      showConfirmButton: false,
      timer: 2000,
    });

    emailjs
      .send(
        "service_16dexch",
        "template_p2qi3fn",
        formData as Record<string, unknown>,
        "BE27sNwuwamVexnTp"
      )
      .then(() => {
        Swal.fire({
          title: "✅ Appointment Confirmed!",
          text: `A confirmation email has been sent to ${formData.email}.`,
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "❌ Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
        });
        console.error("Email error:", error);
      });
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0"></div>
      <Heading className="mb-4">Book an Appointment in MedTrack</Heading>

      <div className=" rounded-xl  bg-gray-800  flex items-center justify-center ">
        <div className="w-full max-w-8xl bg-gray-800 text-white rounded-lg shadow-lg p-8 z-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                className="bg-gray-800 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="bg-gray-800 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                className="bg-gray-800 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Age
              </label>
              <input
                type="text"
                name="age"
                className="bg-gray-800 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Gender
              </label>
              <select
                name="gender"
                className="bg-gray-800 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Describe Your Issue
              </label>
              <textarea
                name="issue"
                rows={3}
                className="bg-gray-800 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Doctor
              </label>
              <select
                name="doctor"
                className="bg-gray-800 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
                onChange={handleChange}
                required
              >
                <option value="">Select a Doctor</option>
                {doctors.map((doc, index) => (
                  <option key={index} value={doc.name}>
                    {doc.name}
                  </option>
                ))}
              </select>
            </div>

            {formData.doctor && (
              <>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Date
                  </label>
                  <select
                    name="date"
                    className="bg-gray-800 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select an Available Date</option>
                    {doctors
                      .find((doc) => doc.name === formData.doctor)
                      ?.availableDates.map((date, index) => (
                        <option key={index} value={date}>
                          {date}
                        </option>
                      ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Time
                  </label>
                  <select
                    name="time"
                    className="bg-gray-800 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select an Available Time</option>
                    {doctors
                      .find((doc) => doc.name === formData.doctor)
                      ?.availableTimes.map((time, index) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                  </select>
                </div>
              </>
            )}

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-2.5"
            >
              Confirm Your Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointmentForm;
