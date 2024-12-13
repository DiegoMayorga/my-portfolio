import "../../styles/pages/calculator.scss";
import { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState<number | "">("");
  const [num2, setNum2] = useState<number | "">("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleOperation = (operation: string) => {
    const n1 = typeof num1 === "number" ? num1 : 0;
    const n2 = typeof num2 === "number" ? num2 : 0;

    if (isNaN(n1) || isNaN(n2)) {
      setError("Please, type valid numbers.");
      setResult(null);
      return;
    }

    setError(null);

    switch (operation) {
      case "+":
        setResult(n1 + n2);
        break;
      case "-":
        setResult(n1 - n2);
        break;
      case "*":
        setResult(n1 * n2);
        break;
      case "/":
        if (n2 === 0) {
          setError("You can't divide by 0.");
          setResult(null);
        } else {
          setResult(n1 / n2);
          break;
        }
      default:
        setResult(null);
        break;
    }
  };

  const handleClear = () => {
    setNum1("");
    setNum2("");
    setError(null);
    setError(null);
  };

  const handleChangeNum1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNum1(
      value === "" || !isNaN(Number(value))
        ? value === ""
          ? ""
          : Number(value)
        : num1
    );
    if (error) setError(null);
  };

  const handleChangeNum2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNum2(
      value === "" || !isNaN(Number(value))
        ? value === ""
          ? ""
          : Number(value)
        : num2
    );
    if (error) setError(null);
  };

  const isOperationDisabled = num1 === "" || num2 === "" || error != null;

  return (
    <div className="calculator">
      <div className="container">
        <form>
          <p>Type a number</p>
          <input
            type="text"
            placeholder="Type a number"
            value={num1 === "" ? "" : num1}
            onChange={handleChangeNum1}
            aria-label="First number"
          />
          <p>Type another number</p>
          <input
            type="text"
            placeholder="Type another number"
            value={num2 === "" ? "" : num2}
            onChange={handleChangeNum2}
            aria-label="Second number"
          />
          {error && (
            <p className="error" role="alert">
              {error}
            </p>
          )}
          <p>
            {result !== null
              ? `The result is: ${result}`
              : "Click on a button to know the result."}
          </p>
          <div className="buttons">
            <button
              type="button"
              onClick={() => handleOperation("+")}
              disabled={isOperationDisabled}
            >
              +
            </button>
            <button
              type="button"
              onClick={() => handleOperation("*")}
              disabled={isOperationDisabled}
            >
              x
            </button>
            <button
              type="button"
              onClick={() => handleOperation("-")}
              disabled={isOperationDisabled}
            >
              -
            </button>
            <button
              type="button"
              onClick={() => handleOperation("/")}
              disabled={isOperationDisabled}
            >
              /
            </button>
          </div>
          <button type="button" onClick={handleClear} className="clear-btn">
            Clear
          </button>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
