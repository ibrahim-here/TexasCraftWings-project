-- TexasCraftWings Database Schema
-- Run this SQL in your Supabase SQL Editor

-- Create menu_items table
CREATE TABLE IF NOT EXISTS menu_items (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  category TEXT NOT NULL,
  image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on category for faster filtering
CREATE INDEX IF NOT EXISTS idx_menu_items_category ON menu_items(category);

-- Sample data
INSERT INTO menu_items (name, description, price, category, image) VALUES
('Classic Buffalo Wings', 'Traditional buffalo sauce, mild, medium, hot, or extra hot', 12.99, 'wings', 'https://images.unsplash.com/photo-1608039829577-912480caab72?w=400'),
('Texas BBQ Wings', 'Our signature Texas-style BBQ sauce with a smoky flavor', 13.99, 'wings', 'https://images.unsplash.com/photo-1603110788540-1d135ca9cc20?w=400'),
('Honey Garlic Wings', 'Sweet and savory honey garlic glaze', 12.99, 'wings', 'https://images.unsplash.com/photo-1617634667039-8e4cb277a46b?w=400'),
('Lemon Pepper Wings', 'Tangy lemon pepper seasoning with a zesty kick', 12.99, 'wings', 'https://images.unsplash.com/photo-1521919691953-e7480a4e1a79?w=400'),
('Spicy Ranch Wings', 'Cool ranch with a spicy kick', 13.49, 'wings', 'https://images.unsplash.com/photo-1617634667039-8e4cb277a46b?w=400'),
('Fried Chicken Sandwich', 'Crispy fried chicken, pickles, slaw on brioche bun', 10.99, 'sandwiches', 'https://images.unsplash.com/photo-1616691433533-887dbb3797da?w=400'),
('Buffalo Chicken Wrap', 'Buffalo chicken, lettuce, tomato, and ranch in a soft tortilla', 9.99, 'sandwiches', 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400'),
('Loaded Fries', 'Crispy fries topped with cheese, bacon, and ranch', 8.99, 'sides', 'https://images.unsplash.com/photo-1563379091339-03246963d31d?w=400'),
('Onion Rings', 'Crispy beer-battered onion rings', 7.99, 'sides', 'https://images.unsplash.com/photo-1617914453601-13fac9889d5c?w=400'),
('Coleslaw', 'Fresh, creamy coleslaw with house dressing', 4.99, 'sides', 'https://images.unsplash.com/photo-1587474260584-136574508bdb?w=400'),
('Mac & Cheese', 'Creamy homemade macaroni and cheese', 6.99, 'sides', 'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=400'),
('Classic Soda', 'Coca-Cola, Dr. Pepper, or Sprite', 2.99, 'drinks', 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400'),
('Sweet Tea', 'Traditional Texas sweet tea', 2.99, 'drinks', 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400'),
('Chocolate Chip Cookies', 'Fresh baked warm cookies', 5.99, 'desserts', 'https://images.unsplash.com/photo-1592179904583-7fd8ad90e95f?w=400');

-- Optional: Enable Row Level Security (RLS) for future authentication
-- ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;

-- Optional: Create policies for public access (adjust based on your needs)
-- CREATE POLICY "Allow public read access" ON menu_items FOR SELECT USING (true);
-- CREATE POLICY "Allow public insert access" ON menu_items FOR INSERT WITH CHECK (true);
-- CREATE POLICY "Allow public update access" ON menu_items FOR UPDATE USING (true);
-- CREATE POLICY "Allow public delete access" ON menu_items FOR DELETE USING (true);

