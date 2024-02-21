import '../css/style.css'
import Button from './Button';


function Controles(props) {

  return (
	<div id="controles">
		<div id="controles2">
		<p>{props.precio}</p>
		<Button text={props.text}/>
		</div>
	</div>
  )
}

export default Controles
