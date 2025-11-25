// import React from "react";

// const AboutUs = () => {
//   return (
//     <div style={{ backgroundColor: "#f8f8f8" }}>
      
//       {/* Hero Section */}
//       <div
//         style={{
//           backgroundImage:
//             "linear-gradient(to bottom right, rgba(15,15,45,0.7), rgba(30,20,60,0.8)), url('/mnt/data/ee.PNG')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           padding: "110px 20px",
//           textAlign: "center",
//           color: "white",
//         }}
//       >
//         <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>
//           About <span style={{ color: "#F8B324" }}>EventSphere</span>
//         </h1>
//         <p style={{ fontSize: "1.2rem", marginTop: "10px", opacity: 0.9 }}>
//           Delivering unforgettable event experiences with innovation and passion.
//         </p>
//       </div>

//       {/* Content Section */}
//       <div
//         style={{
//           maxWidth: "1100px",
//           margin: "0 auto",
//           padding: "50px 20px",
//         }}
//       >
//         <h2
//           style={{
//             textAlign: "center",
//             color: "#4A2E80",
//             fontSize: "2.2rem",
//             fontWeight: "700",
//           }}
//         >
//           Who We Are
//         </h2>

//         <p
//           style={{
//             textAlign: "center",
//             color: "#6a6a6a",
//             maxWidth: "800px",
//             margin: "10px auto 40px",
//             fontSize: "1.1rem",
//             lineHeight: "1.7",
//           }}
//         >
//           EventSphere Management is a modern event planning and booking platform
//           that connects clients with the best venues, organizers, and service
//           providers. We simplify the entire event planning process — from venue
//           booking to complete event management.
//         </p>

//         {/* 3 Columns */}
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "center",
//             gap: "25px",
//           }}
//         >
//           {/* Card 1 */}
//           <div
//             style={{
//               width: "320px",
//               background: "white",
//               padding: "25px",
//               borderRadius: "18px",
//               boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
//             }}
//           >
//             <h3 style={{ color: "#4A2E80", fontWeight: "700" }}>Our Mission</h3>
//             <p style={{ color: "#555", marginTop: "10px", lineHeight: "1.6" }}>
//               To make event planning effortless and accessible while ensuring
//               top-tier quality and unforgettable experiences.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div
//             style={{
//               width: "320px",
//               background: "white",
//               padding: "25px",
//               borderRadius: "18px",
//               boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
//             }}
//           >
//             <h3 style={{ color: "#4A2E80", fontWeight: "700" }}>
//               What We Provide
//             </h3>
//             <p style={{ color: "#555", marginTop: "10px", lineHeight: "1.6" }}>
//               Venue booking, event décor, catering, photography, sound &
//               lighting, corporate functions, weddings, concerts, exhibitions.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div
//             style={{
//               width: "320px",
//               background: "white",
//               padding: "25px",
//               borderRadius: "18px",
//               boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
//             }}
//           >
//             <h3 style={{ color: "#4A2E80", fontWeight: "700" }}>
//               Why Choose Us?
//             </h3>
//             <p style={{ color: "#555", marginTop: "10px", lineHeight: "1.6" }}>
//               Professional team, reliable service providers, transparent
//               booking, premium quality and personalized event solutions.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;










