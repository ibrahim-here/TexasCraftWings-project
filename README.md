# TexasCraftWings Website

A modern, full-featured restaurant website built with React and Vite, featuring an admin panel for menu management powered by Supabase.

## Features

- 🏠 **Home Page** - Hero section, Instagram reels carousel, and feature highlights
- 📋 **Menu Page** - Dynamic menu with category filtering and Supabase integration
- 📍 **Locations Page** - Display all restaurant locations with contact information
- 🎉 **Specials Page** - Showcase current promotions and special offers
- 📖 **About Page** - Story and mission of TexasCraftWings
- 📧 **Contact Page** - Contact form and location details
- ⚙️ **Admin Panel** - Full CRUD operations for menu management

## Tech Stack

- **Frontend**: React 18, Vite
- **Routing**: React Router v6
- **Database**: Supabase
- **Styling**: Custom CSS with CSS Variables
- **Fonts**: Anton (Headings), Montserrat (Body)

## Design

The website features a bold, rustic design inspired by Texas BBQ culture with:
- Primary Orange (#E76A24) for CTAs and highlights
- Dark Green (#0B381E) for headers and accents
- Warm, inviting color palette throughout
- Responsive design for all screen sizes

## Setup Instructions

### 1. Clone and Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project
2. In your Supabase project, go to SQL Editor and run the following schema:

```sql
-- Create menu_items table
CREATE TABLE menu_items (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  category TEXT NOT NULL,
  image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add some sample data
INSERT INTO menu_items (name, description, price, category, image) VALUES
('Classic Buffalo Wings', 'Traditional buffalo sauce, mild, medium, hot, or extra hot', 12.99, 'wings', 'https://images.unsplash.com/photo-1608039829577-912480caab72?w=400'),
('Texas BBQ Wings', 'Our signature Texas-style BBQ sauce', 13.99, 'wings', 'https://images.unsplash.com/photo-1603110788540-1d135ca9cc20?w=400'),
('Honey Garlic Wings', 'Sweet and savory honey garlic glaze', 12.99, 'wings', 'https://images.unsplash.com/photo-1617634667039-8e4cb277a46b?w=400'),
('Fried Chicken Sandwich', 'Crispy fried chicken, pickles, slaw on brioche bun', 10.99, 'sandwiches', 'https://images.unsplash.com/photo-1616691433533-887dbb3797da?w=400'),
('Loaded Fries', 'Crispy fries with cheese, bacon, and ranch', 8.99, 'sides', 'https://images.unsplash.com/photo-1563379091339-03246963d31d?w=400');
```

3. Enable Row Level Security if you want to add authentication later
4. Get your Supabase URL and anon key from Project Settings > API

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run the Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### 5. Access Admin Panel

Navigate to `http://localhost:5173/admin` to access the admin panel for managing menu items.

## Project Structure

```
texas-craft-wings/
├── src/
│   ├── components/      # Reusable components (Header, Footer, Hero, etc.)
│   ├── pages/           # Page components
│   ├── lib/             # Supabase client configuration
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # App entry point
│   └── index.css        # Global styles
├── public/
│   └── images/          # Static images and assets
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies

```

## Features in Detail

### Instagram Reels Section

The circular gallery component displays videos in a carousel format. Update the video URLs in `src/components/InstagramReels.jsx` to use your actual Instagram reel links.

### Admin Panel

The admin panel allows you to:
- Add new menu items
- Edit existing items
- Delete items
- Filter by category
- Upload images via URL

## Customization

### Colors

Update the color scheme in `src/index.css`:

```css
:root {
  --primary-brand-orange: #E76A24;
  --secondary-brand-dark-green: #0B381E;
  --accent-light-peach: #FFE6D1;
  --highlight-warm-yellow: #FFC857;
  --text-dark-charcoal: #2A2A2A;
  --light-neutral-off-white: #FFF9F5;
  --divider-gray: #E2E2E2;
}
```

### Logo

Replace the logo in `public/images/` and update references in components.

## Deployment

Build for production:

```bash
npm run build
```

Deploy the `dist` folder to hosting platforms like:
- Vercel
- Netlify
- AWS Amplify

Make sure to set environment variables on your hosting platform.

## License

MIT License

## Support

For issues or questions, please contact the development team.

