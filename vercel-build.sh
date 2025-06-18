#!/bin/bash
echo "Starting Vercel build process..."
echo "Moving to portfolio-app directory..."
cd portfolio-app

echo "Installing dependencies with legacy-peer-deps and force..."
npm install --legacy-peer-deps --force

echo "Verifying critical dependencies..."
for dep in react react-dom react-icons react-router-dom @craco/craco; do
  if [ ! -d "node_modules/$dep" ]; then
    echo "Missing dependency: $dep, installing specifically..."
    npm install $dep --legacy-peer-deps --force
  fi
done

echo "Setting up module optimizations..."
mkdir -p node_modules/.vite/deps

# Add optimizer hints for React icons
echo "Adding optimizer hints for React icons..."
ln -sf ../../react-icons/fa/index.js node_modules/.vite/deps/react-icons_fa.js || true
ln -sf ../../react-icons/si/index.js node_modules/.vite/deps/react-icons_si.js || true

echo "Building React application with legacy Node options..."
export NODE_OPTIONS=--openssl-legacy-provider
npm run build

if [ -d "build" ]; then
  echo "Build completed successfully!"
  ls -la build/
  echo "Setting up redirects..."
  # Ensure _redirects is in place
  [ -f "build/_redirects" ] || echo "/* /index.html 200" > build/_redirects
  exit 0
else
  echo "Build failed: No build directory found"
  exit 1
fi
