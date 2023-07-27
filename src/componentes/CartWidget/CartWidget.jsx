import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'; // Importa el archivo CSS que creamos

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  const imgCarrito = "https://svgsilh.com/svg/306793.svg";

  return (
    <div>
      <Link to="/cart" className="cart-widget">
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
        {cantidadTotal > 0 && <strong className="cart-items-count">{cantidadTotal}</strong>}
      </Link>
    </div>
  );
}

export default CartWidget;
