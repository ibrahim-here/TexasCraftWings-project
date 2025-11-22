import './DealsSection.css'
import video1 from '../video/video1.mp4'
import video2 from '../video/video2.mp4'
import pic1 from '../video/pic1.png'
import pdf2 from '../video/pdf2-1.png'

const DealsSection = () => {
  const dealsMedia = [
    { src: video1, type: 'video', alt: 'Deal 1 - Video Promotion' },
    { src: video2, type: 'video', alt: 'Deal 2 - Video Promotion' },
    { src: pic1, type: 'image', alt: 'Deal 3 - Image Promotion' },
    { src: pdf2, type: 'image', alt: 'Deal 4 - Image Promotion' }
  ]

  return (
    <section className="deals-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2>Current Deals & Promotions</h2>
          <p className="section-subtitle">Check out our latest offers</p>
        </div>
        <div className="deals-grid">
          {dealsMedia.map((media, index) => (
            <div key={index} className="deal-card">
              {media.type === 'video' ? (
                <video
                  src={media.src}
                  controls
                  muted
                  preload="metadata"
                  aria-label={media.alt}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={media.src}
                  alt={media.alt}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DealsSection
