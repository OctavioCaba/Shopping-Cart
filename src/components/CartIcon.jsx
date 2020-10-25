import React from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';

const CartIcon = () => {
    const history = useHistory()

    const handleClick = () => {
        history.push('/carrito')
    }

    return (
        <div className="cart-icon">
            <CgShoppingCart onClick={handleClick} size={38} />
        </div>
    )
}

export default CartIcon;