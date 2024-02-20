import '../css/style.css'

function Header() {

  return (
    <header>
      <nav aria-label="encabezado vertical fijado a la parte superior de la web">
        <a href="index.html"><img src="../assets/img/logo.png" alt="Logo de web" width="130" height="50"/></a>
        <ul>
          <li>
            <button>Inicio</button>
          </li>
          <li>
            <button aria-current="page" className="selected">Tienda</button>
          </li>
          <li>
            <button >Mi cuenta</button>
          </li>
          <li>
            <button >Sobre nosotros</button>
          </li>
          <li>
            <button >Ayuda</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
