import React from 'react'
import Total from './Total'

const ListaCarrito = ({ arrayProductos, calculoTotal, eliminarProducto }) => {
    const renderListaProductos = arrayProductos => {
        const renderLista = (p, i) => (
            <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{p.nombre}</td>
                <td>${p.precio}</td>
                <td><button
                    className="btn btn-outline-danger"
                    onClick={() => eliminarProducto(arrayProductos, p.id)}>
                    &Chi;
                </button></td>
            </tr>
        )
        return arrayProductos.map(renderLista)
    }

    if (arrayProductos.length > 0) {
        return (
            <div className="lista-carrito">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Quitar de la lsita</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            renderListaProductos(arrayProductos)
                        }
                    </tbody>
                </table>
                <div className="data-resumen">
                    <div className="total">
                        <Total arrayProductos={arrayProductos} calculoTotal={calculoTotal} />
                    </div>
                    <div className="btn-comprar">
                        <button
                            className="btn btn-success btn-lg"
                            onClick={() => alert("¡Gracias por su compra!")}
                        >
                            Comprar
                    </button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <p className="carrito-vacio">
                No hay productos en el carrito
            </p>
        )
    }
}

export default ListaCarrito
