"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Heading } from "@/components/ui/heading";
const DoctorAppointmentForm = () => {
    const [formData, setFormData] = useState({
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
    const doctors = [
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
    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Processing...",
            text: "Your appointment is being processed.",
            icon: "info",
            showConfirmButton: false,
            timer: 2000,
        });
        emailjs
            .send("service_16dexch", "template_p2qi3fn", formData, "BE27sNwuwamVexnTp")
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
    return (_jsxs("div", { className: "relative w-full min-h-screen bg-black text-white overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 w-full h-full pointer-events-none z-0" }), _jsx(Heading, { className: "mb-4", children: "Book an Appointment in MedTrack" }), _jsx("div", { className: " rounded-xl  bg-gray-800  flex items-center justify-center ", children: _jsx("div", { className: "w-full max-w-8xl bg-gray-800 text-white rounded-lg shadow-lg p-8 z-10", children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-white mb-2", children: "Full Name" }), _jsx("input", { type: "text", name: "name", className: "bg-gray-800 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5", onChange: handleChange, required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-white mb-2", children: "Email" }), _jsx("input", { type: "email", name: "email", className: "bg-gray-800 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5", onChange: handleChange, required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-white mb-2", children: "Phone" }), _jsx("input", { type: "text", name: "phone", className: "bg-gray-800 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5", onChange: handleChange, required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-white mb-2", children: "Age" }), _jsx("input", { type: "text", name: "age", className: "bg-gray-800 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5", onChange: handleChange, required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-white mb-2", children: "Gender" }), _jsxs("select", { name: "gender", className: "bg-gray-800 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5", onChange: handleChange, required: true, children: [_jsx("option", { value: "", children: "Select Gender" }), _jsx("option", { value: "Male", children: "Male" }), _jsx("option", { value: "Female", children: "Female" }), _jsx("option", { value: "Other", children: "Other" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-white mb-2", children: "Describe Your Issue" }), _jsx("textarea", { name: "issue", rows: 3, className: "bg-gray-800 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5", onChange: handleChange, required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-white mb-2", children: "Doctor" }), _jsxs("select", { name: "doctor", className: "bg-gray-800 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5", onChange: handleChange, required: true, children: [_jsx("option", { value: "", children: "Select a Doctor" }), doctors.map((doc, index) => (_jsx("option", { value: doc.name, children: doc.name }, index)))] })] }), formData.doctor && (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-white mb-2", children: "Date" }), _jsxs("select", { name: "date", className: "bg-gray-800 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5", onChange: handleChange, required: true, children: [_jsx("option", { value: "", children: "Select an Available Date" }), doctors
                                                        .find((doc) => doc.name === formData.doctor)
                                                        ?.availableDates.map((date, index) => (_jsx("option", { value: date, children: date }, index)))] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-white mb-2", children: "Time" }), _jsxs("select", { name: "time", className: "bg-gray-800 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5", onChange: handleChange, required: true, children: [_jsx("option", { value: "", children: "Select an Available Time" }), doctors
                                                        .find((doc) => doc.name === formData.doctor)
                                                        ?.availableTimes.map((time, index) => (_jsx("option", { value: time, children: time }, index)))] })] })] })), _jsx("button", { type: "submit", className: "text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-2.5", children: "Confirm Your Appointment" })] }) }) })] }));
};
export default DoctorAppointmentForm;
