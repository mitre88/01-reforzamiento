import { useState } from "react";

export const Contador = () => {
  let [counter, setCounter] = useState(0);

  return (
    <>
      <p> {counter} </p>
      <button style={{ color: "blue" }}
        onClick={() => {
          setCounter(counter++);
        }}
      >
        +1
      </button>
      <button style={{ color: "blue" }}
        onClick={() => {
          setCounter(counter-1);
        }}
      >
        -1
      </button>
    </>
  );
};
