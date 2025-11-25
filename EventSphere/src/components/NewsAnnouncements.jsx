import React from "react";

const newsItems = [
  {
    title: "New Events Added",
    subtitle: "Check out the latest events added to our platform.",
    image: "https://via.placeholder.com/400x250?text=New+Events",
  },
  {
    title: "Venue Policy Updates",
    subtitle: "Important updates regarding event venue policies.",
    image: "https://via.placeholder.com/400x250?text=Venue+Policy",
  },
  {
    title: "Festival Line-Ups",
    subtitle: "Discover the line-ups for upcoming festivals.",
    image: "https://via.placeholder.com/400x250?text=Festivals",
  },
];

const NewsAnnouncements = () => {
  return (
    <div id="news-announcements" className="py-5">
      <h2
        className="text-center fw-bold"
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "2.6rem",
          color: "#4A2E80",
        }}
      >
         News & Announcements
      </h2>

      <p className="text-center mt-2" style={{ color: "#6f6f6f" }}>
        Stay updated with the latest happenings and festival info.
      </p>

      <div
        className="d-flex justify-content-center flex-wrap gap-4 mt-4"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        {newsItems.map((item, index) => (
          <div
            key={index}
            style={{
              width: "340px",
              height: "180px",
              borderRadius: "18px",
              backgroundImage: `linear-gradient(
                rgba(74, 46, 128, 0.55), 
                rgba(29, 26, 58, 0.55)
              ), url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "18px",
              color: "#fff",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h4
              style={{
                fontSize: "1.3rem",
                marginBottom: "4px",
                fontWeight: "700",
              }}
            >
              {item.title}
            </h4>
            <p style={{ margin: 0, opacity: 0.9 }}>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAnnouncements;
