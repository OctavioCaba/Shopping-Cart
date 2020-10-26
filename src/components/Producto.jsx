import React from 'react'
import PropTypes from 'prop-types'

const Producto = ({ url, nombre, precio, agregarProducto, id }) => {
    return (
        <div className="producto shadow p-3 mb-5 bg-white rounded">
            <div className="id">
                {id}
            </div>
            <div className="imagen">
                <img src={url} alt="Producto" />
            </div>
            <div className="datos">
                <div className="nombre">
                    {nombre}
                </div>
                <div className="Precio">
                    ${precio}
                </div>
                <button className="btn btn-dark" type="button" role="button" onClick={() => agregarProducto(precio, nombre, id)}>
                    Añadir al carrito
                </button>
            </div>
        </div>
    )
}

Producto.propTypes = {
    url: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    agregarProducto: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
}

export default Producto
