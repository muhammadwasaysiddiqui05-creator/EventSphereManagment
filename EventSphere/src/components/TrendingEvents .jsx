import React from "react";

const trendingEvents = [
  {
    title: "Summer Beats Festival",
    subtitle: "City Arena • Dec 6 • 7:30 PM",
    image: "https://via.placeholder.com/400x250?text=Festival",
  },
  {
    title: "TechConf 2025",
    subtitle: "Expo Center • Jan 12 • 9:00 AM",
    image: "https://via.placeholder.com/400x250?text=Tech+Conf",
  },
  {
    title: "Stand-Up Comedy Night",
    subtitle: "LaughHouse • Dec 20 • 8:00 PM",
    image: "https://via.placeholder.com/400x250?text=Stand-up",
  },
  {
    title: "Winter Food Carnival",
    subtitle: "City Park • Dec 30 • 5:00 PM",
    image: "https://via.placeholder.com/400x250?text=Food+Carnival",
  },
  {
    title: "Auto Expo 2025",
    subtitle: "Expo Ground • Jan 10 • 10:00 AM",
    image: "https://via.placeholder.com/400x250?text=Auto+Expo",
  },
  {
    title: "Live Jazz Night",
    subtitle: "Blue Lounge • Dec 18 • 9:00 PM",
    image: "https://via.placeholder.com/400x250?text=Jazz+Night",
  },
];

const TrendingEvents = () => {
  return (
    <div id="trending" className="py-5">
      <h2
        className="text-center fw-bold"
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "2.6rem",
          color: "#4A2E80", // same purple
        }}
      >
        Trending Events
      </h2>

      <p className="text-center mt-2" style={{ color: "#6f6f6f" }}>
        Discover the most popular events happening around you.
      </p>

      {/* SAME GRID LIKE EVENT CATEGORIES */}
      <div
        className="d-flex justify-content-center flex-wrap gap-4 mt-4"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        {trendingEvents.map((event, index) => (
          <div
            key={index}
            style={{
              width: "340px",
              height: "180px",
              borderRadius: "18px",
              backgroundImage: `linear-gradient(
                rgba(74, 46, 128, 0.55), 
                rgba(29, 26, 58, 0.55)
              ), url(${event.image})`,
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
              {event.title}
            </h4>
            <p style={{ margin: 0, opacity: 0.9 }}>{event.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingEvents;
