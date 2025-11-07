import React, { useState } from "react";
import { addEvent } from "../api";
import { useNavigate } from "react-router-dom";

export default function EventForm() {
  const [form, setForm] = useState({
    name: "",
    society: "",
    location: "",
    date: "",
    time: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(form);
    navigate("/");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Event</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          name="name"
          placeholder="Event Name"
          onChange={handleChange}
          required
        />
        <input
          name="society"
          placeholder="Society Name"
          onChange={handleChange}
          required
        />
        <input
          name="location"
          placeholder="Location (e.g., Seminar Hall A)"
          onChange={handleChange}
          required
        />
        <input type="date" name="date" onChange={handleChange} required />
        <input type="time" name="time" onChange={handleChange} required />
        <textarea
          name="description"
          placeholder="Event Description"
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Add Event
        </button>
      </form>
    </div>
  );
}
