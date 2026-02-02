import React, { useState } from 'react';

export default function KineticEnergySim() {
  // 1. Set up the "State" (the memory of the simulator)
  const [mass, setMass] = useState(10);     // Default mass: 10 kg
  const [velocity, setVelocity] = useState(5); // Default velocity: 5 m/s

  // 2. Calculate the Physics
  // Formula: E = 0.5 * m * v^2
  const energy = 0.5 * mass * (velocity * velocity);

  // 3. Define the styles (Brilliant-style look)
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f5f6f7',
    borderRadius: '10px',
    border: '1px solid #e0e0e0',
    marginBottom: '20px',
    fontFamily: 'sans-serif',
  };

  const sliderContainer = {
    marginBottom: '15px',
  };

  // This bar grows based on energy. Max energy in this sim is roughly ~2500 for scaling
  const barWidth = Math.min((energy / 2500) * 100, 100) + '%'; 

  return (
    <div style={containerStyle}>
      <h3>🚀 Kinetic Energy Simulator</h3>
      
      {/* Mass Slider */}
      <div style={sliderContainer}>
        <label><strong>Mass (m):</strong> {mass} kg</label>
        <input 
          type="range" 
          min="1" max="50" 
          value={mass} 
          onChange={(e) => setMass(Number(e.target.value))}
          style={{width: '100%', cursor: 'pointer'}} 
        />
      </div>

      {/* Velocity Slider */}
      <div style={sliderContainer}>
        <label><strong>Velocity (v):</strong> {velocity} m/s</label>
        <input 
          type="range" 
          min="1" max="20" 
          value={velocity} 
          onChange={(e) => setVelocity(Number(e.target.value))}
          style={{width: '100%', cursor: 'pointer'}} 
        />
      </div>

      {/* The Visual Feedback */}
      <div style={{marginTop: '20px'}}>
        <p><strong>Energy ($E_k$):</strong> {energy.toFixed(1)} Joules</p>
        
        {/* The Energy Bar */}
        <div style={{width: '100%', height: '20px', backgroundColor: '#ddd', borderRadius: '5px'}}>
          <div style={{
            width: barWidth, 
            height: '100%', 
            backgroundColor: '#ff6b6b', // Nice reddish color
            borderRadius: '5px',
            transition: 'width 0.3s ease' // Smooth animation
          }}></div>
        </div>
      </div>
    </div>
  );
}