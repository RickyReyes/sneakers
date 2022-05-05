import React, {useState} from 'react'

export default function ImageToggler({setShowModal, currentPhotoID, setCurrentPhotoID}) {
    const style = {
        backgroundImage: `url(../images/image-product-${currentPhotoID}.jpg)`
    }

    function handleTogglePhoto(e) {
        e.stopPropagation();
        const {classList} = e.target
        console.log(classList)
        if (classList.contains("next")) {
            if (currentPhotoID == 4) {
                setCurrentPhotoID(1)
            } else {
                setCurrentPhotoID(prevId => prevId + 1)
            }
        } else {
            if (currentPhotoID == 1) {
                setCurrentPhotoID(4)
            } else {
                setCurrentPhotoID(prevId => prevId - 1)
            }
        }
    }
    function toggleModal(e) {
        setShowModal(true)
    }

    return (
        <section style={style} className="image-container" onClick={(e) => toggleModal(e)}>
            <span className="arrow-container previous"
                  onClick={(e) => handleTogglePhoto(e)}>
                <img 
                    className="toggle previous" 
                    src="../images/icon-previous.svg" />
            </span>
            <span className="arrow-container next"
                  onClick={(e) => handleTogglePhoto(e)}>
                <img className="toggle next" 
                     src="../images/icon-next.svg" />
            </span>
        </section>
    )
}
