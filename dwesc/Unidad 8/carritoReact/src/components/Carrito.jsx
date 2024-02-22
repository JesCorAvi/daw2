import React from 'react';
import Producto from './Producto';
import Button from './Button';
import carritoJson from '../carrito.json';

function Carrito() {
  let total = 0;

  return (
    <div id="carrito">
      <h1>Carrito</h1>
      {carritoJson.carrito.map(producto => {
        total += parseFloat(producto.precio.replace('€', '')) * producto.cantidad;
        return (
          <Producto 
            key={producto.nombre} 
            img={producto.imagen}  
            text={producto.nombre} 
            cant={producto.cantidad} 
            precio={producto.precio}
            descripcion = {producto.descripcion}
          />
        );
      })}
      <p id="total">
        TOTAL: {total.toFixed(2)}€
      </p>
      <Button accion="Comprar"/>
    </div>
  );
}

export default Carrito;
