// const Categories = ({categories}) => {


//   return (
//     <div className="text-center p-5" id="categories">
//       {/* Elegant Subheading */}
//       <h5
//         className="text-uppercase"
//         style={{
//           color: '#B8905B', // aesthetic gold-beige
//           fontWeight: '600',
//           letterSpacing: '2px',
//           fontSize: '14px'
//         }}
//       >
//         Curated Selections
//       </h5>

//       {/* Main Stylish Heading */}
//       <h2
//         style={{
//           fontFamily: 'Playfair Display, serif',
//           fontSize: '2.8rem',
//           color: "#a05260",
//           fontStyle: 'italic'
//         }}
//       >
//         Discover Beauty in Every Detail
//       </h2>

//       {/* Categories Grid */}
//       <div className="d-flex justify-content-center flex-wrap gap-4 mt-4">
//         {categories.map((item, index) => (
//           <div
//             className="border p-3 rounded text-center shadow-sm"
//             key={index}
//             style={{ width: "120px", backgroundColor: "#f9f9f9" }}
//           >
//             <img
//               src="data:image/jpeg;base64,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"
//               alt={item.title}
//               className="img-fluid mb-2"
//               style={{
//                 width: "100%",
//                 height: "80px",
//                 objectFit: "cover",
//                 borderRadius: "8px"
//               }}
//             />
//             <p
//               className="mb-0 fw-semibold"
//               style={{ fontSize: '14px', fontFamily: 'Poppins, sans-serif' }}
//             >
//               {item.title}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;








// const Categories = ({ categories }) => {
//   return (
//     <div id="categories" className="py-5">

//       {/* Section Heading */}
//       <h2
//         className="text-center fw-bold"
//         style={{
//           fontFamily: "Playfair Display, serif",
//           fontSize: "2.6rem",
//           color: "#4A2E80",
//         }}
//       >
//         Event Categories
//       </h2>

//       <p className="text-center mt-2" style={{ color: "#6f6f6f" }}>
//         Whether it's weddings, concerts or birthdays — find everything you need.
//       </p>

//       {/* Categories Grid */}
//       <div className="d-flex justify-content-center flex-wrap gap-4 mt-4">

//         {categories.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               width: "260px",
//               height: "150px",
//               borderRadius: "18px",
//               backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.45)), url(${item.image})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               color: "white",
//               display: "flex",
//               alignItems: "flex-end",
//               padding: "18px",
//               boxShadow: "0 8px 18px rgba(0,0,0,0.15)",
//               cursor: "pointer",
//               transition: "0.3s",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = "translateY(-6px)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = "translateY(0)";
//             }}
//           >
//             <h4
//               style={{
//                 fontWeight: "600",
//                 textShadow: "0 3px 6px rgba(0,0,0,0.5)",
//               }}
//             >
//               {item.title}
//             </h4>
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// };

// export default Categories;



import React from "react";

const eventCategories = [
  {
    title: "Technology & Innovation",
    subtitle: "Explore cutting‑edge advancements",
    image: "/mnt/data/event.PNG", // replace with your actual image if needed
  },
  {
    title: "Automobile & Engineering",
    subtitle: "Showcase modern engineering marvels",
    image: "https://images.unsplash.com/photo-1503377983482-23c4f3a9b1f9?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Health & Medical Expo",
    subtitle: "Healthcare innovations and solutions",
    image: "https://images.unsplash.com/photo-1580281657527-47c521a6e59b?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Education & Training",
    subtitle: "Expand learning opportunities",
    image: "https://images.unsplash.com/photo-1558024920-b400f9a252a0?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Fashion & Lifestyle",
    subtitle: "Discover new trends and styles",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Food & Beverage Expo",
    subtitle: "Taste the world of food innovation",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=60",
  },
];

const Categories = () => {
  return (
    <div id="categories" className="py-5">
      <h2
        className="text-center fw-bold"
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "2.6rem",
          color: "#4A2E80",
        }}
      >
        Event Categories
      </h2>

      <p className="text-center mt-2" style={{ color: "#6f6f6f" }}>
        Explore industry-focused expos and trade shows across multiple sectors.
      </p>

      {/* GRID LIKE THE REFERENCE IMAGE */}
      <div
        className="d-flex justify-content-center flex-wrap gap-4 mt-4"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        {eventCategories.map((item, index) => (
          <div
            key={index}
            style={{
              width: "340px",
              height: "180px",
              borderRadius: "18px",
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.55)), url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 8px 18px rgba(0,0,0,0.15)",
              cursor: "pointer",
              transition: "0.3s",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "15px",
                left: "15px",
                color: "white",
                textShadow: "0 3px 6px rgba(0,0,0,0.6)",
              }}
            >
              <h4 style={{ margin: 0, fontWeight: "700" }}>{item.title}</h4>
              <p style={{ margin: 0, fontSize: "14px", opacity: 0.85 }}>
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
