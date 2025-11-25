
// import React from 'react';

// const Contact = () => {
//   return (
//     <div className="container py-5">
//       <h2 className="text-center mb-4">Contact Us</h2>
//       <div className="row">
//         <div className="col-md-6">
//           <h4>Get In Touch</h4>
//           <p>Have any questions? We'd love to hear from you!</p>
//           <ul className="list-unstyled">
//             <li><strong>Address:</strong>Karachi,Pakistan</li>
//             <li><strong>Email:</strong> exclusive@gmail.com</li>
//             <li><strong>Phone:</strong> +880123456789</li>
//           </ul>
//         </div>
//         <div className="col-md-6">
//           <form>
//             <div className="mb-3">
//               <input type="text" className="form-control" placeholder="Your Name" />
//             </div>
//             <div className="mb-3">
//               <input type="email" className="form-control" placeholder="Your Email" />
//             </div>
//             <div className="mb-3">
//               <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
//             </div>
//             <button type="submit" className="btn btn-danger w-100">Send Message</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;








import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ backgroundColor: "#F5F5F5", padding: "60px 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px", color: "#4A2E80", fontSize: "2.5rem", fontWeight: "700" }}>
        Contact Us
      </h2>

      <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "1100px", margin: "0 auto", gap: "40px" }}>
        
        {/* Contact Info */}
        <div style={{ flex: "1 1 400px", minWidth: "300px" }}>
          <h4 style={{ color: "#4A2E80", marginBottom: "15px" }}>Get In Touch</h4>
          <p style={{ color: "#1D1A3A", lineHeight: 1.6 }}>
            Have any questions? We'd love to hear from you!
          </p>
          <ul style={{ listStyle: "none", padding: 0, color: "#1D1A3A", lineHeight: 2 }}>
            <li><strong>Address:</strong> Karachi, Pakistan</li>
            <li><strong>Email:</strong> exclusive@gmail.com</li>
            <li><strong>Phone:</strong> +880123456789</li>
          </ul>
        </div>

        {/* Contact Form */}
        <div style={{ flex: "1 1 400px", minWidth: "300px", backgroundColor: "#FFFFFF", padding: "30px", borderRadius: "15px", boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}>
          <form onSubmit={handleSubmit}>

            {/* Name Field */}
            <div style={{ marginBottom: "15px" }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px 15px",
                  borderRadius: "10px",
                  border: errors.name ? "1px solid red" : "1px solid #ccc",
                  fontSize: "1rem",
                }}
              />
              {errors.name && (
                <p style={{ color: "red", fontSize: "0.9rem", marginTop: "5px" }}>{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div style={{ marginBottom: "15px" }}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px 15px",
                  borderRadius: "10px",
                  border: errors.email ? "1px solid red" : "1px solid #ccc",
                  fontSize: "1rem",
                }}
              />
              {errors.email && (
                <p style={{ color: "red", fontSize: "0.9rem", marginTop: "5px" }}>{errors.email}</p>
              )}
            </div>

            {/* Message Field */}
            <div style={{ marginBottom: "20px" }}>
              <textarea
                rows="4"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px 15px",
                  borderRadius: "10px",
                  border: errors.message ? "1px solid red" : "1px solid #ccc",
                  fontSize: "1rem",
                  resize: "none",
                }}
              ></textarea>
              {errors.message && (
                <p style={{ color: "red", fontSize: "0.9rem", marginTop: "5px" }}>{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "#F8B324",
                border: "none",
                padding: "12px 20px",
                borderRadius: "30px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                color: "#1D1A3A",
                transition: "0.3s",
              }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = "#F8C046")}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = "#F8B324")}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
