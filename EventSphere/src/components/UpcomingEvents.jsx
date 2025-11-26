// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function UpcomingEvents() {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     axios.get("/api/events/upcoming")
//       .then(res => setEvents(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h2>Upcoming Events</h2>
//       <div className="event-grid">
//         {events.map(event => (
//           <div key={event._id} className="event-card">
//             <h3>{event.name}</h3>
//             <p>{new Date(event.startDate).toLocaleDateString()}</p>
//             <p>{event.location}</p>
//             <p>{event.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }









import { useEffect, useState } from "react";
import Footer from "./Footer";

export default function UpcomingEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Dummy data for testing
    const dummyEvents = [
      {
        _id: "1",
        name: "Tech Expo 2025",
        startDate: "2025-12-01",
        endDate: "2025-12-03",
        location: "Expo Center, Karachi",
        description: "Explore the latest in technology and innovation."
      },
      {
        _id: "2",
        name: "Art & Culture Festival",
        startDate: "2025-12-10",
        endDate: "2025-12-12",
        location: "Arts Hall, Lahore",
        description: "A celebration of arts, crafts, and local culture."
      },
      {
        _id: "3",
        name: "Startup Summit",
        startDate: "2025-12-15",
        endDate: "2025-12-16",
        location: "Conference Center, Islamabad",
        description: "Meet startups, investors, and mentors."
      }
    ];

    // Simulate API delay
    setTimeout(() => {
      setEvents(dummyEvents);
    }, 500);
  }, []);

  return (
    <>
    <div style={{ padding: "2rem", backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
      {/* Upcoming Events */}
<div
  style={{
    backgroundImage:
      "linear-gradient(to bottom right, rgba(10,10,40,0.75), rgba(30,20,60,0.85)), url('/mnt/data/ee.PNG')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "120px 20px",
    textAlign: "center",
    color: "white",
    marginBottom: "40px",
  }}
>
  <h1 style={{ fontSize: "3rem", fontWeight: "800" }}>
    Upcoming <span style={{ color: "#F8B324" }}>Events</span>
  </h1>
  <p style={{ fontSize: "1.1rem", marginTop: "10px", opacity: 0.9 }}>
    Get ready for all the exciting events we have lined up in the near future.
  </p>
</div>
      <h2 style={{ color: "#4A2E80", marginBottom: "1.5rem" }}>Upcoming Events</h2>
      
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {events.map(event => (
          <div key={event._id} 
               style={{
                 backgroundColor: "#FFFFFF",
                 borderRadius: "15px",
                 boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
                 padding: "1.5rem",
                 width: "300px",
                 display: "flex",
                 flexDirection: "column",
                 justifyContent: "space-between",
                 transition: "transform 0.2s",
               }}
               onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
               onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <h3 style={{ color: "#1D1A3A", marginBottom: "0.5rem" }}>{event.name}</h3>
            <p style={{ color: "#4A2E80", fontWeight: "500", marginBottom: "0.25rem" }}>
              {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
            </p>
            <p style={{ color: "#1D1A3A", marginBottom: "0.5rem" }}>{event.location}</p>
            <p style={{ color: "#333333", flexGrow: 1 }}>{event.description}</p>
            <button 
              style={{
                marginTop: "1rem",
                backgroundColor: "#F8B324",
                border: "none",
                borderRadius: "8px",
                padding: "0.5rem 1rem",
                fontWeight: "600",
                color: "#1D1A3A",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#e0a91f"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "#F8B324"}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
    <Footer/></>
  );
}
