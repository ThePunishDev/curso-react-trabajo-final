import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'


const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1>Mundo Autopartes</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="/categoria/2"> Encendido </NavLink>
          </li>

          <li>
            <NavLink to="/categoria/3"> Iluminación </NavLink>
          </li>

          <li>
            <NavLink to="/categoria/4"> Motor </NavLink>
          </li>

          <li>
            <NavLink to="/categoria/5"> Tuning </NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar