// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function FloorPlan({ eventId }) {
//   const [floorPlan, setFloorPlan] = useState(null);

//   useEffect(() => {
//     axios.get(`/api/events/${eventId}/floorplan`) // <-- API endpoint
//       .then(res => setFloorPlan(res.data.floorPlan))
//       .catch(err => console.error(err));
//   }, [eventId]);

//   return (
//     <div style={{ padding: "2rem", backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
//       <h2 style={{ color: "#4A2E80", marginBottom: "1.5rem" }}>🗺️ Floor Plan</h2>
//       {floorPlan ? (
//         <img 
//           src={floorPlan} 
//           alt="Floor Plan" 
//           style={{
//             width: "100%",
//             maxWidth: "900px",
//             borderRadius: "15px",
//             boxShadow: "0 6px 15px rgba(0,0,0,0.1)"
//           }}
//         />
//       ) : (
//         <p style={{ color: "#1D1A3A" }}>Loading floor plan...</p>
//       )}
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// // import floorPlanImg from "../assets/floorplan-placeholder.jpg"; // use your placeholder image

// export default function FloorPlan() {
//   const [floorPlan, setFloorPlan] = useState(null);

//   useEffect(() => {
//     setTimeout(() => {
//       setFloorPlan(floorPlanImg);
//     }, 500);
//   }, []);

//   return (
//     <div style={{ padding: "2rem", backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
//       <div
//   style={{
//     backgroundImage:
//       "linear-gradient(to bottom right, rgba(10,10,40,0.75), rgba(30,20,60,0.85)), url('/mnt/data/ee.PNG')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     padding: "80px 20px",
//     color: "white",
//     textAlign: "center",
//   }}
// >
//   <h1 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "20px" }}>
//     Exhibitors <span style={{ color: "#F8B324" }}>Floor Plan</span>
//   </h1>
//   <p style={{ fontSize: "1.1rem", marginBottom: "50px", opacity: 0.9 }}>
//     Navigate through our event’s exhibitors and see who’s showcasing on each floor.
//   </p>

//   {/* Exhibitor Grid */}
//   <div
//     style={{
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//       gap: "20px",
//       maxWidth: "1200px",
//       margin: "0 auto",
//     }}
//   >
//     {/* Example exhibitor cards */}
//     {["Exhibitor A", "Exhibitor B", "Exhibitor C", "Exhibitor D", "Exhibitor E", "Exhibitor F"].map(
//       (name, idx) => (
//         <div
//           key={idx}
//           style={{
//             backgroundColor: "rgba(255,255,255,0.1)",
//             padding: "20px",
//             borderRadius: "15px",
//             backdropFilter: "blur(5px)",
//             transition: "transform 0.3s",
//             cursor: "pointer",
//           }}
//           onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
//           onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
//         >
//           <h3 style={{ color: "#F8B324", marginBottom: "10px" }}>{name}</h3>
//           <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
//             Booth: {idx + 101} | Floor: 1
//           </p>
//         </div>
//       )
//     )}
//   </div>
// </div>

//       <h2 style={{ color: "#4A2E80", marginBottom: "1.5rem" }}>🗺️ Floor Plan</h2>
//       {floorPlan ? (
//         <img 
//           src={floorPlan} 
//           alt="Floor Plan" 
//           style={{
//             width: "100%",
//             maxWidth: "900px",
//             borderRadius: "15px",
//             boxShadow: "0 6px 15px rgba(0,0,0,0.1)"
//           }}
//         />
//       ) : (
//         <p style={{ color: "#1D1A3A" }}>Loading floor plan...</p>
//       )}
//     </div>
//   );
// }









import { useEffect, useState } from "react";
import floorPlanImg from "../assets/floorplan-placeholder.jpg"; // make sure this path is correct

export default function FloorPlan() {
  const [floorPlan, setFloorPlan] = useState(null);

  useEffect(() => {
    // Simulate async loading
    const timer = setTimeout(() => {
      setFloorPlan(floorPlanImg);
    }, 500);

    return () => clearTimeout(timer); // cleanup
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
          padding: "80px 20px",
          color: "white",
          textAlign: "center",
          borderRadius: "15px",
          marginBottom: "40px",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "20px" }}>
          Exhibitors <span style={{ color: "#F8B324" }}>Floor Plan</span>
        </h1>
        <p style={{ fontSize: "1.1rem", marginBottom: "50px", opacity: 0.9 }}>
          Navigate through our event’s exhibitors and see who’s showcasing on each floor.
        </p>

        {/* Exhibitor Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {["Exhibitor A", "Exhibitor B", "Exhibitor C", "Exhibitor D", "Exhibitor E", "Exhibitor F"].map(
            (name, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  padding: "20px",
                  borderRadius: "15px",
                  backdropFilter: "blur(5px)",
                  transition: "transform 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              >
                <h3 style={{ color: "#F8B324", marginBottom: "10px" }}>{name}</h3>
                <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                  Booth: {idx + 101} | Floor: 1
                </p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Floor Plan Image */}
      <h2 style={{ color: "#4A2E80", marginBottom: "1.5rem" }}>🗺️ Floor Plan</h2>
      {floorPlan ? (
        <img
          src={floorPlan}
          alt="Floor Plan"
          style={{
            width: "100%",
            maxWidth: "900px",
            borderRadius: "15px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
            display: "block",
            margin: "0 auto",
          }}
        />
      ) : (
        <p style={{ color: "#1D1A3A", textAlign: "center" }}>Loading floor plan...</p>
      )}
    </div>
  );
}
