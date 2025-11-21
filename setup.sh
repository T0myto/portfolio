#!/bin/bash
# Portfolio Setup Script

echo "🎯 Setting up Maël's Portfolio..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create public folder if it doesn't exist
mkdir -p public

echo ""
echo "✅ Portfolio setup complete!"
echo ""
echo "📝 To customize:"
echo "  • Edit projects in lib/projects.ts"
echo "  • Edit experiences in lib/experiences.ts"
echo "  • Edit skills in lib/skills.ts"
echo "  • Update contact email in components/Footer.tsx and app/contact/page.tsx"
echo ""
echo "🚀 To start development:"
echo "  npm run dev"
echo ""
echo "🔗 Portfolio will be available at: http://localhost:3000"
