import React from 'react'
import AppFrame from '../components/AppFrame';
import ListaProductos from '../components/ListaProductos';

const MainPage = ({ productos, cantidadProductos }) => {
    return (
        <AppFrame productos={productos}>
            <ListaProductos cantidadProductos={cantidadProductos} />
        </AppFrame>
    )
}

export default MainPage
