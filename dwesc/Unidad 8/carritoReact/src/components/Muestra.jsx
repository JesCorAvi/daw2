import '../css/style.css'
import CarritoIco from './CarritoIco.jsx'
import { Link } from 'react-router-dom';

function Muestra(props) {

    return (
        <main>
			<CarritoIco/>
            <div id="bannerTienda">
                <div id="cajaBannerTienda">
                    <h1>Tienda</h1>
                </div>
                <div id="busqueda">
                    <input type="text" placeholder="Buscar un producto..." />
                    <select name="coches" id="coches">
                        <option value="coche1">Audi A1</option>
                        <option value="coche2">Citroen Xsara</option>
                    </select>
                    <button>Buscar</button>
                </div>
            </div>
            <Link to="/">
                <div id="atras">
                    <img src="/src/assets/img/flecha.png" alt="volver" />
                </div>
            </Link>
            
            <div id="producto">
                <div id="divImagen">
                    <img id="imagenProducto"
                        src={`/src/assets/img/${props.imagen}.png`}
                        aria-describedby="Modelo M Double Spoke, tamaño 18 pulgadas.Estas ruedas se encontraban en un BMW Serie 3 y están en excelente estado"
                    />
                </div>
                <div id="productoDesc">
                    <h1>
                        {props.nombre}
                    </h1>
                    <div id="puntaje">
                        <img src="/src/assets/img/estrella.png" alt="estrella" />
                        <img src="/src/assets/img/estrella.png" alt="estrella" />
                        <img src="/src/assets/img/estrella.png" alt="estrella" />
                        <img src="/src/assets/img/estrella.png" alt="estrella" />
                        <img src="/src/assets/img/estrella.png" alt="estrella" />
                        <p>4.5/5</p>
                    </div>
                    <p id="Pdescripcion">
                        {props.descripcion}
                        <br />
                        <br />
                    </p>
                </div>
            </div>
        </main>

    )
}

export default Muestra
