import { useState } from "react";

export const Contador = () => {
  let [counter, setCounter] = useState(0);
  const acum = (num: number) => setCounter(counter + num);

  return (
    <>
      <h1> {counter} </h1>
      <button
        style={{ color: "green" }}
        onClick={() => {
          acum(1);
        }}
      >
        +1
      </button>
      &nbsp;
      <button
        style={{ color: "green" }}
        onClick={() => {
          acum(-1);
        }}
      >
        -1
      </button>
    </>
  );
};
