import React from "react";
import { Link } from "react-router-dom";
import "./secondyear.css"; // Import the CSS file for styling

const SecondYear = () => {
  const thirdSemesterCourses = [
    {
      code: "BTBS301",
      name: "Engineering Mathematics (III)",
      path: "engineering-mathematics-iii",
    },
    {
      code: "ВТСОС302",
      name: "Discrete Mathematics",
      path: "discrete-mathematics",
    },
    { code: "ВТСОС303", name: "Data Structures", path: "data-structures" },
    {
      code: "ВТСОС304",
      name: "Computer Architecture & Organization",
      path: "computer-architecture-organization",
    },
    {
      code: "BTCOC305(B)",
      name: "Object Oriented Programming in Java",
      path: "oopsinjava",
    },
  ];

  const fourthSemesterCourses = [
    {
      code: "BTCOC401",
      name: "Design & Analysis of Algorithms",
      path: "design-analysis-algorithms",
    },
    { code: "BTCOC402", name: "Operating Systems", path: "operating-systems" },
    { code: "BTHM403", name: "Basic Human Rights", path: "basic-human-rights" },
    {
      code: "BTBS404",
      name: "Probability and Statistics",
      path: "probability-statistics",
    },
    {
      code: "BTES405",
      name: "Digital Logic Design & Microprocessors",
      path: "digital-logic-design-microprocessors",
    },
  ];

  return (
    <div className="secondyear-wrapper">
      <h1 className="secondyear-heading">Second Year Subjects</h1>
      <div className="secondyear-container">
        <div className="secondyear-semester">
          <h2>Third Semester</h2>
          <ul>
            {thirdSemesterCourses.map((course, index) => (
              <li key={index}>
                <Link
                  to={`/feedbackforms/secondyear/thirdsem/${course.path}`}
                  className="secondyear-square-button"
                >
                  {course.code} - {course.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="secondyear-semester">
          <h2>Fourth Semester</h2>
          <ul>
            {fourthSemesterCourses.map((course, index) => (
              <li key={index}>
                <Link
                  to={`/feedbackforms/secondyear/fourthsem/${course.path}`}
                  className="secondyear-square-button"
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

export default SecondYear;
