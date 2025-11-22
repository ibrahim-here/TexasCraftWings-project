import Hero from '../components/Hero'
import InstagramReels from '../components/InstagramReels'
import DealsSection from '../components/DealsSection'
import FeatureHighlights from '../components/FeatureHighlights'
import './Home.css'

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <InstagramReels />
      <DealsSection />
      <FeatureHighlights />
    </main>
  )
}

export default Home

