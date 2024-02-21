import '../css/style.css'
import CarritoIco from './CarritoIco.jsx'


function Tienda(props) {

	return (
		<>

			<link rel="icon" type="image/x-icon" href="img/favicon.ico" />
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
				<table id="categorias" aria-describedby="Tabla de navegación de categorias">
					<tbody>
						<tr>
							<th>
								<p>Componentes para tu coche: </p>
							</th>
							<td className="tab" role="button">
								<p>Ofertas</p>
							</td>
							<td className="tab">
								<p>Llantas y neumáticos</p>
							</td>
							<td className="tab" role="button">
								<p>Frenado</p>
							</td>
							<td className="tab" role="button">
								<p>Piezas de Motor</p>
							</td>
							<td className="tab" role="button">
								<p>Seguridad</p>
							</td>
							<td className="tab" role="button">
								<p>Accesorios</p>
							</td>
						</tr>
					</tbody>
				</table>
				<div className="segmento" id="segmento1" wai-aria="section">
					<p className="segmento-titulo">Ofertas</p>
					<button>Ver más...</button>
					<a name="enlaceProducto" href="../pages/tiendaProducto.html?productoId=0">
						<img
							src="../assets/img/tienda1.png"
							alt="Enlace a producto Rueda de audi"
						/>
					</a>
					<a name="enlaceProducto" href="../pages/tiendaProducto.html?productoId=1">
						<img
							src="../assets/img/tienda2.png"
							alt="Enlace a producto Rueda de audi"
						/>
					</a>
					<a name="enlaceProducto" href="../pages/tiendaProducto.html?productoId=2">
						<img
							src="../assets/img/tienda3.png"
							alt="Enlace a producto Rueda de audi"
						/>
					</a>
					<a name="enlaceProducto" href="../pages/tiendaProducto.html?productoId=3">
						{" "}
						<img
							src="../assets/img/tienda4.png"
							alt="Enlace a producto Rueda de audi"
						/>
					</a>
					<a name="enlaceProducto" href="../pages/tiendaProducto.html?productoId=4">
						{" "}
						<img
							src="../assets/img/tienda5.png"
							alt="Enlace a producto Rueda de audi"
						/>
					</a>
					<a name="enlaceProducto" href="../pages/tiendaProducto.html?productoId=5">
						{" "}
						<img
							src="../assets/img/tienda6.png"
							alt="Enlace a producto Rueda de audi"
						/>
					</a>
					<a name="enlaceProducto" href="../pages/tiendaProducto.html?productoId=6">
						{" "}
						<img
							src="../assets/img/tienda7.png"
							alt="Enlace a producto Rueda de audi"
						/>
					</a>
					<a name="enlaceProducto" href="../pages/tiendaProducto.html?productoId=7">
						{" "}
						<img
							src="../assets/img/tienda8.png"
							alt="Enlace a producto Rueda de audi"
						/>
					</a>
					<p className="desc">Neumático...</p>
					<p className="desc">Correa de...</p>
					<p className="desc">Escape...</p>
					<p className="desc">Escape...</p>
					<p className="desc">Maleta...</p>
					<p className="desc">Neumático...</p>
					<p className="desc">Correa...</p>
					<p className="desc">Correa...</p>
				</div>
				<div className="segmento" id="segmento2" wai-aria="section">
					<p className="segmento-titulo">Neumáticos</p>
					<button>Ver más...</button>
					<img
						src="../assets/img/tienda8.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda4.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda3.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda6.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda5.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda5.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda7.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda1.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<p className="desc">Neumático...</p>
					<p className="desc">Correa de...</p>
					<p className="desc">Escape...</p>
					<p className="desc">Escape...</p>
					<p className="desc">Maleta...</p>
					<p className="desc">Neumático...</p>
					<p className="desc">Correa...</p>
				</div>
				<div className="segmento" id="segmento3" wai-aria="section">
					<p className="segmento-titulo">Frenado</p>
					<button>Ver más...</button>
					<img
						src="../assets/img/tienda1.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda2.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda7.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda6.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda3.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda6.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda5.png"
						aalt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda8.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<p className="desc">Neumático...</p>
					<p className="desc">Correa de...</p>
					<p className="desc">Escape...</p>
					<p className="desc">Escape...</p>
					<p className="desc">Maleta...</p>
					<p className="desc">Neumático...</p>
					<p className="desc">Correa...</p>
				</div>
				<div className="segmento" id="segmento4" wai-aria="section">
					<p className="segmento-titulo">Piezas de motor</p>
					<button>Ver más...</button>
					<img
						src="../assets/img/tienda1.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda8.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda7.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda5.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda2.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda4.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda2.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda1.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<p className="desc">Neumático...</p>
					<p className="desc">Correa de...</p>
					<p className="desc">Escape...</p>
					<p className="desc">Escape...</p>
					<p className="desc">Maleta...</p>
					<p className="desc">Neumático...</p>
					<p className="desc">Correa...</p>
				</div>
				<div className="segmento" id="segmento5" wai-aria="section">
					<p className="segmento-titulo">Seguridad</p>
					<button>Ver más...</button>
					<img
						src="../assets/img/tienda8.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda7.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda6.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda5.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda4.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda3.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda2.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda1.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<p className="desc">Neumático...</p>
					<p className="desc">Correa de...</p>
					<p className="desc">Escape...</p>
					<p className="desc">Escape...</p>
					<p className="desc">Maleta...</p>
					<p className="desc">Neumático...</p>
					<p className="desc">Correa...</p>
				</div>
				<div className="segmento" id="segmento6" wai-aria="section">
					<p className="segmento-titulo">Accesorios</p>
					<button>Ver más...</button>
					<img
						src="../assets/img/tienda2.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda1.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda4.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda3.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda6.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda5.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda8.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<img
						src="../assets/img/tienda7.png"
						alt="Enlace a producto Rueda de audi"
					/>
					<p className="desc">Neumático...</p>
					<p className="desc">Correa de...</p>
					<p className="desc">Escape...</p>
					<p className="desc">Escape...</p>
					<p className="desc">Maleta...</p>
					<p className="desc">Neumático...</p>
					<p className="desc">Correa...</p>
				</div>
				<br /> <br /> <br /> <br /> <br /> <br />
			</main>
		</>

	)
}

export default Tienda
