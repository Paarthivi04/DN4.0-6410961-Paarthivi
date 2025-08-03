import React from "react";

function CourseDetails({ show, courses }) {
  if (!show) return null;
  return (
    <div className="mystyle1">
      <h1>Course Details</h1>
      {courses.map((course, idx) => (
        <div key={idx}>
          <h2>{course.cname}</h2>
          <h4>{course.date}</h4>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;