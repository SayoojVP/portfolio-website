#!/bin/bash
echo "Starting build process..."
echo "Moving to portfolio-app directory..."
cd portfolio-app

echo "Installing dependencies..."
npm install

echo "Building React application..."
npm run build

echo "Build completed successfully!"
