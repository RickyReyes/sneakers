import React from 'react'

export default function Header({
    showMobileMenu, 
    toggleMobileMenu,
    cart,
    iconRef}) {
  return (
    <header>
        <div className="header-left">
          <div className="mobile-menu-container">
            <input id="menu-toggle" type="checkbox"
            checked={showMobileMenu} 
            onChange={toggleMobileMenu}/>
            <label
              className="menu-button-container"
              htmlFor="menu-toggle"
              >
                <div className="menu-button"></div>
            </label>
          </div>
          <img className="logo" src="../images/logo.svg" />
        </div>
        <ul className="header-menu">
          <li className="header-menu-item">Collections</li>
          <li className="header-menu-item">Men</li>
          <li className="header-menu-item">Women</li>
          <li className="header-menu-item">About</li>
          <li className="header-menu-item">Contact</li>
        </ul>
        <div className="header-right">
            <div className="cart-icon-container">
              {cart.quantity > 0 && <div className="cart-bubble">{cart.quantity}</div>}
              <img 
                ref={iconRef}
                className="header-cart-icon" 
                src="../images/icon-cart.svg" />
            </div>
            <img className="avatar" src="../images/image-avatar.png" />
        </div>
    </header>
  )
}


// 873