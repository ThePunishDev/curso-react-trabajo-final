import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>Mundo Autopartes</h1>

        <nav>
            <ul>
                <li>Encendido</li>
                <li>Iluminación</li>
                <li>Motor</li>
                <li>Tuning</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar