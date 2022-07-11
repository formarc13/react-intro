import React from "react";

const CarritoItem = ({
    id,
    item,
    cantidad,
    precio,
    clase
}) => {
  return (
    <li>
      {item} ${precio}
      <div>
        <button onClick={() => clase.decrementar(id)}>-</button>
        <span>{cantidad}</span>
        <button onClick={() => clase.incrementar(id)}>+</button>
         - 
        <button onClick={() => clase.agregarAlCarrito(id)}>Agregar al carrito</button>
      </div>
    </li>
  );
};

export default CarritoItem;
