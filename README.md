# 🥪 Rotating Sandwiches Gallery

A Next.js application featuring an auto-scrolling horizontal gallery of rotating sandwich GIFs.

## Features

- 🎡 **Auto-scrolling gallery** - Endless horizontal scroll
- 🎨 **Modern UI** - Built with Next.js 14 and Tailwind CSS
- 🖼️ **Image optimization** - Uses Next.js Image component
- ⚡ **Speed controls** - Slow, Normal, Fast, and Pause
- 🎯 **Hover effects** - Pause on hover to examine sandwiches
- 📱 **Responsive** - Works on all screen sizes

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
rotating-sandwiches/
├── app/
│   ├── page.tsx          # Main page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   └── SandwichGallery.tsx  # Gallery component
├── lib/
│   └── sandwiches.ts     # Sandwich data
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Next/Image** - Optimized image loading

## Controls

- **Slow** - 180s animation duration
- **Normal** - 120s animation duration (default)
- **Fast** - 60s animation duration
- **Pause/Resume** - Toggle animation
- **Hover** - Automatically pauses on hover

## Image Sources

All sandwich GIFs are loaded from rotatingsandwiches.com with proper Next.js image optimization and remote pattern configuration.

## License

This is a fan project inspired by [rotatingsandwiches.com](https://rotatingsandwiches.com)
# rotatingsandwiches
