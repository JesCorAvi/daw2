import '../css/style.css'

function Header() {

  return (
    <header>
      <nav aria-label="encabezado vertical fijado a la parte superior de la web">
        <a href="../pages/tienda.html"><img src="../assets/img/logo.png" alt="Logo de web" width="130" height="50" /></a>
        <ul>
          <li>
            <a href='../pages/tienda.html'>
              <button>Tienda</button>
            </a>
          </li>
          <li>
            <a href='../pages/nosotros.html'>
              <button>Sobre nosotros</button>
            </a>
          </li>
          <li>
            <a href='../pages/ayuda.html'>
              <button>Ayuda</button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
