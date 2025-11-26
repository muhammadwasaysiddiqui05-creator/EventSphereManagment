import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Footer from './components/Footer';
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
// import AddUpcomingEvent from "./pages/AddUpcomingEvent";
import UpcomingEvents from "./components/UpcomingEvents";
import OngoingEvents from "./components/OngoingEvents";
import PastEvents from "./components/PastEvents";
import Exhibitors from "./components/Exhibitor";
import FloorPlan from "./components/FloorPlan";
import EventSchedule from "./components/EventSchedule";
import Speakers from "./components/Speaker";
import HowItWorks from "./components/HowItWork";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import TermsOfService from "./components/TermsofService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Profile from "./components/ProfilePage";
import Events from "./components/Events";
import AllEventsPage from "./components/AllEvents";
// import AddFAQ from "./pages/AddUpcomingEvent";
// import AddUpcomingEvent from "./pages/AddUpcomingEvent";

function App() {





  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About  />} />
        <Route path="/HowItWorks" element={<HowItWorks  />} />
        <Route path="/UpcomingEvents" element={<UpcomingEvents  />} />
        <Route path="/OngoingEvents" element={<OngoingEvents  />} />
        <Route path="/PastEvents" element={<PastEvents  />} />
        <Route path="/Exhibitors" element={<Exhibitors  />} />
        <Route path="/FloorPlan" element={<FloorPlan  />} />
        <Route path="/EventSchedule" element={<EventSchedule  />} />
        <Route path="/Speakers" element={<Speakers  />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />    
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        {/* <Route path="/add" element={<AddFAQ />} /> */}
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/events" element={<Events />} />
        <Route path="/AllEventsPage" element={<AllEventsPage />} />
      </Routes>
    </>
  );
}

export default App;
