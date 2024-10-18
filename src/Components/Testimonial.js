import React, { useState } from 'react';
import './Mix.css';

const testimonials = [
  {
    quote: "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.",
    name: "Sara T",
  },
  {
    quote: "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.",
    name: "John D",
  },
  {
    quote: "I love the convenience of YourBank’s mobile banking app. It allows me to stay on top of my finances and make transactions easily. The app is user-friendly and secure, giving me peace of mind.",
    name: "Emily G",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonial-container">
      {/* Header Section */}
      <div className="testimonial-header">
        <h2>Our <span className="highlight">Testimonials</span></h2>
        <p>
          Discover how YourBank has transformed lives with innovative digital
          solutions and personalized customer service. See why our clients trust
          us for a secure and prosperous financial journey.
        </p>

        <div className="toggle-buttons">
          <button className="toggle-btn active">For Individuals</button>
          <button className="toggle-btn">For Businesses</button>
        </div>
      </div>

      {/* Testimonials Slider */}
      <div className="testimonial-slider">
        <button className="nav-btn left" onClick={prevTestimonial}>&#10094;</button>

        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card ${
              index === currentIndex ? 'active' : 'inactive'
            }`}
          >
            <div className="quote-symbol">❝</div>
            <p className="quote">{testimonial.quote}</p>
            <div className="client-name">{testimonial.name}</div>
          </div>
        ))}

        <button className="nav-btn right" onClick={nextTestimonial}>&#10095;</button>
      </div>

      {/* CTA Section */}
      <div className="cta-container">
        <div className="cta-content">
          <h3>Start your financial journey with <span className="highlight">YourBank today!</span></h3>
          <p>
            Ready to take control of your finances? Join YourBank now, and let us
            help you achieve your financial goals with our tailored solutions and
            exceptional customer service.
          </p>
        </div>
        <button className="cta-button">Open Account</button>
      </div>
    </div>
  );
}
