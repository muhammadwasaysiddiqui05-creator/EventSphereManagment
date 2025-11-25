import React from "react";

const testimonials = [
  { id: 1, name: "James William", role: "Wedding", text: "Eventify made planning our wedding incredibly easy. The venue was perfect and the service was exceptional!", avatar: "/et.png" },
  { id: 2, name: "Jacob Jones", role: "Corporate Event", text: "Eventify made planning our wedding incredibly easy. The venue was perfect and the service was exceptional!", avatar: "/et.png" },
  { id: 3, name: "Albert Flores", role: "Birthday Party", text: "Eventify made planning our wedding incredibly easy. The venue was perfect and the service was exceptional!", avatar: "/et.png" },
  { id: 4, name: "Jenny Wilson", role: "Concert", text: "Eventify made planning our wedding incredibly easy. The venue was perfect and the service was exceptional!", avatar: "/et.png" },
];

export default function Testimonials() {
  return (
    <section className="ts-section">
      <div className="ts-container">
        <h2 className="ts-title">What Our Clients Say</h2>
        <p className="ts-subtitle">
          Don't just take our word for it. Here's what our satisfied customers have to say about their event experiences.
        </p>

        <div className="ts-grid">
          {testimonials.map((t) => (
            <article key={t.id} className="ts-card">
              <div className="ts-card-content">
                <img src={t.avatar} alt={t.name} className="ts-avatar" />

                <div className="ts-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>

                <blockquote className="ts-text">“{t.text}”</blockquote>

                <footer className="ts-footer">
                  <p className="ts-name">{t.name}</p>
                  <span className="ts-role">{t.role}</span>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CSS directly inside the component */}
      <style>{`
        .ts-section {
          background: #f8f8f8;
          padding: 60px 20px;
        }

        .ts-container {
          max-width: 1200px;
          margin: auto;
          text-align: center;
        }

        .ts-title {
          font-size: 42px;
          font-weight: 800;
          color: #111;
        }

        .ts-subtitle {
          margin-top: 10px;
          color: #666;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .ts-grid {
          margin-top: 50px;
          display: grid;
          gap: 30px;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }

        .ts-card {
          background: white;
          padding: 40px 20px;
          border-radius: 20px;
          box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.07);
          position: relative;
        }

        .ts-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          margin-top: -60px;
          border: 4px solid white;
          box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
        }

        .ts-stars {
          margin-top: 15px;
        }

        .ts-stars span {
          font-size: 22px;
          color: #fbbf24;
        }

        .ts-text {
          margin-top: 20px;
          color: #555;
          font-style: italic;
        }

        .ts-footer {
          margin-top: 20px;
        }

        .ts-name {
          font-weight: 600;
          color: #111;
        }

        .ts-role {
          color: #6366f1;
          display: inline-block;
          margin-top: 5px;
        }
      `}</style>
    </section>
  );
}
