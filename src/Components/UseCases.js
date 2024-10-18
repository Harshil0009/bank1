// src/components/UseCases.js
import React from 'react';
import { FaWallet, FaPiggyBank, FaHome, FaBook, FaBuilding, FaChartLine } from 'react-icons/fa';
import './Mix.css';

const UseCases = () => {
  const individualCards = [
    { icon: <FaWallet size={30} color="#8fff00" />, title: 'Managing Personal Finances' },
    { icon: <FaPiggyBank size={30} color="#8fff00" />, title: 'Saving for the Future' },
    { icon: <FaHome size={30} color="#8fff00" />, title: 'Homeownership' },
    { icon: <FaBook size={30} color="#8fff00" />, title: 'Education Funding' },
  ];

  const businessCards = [
    { icon: <FaBuilding size={30} color="#8fff00" />, title: 'Startups and Entrepreneurs' },
    { icon: <FaChartLine size={30} color="#8fff00" />, title: 'Cash Flow Management' },
    { icon: <FaBuilding size={30} color="#8fff00" />, title: 'Business Expansion' },
    { icon: <FaWallet size={30} color="#8fff00" />, title: 'Payment Solutions' },
  ];

  return (
    <>
    <div className="container">
    <div className="use-cases-container">
      <h2>Use Cases</h2>
      <p>
        At YourBank, we cater to the diverse needs of individuals and businesses alike, 
        offering a wide range of financial solutions.
      </p>

      <div className="use-cases-content">
        <div className="cards-container">
          {individualCards.map((card, index) => (
            <div key={index} className="card">
              <div className="card-icon">{card.icon}</div>
              <p>{card.title}</p>
            </div>
          ))}
        </div>

        <div className="individual-section">
          <h3>For Individuals</h3>
          <p>
            For individuals, our mortgage services pave the way to homeownership, and our flexible 
            personal loans provide vital support during various life milestones. We also prioritize 
            retirement planning, ensuring a financially secure future for our customers.
          </p>
          <div className="stats">
            <div><m>78%</m> <span>Secure Retirement Planning</span></div>
            <div><m>63%</m><span>Manageable Debt Consolidation</span></div>
            <div><m>91%</m> <span>Reducing financial burdens</span></div>
          </div>
          <button>Learn More</button>
        </div>

        <div className="business-section">
          <h3>For Business</h3>
          <p>
            For businesses, we empower growth with working capital solutions that optimize cash flow, 
            and our tailored financing options fuel business expansion. Whatever your financial aspirations, 
            YourBank is committed to providing the right tools and support to achieve them.
          </p>
          <div className="stats">
            <div><m>65%</m> <span>Cash Flow Management</span></div>
            <div><m>70%</m> <span>Drive Business Expansion</span></div>
            <div><m>45%</m> <span>Streamline payroll processing</span></div>
          </div>
          <button>Learn More</button>
        </div>

        <div className="cards-container">
          {businessCards.map((card, index) => (
            <div key={index} className="card">
              <div className="card-icon">{card.icon}</div>
              <p>{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default UseCases;
