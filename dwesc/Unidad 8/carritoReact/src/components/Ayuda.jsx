import '../css/style.css'
import CarritoIco from './CarritoIco.jsx'


function Ayuda(props) {

	return (
		<>
			<main>
				<div id="bannerAyuda">
					<div id="cajaBanner">
						<h1>Ayuda</h1>
					</div>
				</div>
				<br />
				<br />
				<div id="contenedorProblemas">
					<div className="problemas" id="menu1">
						<h3>Problemas con la conectividad o el inicio de sesión.</h3>
						<p>
							Para solucionar estos problemas, debes verificar la conectividad de
							Internet a tu servidor. Aquí tienes algunos consejos:
							<br />
							<br />
							Realiza comprobaciones ping y traceroute. Compara los resultados con
							otros sitios. Usualmente, los resultados de menos de 200 ms están bien y
							no indican problemas; Intenta trabajar en tu panel de control (Site
							Tools, Plesk, etc.); Comprueba con qué rapidez se descargas los emails.
						</p>
					</div>
					<div className="problemas" id="menu2">
						<h3>Problemas con el visionado de la web.</h3>
						<p>
							Lo primero que tenemos que determinar es si el sitio web al que estamos
							intentando acceder no carga, nos muestra algún tipo de error o carga de
							manera muy lenta. Cada una suele indicarnos cosas muy diferentes, y en
							el caso de que, por ejemplo, no nos cargue, puede que incluso no tenga
							solución si el fallo es por parte del servidor del sitio web.
						</p>
					</div>
					<div className="problemas" id="menu3">
						<h3>Problemas con el estado del vehículo o vehículos faltantes.</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis
							luctus odio, sed condimentum dolor pretium a. Lorem ipsum dolor sit
							amet, consectetur adipiscing elit. Quisque rhoncus felis sed lorem
							pharetra, blandit elementum nibh pellentesque. Lorem ipsum dolor sit
							amet, consectetur adipiscing elit. Vestibulum vehicula, leo nec bibendum
							convallis, mauris nulla rhoncus orci, vel euismod ante erat id ex. Nam
							scelerisque feugiat est non ultricies. Praesent mi sem, vehicula vel
							nunc vestibulum, dignissim vestibulum augue. Mauris at congue justo.
							Praesent quis pellentesque urna. Cras sed magna et felis vehicula
							semper. Vivamus sodales velit vel elit mollis, et sagittis lectus
							gravida. Pellentesque metus ante, venenatis non ipsum quis, gravida
							lobortis massa. Nunc pulvinar nibh leo, vitae ullamcorper ipsum cursus
							vel. Ut in libero ante. Aliquam non viverra eros.
						</p>
					</div>
					<div className="problemas" id="menu4">
						<h3>Problemas con el pago o con las devoluciones.</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis
							luctus odio, sed condimentum dolor pretium a. Lorem ipsum dolor sit
							amet, consectetur adipiscing elit. Quisque rhoncus felis sed lorem
							pharetra, blandit elementum nibh pellentesque. Lorem ipsum dolor sit
							amet, consectetur adipiscing elit. Vestibulum vehicula, leo nec bibendum
							convallis, mauris nulla rhoncus orci, vel euismod ante erat id ex. Nam
							scelerisque feugiat est non ultricies. Praesent mi sem, vehicula vel
							nunc vestibulum, dignissim vestibulum augue. Mauris at congue justo.
							Praesent quis pellentesque urna. Cras sed magna et felis vehicula
							semper. Vivamus sodales velit vel elit mollis, et sagittis lectus
							gravida. Pellentesque metus ante, venenatis non ipsum quis, gravida
							lobortis massa. Nunc pulvinar nibh leo, vitae ullamcorper ipsum cursus
							vel. Ut in libero ante. Aliquam non viverra eros.
						</p>
					</div>
				</div>
				<p id="nota">
					Si necesita ayuda y su problema no aparece arriba, puede hacer uso de
					nuestro de formulario de contacto a continucación.
				</p>
				<form action="get">
					<fieldset>
						<legend>Formulario de contacto</legend>
						<div id="formulario">
							<div className="tooltip-container">
								Correo*
								<span className="tooltip-text">Campo obligatorio</span>
							</div>
							<input type="email" aria-label="email" required="" aria-required="" />
							<label>Nombre y Apellidos</label>
							<input type="text" aria-label="Nombre y apellidos" />
							<div className="tooltip-container">
								Describa su problema*
								<span className="tooltip-text">Campo obligatorio</span>
							</div>
							<textarea
								required=""
								aria-label="escriba aqui su consulta"
								defaultValue={""}
							/>
							<div id="form_check">
								<button>Enviar</button>
								<input
									type="checkbox"
									name="confirm"
									id="confirm"
									aria-label="Acepto compatir mi correo electrónico con Recreate"
									required=""
									aria-required=""
								/>
								<label>Acepto compatir mi correo electrónico con Recreate*</label>
							</div>
						</div>
					</fieldset>
				</form>
			</main>


		</>

	)
}

export default Ayuda
