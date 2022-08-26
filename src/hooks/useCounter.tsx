import { useState } from "react";

export const useCounter = () => {
  // un hook no es más que una funciòn --> 
  const [valor, setvalor] = useState(0);

  const acumular = (numero: number) => {
    setvalor(valor + numero);
  };

  return {
    valor,
    acumular,
  };
};
