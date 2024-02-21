import '../css/style.css'


function Button(props) {

  return (
	<button id="button" onClick={props.click}>
		{props.accion}
	</button>
  )
}

export default Button
