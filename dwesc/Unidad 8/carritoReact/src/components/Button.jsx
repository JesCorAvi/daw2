import '../css/style.css'


function Button(props) {

  return (
	<button id={props.id} onClick={props.click}>
		{props.accion}
	</button>
  )
}

export default Button
