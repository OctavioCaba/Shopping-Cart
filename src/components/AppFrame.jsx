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
                Ideado y Programado por Octavio Caba
            </footer>
        </div>
    )
}

export default AppFrame
