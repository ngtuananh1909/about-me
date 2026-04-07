# 🚀 Nguyen Tuan Anh Portfolio

A professional, engineering-centric portfolio designed to showcase software engineering expertise, algorithmic skills, and a passion for the Linux ecosystem.

**Live Demo:** [about-me-delta-gray.vercel.app](https://about-me-delta-gray.vercel.app/)

---

## 🎨 Design Philosophy
This project was built with a **Modern Technical Minimalist** aesthetic. It focuses on clarity, technical motifs (like the Linux terminal), and high-impact visual feedback through dynamic animations and a premium Dark/Light mode system.

## 🛠️ Tech Stack
- **Core:** HTML5, Modern JavaScript (ES6+), [Lucide](https://lucide.dev/) for iconography.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with a custom engineering-focused design system.
- **Build Tool:** [Vite](https://vitejs.dev/) for high-performance bundling and instant hot module replacement.
- **Animations:** [AOS (Animate on Scroll)](https://michalsnik.github.io/aos/) and custom CSS-in-JS reveal effects.
- **Integration:** Codeforces API for real-time competitive programming statistics.

## ✨ Key Features
- **Interactive Terminal:** Dynamic typing effect that summarizes professional identity and curiosity.
- **Dynamic CP Stats:** Automatically fetches and displays current rank, rating, and max rank from Codeforces.
- **Theme Toggle:** Fully responsive Dark/Light mode logic with local storage persistence.
- **Tooling Sub-pages:** Includes a built-in **QR Encoder** utility and a **Game Showcase** page.
- **Responsive Layout:** Optimized for 4K desktops down to the smallest mobile devices.

## 📁 Project Structure
```text
├── index.html          # Main Landing Page
├── qr.html             # QR Generation Tool
├── game.html           # Professional Hobby Showcase
├── tailwind.config.js  # Custom Theme & Design Tokens
├── vite.config.js      # Multi-page Build Pipeline
└── src/
    ├── css/
    │   └── main.css    # Unified Styling & Theme Variables
    └── js/
        └── main.js     # Core Logic, Animations & API Fetching
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.0 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ngtuananh1909/about-me.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run in development mode:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## 🌐 Deployment
This project is optimized for **Vercel** with "Zero Config" support. Any push to the `main` branch will automatically trigger a production build.

---
Developed with ❤️ by **Nguyen Tuan Anh**
