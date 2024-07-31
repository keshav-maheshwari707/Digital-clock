// useEffect() = React hook that tells React to do some code when (pick one)
//               This component re-renders.
//               This component mounts.(When we create a component and add it to the DOM)
//               The state of a value changes.

// useEffect (function, [dependencies])

// 1. useEffect(() => {})                 // Runs after every re-render.
// 1. useEffect(() => {}, [])             // Runs only on mount.
// 1. useEffect(() => {}, [value])        // Runs on mount & when value changes.

import React, { useState, useEffect } from "react";

function MyComponent() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);

    const addCount = () => {
        setCount(count + 1);
    };
    const subtractCount = () => {
        setCount(count - 1);
    };
    const changeColor = () => {
        if (color === "green") {
            setColor("red");
        }
        if (color === "red") {
            setColor("green");
        }
    };
    return (
        <>
            {" "}
            <p style={{ color: color }}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <br />
            <button onClick={subtractCount}>Subtract</button>
            <br />
            <button onClick={changeColor}>Change color</button>
        </>
    );
}

export default MyComponent;
