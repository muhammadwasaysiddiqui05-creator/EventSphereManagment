// import React, { useState } from "react";
// import Footer from "../components/Footer";

// const Profile = () => {
//   // Dummy user data (replace with API data)
//   const [user, setUser] = useState({
//     name: "John Doe",
//     email: "john.doe@example.com",
//     phone: "+1 234 567 890",
//     profilePic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
//   });

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     // Implement API update logic here
//     alert("Profile updated successfully!");
//   };

//   return (
//     <div style={{ backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
//       {/* Hero Section */}
//       <div
//         style={{
//           backgroundImage:
//             "linear-gradient(to bottom right, rgba(10,10,40,0.75), rgba(30,20,60,0.85)), url('/mnt/data/ee.PNG')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           padding: "120px 20px",
//           textAlign: "center",
//           color: "white",
//           marginBottom: "50px",
//         }}
//       >
//         <h1 style={{ fontSize: "3rem", fontWeight: "800" }}>
//           My <span style={{ color: "#F8B324" }}>Profile</span>
//         </h1>
//         <p style={{ fontSize: "1.2rem", marginTop: "10px", opacity: 0.9 }}>
//           View and manage your account information with EventSphere Management.
//         </p>
//       </div>

//       {/* Profile Form */}
//       <div
//         style={{
//           maxWidth: "700px",
//           margin: "0 auto",
//           background: "#FFFFFF",
//           borderRadius: "15px",
//           padding: "40px 30px",
//           boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
//           marginBottom: "80px",
//         }}
//       >
//         <div style={{ textAlign: "center", marginBottom: "30px" }}>
//           <img
//             src={user.profilePic}
//             alt="Profile"
//             style={{
//               width: "120px",
//               height: "120px",
//               borderRadius: "50%",
//               objectFit: "cover",
//               border: "4px solid #F8B324",
//             }}
//           />
//         </div>

//         <form onSubmit={handleUpdate}>
//           <div className="mb-3">
//             <label style={{ fontWeight: "600" }}>Name</label>
//             <input
//               type="text"
//               className="form-control"
//               value={user.name}
//               onChange={(e) => setUser({ ...user, name: e.target.value })}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label style={{ fontWeight: "600" }}>Email</label>
//             <input
//               type="email"
//               className="form-control"
//               value={user.email}
//               onChange={(e) => setUser({ ...user, email: e.target.value })}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label style={{ fontWeight: "600" }}>Phone</label>
//             <input
//               type="tel"
//               className="form-control"
//               value={user.phone}
//               onChange={(e) => setUser({ ...user, phone: e.target.value })}
//             />
//           </div>

//           <div className="mb-3">
//             <label style={{ fontWeight: "600" }}>Profile Picture URL</label>
//             <input
//               type="text"
//               className="form-control"
//               value={user.profilePic}
//               onChange={(e) => setUser({ ...user, profilePic: e.target.value })}
//             />
//           </div>

//           <button
//             type="submit"
//             className="btn w-100"
//             style={{ backgroundColor: "#F8B324", color: "#fff", fontWeight: "600" }}
//           >
//             Update Profile
//           </button>
//         </form>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Profile;







import React from "react";
import Footer from "../components/Footer";

