import React from 'react'
import { useHistory } from 'react-router-dom'
import CartIcon from './CartIcon'

const Carrito = ({ productos }) => {
    const history = useHistory()

    const clickHandler = () => {
        history.push("/")
    }

    return (
        <div className="alert alert-primary">
            {
                history.location.pathname == "/carrito" ?
                    <div style={{ justifyContent: "space-between" }} className="carrito">
                        <h4>Productos en carrito: {productos}</h4>
                        {
                            history.location.pathname == "/" ?
                                <CartIcon />
                                :
                                <button className="btn btn-inicio btn btn-outline-dark" onClick={clickHandler}>
                                    Inicio
                    </button>
                        }
                    </div>
                    :
                    <div className="carrito">
                        <h4>Productos en carrito: {productos}</h4>
                        {
                            history.location.pathname == "/" ?
                                <CartIcon />
                                :
                                <button className="btn btn-inicio btn btn-outline-dark" onClick={clickHandler}>
                                    Inicio
                    </button>
                        }
                    </div>
            }
        </div>
    )
}

export default Carrito
