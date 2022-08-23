export const TiposBasicos = () => {
  const name: string = "Alejandro";
  const edad: number = 40;
  const active: boolean = false;

  const hobbies: string[] = ["futbol", "natacion", "caminar"];

  return (
    <>
      <h3>
        Tipos Basicos
        {name}-{edad}-{ active? "activo" : "inactivo" }
      </h3>
      
     { hobbies.map((hobby, index) => (
        <p key={index}>{hobby}</p>
      ))}
       

    </>
  );
};
