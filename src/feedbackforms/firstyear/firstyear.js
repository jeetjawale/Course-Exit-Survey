import React from "react";
import { Link } from "react-router-dom";
import "./firstyear.css"; // Import the CSS file for styling

const FirstYear = () => {
  const firstSemesterCourses = [
    { code: "BTS100", name: "English I", path: "english-i" },
    { code: "BTS101", name: "Mathematics I", path: "mathematics-i" },
    { code: "BTS102", name: "Physics I", path: "physics-i" },
    { code: "BTS103", name: "Chemistry", path: "chemistry" },
    {
      code: "BTS104",
      name: "Introduction to Computing",
      path: "introduction-to-computing",
    },
  ];

  const secondSemesterCourses = [
    { code: "BTS105", name: "English II", path: "english-ii" },
    { code: "BTS106", name: "Mathematics II", path: "mathematics-ii" },
    { code: "BTS107", name: "Physics II", path: "physics-ii" },
    {
      code: "BTS108",
      name: "Environmental Studies",
      path: "environmental-studies",
    },
    {
      code: "BTS109",
      name: "Engineering Graphics",
      path: "engineering-graphics",
    },
  ];

  return (
    <div className="firstyear-wrapper">
      <h1 className="firstyear-heading">First Year Subjects</h1>
      <div className="firstyear-container">
        <div className="firstyear-semester">
          <h2>First Semester</h2>
          <ul>
            {firstSemesterCourses.map((course, index) => (
              <li key={index}>
                <Link
                  to={`/feedbackforms/firstyear/firstsem/${course.path}`}
                  className="firstyear-square-button"
                >
                  {course.code} - {course.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="firstyear-semester">
          <h2>Second Semester</h2>
          <ul>
            {secondSemesterCourses.map((course, index) => (
              <li key={index}>
                <Link
                  to={`/feedbackforms/firstyear/secondsem/${course.path}`}
                  className="firstyear-square-button"
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

export default FirstYear;
