import React from "react";

function BlogDetails({ show, blogs }) {
  return show ? (
    <div className="v1">
      <h1>Blog Details</h1>
      {blogs.map((blog, idx) => (
        <div key={idx}>
          <h2>{blog.title}</h2>
          <b>{blog.author}</b>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  ) : null;
}

export default BlogDetails;