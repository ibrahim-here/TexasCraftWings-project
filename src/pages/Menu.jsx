import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import './Menu.css'

const Menu = () => {
  const [menuItems, setMenuItems] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMenuItems()
  }, [])

  const fetchMenuItems = async () => {
    try {
      if (!supabase) {
        setSampleData()
        return
      }

      const { data, error } = await supabase
        .from('menu_items')
        .select('*')
        .order('category')
      
      if (error) throw error

      if (data && data.length > 0) {
        setMenuItems(data)
        const normalize = (value) => (value ?? '').toString().trim().toLowerCase()
        const uniqueCategories = [...new Set(data.map(item => normalize(item.category)).filter(Boolean))]
        setCategories(['all', ...uniqueCategories])
      } else {
        // Fallback to sample data if database is empty
        setSampleData()
      }
    } catch (error) {
      console.error('Error fetching menu items:', error)
      setSampleData()
    } finally {
      setLoading(false)
    }
  }

  const setSampleData = () => {
    const sampleItems = [
      { id: 1, name: 'Battered Buffalo Sauce Wings', description: 'Classic battered wings with our signature buffalo sauce', price: 12.99, category: 'wings', image: '/images/battered-buffalo-sauce-above-e1694794879661-custom_crop.png' },
      { id: 2, name: 'Battered Wings', description: 'Crispy battered wings cooked to perfection', price: 12.99, category: 'wings', image: '/images/battered-wings-e1694751568381-custom_crop.png' },
      { id: 3, name: 'Buffalo Cauliflower', description: 'Crispy cauliflower florets tossed in buffalo sauce', price: 10.99, category: 'sides', image: '/images/buffalo-cauliflower-sauced-above-e1694794866420-custom_crop.png' },
      { id: 4, name: 'Buffalo Dirty Bird Side', description: 'Our signature dirty bird wings with buffalo sauce', price: 13.99, category: 'wings', image: '/images/buffalo-dirty-bird-side-view-e1694794842910-custom_crop.png' },
      { id: 5, name: 'Buffalo Loaded Fries', description: 'Crispy fries topped with buffalo chicken, cheese, and ranch', price: 11.99, category: 'sides', image: '/images/buffalo-loaded-fries-custom_crop.png' },
      { id: 6, name: 'Cheese Curds', description: 'Golden fried Wisconsin cheese curds', price: 8.99, category: 'sides', image: '/images/cheese-curds-custom_crop.png' },
      { id: 7, name: 'Chicken Tenders', description: 'Tender, crispy chicken strips served with dipping sauce', price: 10.99, category: 'sandwiches', image: '/images/chicken-tenders-copy-e1694794894123-custom_crop.png' },
      { id: 8, name: 'Double Fried Wings', description: 'Twice-fried for ultimate crispiness', price: 13.99, category: 'wings', image: '/images/double-fried-wings-e1694794972623-custom_crop.png' },
      { id: 9, name: 'El Diablo Dirty Bird', description: 'Spicy dirty bird wings with our hottest sauce', price: 14.99, category: 'wings', image: '/images/el-diablo-dirty-bird-above-custom_crop.png' },
      { id: 10, name: 'El Jalapeño', description: 'Spicy jalapeño flavored wings', price: 13.49, category: 'wings', image: '/images/el-jalepeno-e1694186986476-custom_crop.png' },
      { id: 11, name: 'Hot Wings', description: 'Traditional hot wings served with celery and blue cheese', price: 12.99, category: 'wings', image: '/images/hot-wings-isolated-white-copy-custom_crop.png' },
      { id: 12, name: 'Onion Rings', description: 'Beer-battered crispy onion rings', price: 8.99, category: 'sides', image: '/images/onion-rings-copy-e1694794957291-custom_crop.png' },
      { id: 13, name: 'Border Taters', description: 'Loaded crispy tater tots with all the fixings', price: 9.99, category: 'sides', image: '/images/border-taters-e1694750825414-custom_crop.png' },
      { id: 14, name: 'Border Flatbread', description: 'Hand-crafted flatbread with seasonal toppings', price: 11.99, category: 'sandwiches', image: '/images/border-flatbread-e1694750858465-custom_crop.png' },
      { id: 15, name: 'Baxter\'s Deviled Eggs', description: 'Classic deviled eggs with a Texas twist', price: 8.99, category: 'sides', image: '/images/baxters-deviled-eggs-above-e1694794915175-custom_crop.png' },
      { id: 16, name: 'Sweet Thai Chili Boneless Wings', description: 'Boneless wings tossed in sweet Thai chili sauce', price: 13.99, category: 'wings', image: '/images/sweet-thai-chili-boneless-wings-custom_crop.png' },
      { id: 17, name: 'Thai Chili Grilled Wing', description: 'Grilled wings glazed with Thai chili sauce', price: 14.49, category: 'wings', image: '/images/thai-chili-grilled-wing-single-custom_crop.png' },
      { id: 18, name: 'Craft Chicken', description: 'Our signature craft chicken sandwich', price: 11.99, category: 'sandwiches', image: '/images/craft-chicken-e1694709518839-custom_crop.png' },
      { id: 19, name: 'Bacon Cheeseburger', description: 'Classic burger with bacon and cheese', price: 12.99, category: 'sandwiches', image: '/images/bacon-cheeseburger-e1694709498252-custom_crop.png' },
      { id: 20, name: 'Border Dirty Dog', description: 'Loaded hot dog with all your favorite toppings', price: 10.99, category: 'sandwiches', image: '/images/Border-dirty-dog-above-custom_crop.png' },
      { id: 21, name: 'Sausage Dog', description: 'Grilled sausage in a bun', price: 9.99, category: 'sandwiches', image: '/images/Sausage-dog-custom_crop.png' },
    ]
    setMenuItems(sampleItems)
    setCategories(['all', 'wings', 'sandwiches', 'sides'])
  }

  const normalize = (value) => (value ?? '').toString().trim().toLowerCase()
  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => normalize(item.category) === selectedCategory)

  if (loading) {
    return (
      <main className="menu-page">
        <div className="container">
          <div className="loading">Loading menu...</div>
        </div>
      </main>
    )
  }

  return (
    <main className="menu-page">
      <section className="menu-hero">
        <div className="container">
          <h1>Our Menu</h1>
          <p className="menu-hero-text">
            Every dish is crafted with care and the finest ingredients
          </p>
        </div>
      </section>

      <section className="menu-content section-padding">
        <div className="container">
          <div className="category-filter">
            {categories.map(categoryKey => {
              const label = categoryKey === 'all'
                ? 'ALL'
                : categoryKey.replace(/\b\w/g, (c) => c.toUpperCase())
              return (
                <button
                  key={categoryKey}
                  className={`filter-button ${selectedCategory === categoryKey ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(categoryKey)}
                >
                  {label}
                </button>
              )
            })}
          </div>

          <div className="menu-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="menu-card">
                {item.image && (
                  <div className="menu-card-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                )}
                <div className="menu-card-content">
                  <h3>{item.name}</h3>
                  <p className="menu-card-description">{item.description}</p>
                  <div className="menu-card-footer">
                    <span className="menu-card-price">${item.price.toFixed(2)}</span>
                    <a
                      className="add-to-cart"
                      href="https://order.toasttab.com/online/texas-craft-wings-lake-conroe"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Order ${item.name} via Toast`}
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

export default Menu

