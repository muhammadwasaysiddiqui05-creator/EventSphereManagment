// src/components/FooterEvents.jsx
import React from "react";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Startup Pitch Night",
    date: "12 Dec 2025",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=200&h=150&q=80"
  },
  {
    id: 2,
    title: "Digital Marketing Workshop",
    date: "18 Dec 2025",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&h=150&q=80"
  },
  {
    id: 3,
    title: "Photography Expo 2025",
    date: "23 Dec 2025",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&h=150&q=80"
  },
  {
    id: 4,
    title: "Music & Arts Festival",
    date: "5 Jan 2026",
    img: "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=200&h=150&q=80"
  },
  {
    id: 5,
    title: "Tech Innovators Meetup",
    date: "10 Jan 2026",
    img: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=200&h=150&q=80"
  },
];

const Events = () => {
  return (
    <div style={{ padding: "40px 20px", backgroundColor: "#f8f8f8" }}>
      <h4 style={{ marginBottom: "20px", color: "#4A2E80" }}>Browse Events</h4>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "15px"
      }}>
        {events.map((event) => (
          <div
            key={event.id}
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              overflow: "hidden",
              textAlign: "center",
              transition: "transform 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <img
              src={event.img}
              alt={event.title}
              style={{ width: "100%", height: "100px", objectFit: "cover" }}
            />
            <div style={{ padding: "10px" }}>
              <p style={{ margin: "5px 0", fontWeight: "500", fontSize: "0.95rem" }}>{event.title}</p>
              <small style={{ color: "#777" }}>{event.date}</small>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/AllEventsPage"
        style={{
          display: "inline-block",
          marginTop: "15px",
          padding: "8px 16px",
          backgroundColor: "#4A2E80",
          color: "#fff",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        See All Events
      </Link>
    </div>
  );
};

export default Events;
