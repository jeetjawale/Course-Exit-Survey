//src/components/buttongroup.js
import React from "react";
import { Link } from "react-router-dom";
import "./buttongroup.css"; // Import the CSS file for styling

const ButtonGroup = () => {
  const handleHover = (e) => {
    e.target.style.backgroundColor = "#0056b3"; // Darken the background color on hover
  };

  const handleUnhover = (e) => {
    e.target.style.backgroundColor = "#007bff"; // Revert the background color on mouse leave
  };

  return (
    <div className="buttonGroupContainer">
      <div className="buttonGroupCenterContainer">  
        <h2>Years</h2>
        <div className="buttonGroupButtonContainer">
          <Link
            to="/feedbackforms/firstyear"
            className="buttonGroupSquareButton"
            onMouseEnter={handleHover}
            onMouseLeave={handleUnhover}
          >
            First Year
          </Link>
          <Link
            to="/feedbackforms/secondyear"
            className="buttonGroupSquareButton"
            onMouseEnter={handleHover}
            onMouseLeave={handleUnhover}
          >
            Second Year
          </Link>
          <Link
            to="/feedbackforms/thirdyear"
            className="buttonGroupSquareButton"
            onMouseEnter={handleHover}
            onMouseLeave={handleUnhover}
          >
            Third Year
          </Link>
          <Link
            to="/feedbackforms/fourthyear"
            className="buttonGroupSquareButton"
            onMouseEnter={handleHover}
            onMouseLeave={handleUnhover}
          >
            Fourth Year
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ButtonGroup;
