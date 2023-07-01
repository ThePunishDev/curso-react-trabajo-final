const misProductos = [
    { id: "1", nombre: "Batería", precio: 750, img: "/img/bateria.jpg", idCat: "2" },
    { id: "2", nombre: "Cables de Bujías", precio: 500, img: "/img/cable-bujia.jpg", idCat: "3" },
    { id: "3", nombre: "Burros de Arranque", precio: 1000, img: "/img/burro-arranque.png", idCat: "4" },
    { id: "4", nombre: "Alternadores", precio: 1500, img: "/img/alternador.png", idCat: "5" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}