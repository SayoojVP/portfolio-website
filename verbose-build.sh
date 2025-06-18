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

# Install dependencies with verbose output
echo "Installing dependencies..."
npm install --verbose

# Build the app with detailed output
echo "Building the React app..."
npm run build

# Check build status
if [ $? -eq 0 ]; then
  echo "Build completed successfully!"
  echo "Build files are in the portfolio-app/build directory"
  ls -la build
else
  echo "Build failed with error code $?"
  echo "Please check the above logs for errors"
fi
