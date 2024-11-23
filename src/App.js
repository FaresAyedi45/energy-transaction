import React from 'react';
import './App.css';
import BatteryCard from './components/BatteryCard';
import logo from './assets/logo.png';

const batteries = [
  { type: 'Lithium-Ion', power: 100, price: 1500, industry: 'Automobile' },
  { type: 'Nickel-Metal Hydride', power: 80, price: 1200, industry: 'Électronique' },
  { type: 'Plomb-Acide', power: 50, price: 600, industry: 'Énergie Solaire' },
  { type: 'Lithium-Polymère', power: 120, price: 1800, industry: 'Aéronautique' },
  { type: 'Sodium-Soufre', power: 90, price: 1350, industry: 'Stockage Stationnaire' },
  { type: 'Nickel-Cadmium', power: 70, price: 1050, industry: 'Équipement Médical' },
  { type: 'Zinc-Air', power: 60, price: 900, industry: 'Appareils Auditifs' },
  { type: 'Nickel-Zinc', power: 110, price: 1650, industry: 'Véhicules Électriques' },
];

const App = () => {
  return (
    <div className="App">
      <header>
      <button className="back-button"></button>
        <nav className="navbar">
          <div className="logo">
          <img id="logo" src={logo} alt="logo" />
            
          </div>
          <div className="nav-links">
            <a href="#" className="active">Home</a>
            <a href="#">About Us</a>
            <a href="#">Subscribe</a>
            <a href="#">Profile</a>
            <a href="#">?</a>
          </div>
        </nav>
      </header>
      <main>
        <h1 className="title">Energy Transaction</h1>
        <div className="battery-list">
          {batteries.map((battery, index) => (
            <BatteryCard key={index} battery={battery} />
          ))}
        </div>
      </main>
      <footer className="footer">
        <button className="contact-button">Contact Us</button>
      </footer>
    </div>
  );
};

export default App;