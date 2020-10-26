import React from 'react'
import Carrito from './Carrito'

const AppFrame = ({ children, productos }) => {
    return (
        <div>
            <div className="container">
                <Carrito productos={productos} />
                {children}
            </div>
            <footer className="card-footer text-muted text-center footer">
                <p>Ideado y Programado por Octavio Caba</p>
                <p className="creditos">
                    &copy; Fotos cortesía de
                    <a
                        href="https://www.pexels.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span> pexels.com</span>
                    </a>
                </p>
            </footer>
        </div>
    )
}

export default AppFrame
