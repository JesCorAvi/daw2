import './App.css'
import React, { useState, useEffect } from 'react';
function App() {
	const [estado, setEstado] = useState(1);
	const [valorInput, setValorInput] = useState(0);
	const [restante, setRestante] = useState(0);

	useEffect(() => {
		if (estado === 2) {
			setRestante(parseInt(valorInput));
			var tiempo = setInterval(() => {
				setRestante(prevRestante => {
					if (prevRestante === 0) {
						clearInterval(tiempo);
						siguiente()
						return prevRestante;
					}
					return prevRestante - 1;
				});
			}, 1000);
			
			return () => clearInterval(tiempo);
			
		}
	}, [estado, valorInput]);

	function siguiente(){
		setEstado(estado + 1)
	}
	return (
    <>
	{estado === 1 ? (

    	<div className="card" >
    		<p>
        		¿Cuantos segundos vamos a contar?
			</p>	
			<input type="number" id="tiempo" onChange={(e) => setValorInput(e.target.value)}/>
			<button id="contar" onClick={siguiente}>Contar</button>
      	</div>

	) : estado === 2 ? (

		<div className="card">
			{`Soy un conteo hasta el ${valorInput} y han transcurrido ${restante} segundos`}
      	</div>

	) : (

    	<div className="card">
    		<p>
        		SE HA TERMINADO EL TIEMPO
			</p>
			<button id="reiniciar" onClick={() => setEstado(1)}>REINICIAR</button>
      </div>
	)
	}
    </>
  	)
}


export default App
