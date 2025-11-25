import React from "react";

export default function ClientSection() {
  const styles = {
    section: {
      width: "100%",
      background: "linear-gradient(to right, #462B8A, #6A3CC8)",
      color: "white",
      padding: "80px 20px",
    },
    content: {
      maxWidth: "1200px",
      margin: "auto",
      textAlign: "center",
    },
    title: {
      fontSize: "40px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    subtitle: {
      fontSize: "18px",
      opacity: 0.85,
      marginBottom: "60px",
      lineHeight: "28px",
    },
    iconsRow: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
      gap: "40px",
      marginBottom: "60px",
    },
    iconBox: { textAlign: "center" },
    icon: {
      background: "#F8B500",
      color: "#462B8A",
      padding: "20px",
      fontSize: "28px",
      borderRadius: "50%",
      width: "65px",
      height: "65px",
      margin: "auto",
      marginBottom: "15px",
      fontWeight: "bold",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    iconDesc: {
      opacity: 0.8,
      fontSize: "14px",
      width: "80%",
      margin: "10px auto 0 auto",
      lineHeight: "20px",
    },
    statsRow: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "25px",
      borderTop: "1px solid rgba(255, 255, 255, 0.4)",
      paddingTop: "40px",
    },
    statNumber: {
      fontSize: "38px",
      fontWeight: "bold",
      color: "#F8B500",
      marginBottom: "5px",
    },
    statText: {
      opacity: 0.8,
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.section}>
      <div style={styles.content}>
        <h2 style={styles.title}>What Our Clients Say</h2>

        <p style={styles.subtitle}>
          Don't just take our word for it. Here's what our satisfied customers
          have to say about their event experiences.
        </p>

        <div style={styles.iconsRow}>
          {[
            "Verified Services",
            "Secure Payment",
            "24/7 Customer Support",
            "Trusted By Thousands",
          ].map((title, index) => (
            <div key={index} style={styles.iconBox}>
              <div style={styles.icon}>✓</div>
              <h3>{title}</h3>
              <p style={styles.iconDesc}>
                All our vendors are thoroughly vetted and verified for quality
                assurance.
              </p>
            </div>
          ))}
        </div>

        <div style={styles.statsRow}>
          <div>
            <h3 style={styles.statNumber}>10000+</h3>
            <p style={styles.statText}>Events Booked</p>
          </div>

          <div>
            <h3 style={styles.statNumber}>500+</h3>
            <p style={styles.statText}>Verified Vendors</p>
          </div>

          <div>
            <h3 style={styles.statNumber}>98%</h3>
            <p style={styles.statText}>Customer Satisfaction</p>
          </div>

          <div>
            <h3 style={styles.statNumber}>24/7</h3>
            <p style={styles.statText}>Support Available</p>
          </div>
        </div>
      </div>
    </div>
  );
}
