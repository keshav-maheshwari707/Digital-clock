import React, { useState, useEffect } from "react";
function MyComponent2() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`;
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>Window's width: {width}px</p>
      <p>Window's height: {height}px</p>
    </>
  );
}
export default MyComponent2;
