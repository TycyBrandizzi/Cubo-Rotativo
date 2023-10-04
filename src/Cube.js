import React, { useState } from 'react';
import './Cube.css';

function Cube() {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);

  const handleKeyPress = (event) => {
    if (event.key === 'ArrowUp') {
      setRotationX(rotationX - 90);
    } else if (event.key === 'ArrowDown') {
      setRotationX(rotationX + 90);
    } else if (event.key === 'ArrowLeft') {
      setRotationY(rotationY - 90);
    } else if (event.key === 'ArrowRight') {
      setRotationY(rotationY + 90);
    }
  };

  const cubeStyle = {
    transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
  };

  return (
    <div className="cube-container" tabIndex="0" onKeyDown={handleKeyPress}>
      <div className="cube" style={cubeStyle}>
        <div className="side front">Front</div>
        <div className="side back">Back</div>
        <div className="side top">Top</div>
        <div className="side bottom">Bottom</div>
        <div className="side left">Left</div>
        <div className="side right">Right</div>
      </div>
    </div>
  );
}

export default Cube;
