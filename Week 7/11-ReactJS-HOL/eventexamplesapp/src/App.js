import React, { useState } from "react";

function CurrencyConvertor() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currency === "Euro") {

      const euroAmount = amount * 80;
      alert(`Converting to Euro Amount is ${euroAmount}`);
    }
  };

  return (
    <div>
      <h1 style={{ color: "green" }}>Currency Convertor!!!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <br />
        <label>
          <br />
          Currency:
          <textarea
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    sayHello();
  };

  const sayHello = () => {
    alert("Hello! Member "+count);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handleClick = (e) => {
    alert("I was clicked!!");
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleIncrement}>Increment</button>
      <br/>
      <button onClick={handleDecrement}>Decrement</button>
      <br/>
      <button onClick={() => sayWelcome("welcome!!  ")}>Say welcome</button>
      <br/>
      <button onClick={handleClick}>Click on me</button>
      <br/>
      <CurrencyConvertor />
    </div>
  );
}

export default App;