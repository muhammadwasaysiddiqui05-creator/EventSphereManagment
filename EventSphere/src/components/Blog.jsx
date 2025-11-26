import React from "react";
import Footer from "../components/Footer";

const Blog = () => {
  // Dummy blog data
  const blogs = [
    {
      id: 1,
      title: "Top 5 Event Planning Tips",
      description: "Learn the top 5 tips to plan your events like a pro with EventSphere Management.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      title: "How to Choose the Perfect Venue",
      description: "Selecting the right venue can make or break your event. Here's how EventSphere can help.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      title: "Managing Speakers and Guests Efficiently",
      description: "Discover the best ways to manage speakers and guests for a seamless event experience.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
    },
  ];

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
          marginBottom: "50px",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "800" }}>
          EventSphere <span style={{ color: "#F8B324" }}>Blog</span>
        </h1>
        <p style={{ fontSize: "1.2rem", marginTop: "10px", opacity: 0.9 }}>
          Stay updated with the latest event management tips, insights, and success stories.
        </p>
      </div>

      {/* Blog Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingBottom: "80px",
        }}
      >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            style={{
              flex: "1 1 300px",
              minWidth: "280px",
              background: "#FFFFFF",
              borderRadius: "15px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={blog.image}
              alt={blog.title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "20px", flex: "1" }}>
              <h3 style={{ color: "#4A2E80", marginBottom: "10px" }}>{blog.title}</h3>
              <p style={{ color: "#1D1A3A", lineHeight: 1.6, marginBottom: "15px" }}>
                {blog.description}
              </p>
              {/* <button
                style={{
                  backgroundColor: "#F8B324",
                  border: "none",
                  color: "#fff",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Read More
              </button> */}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
