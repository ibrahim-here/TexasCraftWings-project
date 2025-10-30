import './Specials.css'

const Specials = () => {
  const specials = [
    {
      id: 1,
      title: 'Monday Madness',
      description: 'Get 20% off all wings every Monday!',
      image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600',
      validUntil: 'Every Monday'
    },
    {
      id: 2,
      title: 'Wing Wednesday',
      description: 'Buy 12 wings, get 6 free!',
      image: 'https://images.unsplash.com/photo-1603110788540-1d135ca9cc20?w=600',
      validUntil: 'Every Wednesday'
    },
    {
      id: 3,
      title: 'Friday Night Special',
      description: 'Family pack - 24 wings + 2 sides for just $29.99',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600',
      validUntil: 'Every Friday'
    },
    {
      id: 4,
      title: 'Happy Hour',
      description: '50% off appetizers and drinks from 3PM-6PM',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600',
      validUntil: 'Weekdays 3PM-6PM'
    },
  ]

  return (
    <main className="specials-page">
      <section className="specials-hero">
        <div className="container">
          <h1>Special Offers</h1>
          <p className="specials-hero-text">
            Don't miss out on our amazing deals and weekly specials
          </p>
        </div>
      </section>

      <section className="specials-content section-padding">
        <div className="container">
          <div className="specials-grid">
            {specials.map(special => (
              <div key={special.id} className="special-card">
                <div className="special-image">
                  <img src={special.image} alt={special.title} />
                </div>
                <div className="special-content">
                  <h3>{special.title}</h3>
                  <p className="special-description">{special.description}</p>
                  <div className="special-footer">
                    <span className="special-valid">{special.validUntil}</span>
                    <button className="btn-claim-offer">Claim Offer</button>
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

export default Specials

