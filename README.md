# Aiswaria Benny — Personal Portfolio

A modern, responsive, and visually stunning developer portfolio website built for **Aiswaria Benny**, B.Tech Artificial Intelligence & Data Science student.

Featuring a dark theme aesthetic with vibrant aurora ambient gradients, glassmorphism card UI, interactive micro-animations, and dynamic data binding from a single configuration source.

---

## ✨ Features

- **Aurora Ambient Design System**: Custom animated aurora gradients, glassmorphic cards, and curated typography combining *Syne* for display headings and *Plus Jakarta Sans* for clean body text.
- **Single Source of Truth (`content.js`)**: All personal info, skills, projects, and contact details are managed dynamically in one structured JavaScript data file.
- **Interactive Loader**: Sleek loading animation introducing the portfolio header with easy skip-on-click functionality.
- **Featured Projects**: Highlights major software development and AI/Data Science projects with live demo links and technical tags:
  - **Campus Management System**: Python, NumPy, Matplotlib CLI-based administrative platform.
  - **Medière**: Smart Stock & Real-Time Pharmacy Supply Platform (HTML, CSS, JS, LocalStorage).
- **Theme Contrast Transition**: Smooth visual shift from deep dark mode into a crisp light-themed contact section.
- **Fully Responsive**: Optimized across desktop, tablet, and mobile displays.

---

## 🛠️ Tech Stack

- **HTML5**: Semantic tags, accessibility attributes (`aria-*`), and modern layout structure.
- **CSS3**: Vanilla CSS with custom properties (CSS variables), CSS grid/flexbox, keyframe aurora animations, and glassmorphism.
- **JavaScript (ES6+)**: Dynamic DOM rendering, scroll listeners, loader handling, and form interaction.
- **Google Fonts**: [Syne](https://fonts.google.com/specimen/Syne) & [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans).

---

## 📁 Project Structure

```text
Portfolio/
├── assets/
│   └── Aiswa Resume.pdf       # Resume file
├── content.js                  # Central data store for portfolio content
├── index.html                  # Main markup & section layout
├── script.js                   # Interactivity, loader logic, & DOM rendering
├── style.css                   # Custom styles, theme tokens, & animations
└── README.md                   # Project documentation
```

---

## 🚀 Quick Start

No build tools or node server required. You can launch the site directly in any web browser:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/herzie48/AISWARIA-PORTFOLIO.git
   cd AISWARIA-PORTFOLIO
   ```

2. **Open in browser:**
   - Double-click `index.html` to open it in your browser.
   - Or use VS Code **Live Server** extension to serve locally.

---

## ⚙️ How to Customize

To update portfolio details (name, skills, projects, links, social handles):

1. Open `content.js`.
2. Edit the fields within `PORTFOLIO_CONTENT` object:
   ```javascript
   const PORTFOLIO_CONTENT = {
     personal: {
       name: "Your Name",
       tagline: "Your Tagline",
       email: "your.email@example.com",
       github: "https://github.com/username",
       linkedin: "https://linkedin.com/in/username"
     },
     // ...
   };
   ```
3. Refresh `index.html` in your browser to see your changes instantly.

---

## 👤 Author

**Aiswaria Benny**
- **Degree**: B.Tech in Artificial Intelligence & Data Science @ Amal Jyothi College of Engineering
- **GitHub**: [@herzie48](https://github.com/herzie48)
- **LinkedIn**: [aiswariaben](https://linkedin.com/in/aiswariaben)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
