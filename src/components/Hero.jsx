import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      <div className="hero-content container">
        <div className="hero-text">
          <h1 className="hero-heading">
            WINGS MADE WITH LOVE IN TEXAS
          </h1>
          <p className="hero-subheading">
            SINCE 2010... SOMETHING SPECIAL
          </p>
          <p className="hero-description">
            We craft every wing with passion, flavor, and a whole lot of Texas pride. 
            From classic buffalo to our signature craft flavors, every bite is a journey.
          </p>
          <div className="hero-actions">
            <a
              className="btn-primary"
              href="https://order.toasttab.com/online/texas-craft-wings-lake-conroe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order online via Toast"
            >
              ORDER NOW
            </a>
            <Link className="btn-secondary" to="/menu">
              VIEW MENU
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-frame">
            <img 
              src="/reels/hero-image.jpg"
              alt="Delicious wings"
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

