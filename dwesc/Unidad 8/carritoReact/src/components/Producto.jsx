import '../css/style.css'


function Producto(props) {

  return (
    <div className="producto">
		<img src={`/src/assets/img/${props.img}.png`}></img>
		<p>{props.text}</p>
		<div className="productoInfo">
			<p> Cantidad </p>
			<p><a href="#">-</a> {props.cant} <a href="#">+</a></p>
			<p>{`Precio: ${props.precio}`}</p>
		</div>
    </div>
  )
}

export default Producto
