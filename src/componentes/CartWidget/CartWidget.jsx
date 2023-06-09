import './CartWidget.css'

const CartWidget = () => {

    const imgCarrito = "https://svgsilh.com/svg/306793.svg";
  return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
        <strong> 5 </strong>
    </div>
  )
}

export default CartWidget