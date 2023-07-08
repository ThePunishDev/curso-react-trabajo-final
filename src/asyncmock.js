const misProductos = [
    { id: "1", nombre: "Batería", precio: 750, stock: 10, img: "/img/bateria.jpg", idCat: "2" },
    { id: "2", nombre: "Cables de Bujía", precio: 500, stock: 10, img: "/img/cable-bujia.jpg", idCat: "2" },
    { id: "3", nombre: "Burros de Arranque", precio: 1000, stock: 10, img: "/img/burro-arranque.png", idCat: "2" },
    { id: "4", nombre: "Alternadores", precio: 1500, stock: 10, img: "/img/alternador.png", idCat: "2" },
    { id: "5", nombre: "Cree Led", precio: 1500, stock: 10, img: "/img/cree-led-h4.png", idCat: "3" },
    { id: "6", nombre: "Faro Led Proyector 48w", precio: 1500, stock: 10, img: "/img/faro-led-48.jpg", idCat: "3" },
    { id: "7", nombre: "Faro Led Proyector 60w", precio: 1500, stock: 10, img: "/img/faro-led-60.jpg", idCat: "3" },
    { id: "8", nombre: "Led de Posición", precio: 1500, stock: 10, img: "/img/led-de-posicion.png", idCat: "3" },
    { id: "9", nombre: "Kit de Distribución", precio: 1500, stock: 10, img: "/img/kit-distribucion.png", idCat: "4" },
    { id: "10", nombre: "Kit de Embrague", precio: 1500, stock: 10, img: "/img/kit-embrague.png", idCat: "4" },
    { id: "11", nombre: "Aceite Lubricante", precio: 1500, stock: 10, img: "/img/aceite.png", idCat: "4" },
    { id: "12", nombre: "Aerosol Super Cleaner", precio: 1500, stock: 10, img: "/img/super-cleaner.png", idCat: "4" },
    { id: "13", nombre: "Bieleta Regulable RP01", precio: 1500, stock: 10, img: "/img/bieleta.jpg", idCat: "5" },
    { id: "14", nombre: "Amortiguadores Regulables RGK1011", precio: 1500, stock: 10, img: "/img/rgk1011.jpg", idCat: "5" },
    { id: "15", nombre: "Amortiguadores vástago corto y espirales competición RGK3022X", precio: 1500, stock: 10, img: "/img/rgk3022s.png", idCat: "5" },
    { id: "6", nombre: "Amortiguadores vástago corto y espirales progresivos RGX83709", precio: 1500, stock: 10, img: "/img/rgx83709.png", idCat: "5" },
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