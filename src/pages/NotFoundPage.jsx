import React from 'react'
import AppFrame from '../components/AppFrame'
import { FaSadCry } from 'react-icons/fa'

const NotFoundPage = () => {
    return (
        <AppFrame>
            <div className="not-found">
                <p>No se encontró la página que estás buscando</p>
                <FaSadCry className="icon-not-found" />
            </div>
        </AppFrame>
    )
}

export default NotFoundPage
