# MedTator Development Guide

## Build Commands
- `python web.py`: Start development server at http://localhost:8086
- `python web.py --mode build`: Build static HTML for public release (in docs/)
- `python web.py --mode build --fn dev.html`: Build development version
- `python web.py --mode build --lib local --fn standalone.html`: Build standalone version
- `python web.py --mode release`: Create release zip file
- For Vue web app: `cd web && npm run dev` to start Vite dev server
- For Vue web app: `cd web && npm run build` to build production version

## Code Style Guidelines
- **Python**: Use Flask for web server, follow PEP 8 style guide
- **JavaScript/Vue**: 
  - Use Vue 3 composition API with `<script setup>` syntax
  - Use PrimeVue components and TailwindCSS for styling
  - Import statements at top, grouped by external/internal dependencies
  - ES6+ syntax preferred (arrow functions, destructuring, etc.)
- **Error Handling**: Log errors clearly, provide user-friendly messages
- **Naming**: Use camelCase for JavaScript variables/functions, PascalCase for Vue components
- **File Structure**: Keep related functionality in same directory, use index.js for exports
- **Documentation**: Comment complex logic, document functions with JSDoc