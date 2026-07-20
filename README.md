# Ragul P — Developer Portfolio

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-0055FF?style=flat-square&logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-emerald?style=flat-square)

A modern, high-performance portfolio built for **Ragul P**, a Software Developer specializing in **Full-Stack MERN Engineering**, **Network Security**, and **Fault-Tolerant Systems Architecture**. 

Designed with a sleek terminal-inspired design system, custom typography, micro-interactions, and an interactive Zero-Trust network topology visualizer.

---

## ⚡ Key Highlights & Features

- **Terminal-Inspired Design System**: Features an interactive `profile.sys` header card with real-time status indicators, custom typography pairings (`Arvo` serif headers, `Plus Jakarta Sans` body, `Space Mono` data streams), and ambient grid overlay.
- **Interactive Zero-Trust Network Topology Diagram**: Built-in SVG visualization for the *Zero-Trust Network Architecture* project featuring hoverable micro-segmentation audit boundaries across 5 VLANs (`VLAN 10` Management, `VLAN 20` Engineering, `VLAN 30` Operations, `VLAN 40` Finance, `VLAN 50` Production) and Software-Defined Perimeter (`SDP`) remote access tunneling.
- **Dynamic Component Readouts**:
  - **AI Engine Readout**: Simulates Gemini API evaluation pipelines and fallback failsafes for the *AI Mock Interview Platform*.
  - **Audit Log Stream**: Displays real-time JWT authentication, rate-limiting triggers, and socket synchronization for the *IT Asset Management System*.
- **Comprehensive Showcase**:
  - **Hero**: Profile terminal card, role chips, dynamic tagline, key metrics (Projects, CGPA, Certifications).
  - **About Me**: Core pillars (Full-Stack, Security Architecture, Network Design, DSA Problem Solving on LeetCode).
  - **Skills Toolkit**: Modular categorized skill chips spanning MERN, Security, Networking (BGP, OSPF, EIGRP, MPLS), Tools, and Languages.
  - **Academic Background**: B.Tech in Information Technology at PSNA College of Engineering and Technology.
  - **Certifications**: Verified credentials from IBM SkillsBuild & Cisco Networking Academy.
  - **Experience**: Networking & Security Internship at SYSTECH (Trichy) with key configuration highlights.
  - **Contact Hub**: Interactive direct action cards for Email, LinkedIn, GitHub, and LeetCode.

---

## 🛠️ Tech Stack

- **Core**: React 18, Vite 5, JavaScript (ES6+)
- **Styling**: Tailwind CSS 3, PostCSS, Autoprefixer
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Typography**: Google Fonts (Arvo, Plus Jakarta Sans, Space Mono)

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── ragul-profile.jpeg
├── src/
│   ├── components/
│   │   ├── About.jsx            # About section & core engineering highlights
│   │   ├── Certifications.jsx   # IBM SkillsBuild & Cisco credentials
│   │   ├── Contact.jsx          # Contact links & footer
│   │   ├── Education.jsx        # Academic background (PSNA CET)
│   │   ├── Experience.jsx       # Internship details (SYSTECH)
│   │   ├── Hero.jsx             # Hero banner & TerminalConsole component
│   │   ├── Navbar.jsx           # Floating glass navbar & scroll spy
│   │   ├── Projects.jsx         # Project showcase & interactive ZeroTrustDiagram
│   │   └── Skills.jsx           # Categorized skill chips
│   ├── data/
│   │   └── index.js             # Resume & portfolio data store
│   ├── hooks/
│   │   └── useScrollReveal.js   # IntersectionObserver scroll reveal hook
│   ├── lib/
│   │   └── variants.js          # Framer Motion animation variants
│   ├── App.jsx                  # Main application component
│   ├── index.css                # Custom Tailwind layer & design utilities
│   └── main.jsx                 # Entry point
├── index.html                   # HTML template & web font imports
├── package.json                 # Project dependencies & scripts
├── tailwind.config.js           # Custom Tailwind theme configuration
└── vite.config.js               # Vite build settings
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ragulpcareer-coder/Ragulp_portfolio.git
   cd Ragulp_portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 📬 Contact & Links

- **Email**: [ragulp.career@gmail.com](mailto:ragulp.career@gmail.com)
- **LinkedIn**: [linkedin.com/in/ragul-p04](https://linkedin.com/in/ragul-p04)
- **GitHub**: [github.com/ragulpcareer-coder](https://github.com/ragulpcareer-coder)
- **LeetCode**: [leetcode.com/u/Ragulp_career](https://leetcode.com/u/Ragulp_career)
