// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function FAQ() {
//   const [faqs, setFaqs] = useState([]);

//   useEffect(() => {
//     axios
//       .get("/api/faq") // <-- API endpoint
//       .then((res) => setFaqs(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   const toggleFAQ = (index) => {
//     setFaqs(
//       faqs.map((faq, i) =>
//         i === index ? { ...faq, open: !faq.open } : { ...faq, open: false }
//       )
//     );
//   };

//   return (
//     <div style={{ backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
      
//       {/* HERO SECTION */}
//       <div
//         style={{
//           backgroundImage:
//             "linear-gradient(to bottom right, rgba(26,20,70,0.85), rgba(30,20,60,0.85)), url('/mnt/data/ee.PNG')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           padding: "80px 20px",
//           color: "white",
//           textAlign: "center",
//         }}
//       >
//         <h1 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "15px" }}>
//           Frequently Asked <span style={{ color: "#F8B324" }}>Questions</span>
//         </h1>
//         <p style={{ fontSize: "1.1rem", maxWidth: "750px", margin: "0 auto", opacity: 0.9 }}>
//           Get answers to the most common questions about EventSphere’s event
//           planning, venue booking, and management services.
//         </p>
//       </div>

//       {/* FAQ LIST */}
//       <div className="container py-5">
//         <div className="mx-auto" style={{ maxWidth: "850px" }}>
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="mb-3 p-3 rounded"
//               style={{
//                 backgroundColor: "#FFFFFF",
//                 borderLeft: "6px solid #F8B324",
//                 cursor: "pointer",
//                 transition: "0.3s",
//                 boxShadow: faq.open
//                   ? "0 4px 16px rgba(0,0,0,0.18)"
//                   : "0 2px 10px rgba(0,0,0,0.1)",
//               }}
//               onClick={() => toggleFAQ(index)}
//             >
//               <h5
//                 style={{
//                   color: "#1D1A3A",
//                   fontWeight: "600",
//                   display: "flex",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 {faq.question}
//                 <span style={{ color: "#4A2E80", fontSize: "28px" }}>
//                   {faq.open ? "−" : "+"}
//                 </span>
//               </h5>

//               {faq.open && (
//                 <p style={{ marginTop: "10px", color: "#444", lineHeight: "1.6" }}>
//                   {faq.answer}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }








import { useEffect, useState } from "react";
// import faqImg from "../assets/faq-banner.jpg"; // your placeholder image

export default function FAQ() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setFaqs([
        {
          question: "What services does EventSphere provide?",
          answer:
            "EventSphere offers wedding planning, corporate events, concerts, exhibitions, birthday planning, and full vendor management.",
        },
        {
          question: "Can I book venues directly through EventSphere?",
          answer:
            "Yes, you can browse and book premium indoor and outdoor venues from our platform.",
        },
        {
          question: "Do you provide on-site management?",
          answer:
            "Yes, our event experts provide full on-site coordination to ensure everything runs smoothly.",
        },
        {
          question: "How early should I book an event?",
          answer:
            "We recommend booking 4–8 weeks in advance for best availability.",
        },
        {
          question: "Do you offer vendors such as caterers and photographers?",
          answer:
            "Yes, EventSphere offers verified caterers, decorators, entertainers, and photographers.",
        },
        {
          question: "Are event packages customizable?",
          answer:
            "Absolutely! You can customize everything including theme, decor, menu, and budget.",
        },
        {
          question: "Can I request a free quote?",
          answer:
            "Yes, you can request a free quotation anytime before final booking.",
        },
        {
          question: "Do you organize corporate conferences?",
          answer:
            "Yes, we professionally manage seminars, conferences, and brand launches.",
        },
        {
          question: "Which cities do you operate in?",
          answer: "Karachi, Lahore, Islamabad — with more cities coming soon.",
        },
        {
          question: "How do I contact support?",
          answer:
            "You can reach us via email, WhatsApp, or our online contact form.",
        },
      ]);
    }, 500);
  }, []);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) =>
        i === index ? { ...faq, open: !faq.open } : { ...faq, open: false }
      )
    );
  };

  return (
    <div style={{ backgroundColor: "#F5F5F5", minHeight: "100vh" }}>

      {/* HERO BANNER */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(10,10,40,0.75), rgba(30,20,60,0.85)), url('/mnt/data/ee.PNG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 20px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "20px" }}>
          EventSphere <span style={{ color: "#F8B324" }}>FAQs</span>
        </h1>
        <p style={{ fontSize: "1.1rem", opacity: 0.9, maxWidth: "750px", margin: "0 auto" }}>
          Find answers to the most asked questions about our event management services.
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="container py-5">
        <div className="mx-auto" style={{ maxWidth: "850px" }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-3 p-3 rounded"
              style={{
                backgroundColor: "#FFFFFF",
                borderLeft: "6px solid #F8B324",
                cursor: "pointer",
                transition: "0.3s",
                boxShadow: faq.open
                  ? "0 4px 16px rgba(0,0,0,0.18)"
                  : "0 2px 10px rgba(0,0,0,0.1)",
              }}
              onClick={() => toggleFAQ(index)}
            >
              <h5
                style={{
                  color: "#1D1A3A",
                  fontWeight: "600",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {faq.question}
                <span style={{ color: "#4A2E80", fontSize: "28px" }}>
                  {faq.open ? "−" : "+"}
                </span>
              </h5>

              {faq.open && (
                <p style={{ marginTop: "10px", color: "#444", lineHeight: "1.6" }}>
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
