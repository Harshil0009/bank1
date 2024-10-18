import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Style.css';

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>

      {/* Contact Cards */}
      <div className="contact-card">
        <div className="card cardc">
          <i className="fas fa-phone-alt"></i>
          <h3>Phone</h3>
          <p>+91 98765 43210</p>
        </div>

        <div className="card cardc">
          <i className="fas fa-envelope"></i>
          <h3>Email</h3>
          <p>harshilkheni@gmail.com</p>
        </div>

        <div className="card cardc">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Location</h3>
          <p>Archana School Road, Parvat Patiya ,Bombay Market.Surat</p>
        </div>
      </div>

      <div className="map-container mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9055.112553478675!2d72.8589588888539!3d21.203377209175144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1729235904175!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          title="Location Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;