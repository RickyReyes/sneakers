import React from 'react'

export default function Description({sneaker}) {
  return (
    <section className="description-section">
        <small className="sneaker-company">
            {sneaker.company}
        </small>
        <h1 className="sneaker-name">
            {sneaker.name}
        </h1>

        <p className="description">
            {sneaker.desc}
        </p>
        <div className="price-section-flex">
            <span className="price-section-one">              <h1 className="price">${sneaker.originalPrice * (sneaker.discount / 100)}.00</h1>
                <span className="discount">{sneaker.discount}%</span>
            </span>
            <span className="before-discount price-section-two">${sneaker.originalPrice}.00</span>
        </div>
    </section>
  )
}
