import React from 'react';
import './homepage.css';

function Homepage() {
  // Sample data for the boxes
  const box1Data = ['Line 1', 'Line 2', 'Line 3'];
  const box2Data = ['Info 1', 'Info 2', 'Info 3'];

  return (
    <div className="Homepage">
      <header className="Homepage-header">
        <h1>falanadimkana bot</h1>
      </header>
      <div className="box-container">
        <div className="box">
          <h2>Box 1</h2>
          <ul>
            {box1Data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="box">
          <h2>Box 2</h2>
          <ul>
            {box2Data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
