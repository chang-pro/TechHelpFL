#!/bin/bash

# Fix Webpack Runtime Chunk Errors for ChangMedia Next.js Project
# This script cleans all build artifacts and fixes dependency issues

set -e

echo "🧹 Cleaning build output and cache..."
rm -rf .next
rm -rf node_modules/.cache
rm -rf .turbo

echo "📦 Removing node_modules and package-lock.json..."
rm -rf node_modules
rm -f package-lock.json

echo "⬆️  Updating Next.js and React to latest versions..."
npm install next@latest react@latest react-dom@latest

echo "📥 Reinstalling all dependencies..."
npm install

echo "🏗️  Building project..."
npm run build

echo "✅ Done! You can now run 'npm run dev' to start the development server."

