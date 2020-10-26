import React from 'react'
import AppFrame from '../components/AppFrame'
import ListaCarrito from '../components/ListaCarrito'

const CartPage = ({ productos, arrayProductos, calculoTotal, eliminarProducto }) => {
    return (
        <AppFrame productos={productos}>
            <ListaCarrito
                arrayProductos={arrayProductos}
                calculoTotal={calculoTotal}
                eliminarProducto={eliminarProducto}
            />
        </AppFrame>
    )
}

export default CartPage
