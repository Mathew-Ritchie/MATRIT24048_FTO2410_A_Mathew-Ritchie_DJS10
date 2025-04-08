import { useState, useEffect } from "react";
import React from "react";
import "./App.css";

export default function App() {
  const [blogs, setBlogs] = useState(0);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);
  return <></>;
}
