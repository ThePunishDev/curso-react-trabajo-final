import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
    return (
        <div>
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3>ID: {id} </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste repellat laboriosam, odio aut deleniti rerum repudiandae. Laudantium, odio excepturi cum odit consequatur debitis ipsam optio? Harum quis hic numquam optio.</p>
            <img src={img} alt={nombre} />
        </div>
    )
}

export default ItemDetail