# Dhwanil Ranpura Portfolio Website

A modern, fast, and responsive personal portfolio website built with React, Vite, and Tailwind CSS. The website highlights professional experience, technical projects, leadership roles, and a cohesive design system using a custom dark theme.

## 🚀 Live Website Link

*https://dhwanil-portfolio-21s6nlv19-dhwanil1907s-projects.vercel.app/*

## 💻 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (v4)
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Deployment**: Vercel

## ✨ Features

- **Single Page Application (SPA)**: Smooth navigation across sections.
- **Modern Minimalist UI**: A clean, premium aesthetic with subtle animations and glassmorphism.
- **Custom Color Palette**: Deep navy backgrounds, distinct teal accents, and sleek component designs.
- **Fully Responsive**: Optimized for seamless viewing on desktops, tablets, and mobile devices.
- **Vercel Optimized**: Handles React Router history paths flawlessly via custom `vercel.json` rewrites.

## 📁 Folder Structure

```text
portfolio-website
├─ public/          # Static assets (favicons, icons)
├─ src/
│  ├─ assets/       # Internal image or graphic assets
│  ├─ components/   
│  │  ├─ layout/    # Structural wrappers (Navbar, Footer)
│  │  └─ ui/        # Reusable primitive elements (Cards, Buttons)
│  ├─ data/         # Dynamic content configuration (portfolio.js)
│  ├─ pages/        # All main section modules (Home, About, etc.)
│  ├─ App.jsx       # Root router and global view container
│  ├─ main.jsx      # React mounting entry point
│  └─ index.css     # Global styles and Tailwind configuration
├─ .gitignore       # Git exclusion rules
├─ package.json     # Project meta and dependencies
├─ vercel.json      # Production deployment config
├─ vite.config.js   # Vite bundler configurations
└─ README.md        # Project documentation
```

## 🛠 Local Development Setup

To run this project locally, execute the following commands in your terminal:

```bash
# Clone the repository
git clone https://github.com/dhwanil1907/portfolio-website.git

# Navigate into the project folder
cd portfolio-website

# Install the required dependencies
npm install

# Start the local development server
npm run dev
```

Your app should now be running locally at `http://localhost:5173/`.

## 🚢 Deployment Instructions (Vercel)

This application is configured for hassle-free deployment via Vercel.

1. **Connect Repository**: Link this GitHub repository directly to your Vercel account.
2. **Framework Preset**: Vercel will automatically detect `Vite` as the framework.
3. **Build Command**: Leave as default (`npm run build`).
4. **Environment Variables**: Add any if needed (none required by default).
5. **Vercel Routing Fix**: The project already contains a `vercel.json` to handle SPA route rewrites, so there won't be any 404 errors when users refresh individual sub-pages!

## 📄 License

This project is open-source and available under the MIT License.
