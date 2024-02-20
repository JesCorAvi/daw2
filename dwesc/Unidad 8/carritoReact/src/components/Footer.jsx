import '../css/style.css'

function Footer() {

  return (
    <footer>
        <h4>Recreate</h4>
        <ul>
            <li className="footer-titulo">Política de privacidad</li>
            <li><a href="">Política de cookies</a></li>
            <li><a href="">Tratamiento de datos</a></li>
        </ul>
        <ul>
            <li className="footer-titulo">Informacion de contacto</li>
            <li>Ejemplo@redesing.com</li>
            <li>644557734</li>
        </ul>
        <ul>
            <li className="footer-titulo">Establecimientos</li>
            <li>Consulte todos los locales cercanos <a href="">aqui</a>.</li>
        </ul>
        <ul>
            <li className="footer-titulo">Redes sociales</li>
            <li className="footer-rrss"><img src="../img/facebook.svg" alt="Logo de facebook"/><a href="">Facebook</a></li>
            <li className="footer-rrss"><img src="../img/instagram.svg" alt="Logo de twitter"/><a href="">Instagram</a></li>
        </ul>
        <img id="cc" src="../img/cc.svg" alt="Licencia Creative Commons"/>
    </footer>
  )
}

export default Footer
