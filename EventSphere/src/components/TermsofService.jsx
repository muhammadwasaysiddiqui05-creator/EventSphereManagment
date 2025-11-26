import React from "react";
import Footer from "../components/Footer";

const TermsOfService = () => {
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
          Terms of <span style={{ color: "#F8B324" }}>Service</span>
        </h1>
        <p style={{ fontSize: "1.2rem", marginTop: "10px", opacity: 0.9 }}>
          Please read our Terms of Service carefully before using EventSphere Management.
        </p>
      </div>

      {/* Terms Content */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 20px 80px 20px",
          color: "#1D1A3A",
          lineHeight: 1.7,
        }}
      >
        <h2 style={{ color: "#4A2E80", marginBottom: "20px" }}>1. Acceptance of Terms</h2>
        <p>
          By accessing or using EventSphere Management, you agree to be bound by these Terms of Service.
          If you do not agree, you must not use our services.
        </p>

        <h2 style={{ color: "#4A2E80", marginBottom: "20px", marginTop: "30px" }}>2. Services Provided</h2>
        <p>
          EventSphere Management provides a platform to plan, manage, and organize events, connect with 
          vendors, and access event-related resources. We reserve the right to modify or discontinue services at any time.
        </p>

        <h2 style={{ color: "#4A2E80", marginBottom: "20px", marginTop: "30px" }}>3. User Responsibilities</h2>
        <p>
          Users must provide accurate information when using our platform and comply with all applicable laws.
          Any misuse of the platform or violation of these Terms may result in suspension or termination of your account.
        </p>

        <h2 style={{ color: "#4A2E80", marginBottom: "20px", marginTop: "30px" }}>4. Privacy & Data</h2>
        <p>
          Your use of EventSphere Management is subject to our Privacy Policy. We take data privacy seriously 
          and use your information only as described in our Privacy Policy.
        </p>

        <h2 style={{ color: "#4A2E80", marginBottom: "20px", marginTop: "30px" }}>5. Limitation of Liability</h2>
        <p>
          EventSphere Management is not liable for any direct, indirect, incidental, or consequential damages 
          resulting from the use or inability to use our services. Users agree to use the platform at their own risk.
        </p>

        <h2 style={{ color: "#4A2E80", marginBottom: "20px", marginTop: "30px" }}>6. Changes to Terms</h2>
        <p>
          We may update these Terms of Service from time to time. Any changes will be posted on this page 
          and your continued use of the platform constitutes acceptance of the updated Terms.
        </p>

        <h2 style={{ color: "#4A2E80", marginBottom: "20px", marginTop: "30px" }}>7. Contact Us</h2>
        <p>
          For questions or concerns regarding these Terms of Service, please contact us at support@eventsphere.com.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
