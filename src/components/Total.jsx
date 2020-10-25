import React from 'react'
import PropTypes from 'prop-types'

const Total = ({ estadoListaProductos, calculoTotal }) => {
    let total = calculoTotal(estadoListaProductos)

    return (
        <div>
            Total: ${total}
        </div>
    )
}

Total.propTypes = {
    estadoListaProductos: PropTypes.array.isRequired,
    calculoTotal: PropTypes.func.isRequired
}

export default Total