import React from "react";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
    <div style={{ backgroundColor: "#f5f5f5" }}>
      
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
          About <span style={{ color: "#F8B324" }}>EventSphere</span>
        </h1>
        <p style={{ fontSize: "1.1rem", marginTop: "10px", opacity: 0.9 }}>
          Creating seamless event experiences through innovation and dedication.
        </p>
      </div>

      {/* WHO WE ARE */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "50px auto",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#4A2E80",
            fontSize: "2.3rem",
            fontWeight: "700",
          }}
        >
          Who We Are
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#626262",
            maxWidth: "800px",
            margin: "10px auto 40px",
            fontSize: "1.1rem",
            lineHeight: 1.7,
          }}
        >
          EventSphere Management is Pakistan’s leading event planning and venue
          booking platform. We connect clients with professional organizers,
          premium event services, and top-tier venues to deliver unforgettable
          experiences — every time.
        </p>

        {/* 3 Column Cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "25px",
          }}
        >
          {[
            {
              title: "Our Mission",
              text: "To simplify event planning by making premium services accessible, reliable, and affordable.",
            },
            {
              title: "What We Provide",
              text: "Weddings, corporate events, concerts, exhibitions, décor, catering, sound, lighting, and more.",
            },
            {
              title: "Why Choose Us?",
              text: "Professional experts, quality service providers, transparent pricing, and seamless booking.",
            },
          ].map((card, index) => (
            <div
              key={index}
              style={{
                width: "320px",
                background: "white",
                padding: "25px",
                borderRadius: "18px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ color: "#4A2E80", fontWeight: "700" }}>{card.title}</h3>
              <p style={{ color: "#555", marginTop: "10px", lineHeight: "1.6" }}>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* OUR VALUES */}
      <div style={{ background: "white", padding: "70px 20px" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#4A2E80",
            fontSize: "2.2rem",
            fontWeight: "700",
          }}
        >
          Our Core Values
        </h2>

        <div
          style={{
            maxWidth: "1100px",
            margin: "40px auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          {[
            {
              icon: "🎯",
              title: "Commitment",
              text: "We remain dedicated to delivering high-quality event experiences.",
            },
            {
              icon: "🤝",
              title: "Trust",
              text: "We build strong relationships through transparency and reliability.",
            },
            {
              icon: "✨",
              title: "Creativity",
              text: "We craft unforgettable moments with unique and innovative ideas.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                width: "300px",
                textAlign: "center",
                padding: "25px",
              }}
            >
              <div style={{ fontSize: "3rem" }}>{item.icon}</div>
              <h3 style={{ marginTop: "10px", color: "#4A2E80" }}>{item.title}</h3>
              <p style={{ color: "#666", marginTop: "5px" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* COUNTERS */}
      <div
        style={{
          background:
            "linear-gradient(to right, #4A2E80, #2D1F63, #311D75)",
          padding: "70px 20px",
          color: "white",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "50px",
          }}
        >
          {[
            { number: "500+", label: "Successful Events" },
            { number: "120+", label: "Corporate Clients" },
            { number: "80+", label: "Trusted Partners" },
            { number: "10+", label: "Years Experience" },
          ].map((item) => (
            <div key={item.label}>
              <h1 style={{ fontSize: "3rem", fontWeight: "800", color: "#F8B324" }}>
                {item.number}
              </h1>
              <p style={{ fontSize: "1.1rem" }}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MEET OUR TEAM */}
      <div style={{ padding: "70px 20px" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#4A2E80",
            fontSize: "2.2rem",
            fontWeight: "700",
          }}
        >
          Meet Our Team
        </h2>

        <div
          style={{
            maxWidth: "1100px",
            margin: "40px auto",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          {[
            {
              name: "Ahsan Raza",
              role: "Event Director",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Maryam Khan",
              role: "Creative Planner",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Bilal Ahmed",
              role: "Operations Manager",
              img: "https://randomuser.me/api/portraits/men/54.jpg",
            },
          ].map((member) => (
            <div
              key={member.name}
              style={{
                width: "260px",
                background: "white",
                padding: "20px",
                borderRadius: "18px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <img
                src={member.img}
                alt=""
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <h3 style={{ marginTop: "15px", color: "#4A2E80" }}>{member.name}</h3>
              <p style={{ color: "#666", marginTop: "5px" }}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background:
            "linear-gradient(to right, rgba(15,15,45,0.9), rgba(30,20,60,0.9))",
          color: "white",
        }}
      >
        <h2 style={{ fontSize: "2.4rem", fontWeight: "700" }}>
          Ready to Plan Your Event?
        </h2>
        <p style={{ marginTop: "10px", fontSize: "1.1rem", opacity: 0.9 }}>
          Let’s turn your ideas into unforgettable memories.
        </p>

        <button
          style={{
            marginTop: "25px",
            backgroundColor: "#F8B324",
            border: "none",
            padding: "12px 28px",
            borderRadius: "30px",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
