import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import './AdminPanel.css'

const AdminPanel = () => {
  const [menuItems, setMenuItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'wings',
    image: ''
  })

  useEffect(() => {
    fetchMenuItems()
  }, [])

  const fetchMenuItems = async () => {
    setLoading(true)
    try {
      if (!supabase) {
        setMenuItems([])
        return
      }

      const { data, error } = await supabase
        .from('menu_items')
        .select('*')
        .order('id')
      
      if (error) throw error
      setMenuItems(data || [])
    } catch (error) {
      console.error('Error fetching menu items:', error)
      alert('Error loading menu items')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!supabase) {
      alert('Supabase is not configured. Please set up your environment variables.')
      return
    }

    setLoading(true)

    try {
      if (editingItem) {
        // Update existing item
        const { error } = await supabase
          .from('menu_items')
          .update(formData)
          .eq('id', editingItem.id)
        
        if (error) throw error
      } else {
        // Create new item
        const { error } = await supabase
          .from('menu_items')
          .insert([formData])
        
        if (error) throw error
      }

      await fetchMenuItems()
      resetForm()
      alert(editingItem ? 'Menu item updated!' : 'Menu item added!')
    } catch (error) {
      console.error('Error saving menu item:', error)
      alert('Error saving menu item')
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (item) => {
    setEditingItem(item)
    setFormData({
      name: item.name,
      description: item.description,
      price: item.price,
      category: item.category,
      image: item.image || ''
    })
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return

    if (!supabase) {
      alert('Supabase is not configured. Please set up your environment variables.')
      return
    }

    setLoading(true)
    try {
      const { error } = await supabase
        .from('menu_items')
        .delete()
        .eq('id', id)
      
      if (error) throw error
      await fetchMenuItems()
      alert('Menu item deleted!')
    } catch (error) {
      console.error('Error deleting menu item:', error)
      alert('Error deleting menu item')
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setFormData({ name: '', description: '', price: '', category: 'wings', image: '' })
    setEditingItem(null)
    setShowForm(false)
  }

  return (
    <main className="admin-panel">
      <div className="admin-container">
        <div className="admin-header">
          <h1>Menu Admin Panel</h1>
          <button className="btn-add" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Cancel' : '+ Add New Item'}
          </button>
        </div>

        {showForm && (
          <div className="admin-form-section">
            <h2>{editingItem ? 'Edit Menu Item' : 'Add New Menu Item'}</h2>
            <form className="admin-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                  >
                    <option value="wings">Wings</option>
                    <option value="sandwiches">Sandwiches</option>
                    <option value="sides">Sides</option>
                    <option value="drinks">Drinks</option>
                    <option value="desserts">Desserts</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows="3"
                  required
                ></textarea>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Price</label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Image URL</label>
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>
              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? 'Saving...' : editingItem ? 'Update Item' : 'Add Item'}
              </button>
            </form>
          </div>
        )}

        <div className="admin-table-section">
          <h2>Menu Items ({menuItems.length})</h2>
          {loading && !showForm ? (
            <div className="loading">Loading...</div>
          ) : menuItems.length === 0 ? (
            <div className="no-items">No menu items found. Add your first item!</div>
          ) : (
            <div className="menu-items-grid">
              {menuItems.map(item => (
                <div key={item.id} className="admin-menu-card">
                  {item.image && (
                    <div className="admin-card-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                  )}
                  <div className="admin-card-content">
                    <h3>{item.name}</h3>
                    <p className="admin-card-category">{item.category}</p>
                    <p className="admin-card-description">{item.description}</p>
                    <p className="admin-card-price">${parseFloat(item.price).toFixed(2)}</p>
                    <div className="admin-card-actions">
                      <button className="btn-edit" onClick={() => handleEdit(item)}>Edit</button>
                      <button className="btn-delete" onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default AdminPanel

