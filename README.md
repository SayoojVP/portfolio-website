# Minimalistic Portfolio Website

A clean, simple portfolio website built with React.js and Node.js, inspired by the minimalistic design of nadh.in.

## Features

- Clean, minimal design
- Responsive layout
- Home page with personal information
- Projects showcase
- Blog section
- Node.js backend API

## Technology Stack

- Frontend: React.js, Styled Components, React Router
- Backend: Node.js, Express
- Development Tools: Concurrently, Nodemon

## Installation

1. Clone this repository
2. Install dependencies:

```bash
npm run install-deps
```

This will install dependencies for:
- The root project manager
- The React frontend
- The Node.js backend

## Development

To run both the frontend and backend concurrently in development mode:

```bash
npm start
```

This will start:
- React frontend on http://localhost:3000
- Node.js backend on http://localhost:5000

## Production Build

To create a production build:

```bash
npm run build
```

This will create an optimized build of the React app in the `portfolio-app/build` folder.

## Deployment

To run the production build:

```bash
npm run deploy
```

This will start the Node.js server in production mode, serving both the API and the static React build.

## Customizing the Portfolio

1. Update personal information in `/server/server.js`
2. Replace the placeholder image in the Home component
3. Add your own projects in `/portfolio-app/src/components/Projects.js`
4. Add your blog posts in `/portfolio-app/src/components/Blog.js`

## License

MIT
