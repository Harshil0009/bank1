
import React from 'react';
import { FaWallet, FaPiggyBank, FaHome } from 'react-icons/fa'; // Importing icons
import './Mix.css'; // Import the CSS for styling

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaWallet size={40} color="#8fff00" />,
      title: 'Checking Accounts',
      description:
        'Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.',
    },
    {
      icon: <FaPiggyBank size={40} color="#8fff00" />,
      title: 'Savings Accounts',
      description:
        'Build your savings with our competitive interest rates and flexible savings account options. Whether you’re saving for a specific goal or want to grow your wealth over time, we have the right account for you.',
    },
    {
      icon: <FaHome size={40} color="#8fff00" />,
      title: 'Loans and Mortgages',
      description:
        'Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process.',
    },
  ];

  return (
    <>
    <div className="container">
    <div className="testimonial-header">
        <h2>Our <span className="highlight">Products</span></h2>
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
    <div className="features-container">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <div className="icon-container">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default FeaturesSection;