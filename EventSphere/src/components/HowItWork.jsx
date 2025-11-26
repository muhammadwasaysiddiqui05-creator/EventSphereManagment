// import React from "react";
// import Footer from '../components/Footer';

// const HowItWorks = () => {
//   const steps = [
//     {
//       icon: "📝",
//       title: "Plan Your Event",
//       description:
//         "Submit your event requirements on EventSphere. Select the type, date, and location of your event.",
//     },
//     {
//       icon: "🤝",
//       title: "Connect with Experts",
//       description:
//         "Our platform connects you with professional event organizers, vendors, and top-tier venues to bring your vision to life.",
//     },
//     {
//       icon: "🎉",
//       title: "Enjoy Your Event",
//       description:
//         "Relax and enjoy your perfectly managed event while EventSphere handles all logistics and execution seamlessly.",
//     },
//   ];

//   return (
//         <>
//     <div style={{ backgroundColor: "#F5F5F5" }}>
//         {/* Hero Section */}
// <div
//   style={{
//     backgroundImage:
//       "linear-gradient(to bottom right, rgba(10,10,40,0.75), rgba(30,20,60,0.85)), url('/mnt/data/ee.PNG')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     padding: "120px 20px",
//     textAlign: "center",
//     color: "white",
//   }}
// >
//   <h1 style={{ fontSize: "3rem", fontWeight: "800" }}>
//     How <span style={{ color: "#F8B324" }}>It Works</span>
//   </h1>
//   <p style={{ fontSize: "1.1rem", marginTop: "10px", opacity: 0.9 }}>
//     Learn how EventSphere Management makes event planning seamless, professional, and stress-free.
//   </p>
// </div>

//       <h2
//         style={{
//           textAlign: "center",
//           color: "#4A2E80",
//           fontSize: "2.5rem",
//           fontWeight: "700",
//           marginBottom: "50px",
//         }}
//       >
//         How <span style={{ color: "#F8B324" }}>It Works</span>
//       </h2>

//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           gap: "40px",
//           maxWidth: "1100px",
//           margin: "0 auto",
//         }}
//       >
//         {steps.map((step, idx) => (
//           <div
//             key={idx}
//             style={{
//               flex: "1 1 300px",
//               minWidth: "250px",
//               background: "#FFFFFF",
//               padding: "30px",
//               borderRadius: "18px",
//               boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
//               textAlign: "center",
//               transition: "transform 0.3s",
//               cursor: "pointer",
//             }}
//             onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//             onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//           >
//             <div style={{ fontSize: "3rem", marginBottom: "20px" }}>{step.icon}</div>
//             <h3 style={{ color: "#4A2E80", marginBottom: "15px" }}>{step.title}</h3>
//             <p style={{ color: "#1D1A3A", lineHeight: 1.6 }}>{step.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default HowItWorks;







import React from "react";
import Footer from '../components/Footer';

const HowItWorks = () => {
  const steps = [
    {
      icon: "📝",
      title: "Plan Your Event",
      description:
        "Submit your event requirements on EventSphere. Select the type, date, and location of your event.",
    },
    {
      icon: "🤝",
      title: "Connect with Experts",
      description:
        "Our platform connects you with professional event organizers, vendors, and top-tier venues to bring your vision to life.",
    },
    {
      icon: "🎉",
      title: "Enjoy Your Event",
      description:
        "Relax and enjoy your perfectly managed event while EventSphere handles all logistics and execution seamlessly.",
    },
  ];

  return (
    <>
      <div style={{ backgroundColor: "#F5F5F5" }}>
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
            How <span style={{ color: "#F8B324" }}>It Works</span>
          </h1>
          <p style={{ fontSize: "1.1rem", marginTop: "10px", opacity: 0.9 }}>
            Learn how EventSphere Management makes event planning seamless, professional, and stress-free.
          </p>
        </div>

        <h2
          style={{
            textAlign: "center",
            color: "#4A2E80",
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "50px",
          }}
        >
          How <span style={{ color: "#F8B324" }}>It Works</span>
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "40px",
            maxWidth: "1100px",
            margin: "0 auto",
            paddingBottom: "80px", // Added padding to prevent footer overlap
          }}
        >
          {steps.map((step, idx) => (
            <div
              key={idx}
              style={{
                flex: "1 1 300px",
                minWidth: "250px",
                background: "#FFFFFF",
                padding: "30px",
                borderRadius: "18px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                textAlign: "center",
                transition: "transform 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div style={{ fontSize: "3rem", marginBottom: "20px" }}>{step.icon}</div>
              <h3 style={{ color: "#4A2E80", marginBottom: "15px" }}>{step.title}</h3>
              <p style={{ color: "#1D1A3A", lineHeight: 1.6 }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HowItWorks;
