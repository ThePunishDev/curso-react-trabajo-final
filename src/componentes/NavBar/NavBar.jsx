import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img src="../img/logo.png" className='imgMundo' alt="Logo Mundo Autopartes" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="/categoria/2" activeClassName="active"> Encendido </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/3" activeClassName="active"> Iluminación </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/4" activeClassName="active"> Motor </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/5" activeClassName="active"> Tuning </NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
}

export default NavBar;
