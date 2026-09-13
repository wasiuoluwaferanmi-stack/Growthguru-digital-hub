import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function Carousel({ images, alt }) {
  const [index, setIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  useEffect(() => {
    if (!lightboxOpen) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKeyDown)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen])

  if (!images || images.length === 0) return null

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div className="carousel">
      <div className="carousel-frame">
        <img
          src={images[index]}
          alt={`${alt} — screenshot ${index + 1} of ${images.length}`}
          onClick={() => setLightboxOpen(true)}
          style={{ cursor: 'zoom-in' }}
        />

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

      {lightboxOpen && createPortal(
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} — expanded screenshot ${index + 1} of ${images.length}`}
        >
          <button
            className="lightbox-close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close expanded image"
            type="button"
          >
            ×
          </button>

          <img
            src={images[index]}
            alt={`${alt} — screenshot ${index + 1} of ${images.length}`}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          {images.length > 1 && (
            <>
              <button
                className="carousel-arrow carousel-arrow-left lightbox-arrow"
                onClick={(e) => { e.stopPropagation(); prev() }}
                aria-label="Previous screenshot"
                type="button"
              >
                ‹
              </button>
              <button
                className="carousel-arrow carousel-arrow-right lightbox-arrow"
                onClick={(e) => { e.stopPropagation(); next() }}
                aria-label="Next screenshot"
                type="button"
              >
                ›
              </button>

              <div className="carousel-dots lightbox-dots" onClick={(e) => e.stopPropagation()}>
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
            </>
          )}
        </div>,
        document.body
      )}
    </div>
  )
}
