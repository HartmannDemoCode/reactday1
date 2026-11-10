import { useState } from "react";
function SpreadDemo({ name }) {
  const [calcResult, setCalcResult] = useState(0);
  const [input, setInput] = useState("");

  const calculate = (callback, val1, val2) => {
    return callback(val1, val2);
  };
  const sum = (val1, val2) => val1 + val2;
  const substract = (val1, val2) => val1 - val2;

  const handleChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    console.log('Value: ', value);
    setInput(value);
  }

    const handleSum = () => {
    const numbers = input.split(',');
    // convert to Number
    const [val1, val2] = numbers.map(n => Number(n));
    setCalcResult(calculate(sum, val1, val2))
  }

    const handleSub = () => {
    const numbers = input.split(',');
    // convert to Number
    const [val1, val2] = numbers.map(n => Number(n));
    setCalcResult(calculate(substract, val1, val2))
  }

  return (
    <>
      <h3>Result: {calcResult}</h3>
      <input type="text" placeholder="Insert numbers seperated by comma" onChange={handleChange} value={input}/>
      <button onClick={handleSum}>SUM</button>
      <button onClick={handleSub}> SUBSTRACT </button>
    </>
  );
}

export default SpreadDemo;
