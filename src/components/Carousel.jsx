import { useState } from 'react'

export default function Carousel({ images, alt }) {
  const [index, setIndex] = useState(0)

  if (!images || images.length === 0) return null

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div className="carousel">
      <div className="carousel-frame">
        <img src={images[index]} alt={`${alt} — screenshot ${index + 1} of ${images.length}`} />

        {images.length > 1 && (
          <>
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={prev}
              aria-label="Previous screenshot"
              type="button"
            >
              ‹
            </button>
            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={next}
              aria-label="Next screenshot"
              type="button"
            >
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="carousel-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === index ? 'carousel-dot-active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to screenshot ${i + 1}`}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  )
}
