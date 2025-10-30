import Hero from '../components/Hero'
import InstagramReels from '../components/InstagramReels'
import FeatureHighlights from '../components/FeatureHighlights'
import './Home.css'

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <InstagramReels />
      <FeatureHighlights />
    </main>
  )
}

export default Home

