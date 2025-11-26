// const Footer = () => {
import FAQ from './FAQ';
import Blog from './Blog';
import TermsOfService from './TermsofService';
import PrivacyPolicy from './PrivacyPolicy';
//   return (
//     <footer className="bg-dark text-light py-5">
//       <div className="container">
//         <div className="row text-center text-md-left">
//           {/* First Column - Subscription Section */}
//           <div className="col-md-3 mb-4">
//             <h5 className="font-weight-bold text-uppercase">Exclusive Offers</h5>
//             <p>Sign up for our newsletter and enjoy 10% off your first purchase!</p>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="form-control mb-2"
//             />
//             <button className="btn btn-danger btn-block">Subscribe</button>
//           </div>

//           {/* Second Column - Contact Info */}
//           <div className="col-md-3 mb-4">
//             <h6 className="font-weight-bold text-uppercase">Contact Us</h6>
//             <p>1234 Market ,Pakistan CA 94111, PAK</p>
//             <p>Email: support@ecommerce.com</p>
//             <p>Phone: +1 (800) 123-4567</p>
//           </div>

//           {/* Third Column - Account Links */}
//           <div className="col-md-3 mb-4">
//             <h6 className="font-weight-bold text-uppercase">My Account</h6>
//             <p>My Account</p>
//             <p>Login / Register</p>
//           </div>

//           {/* Fourth Column - Quick Links */}
//           <div className="col-md-3 mb-4">
//             <h6 className="font-weight-bold text-uppercase">Quick Links</h6>
//             <p>Privacy Policy</p>
//             <p>Terms & Conditions</p>
//             <p>Return & Exchange Policy</p>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="text-center mt-4 border-top pt-4">
//           <p>&copy; 2025 Ecommerce All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;






const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#0e1a35" }} className="text-light py-5">
      <div className="container">
        <div className="row text-center text-md-left">

          {/* About Section */}
          <div className="col-md-3 mb-4">
            <h5 style={{ color: "#f4b21d" }} className="mb-3">About EventSphere</h5>
            <p>
              We specialize in professional event management.  
              From intimate gatherings to large celebrations,  
              we connect you with the best venues and vendors.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <i className="fab fa-facebook-f me-3"></i>
              <i className="fab fa-instagram me-3"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 style={{ color: "#f4b21d" }} className="mb-3">Quick Links</h5>
            <a href="/" className="d-block text-light mb-1">Home</a>
            <a href="/events" className="d-block text-light mb-1">Browse Events</a>
            <a href="/how-it-works" className="d-block text-light mb-1">How It Works</a>
            
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h5 style={{ color: "#f4b21d" }} className="mb-3">Our Services</h5>
            <a href="/FAQ" className="d-block text-light mb-1">FAQ</a>
            <a href="/Blog" className="d-block text-light mb-1">Blog</a>
            <a href="/TermsOfService" className="d-block text-light mb-1">Terms of Service</a>
            <a href="/PrivacyPolicy" className="d-block text-light mb-1">Privacy Policy</a>
            {/* <a href="/services/wedding" className="d-block text-light mb-1">Wedding Planning</a> */}
            {/* <a href="/services/corporate" className="d-block text-light mb-1">Corporate Events</a> */}
            {/* <a href="/services/birthday" className="d-block text-light mb-1">Birthday Parties</a> */}
            {/* <a href="/services/concerts" className="d-block text-light mb-1">Concert Venues</a> */}
            {/* <a href="/services/exhibitions" className="d-block text-light mb-1">Exhibition Halls</a> */}
            {/* <a href="/services/catering" className="d-block text-light mb-1">Catering Services</a> */}
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h5 style={{ color: "#f4b21d" }} className="mb-3">Contact Us</h5>
            <a href="tel:+923001234567" className="d-block text-light mb-1">
              Phone: +92 300 1234567
            </a>
            <a href="mailto:hello@eventsphere.com" className="d-block text-light mb-1">
              Email: hello@eventsphere.com
            </a>
            <a href="#" className="d-block text-light mb-1">
              Address: 45 Event Plaza, Karachi, Pakistan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
