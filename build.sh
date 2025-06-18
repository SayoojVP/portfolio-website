#!/bin/bash

echo "Starting custom build script for portfolio app"

# Navigate to portfolio-app directory
cd portfolio-app

# Install dependencies with legacy peer deps and force flag
echo "Installing dependencies..."
npm install --legacy-peer-deps --force

# Check if node_modules exists and key dependencies are installed
if [ ! -d "node_modules" ]; then
  echo "Error: node_modules directory not found after npm install"
  exit 1
fi

# Check for crucial dependencies
echo "Checking for crucial dependencies..."
required_deps=("react" "react-dom" "react-icons" "react-router-dom" "@craco/craco")
missing_deps=()

for dep in "${required_deps[@]}"; do
  if [ ! -d "node_modules/$dep" ]; then
    missing_deps+=("$dep")
  fi
done

if [ ${#missing_deps[@]} -gt 0 ]; then
  echo "Error: The following dependencies are missing: ${missing_deps[*]}"
  echo "Installing missing dependencies explicitly..."
  npm install ${missing_deps[*]} --legacy-peer-deps --force
fi

# Create symlinks for problematic ESM modules if needed
echo "Creating module symlinks..."
mkdir -p node_modules/.vite/deps
mkdir -p src/node_modules

# Create symlinks for React icons
if [ ! -L "node_modules/.vite/deps/react-icons_fa.js" ]; then
  ln -sf ../../react-icons/fa/index.js node_modules/.vite/deps/react-icons_fa.js
fi
if [ ! -L "node_modules/.vite/deps/react-icons_si.js" ]; then
  ln -sf ../../react-icons/si/index.js node_modules/.vite/deps/react-icons_si.js
fi

# Create symlinks in the src/node_modules directory for React Router DOM
echo "Creating symlinks for react-router-dom in src/node_modules..."
if [ ! -d "src/node_modules/react-router-dom" ]; then
  mkdir -p src/node_modules
  ln -sf ../../node_modules/react-router-dom src/node_modules/
fi
if [ ! -d "src/node_modules/react-icons" ]; then
  ln -sf ../../node_modules/react-icons src/node_modules/
fi

# Build the app
echo "Building the application..."
NODE_OPTIONS=--openssl-legacy-provider npm run build

# Check if build was successful
if [ ! -d "build" ]; then
  echo "Error: build directory not found after npm run build"
  exit 1
fi

echo "Build completed successfully!"
exit 0
