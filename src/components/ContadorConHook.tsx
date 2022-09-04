import { useCounter } from "../hooks/useCounter";

export const ContadorConHook = ()=> {

    const {valor, acumular } = useCounter( 12 );

  return (
    <>
      <h1> Contador con Hook :{ valor } </h1>
      <button
        style={{ color: "red" }}
        onClick={() => {
          acumular(1);
        }}
      >
        +1
      </button>
      &nbsp;
      <button
        style={{ color: "red" }}
        onClick={() => {
          acumular(-1);
        }}
      >
        -1
      </button>
    </>
  );
};
