import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, nombre, precio, stock, img }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        console.log("Productos agregados al carrito: " + cantidad);
    }

    return (
        <div>
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3>ID: {id} </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste repellat laboriosam, odio aut deleniti rerum repudiandae. Laudantium, odio excepturi cum odit consequatur debitis ipsam optio? Harum quis hic numquam optio.</p>
            <img src={img} alt={nombre} />
            
            {
                agregarCantidad > 0 ? (<Link to="/Cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
            }


        </div>
    )
}

export default ItemDetail