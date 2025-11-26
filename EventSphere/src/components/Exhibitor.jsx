// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Exhibitors() {
//   const [exhibitors, setExhibitors] = useState([]);

//   useEffect(() => {
//     axios.get("/api/exhibitors") // API endpoint
//       .then(res => setExhibitors(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div style={{ padding: "2rem", backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
//       <h2 style={{ color: "#4A2E80", marginBottom: "1.5rem" }}>Exhibitors</h2>

//       <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
//         {exhibitors.map(ex => (
//           <div key={ex._id} 
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
//             <img src={ex.logo} alt={ex.companyName} style={{ width: "100%", borderRadius: "10px", marginBottom: "0.5rem" }} />
//             <h3 style={{ color: "#1D1A3A", marginBottom: "0.5rem" }}>{ex.companyName}</h3>
//             <p style={{ color: "#4A2E80", fontWeight: "500", marginBottom: "0.25rem" }}>Booth: {ex.boothNumber}</p>
//             <p style={{ color: "#1D1A3A", marginBottom: "0.5rem" }}>{ex.category}</p>
//             <p style={{ color: "#333333", flexGrow: 1 }}>{ex.description}</p>
//             <button 
//               style={{
//                 marginTop: "1rem",
//                 backgroundColor: "#F8B324",
//                 border: "none",
//                 borderRadius: "8px",
//                 padding: "0.5rem 1rem",
//                 fontWeight: "600",
//                 color: "#1D1A3A",
//                 cursor: "pointer",
//                 transition: "background 0.2s",
//               }}
//               onMouseEnter={e => e.currentTarget.style.backgroundColor = "#e0a91f"}
//               onMouseLeave={e => e.currentTarget.style.backgroundColor = "#F8B324"}
//             >
//               View Booth
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }






import { useEffect, useState } from "react";
import Footer from "./Footer";

export default function Exhibitors() {
  const [exhibitors, setExhibitors] = useState([]);

  useEffect(() => {
    const dummyExhibitors = [
      {
        _id: "1",
        companyName: "TechCorp Solutions",
        boothNumber: "A12",
        category: "Technology",
        logo: "https://via.placeholder.com/300x150.png?text=TechCorp+Logo",
        description: "Innovative solutions for modern businesses."
      },
      {
        _id: "2",
        companyName: "GreenEnergy Ltd.",
        boothNumber: "B05",
        category: "Renewable Energy",
        logo: "https://via.placeholder.com/300x150.png?text=GreenEnergy+Logo",
        description: "Sustainable energy solutions for a better future."
      },
      {
        _id: "3",
        companyName: "Artistic Creations",
        boothNumber: "C21",
        category: "Arts & Crafts",
        logo: "https://via.placeholder.com/300x150.png?text=Artistic+Logo",
        description: "Handcrafted artistic pieces from local talents."
      }
    ];

    setTimeout(() => {
      setExhibitors(dummyExhibitors);
    }, 500);
  }, []);

  return (
    <>
    <div style={{ padding: "2rem", backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
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
    Meet Our <span style={{ color: "#F8B324" }}>Exhibitors</span>
  </h1>
  <p style={{ fontSize: "1.1rem", marginTop: "10px", opacity: 0.9 }}>
    Explore top companies and innovators showcasing their products and services.
  </p>
</div>

      <h2 style={{ color: "#4A2E80", marginBottom: "1.5rem" }}>Exhibitors</h2>

      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {exhibitors.map(ex => (
          <div key={ex._id} 
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
            <img src={ex.logo} alt={ex.companyName} style={{ width: "100%", borderRadius: "10px", marginBottom: "0.5rem" }} />
            <h3 style={{ color: "#1D1A3A", marginBottom: "0.5rem" }}>{ex.companyName}</h3>
            <p style={{ color: "#4A2E80", fontWeight: "500", marginBottom: "0.25rem" }}>Booth: {ex.boothNumber}</p>
            <p style={{ color: "#1D1A3A", marginBottom: "0.5rem" }}>{ex.category}</p>
            <p style={{ color: "#333333", flexGrow: 1 }}>{ex.description}</p>
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
              View Booth
            </button>
          </div>
        ))}
      </div>
    </div>
    <Footer/></>
  );
}
