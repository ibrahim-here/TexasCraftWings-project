import './FeatureHighlights.css'

const FeatureHighlights = () => {
  const features = [
    {
      icon: '🔥',
      title: 'HOT & FRESH',
      description: 'Every order is cooked fresh to perfection, ensuring maximum flavor in every bite.'
    },
    {
      icon: '🌶️',
      title: 'CRAFT FLAVORS',
      description: 'Our signature sauce recipes are crafted in-house with premium ingredients.'
    },
    {
      icon: '🤝',
      title: 'LOCAL LOVE',
      description: 'Supporting local farmers and bringing the best of Texas to your table.'
    },
    {
      icon: '⚡',
      title: 'FAST SERVICE',
      description: 'Quick service without compromising on quality - we get it right, fast.'
    },
  ]

  return (
    <section className="feature-highlights section-padding">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose TexasCraftWings?</h2>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureHighlights

