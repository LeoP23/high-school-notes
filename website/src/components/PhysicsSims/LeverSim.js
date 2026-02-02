import React, { useState } from 'react';

export default function LeverSim() {
  // 1. Setup the "Weights" available to drag
  const initialWeights = [
    { id: 'w1', mass: 5, color: '#4dabf7' },  // Blue
    { id: 'w2', mass: 10, color: '#ff6b6b' }, // Red
    { id: 'w3', mass: 10, color: '#ff6b6b' }, // Red Copy
    { id: 'w4', mass: 20, color: '#51cf66' }, // Green
  ];

  // State: Where are the weights? (null = in the bank, number = position on beam)
  const [placedWeights, setPlacedWeights] = useState({}); 
  const [draggedItem, setDraggedItem] = useState(null);

  // 2. Physics Calculation
  let netTorque = 0;
  Object.keys(placedWeights).forEach((weightId) => {
    const position = placedWeights[weightId];
    // Find the mass of this weight
    const weight = initialWeights.find(w => w.id === weightId);
    if (weight) {
      netTorque += weight.mass * position; // Torque = Mass * Distance
    }
  });

  // Determine tilt angle based on torque
  const tiltAngle = netTorque === 0 ? 0 : (netTorque > 0 ? 15 : -15);
  const isBalanced = netTorque === 0 && Object.keys(placedWeights).length > 0;

  // 3. Drag Handlers
  const handleDragStart = (e, weightId) => {
    setDraggedItem(weightId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDrop = (e, position) => {
    e.preventDefault();
    if (draggedItem) {
      setPlacedWeights((prev) => ({
        ...prev,
        [draggedItem]: position // Move weight to new position
      }));
      setDraggedItem(null);
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleReturnToBank = (e) => {
    e.preventDefault();
    if (draggedItem) {
      const newWeights = { ...placedWeights };
      delete newWeights[draggedItem]; // Remove from beam
      setPlacedWeights(newWeights);
      setDraggedItem(null);
    }
  };

  // 4. Styles (The "Lab" Look)
  const slotPositions = [-4, -3, -2, -1, 1, 2, 3, 4];

  return (
    <div style={{
      padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '12px', 
      border: '1px solid #dee2e6', fontFamily: 'sans-serif', textAlign: 'center'
    }}>
      <h3>⚖️ The Lever Lab</h3>
      <p>Drag weights to balance the beam!</p>

      {/* The Simulation Area */}
      <div style={{ height: '200px', position: 'relative', overflow: 'hidden', marginBottom: '20px' }}>
        
        {/* The Beam (Rotates based on physics) */}
        <div style={{
          width: '80%', height: '10px', backgroundColor: '#343a40', 
          margin: '100px auto 0', position: 'relative', borderRadius: '5px',
          transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Bouncy physics
          transform: `rotate(${tiltAngle}deg)`
        }}>
          {/* Render Slots on the Beam */}
          {slotPositions.map(pos => (
            <div 
              key={pos}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, pos)}
              style={{
                position: 'absolute',
                left: `calc(50% + ${pos * 10}% - 20px)`, // Calculate position
                top: '-40px', width: '40px', height: '40px',
                border: '2px dashed #adb5bd', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: 'rgba(255,255,255,0.5)'
              }}
            >
              <small style={{position:'absolute', bottom:'-25px', color:'#495057'}}>{pos}</small>
              {/* Check if a weight is here */}
              {Object.keys(placedWeights).map(wId => {
                if (placedWeights[wId] === pos) {
                  const w = initialWeights.find(i => i.id === wId);
                  return (
                    <div 
                      key={w.id} draggable 
                      onDragStart={(e) => handleDragStart(e, w.id)}
                      style={{
                        width: '35px', height: '35px', borderRadius: '50%', 
                        backgroundColor: w.color, color: 'white', fontWeight: 'bold',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'grab', boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                      }}
                    >
                      {w.mass}
                    </div>
                  );
                }
              })}
            </div>
          ))}
        </div>

        {/* The Fulcrum (Triangle) */}
        <div style={{
          width: 0, height: 0, 
          borderLeft: '20px solid transparent', borderRight: '20px solid transparent',
          borderBottom: '40px solid #868e96',
          position: 'absolute', left: 'calc(50% - 20px)', top: '110px'
        }}></div>
      </div>

      {/* Feedback Message */}
      <div style={{marginBottom: '20px', height: '24px'}}>
         {isBalanced ? (
           <span style={{color: '#2b8a3e', fontWeight: 'bold'}}>✨ PERFECT BALANCE! ✨</span>
         ) : (
           <span style={{color: '#c92a2a'}}>Net Torque: {netTorque}</span>
         )}
      </div>

      {/* Weight Bank (Drag from here) */}
      <div 
        onDragOver={handleDragOver} 
        onDrop={handleReturnToBank}
        style={{
          padding: '15px', backgroundColor: '#e9ecef', borderRadius: '8px', 
          display: 'flex', gap: '10px', justifyContent: 'center', minHeight: '60px'
        }}
      >
        {initialWeights.map(w => {
          // Only show in bank if NOT placed on beam
          if (placedWeights[w.id] !== undefined) return null;
          return (
            <div 
              key={w.id} draggable 
              onDragStart={(e) => handleDragStart(e, w.id)}
              style={{
                width: '40px', height: '40px', borderRadius: '50%', 
                backgroundColor: w.color, color: 'white', fontWeight: 'bold',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'grab', boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}
            >
              {w.mass}
            </div>
          );
        })}
        {Object.keys(placedWeights).length === initialWeights.length && (
          <span style={{color: '#868e96', alignSelf: 'center'}}>All weights used! Drag them back here to reset.</span>
        )}
      </div>
    </div>
  );
}