
import { Fragment, useState } from "react";

export const Login = () => {
  const [fruit, setFruit] = useState('');
  const [description, setDescription] = useState('');
  
  const [ lista, setLista ] = useState<any[]>([]);

  const enviar = ( e:any ) => {
    e.preventDefault()

    if( !fruit.trim() ){
      alert('Falta el nombre del empleado')
    } 
    e.target.reset()
    setFruit('')
    setDescription('')
    setLista([ ...lista, { fruit , description } ])
  } ;


  return (
    <Fragment>
      <hr></hr>
      <form onSubmit = { enviar } >
        <input
        className="form-control"
          type="text"
          placeholder="Nombre del empleado"
          onChange={ ( e ) => setFruit( e.target.value )}
        />
        &nbsp;
        <input
        className="form-control"
          type="text"
          placeholder=" Nombre del banco"
          onChange={( e ) => setDescription( e.target.value )}
        />
        &nbsp;
        <br></br>
        <button className="btn btn-primary" type="submit"> Enviar </button>
      </form>
      <hr></hr>
      
       <ol>
        {
          lista.map( (item, i) => (
            <li style ={{color:'green'}} key={ i }>Empleado : { item.fruit } - Banco : { item.description }</li>
          ))
        }
       </ol>
    </Fragment>
  );
};







// import Button from "react-bootstrap/Button";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";

// import { useState , Fragment } from 'react';

// export const Login =()=>{

//     const [ nombre, setNombre ] = useState('Goku');
//     const [ apellido, setApellido ] = useState('Saiyajin');
//     const [ mail, setMail ] = useState('Mail');

//     return(
//         < Fragment>
//         <hr></hr>
//             <h5 style={{ color :"blue", fontFamily:"sans-serif, didot"}}> Formato de solicitud para cambio de banco : </h5>
//             <hr></hr>

// <div style={{width:"100px", alignItems:"left"}}>

//     <ButtonGroup vertical>
//      <Button>Dirección de Nómina</Button>
//        {/* <Button>Button</Button> */}

//       <DropdownButton
//         as={ButtonGroup}
//         title="Formatos de solicitud"
//         id="bg-vertical-dropdown-1"
//       >
//         {/* <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item> */}
//         <Dropdown.Item eventKey="2">Servicios de la Nomina </Dropdown.Item>
//       </DropdownButton>

//        {/* <Button>Button</Button> */}
//        {/* <Button>Button</Button> */}

//        <DropdownButton
//          as={ButtonGroup}
//          title="Contactanos"
//          id="bg-vertical-dropdown-2"
//        >
//           <Dropdown.Item eventKey="1">Telefonos</Dropdown.Item>
//          <Dropdown.Item eventKey="2">WhatsApp</Dropdown.Item>
//        </DropdownButton>

//        <DropdownButton
//          as={ButtonGroup}
//          title="Servicios"
//          id="bg-vertical-dropdown-3"
//          >
//          <Dropdown.Item eventKey="1">Solicitudes</Dropdown.Item>
//          <Dropdown.Item eventKey="2">Formularios</Dropdown.Item>
//        </DropdownButton>
//      </ButtonGroup>
//            </div>

//     <br></br>

//     <form>
//             <input
//             className="form-control mb-2"
//             type="text"
//             id="nombre"
//              placeholder="Nombre del beneficiario"
//              />

//             <input
//             className="form-control mb-2"
//             type="text"
//             id="apellido"
//             placeholder="Apellido del beneficiario"
//             />

//             <input
//             className="form-control mb-2"
//             type="email"
//              id="mail"
//              placeholder="usuario @ correo"
//              />
//             <input
//             className="form-control mb-2"
//             type="options"
//             id="option"
//              placeholder="Nombre del banco"
//              />
//             <input
//             className="form-control mb-2"
//             type="text"
//              placeholder="Teléfono de contacto"
//              />

//             <button
//             className="btn btn-primary"
//             >
//                 Enviar formulario
//             </button>
// </form>
//         </ Fragment>
//     )
// } ;
