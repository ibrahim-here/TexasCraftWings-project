import './Locations.css'

const Locations = () => {
  const locations = [
    {
      id: 1,
      name: 'Downtown Austin',
      address: '123 Main Street, Austin, TX 78701',
      phone: '(512) 555-0100',
      hours: 'Mon-Sat: 11AM-11PM | Sun: 12PM-9PM',
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600'
    },
    {
      id: 2,
      name: 'Houston Heights',
      address: '456 Heights Blvd, Houston, TX 77008',
      phone: '(713) 555-0101',
      hours: 'Mon-Sat: 11AM-11PM | Sun: 12PM-9PM',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600'
    },
    {
      id: 3,
      name: 'Dallas Deep Ellum',
      address: '789 Commerce Street, Dallas, TX 75201',
      phone: '(214) 555-0102',
      hours: 'Mon-Sat: 11AM-11PM | Sun: 12PM-9PM',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600'
    },
  ]

  return (
    <main className="locations-page">
      <section className="locations-hero">
        <div className="container">
          <h1>Find Us</h1>
          <p className="locations-hero-text">
            Come visit us at one of our locations across Texas
          </p>
        </div>
      </section>

      <section className="locations-content section-padding">
        <div className="container">
          <div className="locations-grid">
            {locations.map(location => (
              <div key={location.id} className="location-card">
                <div className="location-image">
                  <img src={location.image} alt={location.name} />
                </div>
                <div className="location-info">
                  <h3>{location.name}</h3>
                  <div className="location-details">
                    <p className="location-address">{location.address}</p>
                    <p className="location-phone">{location.phone}</p>
                    <p className="location-hours">{location.hours}</p>
                  </div>
                  <div className="location-actions">
                    <button className="btn-get-directions">Get Directions</button>
                    <button className="btn-order-now">Order Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Locations

