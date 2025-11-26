// src/pages/EventsPage.jsx
import React from "react";

const allEvents = [
  {
    id: 1,
    title: "Tech Summit 2025",
    date: "15 Dec 2025",
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    id: 2,
    title: "Art Expo 2025",
    date: "22 Dec 2025",
    img: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    id: 3,
    title: "Music Festival",
    date: "5 Jan 2026",
    img: "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    id: 4,
    title: "Startup Pitch Night",
    date: "12 Dec 2025",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    id: 5,
    title: "Photography Expo 2025",
    date: "23 Dec 2025",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    id: 6,
    title: "Music & Arts Festival",
    date: "5 Jan 2026",
    img: "https://images.unsplash.com/photo-1496784245197-a5f7cfa3cb79?auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    id: 7,
    title: "Tech Innovators Meetup",
    date: "10 Jan 2026",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    id: 8,
    title: "Creative Workshop",
    date: "18 Jan 2026",
    img: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?auto=format&fit=crop&w=400&h=300&q=80"
  },
];

const AllEventsPage = () => {
  return (
    <div style={{ padding: "40px 20px", backgroundColor: "#f5f5f5" }}>
      <h2 style={{ color: "#4A2E80", marginBottom: "30px", textAlign: "center" }}>All Events</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
      }}>
        {allEvents.map((event) => (
          <div
            key={event.id}
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              overflow: "hidden",
              transition: "transform 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <img
              src={event.img}
              alt={event.title}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <h3 style={{ margin: "0 0 10px 0", color: "#4A2E80", fontSize: "1.2rem" }}>{event.title}</h3>
              <p style={{ margin: 0, color: "#777" }}>{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEventsPage;
