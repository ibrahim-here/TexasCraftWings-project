# Quick Start Guide

## Getting Started in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Set Up Supabase

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Create a new project
3. Go to **SQL Editor** in your project dashboard
4. Copy and paste the contents of `database.sql` and run it
5. Go to **Project Settings > API**
6. Copy your **Project URL** and **anon public** key

### Step 3: Configure Environment Variables

Open the `.env` file and replace the placeholders:

```
VITE_SUPABASE_URL=paste_your_supabase_url_here
VITE_SUPABASE_ANON_KEY=paste_your_supabase_anon_key_here
```

### Step 4: Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your website!

### Step 5: Access Admin Panel

Visit `http://localhost:5173/admin` to manage menu items.

## What's Included

✅ **6 Main Pages**: Home, Menu, Locations, Specials, About, Contact  
✅ **Admin Panel**: Full CRUD operations for menu management  
✅ **Instagram Reels Section**: Circular gallery for video content  
✅ **Responsive Design**: Works on all devices  
✅ **Supabase Integration**: Real database connectivity  
✅ **Custom Styling**: Professional design with your brand colors  

## Customization Tips

### Update Logo
The logo is currently using the URL from texascraftwings.com. To use a local file:
1. Place your logo in `public/images/`
2. Update the logo src in `src/components/Header.jsx` and `Footer.jsx`

### Update Instagram Reels
Edit `src/components/InstagramReels.jsx` and replace the video URLs in the `reels` array

### Add Your Content
- Update locations in `src/pages/Locations.jsx`
- Update specials in `src/pages/Specials.jsx`
- Customize the about section in `src/pages/About.jsx`

### Update Colors
All colors are defined in `src/index.css` under `:root` variables

## Troubleshooting

### Supabase Connection Issues
- Make sure your `.env` file has the correct credentials
- Verify your Supabase project is active
- Check that the `menu_items` table was created successfully

### Build Issues
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
```

## Next Steps

1. Add your actual menu items via the admin panel
2. Update Instagram reel URLs with your actual videos
3. Add real location data
4. Customize content to match your brand
5. Deploy to production (Vercel, Netlify, etc.)

## Need Help?

Check the full README.md for detailed documentation.

