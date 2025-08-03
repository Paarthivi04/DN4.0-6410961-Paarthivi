import React from "react";
import './App.css';
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

const books = [
  { id: 101, bname: "Master React", price: 670 },
  { id: 102, bname: "Deep Dive into Angular 11", price: 800 },
  { id: 103, bname: "Mongo Essentials", price: 450 },
];

const blogs = [
  {
    title: "React Learning",
    author: "Stephen Biz",
    content: "Welcome to learning React!",
  },
  {
    title: "Installation",
    author: "Schewzdenier",
    content: "You can install React from npm.",
  },
];

const courses = [
  { cname: "Angular", date: "4/5/2021" },
  { cname: "React", date: "6/3/20201" },
];

function App() {
  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (
    <div style={{ display: "flex",justifyContent:'center', marginTop: "50px" }}>
      <CourseDetails show={showCourses} courses={courses} />
      <BookDetails show={showBooks} books={books} />
      <BlogDetails show={showBlogs} blogs={blogs} />
    </div>
  );
}

export default App;