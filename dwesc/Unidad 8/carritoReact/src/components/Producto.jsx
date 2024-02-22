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
			<p>{props.text}</p>
			<div className="productoInfo">
				<p> Cantidad </p>
				<p>
					<button onClick={disminuirJson}>-</button>
					{props.cant}
					<button onClick={aumentarJson}>+</button>
				</p>
				<p>{`Precio: ${props.precio}`}</p>
			</div>
		</div>
	)
}

export default Producto
