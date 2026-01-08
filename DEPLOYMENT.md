# Deployment Guide

## Building for Production

To create a production build:

```bash
npm run build
```

This creates a `build` folder with optimized static files ready for deployment.

## Deployment Options

### 1. Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on git push

### 2. Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

### 3. GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://yourusername.github.io/portfolio-react",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Run `npm run deploy`

### 4. Static File Server
After running `npm run build`, serve the `build` folder with any static file server:
- `npx serve -s build`
- Upload to any web hosting service

## Environment Variables

If you need environment variables, create a `.env` file in the root:
```
REACT_APP_API_URL=your_api_url_here
```

Access in components with `process.env.REACT_APP_API_URL`

## Performance Optimizations

The build includes:
- Minified JavaScript and CSS
- Optimized images
- Service worker for caching (if enabled)
- Code splitting for faster loading

## Browser Support

Supports all modern browsers:
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)