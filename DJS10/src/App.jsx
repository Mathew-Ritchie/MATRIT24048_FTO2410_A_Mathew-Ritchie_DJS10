import { useState, useEffect } from "react";
import React from "react";
import "./App.css";

export default function App() {
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error fetching data: ${res.status}`);
        }
        return res.json();
      })

      .then((data) => {
        setBlogs(data);
        setError(null);
      })
      .catch((error) => {
        console.error("error fetching data", error);
        setError(error);
        setBlogs(null);
      });
  }, []);
  console.log(blogs);
  console.log(error);

  return (
    <div>
      {blogs && <h1>Posts</h1>}
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
}
