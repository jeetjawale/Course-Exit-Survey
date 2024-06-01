import React from "react";
import { Link } from "react-router-dom";
import "./thirdyearcharts.css"; // Import the CSS file for styling

const ThirdYearCharts = () => {
  const fifthSemesterCourses = [
    { code: "BTCOC501", name: "Database Systems", path: "database-systems" },
    {
      code: "ВTСОС502",
      name: "Theory of Computation",
      path: "theory-of-computation-chart",
    },
    {
      code: "BTCOC503",
      name: "Software Engineering",
      path: "software-engineering-chart",
    },
    {
      code: "ВТСОЕ504(B)",
      name: "Numerical Methods",
      path: "numerical-methods-chart",
    },
    {
      code: "BTHM505(A)",
      name: "Economics and Management",
      path: "economics-management-chart",
    },
  ];

  const sixthSemesterCourses = [
    { code: "BTCOC601", name: "Compiler Design", path: "compiler-design-chart" },
    { code: "ВТСОС602", name: "Computer Networks", path: "computer-networks-chart" },
    { code: "BTCOC603", name: "Machine Learning", path: "machine-learning-chart" },
    {
      code: "BTCOE604(B)",
      name: "Internet of Things",
      path: "internet-of-things-chart",
    },
    {
      code: "BTHM605(A)",
      name: "Development Engineering",
      path: "development-engineering-chart",
    },
    {
      code: "BTCOL606",
      name: "Competitive Programming",
      path: "competitive-programming-chart",
    },
  ];

  return (
    <div className="thirdyearcharts-wrapper">
      <h1 className="thirdyearcharts-heading">Third Year Charts</h1>
      <div className="thirdyearcharts-container">
        <div className="thirdyearcharts-semester">
          <h2>Fifth Semester</h2>
          <ul>
            {fifthSemesterCourses.map((course, index) => (
              <li key={index}>
                <Link
                  to={`/admin/thirdyearcharts/${course.path}`}
                  className="thirdyearcharts-square-button"
                >
                  {course.code} - {course.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="thirdyearcharts-semester">
          <h2>Sixth Semester</h2>
          <ul>
            {sixthSemesterCourses.map((course, index) => (
              <li key={index}>
                <Link
                  to={`/admin/thirdyearcharts/${course.path}`}
                  className="thirdyearcharts-square-button"
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

export default ThirdYearCharts;