const Profile = () => {
  // Dummy organizer data (replace with API data)
  const organizer = {
    basicInfo: {
      name: "Elite Events Co.",
      email: "contact@eliteevents.com",
      phone: "+92 300 1234567",
      profilePic: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80",
    },
    organizationDetails: {
      type: "Event Management",
      yearsOfExperience: 8,
      eventsManaged: 120,
    },
    address: {
      office: "123 Main Street",
      city: "Karachi",
      country: "Pakistan",
      googleMaps: "https://www.google.com/maps",
    },
    services: {
      eventTypes: ["Weddings", "Corporate Events", "Music Concerts", "Conferences"],
      serviceList: ["Catering", "Decoration", "Photography", "Sound & Lighting"],
    },
    // portfolio: [
    //   "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=60",
    //   "https://images.unsplash.com/photo-1515169067867-3f23c7382f8c?auto=format&fit=crop&w=400&q=60",
    //   "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=60",
    // ],
    // socialLinks: {
    //   website: "http://localhost:5173/",
    //   instagram: "https://instagram.com/eliteevents",
    //   facebook: "https://facebook.com/eliteevents",
    //   linkedin: "https://linkedin.com/company/eliteevents",
    // },
    ratings: {
      average: 4.8,
      reviews: [
        { client: "Alice", comment: "Amazing organization and flawless execution!" },
        { client: "Bob", comment: "Highly professional and detail-oriented." },
      ],
    },
    availability: ["2025-12-01", "2025-12-15", "2026-01-10"],
  };

  return (
    <div style={{ backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
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
          marginBottom: "40px",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "800" }}>
          Organizer <span style={{ color: "#F8B324" }}>Profile</span>
        </h1>
        <p style={{ fontSize: "1.2rem", marginTop: "10px", opacity: 0.9 }}>
          View all details of the event organizer and their portfolio.
        </p>
      </div>

      {/* Profile Info Card */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto 80px auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        {/* Basic Info */}
        <div
          style={{
            flex: "1 1 350px",
            background: "#fff",
            borderRadius: "15px",
            padding: "30px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <img
            src={organizer.basicInfo.profilePic}
            alt="Organizer"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #F8B324",
              marginBottom: "15px",
            }}
          />
          <h2 style={{ color: "#4A2E80", marginBottom: "5px" }}>{organizer.basicInfo.name}</h2>
          <p style={{ color: "#1D1A3A", margin: "5px 0" }}><strong>Email:</strong> {organizer.basicInfo.email}</p>
          <p style={{ color: "#1D1A3A", margin: "5px 0" }}><strong>Phone:</strong> {organizer.basicInfo.phone}</p>
        </div>

        {/* Organization Details */}
        <div
          style={{
            flex: "1 1 600px",
            background: "#fff",
            borderRadius: "15px",
            padding: "30px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: "#4A2E80", marginBottom: "15px" }}>Organization Details</h3>
          <p><strong>Type:</strong> {organizer.organizationDetails.type}</p>
          <p><strong>Years of Experience:</strong> {organizer.organizationDetails.yearsOfExperience}</p>
          <p><strong>Events Managed:</strong> {organizer.organizationDetails.eventsManaged}</p>

          <h3 style={{ color: "#4A2E80", margin: "20px 0 10px" }}>Address</h3>
          <p>{organizer.address.office}, {organizer.address.city}, {organizer.address.country}</p>
          <p><a href={organizer.address.googleMaps} target="_blank" rel="noreferrer" style={{ color: "#F8B324" }}>View on Google Maps</a></p>

          <h3 style={{ color: "#4A2E80", margin: "20px 0 10px" }}>Services</h3>
          <p><strong>Event Types:</strong> {organizer.services.eventTypes.join(", ")}</p>
          <p><strong>Service List:</strong> {organizer.services.serviceList.join(", ")}</p>

          {/* <h3 style={{ color: "#4A2E80", margin: "20px 0 10px" }}>Social Links</h3>
          <p>
            <a href={organizer.socialLinks.website} target="_blank" rel="noreferrer" style={{ color: "#F8B324", marginRight: "10px" }}>Website</a>
            <a href={organizer.socialLinks.instagram} target="_blank" rel="noreferrer" style={{ color: "#F8B324", marginRight: "10px" }}>Instagram</a>
            <a href={organizer.socialLinks.facebook} target="_blank" rel="noreferrer" style={{ color: "#F8B324", marginRight: "10px" }}>Facebook</a>
            <a href={organizer.socialLinks.linkedin} target="_blank" rel="noreferrer" style={{ color: "#F8B324" }}>LinkedIn</a>
          </p> */}

          <h3 style={{ color: "#4A2E80", margin: "20px 0 10px" }}>Ratings & Reviews</h3>
          <p><strong>Average Rating:</strong> {organizer.ratings.average} ⭐</p>
          {organizer.ratings.reviews.map((r, idx) => (
            <p key={idx}><strong>{r.client}:</strong> {r.comment}</p>
          ))}

          <h3 style={{ color: "#4A2E80", margin: "20px 0 10px" }}>Availability</h3>
          <p>{organizer.availability.join(", ")}</p>
        </div>
      </div>

      {/* Portfolio Section
      <div style={{ maxWidth: "1000px", margin: "0 auto 80px auto", padding: "0 20px" }}>
        <h3 style={{ color: "#4A2E80", marginBottom: "20px" }}>Portfolio / Gallery</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {organizer.portfolio.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Portfolio ${idx + 1}`}
              style={{
                width: "calc(33% - 13px)",
                borderRadius: "12px",
                objectFit: "cover",
                height: "200px",
              }}
            />
          ))}
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default Profile;
