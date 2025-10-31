import './Locations.css'

const Locations = () => {
  const locations = [
    {
      id: 1,
      name: 'Texas Craft Wings - Lake Conroe',
      address: 'Lake Conroe, TX',
      phone: '',
      hours: 'Mon-Sat: 11AM-11PM | Sun: 12PM-9PM',
      image: 'https://tse1.mm.bing.net/th/id/OIP.5zMtFhQ46NpCL9DqF6d6SgHaHa?pid=Api&P=0&h=220'
    },
  ]

  return (
    <main className="locations-page">
      <section className="locations-hero">
        <div className="container">
          <h1>Find Us</h1>
          <p className="locations-hero-text">
            Visit our Lake Conroe location
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
                    {location.address ? (
                      <p className="location-address">{location.address}</p>
                    ) : null}
                    {location.phone ? (
                      <p className="location-phone">{location.phone}</p>
                    ) : null}
                    {location.hours ? (
                      <p className="location-hours">{location.hours}</p>
                    ) : null}
                  </div>
                  <div className="location-actions">
                    <a
                      className="btn-order-now"
                      href="https://order.toasttab.com/online/texas-craft-wings-lake-conroe"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Order Now
                    </a>
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

