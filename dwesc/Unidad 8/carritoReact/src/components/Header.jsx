import '../css/style.css'
import { Link } from 'react-router-dom';

function Header() {

  return (
    <header>
      <nav aria-label="encabezado vertical fijado a la parte superior de la web">
        <Link to="/"><img src="/src/assets/img/logo.png" alt="Logo de web" width="130" height="50" /></Link>
        <ul>
          <li>
          <Link to="/">
              <button>Tienda</button>
            </Link>
          </li>
          <li>
          <Link to="/nosotros">
              <button>Sobre nosotros</button>
            </Link>
          </li>
          <li>
            <Link to="/ayuda">
              <button>Ayuda</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
