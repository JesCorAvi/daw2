import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Footer from './components/Footer'
import Muestra from './components/Muestra'
import tiendaLista from './tiendaLista.json';



import './css/style.css'
// Obtener la ID del producto desde el almacenamiento local
const productoId = parseInt(window.localStorage.getItem('productoId'));

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header />
        <Muestra nombre={tiendaLista.tienda[productoId].nombre} descripcion={tiendaLista.tienda[productoId].descripcion} imagen={tiendaLista.tienda[productoId].imagen} precio={tiendaLista.tienda[productoId].precio} />
        <Footer />
    </React.StrictMode>,
)
