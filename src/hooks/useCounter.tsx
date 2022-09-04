import { useState } from "react";

export const useCounter = ( initial :number = 1000 ) => {
  // un hook no es más que una funciòn --> 
  const [valor, setvalor] = useState( initial);

  const acumular = (numero: number) => {
    setvalor(valor + numero);
  };

  return {
    valor,
    acumular,
  };
};
