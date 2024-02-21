import '../css/style.css'
import CarritoIco from './CarritoIco.jsx'


function Nosotros(props) {

	return (
		<>
			<main>
				<div id="bannerNosotros">
					<div id="cajaBanner">
						<h1>Sobre nosotros</h1>
					</div>
				</div>
				<article>
					<h2 className="tNosotros">Bienvenido a Recreate</h2>
					<section className="seccion">
						<div className="textoImagen">
							<p className="textoPequeño">
								En Recreate, nos dedicamos a cuidar del corazón de su vehículo con la
								más alta calidad y experiencia. Nuestro compromiso se centra en
								ofrecer un servicio integral que va más allá de las expectativas,
								garantizando que su automóvil reciba la atención y cuidado que merece.
								<br />
								<br />
								<strong>Experiencia y Profesionalismo:</strong> Con una trayectoria
								consolidada desde 2002, nuestro equipo de expertos altamente
								calificados se esfuerza por mantenerse actualizado con las últimas
								tecnologías y métodos para proporcionar un servicio
								excepcional.calificados se esfuerza por mantenerse actualizado con las
								últimas tecnologías y métodos para proporcionar un servicio
								excepcional.calificados se esfuerza por mantenerse actualizado con las
								últimas tecnologías y métodos para proporcionar un servicio
								excepcional.
								<br />
								<br />
								<strong> con la Calidad:</strong> La calidad es la piedra angular de
								nuestra filosofía. Desde el uso de las mejores herramientas hasta la
								selección meticulosa de componentes, mantenemos un estándar implacable
								que se refleja en cada servicio que ofrecemos.
								<br />
								<br />
								<strong> con la Calidad:</strong> La calidad es la piedra angular de
								nuestra filosofía. Desde el uso de las mejores herramientas hasta la
								selección meticulosa de componentes, mantenemos un estándar implacable
								que se refleja en cada servicio que ofrecemos.
								<br />
								<br />
								<strong>Experiencia y Profesionalismo:</strong> Con una trayectoria
								consolidada desde 2002, nuestro equipo de expertos altamente calificad
								proporcionar un servicio excepcional.calificados se esfuerza por
								mantenerse actualizado con las últimas tecnologías y métodos para
								proporcionar un servicio excepcional.
							</p>
							<picture>
								<source media="(max-width: 450px)" srcSet="../assets/img/imagen1indexs.png" />
								<source media="(max-width: 820px)" srcSet="../assets/img/imagen1indexm.png" />
								<source media="(min-width: 451px)" srcSet="../assets/img/imagen1index.png" />
								<img
									src="../assets/img/imagen1index.png"
									alt="Mecánico trabajando en Recreate"
								/>
							</picture>
						</div>
					</section>
					<h2 className="tNosotros">Historia de la empresa.</h2>
					<section className="seccion">
						<p>
							En Recreate, nos dedicamos a cuidar del corazón de su vehículo con la
							más alta calidad y experiencia. Nuestro compromiso se centra en ofrecer
							un servicio integral que va más allá de las expectativas, garantizando
							que su automóvil reciba la atención y cuidado que merece.
							<br />
							<br />
							<strong>Experiencia y Profesionalismo:</strong> Con una trayectoria
							consolidada desde 2002, nuestro equipo de expertos altamente calificados
							se esfuerza por mantenerse actualizado con las últimas tecnologías y
							métodos para proporcionar un servicio excepcional.calificados se
							esfuerza por mantenerse actualizado con las últimas tecnologías y
							métodos para proporcionar un servicio excepcional.En Recreate, nos
							dedicamos a cuidar del corazón de su vehículo con la más alta calidad y
							experiencia. Nuestro compromiso se centra en ofrecer un servicio
							integral que va más allá de las expectativas, garantizando que su
							automóvil reciba la atención y cuidado que merece.
						</p>
					</section>
					<h2 className="tNosotros">Planes futuros</h2>
					<section className="seccion">
						<div className="textoImagen">
							<iframe
								src="https://www.youtube.com/embed/ywK8JXDxcL0?si=1D747Wkbkz32nqGX"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen=""
								width={560}
								height={315}
								frameBorder={0}
							/>
							<p className="textoPequeño">
								En Recreate, nos dedicamos a cuidar del corazón de su vehículo con la
								más alta calidad y experiencia. Nuestro compromiso se centra en
								ofrecer un servicio integral que va más allá de las expectativas,
								garantizando que su automóvil reciba la atención y cuidado que merece.
								<br />
								<br />
								<strong>Experiencia y Profesionalismo:</strong> Con una trayectoria
								consolidada desde 2002, nuestro equipo de expertos altamente
								calificados se esfuerza por mantenerse actualizado con las últimas
								tecnologías y métodos para proporcionar un servicio
								excepcional.calificados se esfuerza por mantenerse actualizado con las
								últimas tecnologías y métodos para proporcionar un servicio
								excepcional.calificados se esfuerza por mantenerse actualizado con las
								últimas tecnologías y métodos para proporcionar un servicio
								excepcional.
								<br />
								<br />
								<strong> con la Calidad:</strong> La calidad es la piedra angular de
								nuestra filosofía. Desde el uso de las mejores herramientas hasta la
								selección meticulosa de componentes, mantenemos un estándar implacable
								que se refleja en cada servicio que ofrecemos.
							</p>
						</div>
					</section>
				</article>
			</main>

		</>

	)
}

export default Nosotros
