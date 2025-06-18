#!/bin/bash

# Navigate to the portfolio app directory
echo "Navigating to portfolio-app directory..."
cd portfolio-app

# Remove node_modules and package-lock to ensure clean state
echo "Cleaning previous dependencies..."
rm -rf node_modules package-lock.json

# Clear npm cache
echo "Clearing npm cache..."
npm cache clean --force

# Install dependencies with verbose output and legacy peer deps
echo "Installing dependencies..."
npm install --legacy-peer-deps --force --verbose

# Check for crucial dependencies with verbose output
echo "Checking for crucial dependencies..."
required_deps=("react" "react-dom" "react-icons" "react-router-dom" "@craco/craco")
missing_deps=()

for dep in "${required_deps[@]}"; do
  if [ ! -d "node_modules/$dep" ]; then
    echo "Dependency not found: $dep"
    missing_deps+=("$dep")
  else
    echo "Dependency found: $dep"
  fi
done

if [ ${#missing_deps[@]} -gt 0 ]; then
  echo "Installing missing dependencies explicitly: ${missing_deps[*]}"
  npm install ${missing_deps[*]} --legacy-peer-deps --force --verbose
fi

# Create module optimizations
echo "Creating module optimizations..."
mkdir -p node_modules/.vite/deps

# Add optimizer hints for React icons
echo "Adding optimizer hints for React icons..."
ln -sf ../../react-icons/fa/index.js node_modules/.vite/deps/react-icons_fa.js || true
ln -sf ../../react-icons/si/index.js node_modules/.vite/deps/react-icons_si.js || true

# Build the app with detailed output
echo "Building the React app with NODE_OPTIONS=--openssl-legacy-provider..."
NODE_OPTIONS=--openssl-legacy-provider npm run build --verbose

# Print build result
if [ $? -eq 0 ]; then
  echo "Build completed successfully!"
  ls -la build/
else
  echo "Build failed!"
fi

# Check build status
if [ $? -eq 0 ]; then
  echo "Build completed successfully!"
  echo "Build files are in the portfolio-app/build directory"
  ls -la build
else
  echo "Build failed with error code $?"
  echo "Please check the above logs for errors"
fi
