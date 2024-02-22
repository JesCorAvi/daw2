import '../css/style.css'


function Producto(props) {
	const aumentarJson = () => {
		fetch('http://0.0.0.0:8000/src/modificar.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: new URLSearchParams({
				id_producto: props.text,
				tipo: '+'
			})
		})
	}
	const disminuirJson = () => {
		fetch('http://0.0.0.0:8000/src/modificar.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: new URLSearchParams({
				id_producto: props.text,
				tipo: '-'
			})
		})	}
	return (

		<div className="producto">
			<img src={`/src/assets/img/${props.img}.png`} alt={props.text} />
				<div>
					<p className="productoT">{props.text}</p>
					<p className="productoD">{props.descripcion}</p>

				</div>
			<div className="productoInfo">
				<div id="cantidadDiv">
				<p id="cantidad1">    Cantidad </p>
				<p id="cantidad2">
					<button onClick={disminuirJson}>-</button>
					{props.cant}
					<button onClick={aumentarJson}>+</button>
				</p>
				</div>
				<div id="precioDiv">
				<p id="precio1">Precio</p> 
				<p id="precio2">{props.precio}</p>
				</div>
			</div>
		</div>
	)
}

export default Producto
