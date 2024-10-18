// src/components/BankDashboard.js
import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import './Mix.css'; // Importing the CSS

const BankDashboard = () => {
  const [exchangeRate] = useState(0.012); // Static rate example (INR to USD)
  const [amountInr, setAmountInr] = useState(5000);
  const [amountUsd, setAmountUsd] = useState(amountInr * exchangeRate);

  const transactions = [
    { id: 1, name: 'Joel Kenley', amount: -68 },
    { id: 2, name: 'Mark Smith', amount: -68 },
    { id: 3, name: 'Leinen Ray', amount: -68 },
  ];

  // Handle INR to USD conversion
  const handleExchange = () => {
    setAmountUsd((amountInr * exchangeRate).toFixed(2));
  };

  return (
    <>
    <div className='container'>
    <div className="dashboard-container">
      <div className="left-panel">
        <h1>Welcome to YourBank</h1>
        <p>Empowering Your <span className="highlight">Financial Journey</span></p>
        <p className="description">
          At YourBank, our mission is to provide comprehensive banking solutions
          that empower individuals and businesses to achieve their financial goals.
        </p>
        <button className="open-account-btn">Open Account</button>
      </div>

      <div className="right-panel my-4">
        <div className="income">
          <span>+ $5000.00</span>
          <p>Monthly Income</p>
        </div>

        <div className="transactions">
          <h3>Your Transactions</h3>
          {transactions.map((transaction) => (
            <div key={transaction.id} className="transaction">
              <p>{transaction.name}</p>
              <span className={transaction.amount < 0 ? 'negative' : 'positive'}>
                {transaction.amount < 0 ? (
                  <FaArrowDown className="icon" />
                ) : (
                  <FaArrowUp className="icon" />
                )}
                ${Math.abs(transaction.amount).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        <div className="currency-exchange">
          <h3>Money Exchange</h3>
          <div className="exchange-input">
            <div>
              <label>INR</label>
              <input
                type="number"
                value={amountInr}
                onChange={(e) => setAmountInr(e.target.value)}
              />
            </div>
            <div>
              <label>USD</label>
              <input type="text" value={amountUsd} readOnly />
            </div>
          </div>
          <button onClick={handleExchange} className="exchange-btn">
            Exchange
          </button>
        </div>

        <div className="supported-currencies">
          <p>Supported Currencies:</p>
          <div className="currency-list">
            <span>₹</span> <span>$</span> <span>€</span> <span>£</span>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default BankDashboard;
