import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Muestra from './components/Muestra';
import Controles from './components/Controles';
import tiendaLista from './tiendaLista.json';
import queryString from 'query-string';
import './css/style.css';

function TiendaProducto() {
  const urlCadena = queryString.parse(window.location.search);
  const idProducto = urlCadena.productoId;
  
  
    return (
      <React.StrictMode>
        <Header />
        <Muestra
          nombre={tiendaLista.tienda[idProducto].nombre}
          descripcion={tiendaLista.tienda[idProducto].descripcion}
          imagen={tiendaLista.tienda[idProducto].imagen}
        />
        <Controles precio={tiendaLista.tienda[idProducto].precio} text="Comprar"/>
        <Footer />
      </React.StrictMode>
    );
  }

ReactDOM.createRoot(document.getElementById('root')).render(<TiendaProducto />);