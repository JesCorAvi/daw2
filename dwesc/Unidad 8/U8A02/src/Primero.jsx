import './App.css'
import React, { useState, useEffect } from 'react';

function primero() {
	const [valorInput, setValorInput] = useState(0);
	return (
		<>
    	<div className="card" >
    		<p>
        		¿Cuantos segundos vamos a contar?
			</p>	
			<input type="number" id="tiempo" onChange={(e) => setValorInput(e.target.value)}/>
			<button id="contar" onClick={siguiente}>Contar</button>
      	</div>
		</>
	)
}

export default primero
