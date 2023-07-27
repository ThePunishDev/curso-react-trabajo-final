import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <div className="item-container">
      <img className="item-img" src={img} alt={nombre} />
      <h3 className="item-title">Nombre: {nombre}</h3>
      <p className="item-price">Precio: {precio}</p>
      <p className="item-details">ID: {id}</p>
      <p className="item-details">Stock: {stock}</p>
      <Link to={`/item/${id}`} className="item-link">
        Ver detalles
      </Link>
    </div>
  );
};

export default Item;
