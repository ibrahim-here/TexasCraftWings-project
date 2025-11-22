# Design Document - Deals Section

## Overview

The Deals Section is a new component that will be added to the Home page to showcase promotional content through videos and images. It will follow the existing design patterns used in the InstagramReels and FeatureHighlights components, maintaining visual consistency with the Texas Craft Wings brand.

The component will dynamically load media files from the `src/video` directory and display them in a responsive grid layout with appropriate controls for video playback.

## Architecture

### Component Structure

```
Home.jsx
├── Hero
├── InstagramReels
├── DealsSection (NEW)
│   └── DealCard (multiple instances)
└── FeatureHighlights
```

### File Organization

```
src/
├── components/
│   ├── DealsSection.jsx (NEW)
│   └── DealsSection.css (NEW)
├── video/
│   ├── pic1.png
│   ├── video1.mp4
│   └── video2.mp4
└── pages/
    └── Home.jsx (MODIFIED)
```

## Components and Interfaces

### DealsSection Component

**Purpose:** Main container component that displays all promotional media items

**Props:** None (media files are imported directly)

**State:**
- No internal state required (stateless functional component)

**Structure:**
```jsx
<section className="deals-section section-padding">
  <div className="container">
    <div className="section-header">
      <h2>Current Deals & Promotions</h2>
      <p className="section-subtitle">Check out our latest offers</p>
    </div>
    <div className="deals-grid">
      {/* DealCard components rendered here */}
    </div>
  </div>
</section>
```

### DealCard Component (Inline)

**Purpose:** Individual card that renders either a video or image

**Props:**
- `media` (object): Contains `src` (string) and `type` (string: 'video' | 'image')
- `index` (number): Unique identifier for the card

**Rendering Logic:**
- If type is 'video': Render `<video>` element with controls
- If type is 'image': Render `<img>` element

## Data Models

### Media Item Structure

```javascript
{
  src: string,        // Path to media file (e.g., '/src/video/video1.mp4')
  type: 'video' | 'image',  // Media type
  alt: string         // Alternative text for accessibility
}
```

### Media Array Example

```javascript
const dealsMedia = [
  { src: video1, type: 'video', alt: 'Deal 1 - Video Promotion' },
  { src: video2, type: 'video', alt: 'Deal 2 - Video Promotion' },
  { src: pic1, type: 'image', alt: 'Deal 3 - Image Promotion' }
]
```

## Styling Design

### Layout

**Desktop (> 1024px):**
- 3-column grid
- Gap: 30px between items
- Max-width: 1200px (container)

**Tablet (768px - 1024px):**
- 2-column grid
- Gap: 20px between items

**Mobile (< 768px):**
- 1-column grid
- Gap: 20px between items

### Visual Design

**Section Header:**
- Follows existing pattern from InstagramReels and FeatureHighlights
- Title: Anton font, uppercase, 3.5rem
- Subtitle: Montserrat font, 1.1rem, lighter color

**Deal Cards:**
- Background: White (#FFFFFF)
- Border-radius: 12px
- Box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08)
- Padding: 0 (media fills card)
- Hover effect: Slight lift with increased shadow
- Transition: all 0.3s ease

**Media Elements:**
- Width: 100%
- Height: auto (maintain aspect ratio)
- Border-radius: 12px (match card)
- Object-fit: cover
- Max-height: 400px (prevent overly tall items)

**Video Controls:**
- Native browser controls
- Muted by default
- No autoplay
- Preload: metadata

### Color Scheme

Following existing brand colors:
- Primary: `var(--primary-brand-orange)` (#E76A24)
- Background: `var(--light-neutral-off-white)` (#FFF9F5)
- Card background: #FFFFFF
- Text: `var(--text-dark-charcoal)` (#2A2A2A)

## Error Handling

### Missing Media Files

**Scenario:** Media file path is incorrect or file doesn't exist

**Solution:**
- Use try-catch during import
- Display placeholder image for failed loads
- Log error to console for debugging
- Gracefully skip broken media items

### Unsupported Media Types

**Scenario:** File format is not .mp4 or .png

**Solution:**
- Filter media array to only include supported formats
- Log warning for unsupported files
- Continue rendering supported items

### Responsive Breakpoints

**Scenario:** Layout needs to adapt to various screen sizes

**Solution:**
- Use CSS Grid with media queries
- Test breakpoints: 320px, 768px, 1024px, 1440px
- Ensure touch-friendly controls on mobile (min 44px tap targets)

## Testing Strategy

### Component Testing

1. **Rendering Tests:**
   - Verify component renders without errors
   - Check that all media items are displayed
   - Confirm correct number of cards rendered

2. **Media Type Tests:**
   - Verify videos render with `<video>` tag
   - Verify images render with `<img>` tag
   - Check that video controls are present

3. **Responsive Tests:**
   - Test grid layout at mobile breakpoint (< 768px)
   - Test grid layout at tablet breakpoint (768px - 1024px)
   - Test grid layout at desktop breakpoint (> 1024px)

### Integration Testing

1. **Home Page Integration:**
   - Verify DealsSection appears in correct position
   - Check that section doesn't break existing layout
   - Confirm proper spacing between sections

2. **Media Loading:**
   - Test that videos can be played
   - Verify images load correctly
   - Check fallback behavior for missing files

### Manual Testing Checklist

- [ ] Videos play when clicked
- [ ] Videos are muted by default
- [ ] Images display at correct size
- [ ] Grid layout responds to screen size changes
- [ ] Section header displays correctly
- [ ] Hover effects work on cards
- [ ] Accessibility: keyboard navigation works
- [ ] Accessibility: screen reader announces media correctly

## Implementation Notes

### Import Strategy

Use Vite's static asset imports:
```javascript
import video1 from '../video/video1.mp4'
import video2 from '../video/video2.mp4'
import pic1 from '../video/pic1.png'
```

### Performance Considerations

- Use `loading="lazy"` for images
- Set `preload="metadata"` for videos
- Optimize video file sizes (recommend < 5MB per video)
- Consider adding loading states for slow connections

### Accessibility

- Add `alt` attributes to all images
- Include `aria-label` for video elements
- Ensure keyboard navigation works for video controls
- Maintain sufficient color contrast (WCAG AA minimum)
- Add focus indicators for interactive elements

## Future Enhancements

Potential improvements for future iterations:

1. **Dynamic Content Management:**
   - Load deals from database/CMS
   - Admin panel integration for adding/removing deals

2. **Enhanced Interactions:**
   - Lightbox/modal view for full-screen media
   - Deal expiration dates and countdown timers
   - Click-through links to specific menu items

3. **Animation:**
   - Fade-in animations on scroll
   - Staggered card entrance effects
   - Video preview on hover

4. **Analytics:**
   - Track which deals get the most views
   - Monitor video play rates
   - A/B testing for deal presentation
