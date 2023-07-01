import { useState, useEffect } from "react"

const Contador = ({ stock, inicial }) => {
    const [contador, setContador] = useState(inicial);
    const [color, setColor] = useState("black");

    useEffect(() => {
        document.title = `Contador: ${contador}`;

        if (contador > 5) {
            setColor("red");
        } else {
            setColor("black");
        }

    },[contador])

    const aumentarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const disminuirContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }

    }

    const agregarAlCarrito = () => {
        console.log(`Agregado ${contador} items`);
    }


    return (
        <div>

            <button onClick={disminuirContador}> - </button>
            <strong> {contador} </strong>
            <button onClick={aumentarContador}> + </button>

            <button onClick={agregarAlCarrito} style={{color: color}}> Agregar al carrito </button>

        </div>
    )

}
export default Contador