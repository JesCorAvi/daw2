import '../css/style.css'
import Producto from './Producto'
import Button from './Button'
import carritoJson from '../carrito.json';


function Carrito() {

  return (
    <div id="carrito">
        <h1>Carrito</h1>
		{carritoJson.carrito.map(producto => {
			return <Producto 
        key={producto.nombre} 
        img={producto.imagen}  
        text={producto.nombre} 
        cant={producto.cantidad} 
        precio = {producto.precio}
      />
		})
		}
		<Button accion="Comprar"/>
    </div>
  )
}

export default Carrito
