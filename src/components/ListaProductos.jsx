import React from 'react'
import Producto from './Producto'
import imagen1 from '../img/img1.jpg'
import imagen2 from '../img/img2.jpg'
import imagen3 from '../img/img3.jpg'
import imagen4 from '../img/img4.jpg'
import imagen5 from '../img/img5.jpg'
import imagen6 from '../img/img6.jpg'
import imagen7 from '../img/img7.jpg'
import imagen8 from '../img/img8.jpg'
import imagen9 from '../img/img9.jpg'
import imagen10 from '../img/img10.jpg'
import imagen11 from '../img/img11.jpg'
import imagen12 from '../img/img12.jpg'

const imgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const precios = [10, 12, 13, 14, 15, 18, 19, 19, 19, 19, 1, 36]
const nombres = []
const imagenes = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12]

const renderProductos = handleClick => {
    const renderProducto = (img, i) => (
        <Producto key={i} id={i} nombre="Camisa de Hombre" url={imagenes[`${img - 1}`]} precio={precios[`${img - 1}`]} handleClick={handleClick} />
    )
    return imgs.map(renderProducto)
}

const ListaProductos = ({ handleClick }) => {
    return (
        <div className="lista-productos">
            {renderProductos(handleClick)}
        </div>
    )
}

export default ListaProductos
