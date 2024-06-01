import React from "react";
import { Link } from "react-router-dom";
import "./thirdyear.css"; // Import the CSS file for styling

const ThirdYear = () => {
  const fifthSemesterCourses = [
    { code: "BTCOC501", name: "Database Systems", path: "database-systems" },
    {
      code: "ВTСОС502",
      name: "Theory of Computation",
      path: "theory-of-computation",
    },
    {
      code: "BTCOC503",
      name: "Software Engineering",
      path: "software-engineering",
    },
    {
      code: "ВТСОЕ504(B)",
      name: "Numerical Methods",
      path: "numerical-methods",
    },
    {
      code: "BTHM505(A)",
      name: "Economics and Management",
      path: "economics-management",
    },
  ];

  const sixthSemesterCourses = [
    { code: "BTCOC601", name: "Compiler Design", path: "compiler-design" },
    { code: "ВТСОС602", name: "Computer Networks", path: "computer-networks" },
    { code: "BTCOC603", name: "Machine Learning", path: "machine-learning" },
    {
      code: "BTCOE604(B)",
      name: "Internet of Things",
      path: "internet-of-things",
    },
    {
      code: "BTHM605(A)",
      name: "Development Engineering",
      path: "development-engineering",
    },
    {
      code: "BTCOL606",
      name: "Competitive Programming",
      path: "competitive-programming",
    },
  ];

  return (
    <div className="thirdyear-wrapper">
      <h1 className="thirdyear-heading">Third Year Subjects</h1>
      <div className="thirdyear-container">
        <div className="thirdyear-semester">
          <h2>Fifth Semester</h2>
          <ul>
            {fifthSemesterCourses.map((course, index) => (
              <li key={index}>
                <Link
                  to={`/feedbackforms/thirdyear/fifthsem/${course.path}`}
                  className="thirdyear-square-button"
                >
                  {course.code} - {course.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="thirdyear-semester">
          <h2>Sixth Semester</h2>
          <ul>
            {sixthSemesterCourses.map((course, index) => (
              <li key={index}>
                <Link
                  to={`/feedbackforms/thirdyear/sixthsem/${course.path}`}
                  className="thirdyear-square-button"
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

export default ThirdYear;
