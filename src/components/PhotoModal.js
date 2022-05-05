import React from 'react'
import ImageToggler from './ImageToggler'
import Photos from './Photos'

export default function PhotoModal({sneaker, currentPhotoID, setCurrentPhotoID, setShowModal}) {
  return (
    <div className="modal">
      <div className="modal-container">
        <img src="../images/icon-close.svg" 
            className="modal-close"
            onClick={() => setShowModal(false)}
            alt="close icon" />
        <ImageToggler
                currentPhotoID={currentPhotoID}
                setCurrentPhotoID={setCurrentPhotoID}
                setShowModal={setShowModal} />
        <Photos sneaker={sneaker}
                currentPhotoID={currentPhotoID} 
                setCurrentPhotoID={setCurrentPhotoID} />
      </div>
    </div>
  )
}
