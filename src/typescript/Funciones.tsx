export const Funciones = () => {
  const suma = (a: number,b:number): number => {
        return ( a + b )
    }
// especificar el retorno que esperas de una fn

  return (
    <>
      <h3>El resultado es : {suma (4,3)} </h3>
    </>
  );
};


