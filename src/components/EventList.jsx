import React, { useEffect, useState } from "react";
import { getEvents } from "../api";

export default function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(getEvents());
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-3">Upcoming Events</h2>
      {events.length === 0 ? (
        <p>No events yet.</p>
      ) : (
        <ul className="space-y-3">
          {events.map((ev, i) => (
            <li key={i} className="p-4 border rounded-lg shadow">
              <h3 className="font-bold text-lg">{ev.name}</h3>
              <p>
                <b>Society:</b> {ev.society}
              </p>
              <p>
                <b>Location:</b> {ev.location}
              </p>
              <p>
                <b>Date:</b> {ev.date} at {ev.time}
              </p>
              <p>{ev.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
