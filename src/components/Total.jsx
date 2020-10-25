import React, { useState } from 'react'
import PropTypes from 'prop-types'

/* const calculoTotal = () =>{
    const [total, setTotal] = useState(0)
    setTotal(precioTotal)
    return total
} */

const Total = ({ arrayProductos }) => {
    let precioTotal = 0

    arrayProductos.map(p => {
        precioTotal += p.precio
    })

    return (
        <div>
            Total: ${precioTotal}
        </div>
    )
}

Total.propTypes = {
    arrayProductos: PropTypes.array.isRequired
}

export default Total
