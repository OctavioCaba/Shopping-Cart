import React from 'react'
import PropTypes from 'prop-types'

const Total = ({ arrayProductos, calculoTotal }) => {
    let total = calculoTotal(arrayProductos)

    return (
        <div>
            Total: ${total}
        </div>
    )
}

Total.propTypes = {
    arrayProductos: PropTypes.array.isRequired,
    calculoTotal: PropTypes.func.isRequired
}

export default Total
