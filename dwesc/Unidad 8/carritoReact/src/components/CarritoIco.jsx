import '../css/style.css'
import { Link } from 'react-router-dom';


function Button(props) {

  return (
    <>
        <Link to="/carrito">
            <div id="carritoIco">
                <img src="/src/assets/img/carrito-de-compras.png" alt="" />
            </div>
        </Link>
    </>
  )
}

export default Button
