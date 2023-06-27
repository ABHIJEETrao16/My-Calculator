import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  // btns of ops are parameter in func as value

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  const calculate = () => {
    if (
      calc === "" ||
      calc[calc.length - 1] == ops[0] ||
      calc[calc.length - 1] == ops[1] ||
      calc[calc.length - 1] == ops[2] ||
      calc[calc.length - 1] == ops[3] ||
      calc[calc.length - 1] == "0"
    ) {
      return;
    }
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  };

  return (
    <>
      <div className="App">
        <div className="heading">
          <h1>My Calculator</h1>
        </div>
        <div className="calculator">
          <div className="display">
            {result ? <span>({result})</span> : ""}&nbsp;
            {calc || "0"}
          </div>
          <div className="operators">
            <button onClick={() => updateCalc("/")}>/</button>
            <button onClick={() => updateCalc("*")}>*</button>
            <button onClick={() => updateCalc("+")}>+</button>
            <button onClick={() => updateCalc("-")}>-</button>

            <button onClick={deleteLast}>DEL</button>
          </div>
          <div className="digits">
            {createDigits()}
            <button onClick={() => updateCalc("0")}>0</button>
            <button>
              <div onClick={() => updateCalc(".")}>.</div>
            </button>

            <button onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
