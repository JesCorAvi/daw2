import '../css/style.css'
import Button from './Button';


function Controles(props) {

  return (
	<div id="controles">
		<div id="controles2">
		<p>{props.precio}</p>
		<Button 
			accion={props.accion} 
			click={props.click}
			id="button"
		/>
		</div>
	</div>
  )
}

export default Controles
