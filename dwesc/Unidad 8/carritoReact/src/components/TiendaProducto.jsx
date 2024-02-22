import React from 'react';
import Muestra from './Muestra';
import Controles from './Controles';
import tiendaLista from '../tiendaLista.json';
import queryString from 'query-string';
import '../css/style.css';

function TiendaProducto() {
  const urlCadena = queryString.parse(window.location.search);
  const idProducto = urlCadena.productoId;
  function añadirProductoAlCarrito() {
    fetch('http://0.0.0.0:8000/src/carrito.php?id_producto=' + idProducto) 
    .then(response => {
      if (response.ok) {
        // Si la respuesta es exitosa (código de estado 200-299), muestra el mensaje
        window.alert("Producto añadido al carrito")
      }
    })
  }
  
    return (
      <React.StrictMode>
        <Muestra
          nombre={tiendaLista.tienda[idProducto].nombre}
          descripcion={tiendaLista.tienda[idProducto].descripcion}
          imagen={tiendaLista.tienda[idProducto].imagen}
        />
        <Controles 
          precio={tiendaLista.tienda[idProducto].precio} 
          accion="Añadir a la cesta" 
          click={añadirProductoAlCarrito}
        />
      </React.StrictMode>
    );
  }

  export default TiendaProducto
