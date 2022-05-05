import React, {useRef} from 'react'

export default function Cart({cart, deleteFromCart, cartRef}) {
    const {sneaker, quantity} = cart;
    const discountedPrice = sneaker.originalPrice * (sneaker.discount / 100)

    const display = quantity == 0 ?
    <p className="cart-is-empty">Your cart is empty.</p> :
    <>
        <div className="cart-flex">
            <img className="cart-thumbnail"
                src="../images/image-product-1-thumbnail.jpg" 
                alt="product image" />
            <div className="cart-name-and-price-flex">
                <div className="cart-product-name">
                    {sneaker.name}
                </div>
                <span className="cart-price">
                    ${discountedPrice}.00 x {quantity} <b className="cart-total-price">${discountedPrice * quantity}.00</b>
                </span>
            </div>
            <img 
                className="cart-delete"
                onClick={deleteFromCart}
                src="../images/icon-delete.svg" />
        </div>
        <button className="cart-checkout-btn">
            Checkout
        </button>
    </>
  
    return (
        <div className="cart" ref={cartRef}>
            <div className="cart-header">
                <h2>Cart</h2>
            </div>
            <div className="cart-main">
                {display}
            </div>
        </div>
    )
}
