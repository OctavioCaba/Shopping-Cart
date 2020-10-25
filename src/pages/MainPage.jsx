import React from 'react'
import AppFrame from '../components/AppFrame';
import ListaProductos from '../components/ListaProductos';

const MainPage = ({ productos, handleClick }) => {
    return (
        <AppFrame productos={productos}>
            <ListaProductos handleClick={handleClick} />
        </AppFrame>
    )
}

export default MainPage
