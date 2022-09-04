// import { TiposBasicos } from "./typescript/TiposBasicos";
// import { ObjetosLiteral } from "./typescript/ObjetosLiteral";
// import { Funciones } from "./typescript/Funciones";
// import { Contador } from "./components/Contador";
// import { ContadorConHook } from "./components/ContadorConHook";
import { NavbarTop } from "./components/NavBar";
import { Login } from "./components/Login";

const App = () => {
  return (
    <div className="mt-2">
      <hr />
      <NavbarTop />
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiteral /> */}
      {/* <Funciones /> */}
      {/* <Contador />   */}
      {/* <ContadorConHook /> */}
      <Login />
    </div>
  );
};

export default App;
