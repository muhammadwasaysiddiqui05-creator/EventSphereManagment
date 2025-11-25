import React from "react";

const Banner = () => {
  return (
    <div
      className="w-100"
      style={{
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1p17i_0HKAtnbRGU3cilckJ3ZTgsQpmn2Qg&s")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "120px 20px",
        color: "white",
        position: "relative",
      }}
    >
      {/* DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
        }}
      ></div>

      {/* CONTENT */}
      <div
        className="container text-center"
        style={{ position: "relative", zIndex: 2 }}
      >
        <h1 className="fw-bold" style={{ fontSize: "48px" }}>
          Book Your Dream Event
          <br />
          <span style={{ color: "#FFB100" }}>With Ease</span>
        </h1>

        <p style={{ fontSize: "18px", maxWidth: "650px", margin: "15px auto" }}>
          Find and book venues, organizers, and services in just a few clicks.
          Create unforgettable moments for any occasion.
        </p>

        <div className="mt-4">
          <button
            className="btn btn-warning me-3 px-4 py-2"
            style={{ borderRadius: "8px", fontWeight: "600" }}
          >
            Book Now
          </button>
          <button
            className="btn btn-outline-light px-4 py-2"
            style={{ borderRadius: "8px", fontWeight: "600" }}
          >
            How it Works
          </button>
        </div>

        {/* Quick Booking Box */}
        <div
          className="p-4 mt-5 mx-auto shadow"
          style={{
            background: "white",
            borderRadius: "15px",
            maxWidth: "900px",
          }}
        >
          <h4 className="fw-bold mb-3 text-dark text-center">
            Quick Event Booking
          </h4>

          <div className="row g-3">
            <div className="col-md-3">
              <select className="form-select py-2">
                <option>Enter Type</option>
                <option>Birthday</option>
                <option>Wedding</option>
                <option>Corporate</option>
              </select>
            </div>

            <div className="col-md-3">
              <input
                type="text"
                className="form-control py-2"
                placeholder="Your Name"
              />
            </div>

            <div className="col-md-3">
              <input
                type="email"
                className="form-control py-2"
                placeholder="Email Address"
              />
            </div>

            <div className="col-md-3">
              <input
                type="date"
                className="form-control py-2"
              />
            </div>
          </div>

          <div className="text-center mt-4">
            <button
              className="btn btn-primary px-5 py-2"
              style={{ borderRadius: "10px", fontWeight: "600" }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
