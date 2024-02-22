import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tienda from './components/Tienda';
import Nosotros from './components/Nosotros';
import Ayuda from './components/Ayuda';
import TiendaProducto from './components/TiendaProducto';
import Carrito from './components/Carrito';
import Header from './components/Header'
import Footer from './components/Footer'


function App(){
    return(
    <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Tienda />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/ayuda" element={<Ayuda />} />
                    <Route path="/tiendaProducto" element={<TiendaProducto />} />
                    <Route path="/carrito" element={<Carrito />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}
        
export default App

