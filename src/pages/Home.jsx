import React from "react";
import EventList from "../components/EventList.jsx";
import MapView from "../components/MapView.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">EventEase</h1>
        <Link to="/add" className="bg-green-600 text-white p-2 rounded">
          + Add Event
        </Link>


      </header>

  {/* This is the "search for location" bar */}
    <div className="p-4">
      {/* Use flex to make the input and button side-by-side */}
      <div className="flex">
        <input 
          type="text" 
          placeholder="Search for a location..." 
          className="w-full p-2 border-t border-b border-l rounded-l" 
        />
        <button className="bg-blue-500 text-white p-2 rounded-r">
          Search
        </button>
      </div>
    </div>
 

      <EventList />
      <MapView />
    </div>
  );
}
