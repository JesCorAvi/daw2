import React from 'react';
import Producto from './Producto';
import Button from './Button';
import carritoJson from '../carrito.json';

function Carrito() {
  let total = 0;
  
  const comprar = () => {
    fetch('http://0.0.0.0:8000/src/borrarCarrito.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
    .then(response => {
      if (response.ok) {
        window.alert("Compra realizada");
      } else {
        window.alert("Error al comprar los productos");
      }
    })
    .catch(error => {
      console.error('Error al comprar los productos:', error);
      window.alert("Error al comprar los productos");
    });
  }
  const vaciar = () => {
    fetch('http://0.0.0.0:8000/src/borrarCarrito.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
    .then(response => {
      if (response.ok) {
        window.alert("Carrito vaciado");
      } else {
        window.alert("Error al vaciar el carrito");
      }
    })
    .catch(error => {
      console.error('Error al vaciar el carrito:', error);
      window.alert("Error al vaciar el carrito");
    });
  }

  return (
    <div id="carrito">
      <h1>Carrito</h1>
      {carritoJson.carrito.length === 0 ? (
        <h2>No hay productos en el carrito</h2>
      ) : (
        <>
          {carritoJson.carrito.map(producto => {
            total += parseFloat(producto.precio.replace('€', '')) * producto.cantidad;
            return (
              <Producto 
                key={producto.nombre} 
                img={producto.imagen}  
                text={producto.nombre} 
                cant={producto.cantidad} 
                precio={producto.precio}
                descripcion={producto.descripcion}
              />
            );
          })}
          <p id="total">
            TOTAL: {total.toFixed(2)}€
          </p>
          <Button accion="Comprar" id="button" click={comprar}/>
          <Button accion="vaciar carrito" id="borrar" click={vaciar}/>
        </>
      )}
    </div>
  );
}

export default Carrito;