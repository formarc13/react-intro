import React, { useState } from "react";
import './App.css';
import Children from './Children';
import image from "../assets/images/imagen.jpg"

/* Components */
import ClassComponent from "./ClassComponent";
import ListMap from './ListMap';
import Props from "./Props";
import CssStyles from './Styling/CssStyles';
import Contador from './Contador/Contador';
import Carrito from "./Carrito/Carrito";

function App({nombre, n1, n2}) {
  const [ mostrar, setMostrar ] = useState(false);
  /* let nombre = "Mati"; */
  /* let cadena = "Soy un string"; */
  let objeto = {
    id: 1,
    nombre: "Mati",
  }
  let handleClick = () => alert("Hiciste click");
  let listaDeUsuarios = ["Jhan", "Karen", "Brian", "Robert", "Robert"]

  const Prueba = () => {
    return (
      <h1>Comisión 13</h1>
    )
  }

  const saludar = () => alert("Hola, ¿Cómo estás?")
  

  return (
    <div className="App">
      <Carrito />
      <hr/>

      <button onClick={() => setMostrar(true)}>Mostrar contador</button>
      <button onClick={() => setMostrar(false)}>Quitar contador</button>
      <hr/>
      {
        mostrar && <Contador />
      }
     {/*  <h2>Imagenes</h2>
      <img src={image} alt="Imagen de naruto"/> */}
      <hr/>
      <CssStyles type="" text="Cancelar" variant="danger"/>
      <hr/>
      <Children>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
        <CssStyles type="submit" text="Enviar" variant="primary"/>
        <hr/>
      </Children>
      <Children>
        <Prueba />
      </Children>
      <hr/>
      <ListMap listaDeUsuarios={listaDeUsuarios}/>
      <CssStyles type="" text="Saludar" variant="success" handleClick={saludar}/>
      <hr/>
      <Props 
        /* string={cadena}  */
       /*  number={15}  */
        object={objeto} 
        array={["frutilla", "manzana", "naranja"]}
        handleClick={handleClick}
        n1={10}
        n2={15}
      />
      <hr />
      <h1>Hola {nombre !== undefined ? nombre : "Desconocido"}!</h1>
      {
       /*  n1 !== undefined && n2 !== undefined ? (<p>
          El resultado de {n1} + {n2} es: {n1 + n2}
        </p>) : "" */
        n1 !== undefined && n2 !== undefined && (<p>
          El resultado de {n1} + {n2} es: {n1 + n2}
        </p>)
      }
      <hr />
      <ClassComponent />
    </div>
  );
}

export default App;
