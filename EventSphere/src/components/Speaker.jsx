// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Speakers({ eventId }) {
//   const [speakers, setSpeakers] = useState([]);

//   useEffect(() => {
//     axios.get(`/api/events/${eventId}/speakers`) // API endpoint
//       .then(res => setSpeakers(res.data))
//       .catch(err => console.error(err));
//   }, [eventId]);

//   return (
//     <div style={{ padding: "2rem", backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
//       <h2 style={{ color: "#4A2E80", marginBottom: "1.5rem" }}>🎤 Speakers</h2>
      
//       <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
//         {speakers.map(speaker => (
//           <div key={speaker._id}
//                style={{
//                  backgroundColor: "#FFFFFF",
//                  borderRadius: "15px",
//                  boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
//                  padding: "1.5rem",
//                  width: "300px",
//                  display: "flex",
//                  flexDirection: "column",
//                  justifyContent: "space-between",
//                  alignItems: "center",
//                  textAlign: "center",
//                  transition: "transform 0.2s",
//                }}
//                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
//                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
//           >
//             <img 
//               src={speaker.photo} 
//               alt={speaker.name} 
//               style={{
//                 width: "100px",
//                 height: "100px",
//                 borderRadius: "50%",
//                 objectFit: "cover",
//                 marginBottom: "1rem"
//               }}
//             />
//             <h3 style={{ color: "#1D1A3A", marginBottom: "0.5rem" }}>{speaker.name}</h3>
//             <p style={{ color: "#4A2E80", marginBottom: "0.25rem" }}>{speaker.designation}</p>
//             <p style={{ color: "#333333" }}>{speaker.company}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }









import { useEffect, useState } from "react";
import speaker1 from "../assets/speaker1.jpg"; // Replace with your images
import speaker2 from "../assets/speaker2.jpg";
import speaker3 from "../assets/speaker3.jpg";
import Footer from "./Footer";

export default function Speakers() {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    const dummySpeakers = [
      {
        _id: "1",
        name: "Dr. Ayesha Khan",
        designation: "AI Researcher",
        company: "Tech Innovators",
        photo: speaker2
      },
      {
        _id: "2",
        name: "Mr. Ali Raza",
        designation: "Founder",
        company: "Creative Arts Co.",
        photo: speaker1
      },
      {
        _id: "3",
        name: "Ms. Sana Mir",
        designation: "Sustainability Expert",
        company: "Green Energy Inc.",
        photo: speaker3
      }
    ];

    setTimeout(() => setSpeakers(dummySpeakers), 500);
  }, []);

  return (
    <>
    <div style={{ padding: "2rem", backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
      {/* Speakers Section */}
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
    Our <span style={{ color: "#F8B324" }}>Speakers</span>
  </h1>
  <p style={{ fontSize: "1.1rem", marginTop: "10px", opacity: 0.9 }}>
    Meet the industry experts and thought leaders who’ve shared their knowledge at our events.
  </p>
</div>

      <h2 style={{ color: "#4A2E80", marginBottom: "1.5rem" }}>🎤 Speakers</h2>
      
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {speakers.map(speaker => (
          <div key={speaker._id}
               style={{
                 backgroundColor: "#FFFFFF",
                 borderRadius: "15px",
                 boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
                 padding: "1.5rem",
                 width: "300px",
                 display: "flex",
                 flexDirection: "column",
                 justifyContent: "space-between",
                 alignItems: "center",
                 textAlign: "center",
                 transition: "transform 0.2s",
               }}
               onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
               onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <img 
              src={speaker.photo} 
              alt={speaker.name} 
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "1rem"
              }}
            />
            <h3 style={{ color: "#1D1A3A", marginBottom: "0.5rem" }}>{speaker.name}</h3>
            <p style={{ color: "#4A2E80", marginBottom: "0.25rem" }}>{speaker.designation}</p>
            <p style={{ color: "#333333" }}>{speaker.company}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
