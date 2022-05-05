import {useState, useEffect, useRef} from "react"
import './App.css';

import Header from './components/Header'
import ImageToggler from './components/ImageToggler'
import Photos from './components/Photos'
import Description from './components/Description'
import Actions from './components/Actions'
import MobileMenu from './components/MobileMenu'
import Cart from './components/Cart'
import PhotoModal from './components/PhotoModal'

function App() {
  const data = [    
    {
      productID: 1,
      company: "Sneaker Company",
      name: "Fall Limited Edition Sneakers",
      desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      originalPrice: 250,
      discount: 50,
      photos: [
        '../images/image-product-1.jpg',
        '../images/image-product-2.jpg',
        '../images/image-product-3.jpg',
        '../images/image-product-4.jpg'
      ]
    }
  ]
  const [amount, setAmount] = useState(0)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [showModal, setShowModal]  = useState(false)
  const [cart, setCart] = useState({
    sneaker: {},
    quantity: 0
  })
  const [sneakers, setSneakers] = useState(data)
  const [currentPhotoID, setCurrentPhotoID] = useState(1)


  /* when showCart changes to true, or cart changes, scroll to top of page */
  useEffect(() => {
    if (showCart) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }, [cart])


  // tracks the clicks of  (-) and (+) buttons
  function handleQuantity(e) {
    const {classList} = e.target;
    if (classList.contains("plus")) {
      setAmount(prevAmount => {
        return prevAmount == 25 ? 25 : prevAmount + 1
      })
    } else {
      setAmount(prevAmount => {
        return prevAmount == 0 ? 0 : prevAmount - 1
      })
    }
  }

  function toggleMobileMenu() {
    setShowMobileMenu(prev => !prev)
  }

  function addToCart(id, amount) {
    setShowCart(true)
    const product = data.find(sneaker => sneaker.productID == id)
    setCart(prevCart => ({
      sneaker: product,
      quantity: amount
    }))
  }

  function deleteFromCart() {
    setCart(prevCart => ({
      ...prevCart,
      quantity: 0
    }))
  }

  /* This ref is used for the functionality of clicking 
  outside of the Cart component to collapse it. */
  let cartRef = useRef(null)

  useEffect(() => {
      let handler = (event) => {
        if (event.target.src && event.target.src.includes("icon-cart.svg")) {
          setShowCart(prev => !prev)
        } else if (cartRef.current && !cartRef.current.contains(event.target)) {
          setShowCart(prev => !prev)
        }
      }
      document.addEventListener('mousedown', handler)
      return () => {
        document.removeEventListener('mousedown', handler)
      }
  }, [])

  return (
    <div className="App"
         style={{position: showMobileMenu ? 'fixed' : 'relative'}}>
      {showMobileMenu && <MobileMenu />}
      {showCart && <Cart cartRef={cartRef}
                         deleteFromCart={deleteFromCart} 
                         cart={cart} />}
      {showModal && <PhotoModal currentPhotoID={currentPhotoID}
                                setCurrentPhotoID={setCurrentPhotoID}
                                setShowModal={setShowModal} 
                                sneaker={sneakers[0]}/>}                   
      <Header showMobileMenu={showMobileMenu}
              toggleMobileMenu={toggleMobileMenu}
              cart={cart}
              />
      <div className="desktop-flex">
        <div className="desktop-flex-left">
          <ImageToggler currentPhotoID={currentPhotoID}
                        setCurrentPhotoID={setCurrentPhotoID}
                        showModal={showModal}
                        setShowModal={setShowModal} />
          <Photos sneaker={sneakers[0]}
                  currentPhotoID={currentPhotoID}
                  setCurrentPhotoID={setCurrentPhotoID} />
        </div>
        <div className="desktop-flex-right">
          <Description sneaker={sneakers[0]}/>
          <Actions amount={amount}
                  handleQuantity={handleQuantity}
                  addToCart={addToCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
