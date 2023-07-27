import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';
import './itemDetail.css';


const ItemDetail = ({ id, nombre, precio, stock, img }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const { agregarProducto } = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);        
        const item = { id, nombre, precio };
        agregarProducto(item, cantidad);
    }

    return (
        <div className="item-detail-container">
          <h2 className="item-detail-title">Nombre: {nombre} </h2>
          <h3 className="item-detail-price">Precio: {precio} </h3>
          <h3 className="item-detail-details">ID: {id} </h3>
          <p className="item-detail-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repellat laboriosam, odio aut deleniti rerum repudiandae. Laudantium, odio excepturi cum odit consequatur debitis ipsam optio? Harum quis hic numquam optio.
          </p>
          <img className="item-detail-img" src={img} alt={nombre} />
    
          {agregarCantidad > 0 ? (
            <Link to="/Cart" className="item-detail-link">
              Terminar compra
            </Link>
          ) : (
            <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
          )}
        </div>
      );
    };
    
    export default ItemDetail;