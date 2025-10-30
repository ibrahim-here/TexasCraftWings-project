import './About.css'

const About = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>Our Story</h1>
          <p className="about-hero-text">
            Crafting wings with passion since 2010
          </p>
        </div>
      </section>

      <section className="about-content section-padding">
        <div className="container">
          <div className="about-section">
            <div className="about-text">
              <h2>Born in Texas, Raised on Flavor</h2>
              <p>
                TexasCraftWings was born from a simple idea: wings deserve to be crafted, not just cooked. 
                Our founder, a passionate food lover and Texas native, set out to create the perfect wing experience 
                that combines traditional techniques with innovative flavors.
              </p>
              <p>
                Starting in a small kitchen in Austin, we tested hundreds of recipes, searching for that perfect balance 
                of heat, flavor, and texture. We sourced the finest ingredients and developed our signature cooking method 
                that ensures every wing is crispy on the outside and tender on the inside.
              </p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1603110788540-1d135ca9cc20?w=600" alt="Kitchen" />
            </div>
          </div>

          <div className="about-section reverse">
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600" alt="Wings" />
            </div>
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                Every day, we strive to serve the best wings in Texas. We believe that great food brings people together, 
                and we're proud to be part of your special moments, celebrations, and everyday meals.
              </p>
              <p>
                Our commitment to quality means we never compromise. From the moment we select our ingredients to the final 
                toss in your favorite sauce, every step is executed with care and attention to detail.
              </p>
            </div>
          </div>

          <div className="values-section">
            <h2>What We Stand For</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h3>Quality</h3>
                <p>Only the finest ingredients make it to your plate</p>
              </div>
              <div className="value-card">
                <div className="value-icon">❤️</div>
                <h3>Passion</h3>
                <p>We love what we do, and it shows in every bite</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Community</h3>
                <p>Supporting our local community is at our core</p>
              </div>
              <div className="value-card">
                <div className="value-icon">✨</div>
                <h3>Innovation</h3>
                <p>Constantly evolving our flavors and techniques</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About

