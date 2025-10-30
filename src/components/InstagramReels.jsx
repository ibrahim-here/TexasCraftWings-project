import './InstagramReels.css'
import CircularGallery from './reactbits/CircularGallery'

const InstagramReels = () => {
  // Instagram reel images (excluding hero-image.jpg)
  const reels = [
    { image: '/reels/IMG-20251030-WA0002.jpg', text: 'Instagram Reel 1' },
    { image: '/reels/IMG-20251030-WA0003.jpg', text: 'Instagram Reel 2' },
    { image: '/reels/IMG-20251030-WA0005.jpg', text: 'Instagram Reel 3' },
    { image: '/reels/IMG-20251030-WA0006.jpg', text: 'Instagram Reel 4' },
    { image: '/reels/IMG-20251030-WA0007.jpg', text: 'Instagram Reel 5' },
    { image: '/reels/IMG-20251030-WA0008.jpg', text: 'Instagram Reel 6' },
  ]

  return (
    <section className="instagram-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2>Follow Our Journey</h2>
          <p className="section-subtitle">
            Get a taste of what makes TexasCraftWings special
          </p>
        </div>
        
        <div className="instagram-content">
          <CircularGallery items={reels} />
        </div>

        <div className="instagram-cta">
          <a 
            href="https://www.instagram.com/texascraftwings_lakeconroe?igsh=MWtpbGVoNDFucHc4MA==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-link-button"
          >
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default InstagramReels

