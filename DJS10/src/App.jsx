import { useState, useEffect } from "react";
import React from "react";
import "./App.css";

export default function App() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status}: Error fetching data, please refresh`);
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
        // setBlogs(null);
      });
  }, []);
  console.log(blogs);
  console.log(error);

  return (
    <div>
      {error && <h1 className="error">{error.message}</h1>}
      {!error && <h1>Posts</h1>}
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
}
