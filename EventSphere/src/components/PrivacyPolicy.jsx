import React from "react";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
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
          Privacy <span style={{ color: "#F8B324" }}>Policy</span>
        </h1>
        <p style={{ fontSize: "1.2rem", marginTop: "10px", opacity: 0.9 }}>
          Learn how EventSphere Management collects, uses, and protects your personal information.
        </p>
      </div>

      {/* Privacy Content */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 20px 80px 20px",
          color: "#1D1A3A",
          lineHeight: 1.7,
        }}
      >
        <h2 style={{ color: "#4A2E80", marginBottom: "20px" }}>1. Information Collection</h2>
        <p>
          We collect personal information such as your name, email address, phone number, and event details when you register or use our services. 
          We also collect non-personal data such as usage statistics and cookies to improve our platform.
        </p>

        <h2 style={{ color: "#4A2E80", marginBottom: "20px", marginTop: "30px" }}>2. Use of Information</h2>
        <p>
          The information we collect is used to provide and improve our services, communicate with you, manage events, and personalize your experience 
          on EventSphere Management.
        </p>

        <h2 style={{ color: "#4A2E80", marginBottom: "20px", marginTop: "30px" }}>3. Data Sharing</h2>
        <p>
          We do not sell your personal information to third parties. We may share your data with trusted service providers to help us deliver our services, 
          and as required by law.
        </p>

        <h2 style={{ color: "#4A2E80", marginBottom: "20px", marginTop: "30px" }}>4. Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or misuse. 
          However, no online platform can guarantee 100% security.
        </p>

        <h2 style={{ color: "#4A2E80", marginBottom: "20px", marginTop: "30px" }}>5. Cookies & Tracking</h2>
        <p>
          EventSphere Management uses cookies and similar tracking technologies to enhance user experience, analyze site usage, and serve relevant content. 
          You can disable cookies in your browser settings, but some features may not function properly.
        </p>

        <h2 style={{ color: "#4A2E80", marginBottom: "20px", marginTop: "30px" }}>6. Children's Privacy</h2>
        <p>
          Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. 
          If we discover such data, we take immediate steps to delete it.
        </p>

        <h2 style={{ color: "#4A2E80", marginBottom: "20px", marginTop: "30px" }}>7. Changes to Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and your continued use of our services 
          constitutes acceptance of the updated policy.
        </p>

        <h2 style={{ color: "#4A2E80", marginBottom: "20px", marginTop: "30px" }}>8. Contact Us</h2>
        <p>
          For questions or concerns about this Privacy Policy, please contact us at support@eventsphere.com.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
