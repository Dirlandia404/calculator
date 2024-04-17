import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "./Calculator.css";

export default function Calculator() {
  const [oldNumber, setOldNumber] = useState(0);
  const [number, setNumber] = useState(0);
  const [operador, setOperador] = useState();

  function inputNumber(e) {
    var input = e.target.value;
    if (number === 0) {
      setNumber(input);
    } else {
      setNumber(number + input);
    }
  }
  function clear() {
    setNumber(0);
  }
  function porcentagem() {
    const percent = number / 1000;
    setNumber(percent);
  }
  function changeSign() {
    if (number > 0) {
      setNumber(-number);
    } else {
      setNumber(Math.abs(number));
    }
  }

  function operaterHandler(e) {
    var operadorInput = e.target.value;
    setOperador(operadorInput);
    setOldNumber(number);
    setNumber(0);
  }

  function calculate() {
    switch (operador) {
      case "/":
        setNumber((parseFloat(oldNumber) / parseFloat(number)).toFixed(2));
        break;

      case "*":
        setNumber(parseFloat(oldNumber) * parseFloat(number));
        break;

      case "+":
        setNumber(parseFloat(oldNumber) + parseFloat(number));
        break;

      case "-":
        setNumber(parseFloat(oldNumber) - parseFloat(number));
        break;

      default:
        break;
    }
  }
  return (
    <div className="fullDisplay">
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <Box m={6} />
          <div className="display">
            <h1 className="result">{number}</h1>
          </div>

          <button onClick={clear}>AC</button>
          <button onClick={changeSign}>+/-</button>
          <button onClick={porcentagem}>%</button>
          <button className="operater" onClick={operaterHandler} value={"/"}>
            /
          </button>
          <button className="number" onClick={inputNumber} value={7}>
            7
          </button>
          <button className="number" onClick={inputNumber} value={8}>
            8
          </button>
          <button className="number" onClick={inputNumber} value={9}>
            9
          </button>
          <button className="operater" onClick={operaterHandler} value={"*"}>
            *
          </button>
          <button className="number" onClick={inputNumber} value={4}>
            4
          </button>
          <button className="number" onClick={inputNumber} value={5}>
            5
          </button>
          <button className="number" onClick={inputNumber} value={6}>
            6
          </button>
          <button className="operater" onClick={operaterHandler} value={"-"}>
            -
          </button>
          <button className="number" onClick={inputNumber} value={1}>
            1
          </button>
          <button className="number" onClick={inputNumber} value={2}>
            2
          </button>
          <button className="number" onClick={inputNumber} value={3}>
            3
          </button>
          <button className="operater" onClick={operaterHandler} value={"+"}>
            +
          </button>
          <button className="number zero" onClick={inputNumber} value={0}>
            0
          </button>
          <button className="number" onClick={inputNumber} value={"."}>
            ,
          </button>
          <button className="operater" onClick={calculate}>
            =
          </button>
        </div>
      </Container>
    </div>
  );
}
