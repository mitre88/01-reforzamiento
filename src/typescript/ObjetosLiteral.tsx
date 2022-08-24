interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
  direccion: Direccion;
}
// objetos anidados en una interfaz se declaran por fuera :
interface Direccion {
  calle: string;
  numero: number;
  ciudad: string;
}

export const ObjetosLiteral = () => {
  const persona: Persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    direccion: {
      calle: "Calle falsa",
      numero: 123,
      ciudad: "Ciudad falsa",
    },
  };

  return (
    <>
      <p>ObjetosLiterales</p>
      {/* los objetos literales no tienen una representación directa en jsx */}
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};
