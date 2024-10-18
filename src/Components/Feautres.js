import React from 'react';
import './Mix.css';

export default function Features() {
  return (
    <>
      <div className="container">
        {/* Feature Card */}
        <div className="card card-fet">
          <div className="card-header">
            <h2>
              Our <span className="highlight">Featured</span>
            </h2>
          </div>
          <div className="card-body">
            <p className="card-text">
              Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience.
            </p>
          </div>
        </div>
       </div>
       <div className='container cardcont'>
        {/* Left Column */}
        <div className="cardleft">
          <div className="leftcon">Online Banking</div>
          <div className="leftcon my-2">Financial Tool</div>
          <div className="leftcon my-2">Customer Support</div>
        </div>

        {/* Right Column with 2x2 Grid of Cards */}
        <div className="cardright">
          <div className="card crd">
            <div className="card-body">
              <h5 className="card-title">24/7 Account Access</h5>
              <p className="card-text">
                Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.
              </p>
            </div>
          </div>

          <div className="card crd">
            <div className="card-body">
              <h5 className="card-title">Mobile Banking App</h5>
              <p className="card-text">
                Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.
              </p>
            </div>
          </div>

          <div className="card crd">
            <div className="card-body">
              <h5 className="card-title">Secure Transactions</h5>
              <p className="card-text">
                Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.
              </p>
            </div>
          </div>

          <div className="card crd">
            <div className="card-body">
              <h5 className="card-title">Bill Pay and Transfers</h5>
              <p className="card-text">
                Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
