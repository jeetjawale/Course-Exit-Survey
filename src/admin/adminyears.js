import React from "react";
import { Link } from "react-router-dom";
import "./adminyears.css"; // Updated the CSS file import

const AdminYears = () => {
  const handleHover = (e) => {
    e.target.style.backgroundColor = "#0056b3"; // Darken the background color on hover
  };

  const handleUnhover = (e) => {
    e.target.style.backgroundColor = "#007bff"; // Revert the background color on mouse leave
  };

  return (
    <div className="adminyearsContainer">
      <div className="adminyearsCenterContainer">  
        <h2>Years</h2>
        <div className="adminyearsButtonContainer">
          <Link
            to="/admin/firstyearcharts"
            className="adminyearsSquareButton"
            onMouseEnter={handleHover}
            onMouseLeave={handleUnhover}
          >
            First Year
          </Link>
          <Link
            to="/admin/secondyearcharts"
            className="adminyearsSquareButton"
            onMouseEnter={handleHover}
            onMouseLeave={handleUnhover}
          >
            Second Year
          </Link>
          <Link
            to="/admin/thirdyearcharts"
            className="adminyearsSquareButton"
            onMouseEnter={handleHover}
            onMouseLeave={handleUnhover}
          >
            Third Year
          </Link>
          <Link
            to="/admin/fourthyearcharts"
            className="adminyearsSquareButton"
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

export default AdminYears;
