import React from 'react'
import AppFrame from '../components/AppFrame'
import ListaCarrito from '../components/ListaCarrito'

const CartPage = ({ productos, arrayProductos }) => {
    return (
        <AppFrame productos={productos}>
            <ListaCarrito arrayProductos={arrayProductos} />
        </AppFrame>
    )
}

export default CartPage
