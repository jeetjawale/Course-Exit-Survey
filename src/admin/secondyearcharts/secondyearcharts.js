import React from "react";
import { Link } from "react-router-dom";
import "./secondyearcharts.css"; // Import the CSS file for styling

const SecondYearCharts = () => {
  const thirdSemesterCourses = [
    {
      code: "BTBS301",
      name: "Engineering Mathematics (III)",
      path: "engineering-mathematics-iii",
    },
    {
      code: "ВTСОС302",
      name: "Discrete Mathematics",
      path: "discrete-mathematics",
    },
    { code: "ВTСОС303", name: "Data Structures", path: "data-structures" },
    {
      code: "ВTСОС304",
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
    <div className="secondyearcharts-wrapper">
      <h1 className="secondyearcharts-heading">Second Year Charts</h1>
      <div className="secondyearcharts-container">
        <div className="secondyearcharts-semester">
          <h2>Third Semester</h2>
          <ul>
            {thirdSemesterCourses.map((course, index) => (
              <li key={index}>
                <Link
                  to={`/admin/secondyearcharts/thirdsem/${course.path}`}
                  className="secondyearcharts-square-button"
                >
                  {course.code} - {course.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="secondyearcharts-semester">
          <h2>Fourth Semester</h2>
          <ul>
            {fourthSemesterCourses.map((course, index) => (
              <li key={index}>
                <Link
                  to={`/admin/secondyearcharts/fourthsem/${course.path}`}
                  className="secondyearcharts-square-button"
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

export default SecondYearCharts;
