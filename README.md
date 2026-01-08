# Rohith Kizhakekkara - Portfolio (React Version)

This is a React.js conversion of the original HTML/CSS portfolio, maintaining the exact same styling and appearance.

## Features

- **Same Design**: Identical styling and layout as the original HTML version
- **Dark/Light Theme**: Toggle between dark and light modes with persistence
- **Responsive Design**: Works on all device sizes
- **Blog System**: Dynamic blog post loading
- **Projects Showcase**: Interactive project gallery with videos
- **Smooth Animations**: Fade-in animations for content elements

## Tech Stack

- React.js (without TypeScript)
- React Router DOM for navigation
- CSS Variables for theming
- Responsive CSS Grid and Flexbox

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── Header.js      # Navigation and theme toggle
│   ├── Footer.js      # Footer component
│   └── Layout.js      # Main layout wrapper
├── pages/
│   ├── Home.js        # About page with skills
│   ├── Blog.js        # Blog listing page
│   ├── Projects.js    # Projects showcase
│   └── BlogPost.js    # Individual blog post viewer
├── App.js             # Main app with routing
├── index.js           # Entry point
└── index.css          # Global styles (same as original)
```

## Assets

All original assets (images, videos, blog posts) are preserved in the `public/` folder and accessible via the same paths as the original site.