import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setSum(numbers.reduce((acc, n) => acc + n, 0));
    }, 0);
    return () => clearTimeout(id);
  }, [numbers]);

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setNumbers((prev) => [...prev, value]);
    }
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Sum Calculator</h1>
      <input type="number" onChange={handleChange} />
      <p>Sum: {sum}</p>
    </div>
  );
};

export default App;