import { Link } from "react-router-dom";
import { useState } from "react";
import UpcomingEvents from './UpcomingEvents';
import PastEvents from './PastEvents';
import Exhibitors from './Exhibitor';
import FloorPlan from './FloorPlan';
import EventSchedule from './EventSchedule';
import Speakers from './Speaker';
import HowItWorks from './HowItWork';
import Signup from './../pages/Signup';
import Profile from './ProfilePage';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false); // Dropdown state

  return (
    <nav className="navbar navbar-expand-lg shadow-sm"
      style={{ backgroundColor: "#ffffff", padding: "12px 0" }}>

      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold" 
          style={{ fontSize: "1.6rem", color: "#5A2EED" }} 
          to="/">
          EventSphere
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto gap-3">

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/HowItWorks">How It Works</Link>
            </li>

            {/* Events Dropdown */}
            <li className="nav-item dropdown"
                onMouseEnter={() => setEventsOpen(true)}
                onMouseLeave={() => setEventsOpen(false)}>
              <span className="nav-link fw-semibold dropdown-toggle" style={{ cursor: "pointer" }}>
                Events
              </span>
              <ul className={`dropdown-menu ${eventsOpen ? "show" : ""}`}>
                <li><Link className="dropdown-item" to="/UpcomingEvents">Upcoming Events</Link></li>
                <li><Link className="dropdown-item" to="/OngoingEvents">Ongoing Events</Link></li>
                <li><Link className="dropdown-item" to="/PastEvents">Past Events</Link></li>
                <li><Link className="dropdown-item" to="/Exhibitors">Exhibitors</Link></li>
                <li><Link className="dropdown-item" to="/FloorPlan">Floor Plan</Link></li>
                <li><Link className="dropdown-item" to="/EventSchedule">Event Schedule</Link></li>
                <li><Link className="dropdown-item" to="/Speakers">Speakers</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/Profile">Profile</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Right Side Buttons */}
          <div className="d-flex gap-3">
            <Link
              to="/login"
              className="btn btn-outline-primary px-4"
              style={{ borderRadius: "30px" }}
            >
              Login
            </Link>

            <Link
              to="/Signup"
              className="btn text-white px-4"
              style={{
                backgroundColor: "#5A2EED",
                borderRadius: "30px"
              }}
            >
              Signup
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
