import '../css/style.css'
import { Link } from 'react-router-dom';
import carritoJson from '../carrito.json';


function CarritoIco() {
  const totalCantidades = carritoJson.carrito.reduce((total, producto) => total + producto.cantidad, 0);
  return (

    <>
        <Link to="/carrito">
            <div id="carritoIco">
                <img src="/src/assets/img/carrito-de-compras.png" alt="" />
            </div>
            <div id="carritoNum">
              <p id="cantidad">{totalCantidades}</p>
            </div>
        </Link>
    </>
  )
}

export default CarritoIco
