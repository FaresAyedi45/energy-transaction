import React from 'react';

const BatteryCard = ({ battery }) => {
  const { type, power, price, industry } = battery;
  return (
    <div className="battery-card">
      <h3>Type of Battery: {type}</h3>
      <p>Power: {power} kW</p>
      <p>Price: {price} TND</p>
      <p>Industry: {industry}</p>
      <div className="button-container">
        <button className="button">Buy</button>
      </div>
    </div>
  );
};

export default BatteryCard;