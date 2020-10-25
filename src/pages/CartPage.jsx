import React from 'react'
import AppFrame from '../components/AppFrame'
import ListaCarrito from '../components/ListaCarrito'

const CartPage = ({ productos, arrayProductos, calculoTotal, cantidadProductos }) => {
    return (
        <AppFrame productos={productos}>
            <ListaCarrito arrayProductos={arrayProductos} calculoTotal={calculoTotal} cantidadProductos={cantidadProductos} />
        </AppFrame>
    )
}

export default CartPage
