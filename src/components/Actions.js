import React from 'react'

export default function Actions({amount, handleQuantity, addToCart}) {
  return (
    <div className="actions">
        <div className="amount">
            <img className="minus" 
                 src="../images/icon-minus.svg"
                 onClick={(e) => handleQuantity(e)} />
            <p className="quantity">
                {amount}
            </p>
            <img className="plus"
                 src="../images/icon-plus.svg"
                 onClick={(e) => handleQuantity(e)} />
        </div>
        <button 
          className="add-to-cart"
          onClick={() => addToCart(1, amount)}>
            <img className="add-to-cart-icon"  src="../images/icon-cart.svg" alt="cart icon" />
            <p>Add to cart</p>
        </button>
    </div>
  )
}
