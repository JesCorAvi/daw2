import '../css/style.css'
import Producto from './Producto'
import Button from './Button'
import carritoJson from '../carrito.json';


function Lista() {

  return (
    <div id="carrito">
        <h1>Carrito</h1>
		{carritoJson.carrito.map(producto => {
			return <Producto key={producto.nombre} img={producto.imagen}  text={producto.nombre} cant={producto.cantidad}/>
		})
		}
		<Button text="Comprar"/>
    </div>
  )
}

export default Lista
