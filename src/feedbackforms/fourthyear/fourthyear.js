import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./fourthyear.css"; // Import the CSS file for styling

const FourthYear = () => {
  const [showElectiveVIOptions, setShowElectiveVIOptions] = useState(false);
  const [showOpenElectiveVIIOptions, setShowOpenElectiveVIIOptions] =
    useState(false);
  const [showOpenElectiveVIIIOptions, setShowOpenElectiveVIIIOptions] =
    useState(false);

  const toggleElectiveVIOptions = () => {
    setShowElectiveVIOptions(!showElectiveVIOptions);
  };

  const toggleOpenElectiveVIIOptions = () => {
    setShowOpenElectiveVIIOptions(!showOpenElectiveVIIOptions);
  };

  const toggleOpenElectiveVIIIOptions = () => {
    setShowOpenElectiveVIIIOptions(!showOpenElectiveVIIIOptions);
  };

  const seventhSemesterCourses = [
    {
      code: "BTCOC701",
      name: "Artificial Intelligence",
      path: "artificial-intelligence",
    },
    { code: "BTCOC702", name: "Cloud Computing", path: "cloud-computing" },
    { code: "BTCOE703", name: "Elective - VI", path: "elective-vi" },
    {
      code: "BTCOE704",
      name: "Open Elective - VII",
      path: "open-elective-vii",
    },
    {
      code: "BTCOE705",
      name: "Open Elective - VIII",
      path: "open-elective-viii",
    },
    {
      code: "BTHM706",
      name: "Foreign Language Studies",
      path: "foreign-language-studies",
    },
  ];

  const eighthSemesterCourses = [
    {
      code: "BTCOL707",
      name: "Artificial Intelligence & Cloud Computing Lab",
      path: "artificial-intelligence-cloud-computing-lab",
    },
    { code: "BTCOS708", name: "Project Phase - I", path: "project-phase-i" },
    {
      code: "BTCOF608",
      name: "Field Training / Internship / Industrial Training —II (Evaluation)",
      path: "field-training-internship-industrial-training-ii-evaluation",
    },
  ];

  return (
    <div className="fourthyear-wrapper">
      <h1 className="fourthyear-heading">Fourth Year Subjects</h1>
      <div className="fourthyear-container">
        <div className="fourthyear-semester">
          <h2>Seventh Semester</h2>
          <ul>
            {seventhSemesterCourses.map((course, index) => (
              <li key={index}>
                {course.path === "elective-vi" ? (
                  <>
                    <button
                      onClick={toggleElectiveVIOptions}
                      className="fourthyear-square-button"
                    >
                      {course.code} - {course.name}
                    </button> 
                    {showElectiveVIOptions && (
                      <ul className="fourthyear-dropdown">
                        <li>
                          <Link
                            to="/feedbackforms/fourthyear/seventhsem/bioinformatics"
                            className="fourthyear-square-button"
                          >
                            (A) Bioinformatics
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/feedbackforms/fourthyear/seventhsem/distributed-system"
                            className="fourthyear-square-button"
                          >
                            (B) Distributed System
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/feedbackforms/fourthyear/seventhsem/big-data-analytics"
                            className="fourthyear-square-button"
                          >
                            (C) Big Data Analytics
                          </Link>
                        </li>
                      </ul>
                    )}
                  </>
                ) : course.path === "open-elective-vii" ? (
                  <>
                    <button
                      onClick={toggleOpenElectiveVIIOptions}
                      className="fourthyear-square-button"
                    >
                      {course.code} - {course.name}
                    </button>
                    {showOpenElectiveVIIOptions && (
                      <ul className="fourthyear-dropdown">
                        <li>
                          <Link
                            to="/feedbackforms/fourthyear/seventhsem/cryptography-network-security"
                            className="fourthyear-square-button"
                          >
                            (A) Cryptography and Network Security
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/feedbackforms/fourthyear/seventhsem/business-intelligence"
                            className="fourthyear-square-button"
                          >
                            (B) Business Intelligence
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/feedbackforms/fourthyear/seventhsem/blockchain-technology"
                            className="fourthyear-square-button"
                          >
                            (C) Blockchain Technology
                          </Link>
                        </li>
                      </ul>
                    )}
                  </>
                ) : course.path === "open-elective-viii" ? (
                  <>
                    <button
                      onClick={toggleOpenElectiveVIIIOptions}
                      className="fourthyear-square-button"
                    >
                      {course.code} - {course.name}
                    </button>
                    {showOpenElectiveVIIIOptions && (
                      <ul className="fourthyear-dropdown">
                        <li>
                          <Link
                            to="/feedbackforms/fourthyear/seventhsem/virtual-reality"
                            className="fourthyear-square-button"
                          >
                            (A) Virtual Reality
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/feedbackforms/fourthyear/seventhsem/deep-learning"
                            className="fourthyear-square-button"
                          >
                            (B) Deep Learning
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/feedbackforms/fourthyear/seventhsem/design-thinking"
                            className="fourthyear-square-button"
                          >
                            (C) Design Thinking
                          </Link>
                        </li>
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={`/feedbackforms/fourthyear/seventhsem/${course.path}`}
                    className="fourthyear-square-button"
                  >
                    {course.code} - {course.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="fourthyear-semester">
          <h2>Eighth Semester</h2>
          <ul>
            {eighthSemesterCourses.map((course, index) => (
              <li key={index}>
                <Link
                  to={`/feedbackforms/fourthyear/eighthsem/${course.path}`}
                  className="fourthyear-square-button"
                >
                  {course.code} - {course.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FourthYear;
