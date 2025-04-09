import { useState, useEffect } from "react";
import React from "react";
import "./App.css";

export default function App() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getdata() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) {
          throw new Error(`${res.status}: Error fetching data, please refresh`);
        }
        const data = await res.json();
        setBlogs(data);
        setError(null);
      } catch (error) {
        console.error("error fetching data", error);
        setError(error);
      }
    }
    getdata();
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
