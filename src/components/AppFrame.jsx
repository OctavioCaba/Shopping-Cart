import React from 'react'
import Carrito from './Carrito'
import icon from '../img/icon.svg'

const AppFrame = ({ children, productos }) => {
    return (
        <div>
            <div className="container">
                <Carrito productos={productos} />
                {children}
            </div>
            <footer className="card-footer text-muted text-center footer">
                <p>Diseñado y Programado por <a href="https://github.com/OctavioCaba" target="_blank" rel="noopener noreferrer">Octavio Caba</a></p>
                <p className="creditos">
                    &copy; Fotos cortesía de <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer">
                        pexels.com
                    </a>
                </p>
                <img src={`${icon}`} className="logo" alt="Logo"/>
            </footer>
        </div>
    )
}

export default AppFrame
