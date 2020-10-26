import React from 'react'
import AppFrame from '../components/AppFrame';
import ListaProductos from '../components/ListaProductos';

const MainPage = ({ productos, agregarProducto }) => {
    return (
        <AppFrame productos={productos}>
            <ListaProductos agregarProducto={agregarProducto} />
        </AppFrame>
    )
}

export default MainPage
