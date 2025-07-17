import { useState, useEffect } from "react"; // Import useEffect
import "./styles.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  // Store the initial date when the component mounts
  const [initialDate] = useState(new Date()); // This is your fixed "Today" reference

  // Derived state: calculate the displayed date string whenever count changes
  const dateMessage = (() => {
    // Start with a fresh Date object based on initialDate for calculation
    const calculatedDate = new Date(initialDate);
    calculatedDate.setDate(initialDate.getDate() + count); // Add/subtract count directly

    const formattedCalculatedDate = calculatedDate.toDateString();

    if (count === 0) {
      return `Today is ${initialDate.toDateString()}`;
    } else if (count > 0) {
      return `${count} days from today is ${formattedCalculatedDate}`;
    } else {
      // count is negative
      return `${Math.abs(count)} days ago it was ${formattedCalculatedDate}`;
    }
  })(); // Immediately invoke this anonymous function

  const addCountTracker = () => {
    setCount((prevCount) => prevCount + step);
  };

  const reduceCountTracker = () => {
    setCount((prevCount) => prevCount - step);
  };

  return (
    <div className="App">
      <h1>React Date Time with Steps</h1>
      <div>
        <div className="flex">
          <button onClick={() => setStep((s) => Math.max(1, s - 1))}>-</button>
          Step - {step}
          <button onClick={() => setStep((s) => s + 1)}>+</button>
        </div>
        <div className="flex">
          <button onClick={reduceCountTracker}>-</button>
          Count - {count}
          <button onClick={addCountTracker}>+</button>
        </div>
        <div className="flex">{dateMessage}</div>{" "}
        {/* Display the derived state */}
      </div>
    </div>
  );
}
