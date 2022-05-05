import React from 'react'

export default function Photos({sneaker, currentPhotoID, setCurrentPhotoID}) {
    const photoElements = sneaker.photos.map((photo, idx) => {
        return <div key={idx} className={currentPhotoID == idx + 1 ? 'grid-photo-container photo-container-selected' : 'grid-photo-container'}>
                    <img
                        className={currentPhotoID == idx + 1 ? 'photo photo-selected' : 'photo'}
                        onClick={() => setCurrentPhotoID(idx + 1)}
                        src={photo} />
                </div>
    })
    return (
        <div className="photo-grid">
            {photoElements}
        </div>
    )
}
