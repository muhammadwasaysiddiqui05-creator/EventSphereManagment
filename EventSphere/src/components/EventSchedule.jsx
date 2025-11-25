// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function EventSchedule({ eventId }) {
//   const [sessions, setSessions] = useState([]);

//   useEffect(() => {
//     axios.get(`/api/events/${eventId}/schedule`) // API endpoint for schedule
//       .then(res => setSessions(res.data))
//       .catch(err => console.error(err));
//   }, [eventId]);

//   return (
//     <div style={{ padding: "2rem", backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
//       <h2 style={{ color: "#4A2E80", marginBottom: "1.5rem" }}>🗓️ Event Schedule</h2>
      
//       <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
//         {sessions.map(session => (
//           <div key={session._id}
//                style={{
//                  backgroundColor: "#FFFFFF",
//                  borderRadius: "15px",
//                  boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
//                  padding: "1.5rem",
//                  width: "300px",
//                  display: "flex",
//                  flexDirection: "column",
//                  justifyContent: "space-between",
//                  transition: "transform 0.2s",
//                }}
//                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
//                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
//           >
//             <h3 style={{ color: "#1D1A3A", marginBottom: "0.5rem" }}>{session.title}</h3>
//             <p style={{ color: "#4A2E80", fontWeight: "500", marginBottom: "0.25rem" }}>
//               {new Date(session.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(session.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//             </p>
//             <p style={{ color: "#1D1A3A", marginBottom: "0.5rem" }}>{session.location}</p>
//             <p style={{ color: "#333333", flexGrow: 1 }}>{session.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }









import { useEffect, useState } from "react";

export default function EventSchedule() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const dummySessions = [
      {
        _id: "1",
        title: "Opening Ceremony",
        startTime: "2025-11-25T09:00:00",
        endTime: "2025-11-25T10:00:00",
        location: "Main Hall",
        description: "Kickoff and welcome speech for all attendees."
      },
      {
        _id: "2",
        title: "Tech Innovation Workshop",
        startTime: "2025-11-25T10:30:00",
        endTime: "2025-11-25T12:00:00",
        location: "Workshop Room 1",
        description: "Hands-on workshop for AI and robotics enthusiasts."
      },
      {
        _id: "3",
        title: "Startup Pitch Session",
        startTime: "2025-11-25T13:00:00",
        endTime: "2025-11-25T15:00:00",
        location: "Conference Hall",
        description: "Startups pitch ideas to investors and mentors."
      },
      {
        _id: "4",
        title: "Closing Remarks",
        startTime: "2025-11-25T16:00:00",
        endTime: "2025-11-25T16:30:00",
        location: "Main Hall",
        description: "Thanking participants and announcing next event dates."
      }
    ];

    setTimeout(() => setSessions(dummySessions), 500);
  }, []);

  return (
    <div style={{ padding: "2rem", backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
      {/* Hero Section */}
<div
  style={{
    backgroundImage:
      "linear-gradient(to bottom right, rgba(10,10,40,0.75), rgba(30,20,60,0.85)), url('/mnt/data/ee.PNG')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "120px 20px",
    textAlign: "center",
    color: "white",
  }}
>
  <h1 style={{ fontSize: "3rem", fontWeight: "800" }}>
    Event <span style={{ color: "#F8B324" }}>Schedule</span>
  </h1>
  <p style={{ fontSize: "1.1rem", marginTop: "10px", opacity: 0.9 }}>
    Check out all sessions, workshops, and talks happening during the event.
  </p>
</div>

      <h2 style={{ color: "#4A2E80", marginBottom: "1.5rem" }}>🗓️ Event Schedule</h2>
      
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {sessions.map(session => (
          <div key={session._id}
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
            <h3 style={{ color: "#1D1A3A", marginBottom: "0.5rem" }}>{session.title}</h3>
            <p style={{ color: "#4A2E80", fontWeight: "500", marginBottom: "0.25rem" }}>
              {new Date(session.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(session.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
            <p style={{ color: "#1D1A3A", marginBottom: "0.5rem" }}>{session.location}</p>
            <p style={{ color: "#333333", flexGrow: 1 }}>{session.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
