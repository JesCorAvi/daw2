import '../css/style.css'


function Muestra(props) {

    return (
        <main>
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
            <a href="tienda.html">
                <div id="atras">
                    <img src="../assets/img/flecha.png" alt="volver" />
                </div>
            </a>
            <table id="categorias">
                <tbody>
                    <tr>
                        <th>
                            <p>Componentes para tu coche: </p>
                        </th>
                        <td>
                            <p>
                                <a href="tienda.html">Ofertas</a>
                            </p>
                        </td>
                        <td>
                            <p>
                                <a href="tienda.html">Llantas y neumáticos</a>
                            </p>
                        </td>
                        <td>
                            <p>
                                <a href="tienda.html">Frenado</a>
                            </p>
                        </td>
                        <td>
                            <p>
                                <a href="tienda.html">Piezas de Motor</a>
                            </p>
                        </td>
                        <td>
                            <p>
                                <a href="tienda.html">Seguridad</a>
                            </p>
                        </td>
                        <td>
                            <p>
                                <a href="tienda.html">Accesorios</a>
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div id="producto">
                <div className="carrousel">
                    <div className="grande">
                        <img
                            src={`../assets/img/${props.imagen}.png`}
                            aria-describedby="Modelo M Double Spoke, tamaño 18 pulgadas.Estas ruedas se encontraban en un BMW Serie 3 y están en excelente estado"
                            className="img"
                        />
                        <img
                            src={`../assets/img/${props.img}.png`}
                            aria-describedby="Modelo M Double Spoke, tamaño 18 pulgadas.Estas ruedas se encontraban en un BMW Serie 3 y están en excelente estado"
                            className="img"
                        />
                        <img
                            src={`../assets/img/${props.img}.png`}
                            aria-describedby="Modelo M Double Spoke, tamaño 18 pulgadas.Estas ruedas se encontraban en un BMW Serie 3 y están en excelente estado"
                            className="img"
                        />
                    </div>
                    <div className="puntos">
                        <ul>
                            <li className="punto activo" />
                            <li className="punto" />
                            <li className="punto" />
                        </ul>
                    </div>
                    <div id="agrandar">
                        <img src="" id="agrandada" />
                        <button id="cerrar">Cerrar</button>
                    </div>
                </div>
                <div id="productoDesc">
                    <h1>
                        {props.nombre}
                    </h1>
                    <div id="puntaje">
                        <img src="../assets/img/estrella.png" alt="estrella" />
                        <img src="../assets/img/estrella.png" alt="estrella" />
                        <img src="../assets/img/estrella.png" alt="estrella" />
                        <img src="../assets/img/estrella.png" alt="estrella" />
                        <img src="../assets/img/estrella.png" alt="estrella" />
                        <p>4.5/5</p>
                    </div>
                    <p id="Pdescripcion">
                        {props.descripcion}
                        <br />
                        <br />
                    </p>
                    <div id="compraBotones">
                        <p id="precio"> {props.precio}</p>
                        <button id="añadir">Añadir a la cesta</button>
                        <button>Comprar</button>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Muestra
