# Raphael Lafeldt - Portfolio Website

Personal portfolio website showcasing my projects, skills, and experience as a Computer Science student at Georgia Tech.

**Live Site**: [rlafeldt.github.io](https://rlafeldt.github.io)

## About

This portfolio website highlights my work in AI, FinTech, and full-stack development. Built with modern web technologies to provide a fast, responsive, and visually appealing user experience.

## Tech Stack

This project is built with:

- **React** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm or bun package manager

### Installation

1. Clone the repository:
```sh
git clone https://github.com/rlafeldt/rlafeldt.github.io.git
cd rlafeldt.github.io
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

The site will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build for development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
.
├── src/
│   ├── components/      # React components
│   │   ├── Hero.tsx     # Landing section with profile
│   │   ├── About.tsx    # About me section
│   │   ├── Projects.tsx # Project showcase
│   │   ├── Contact.tsx  # Contact information
│   │   └── ui/          # shadcn/ui components
│   ├── pages/           # Page components
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── public/              # Static assets
├── profile-photo.jpeg   # Profile picture
├── resume.pdf           # Resume file
└── index.html           # HTML template
```

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

1. Build the project:
```sh
npm run build
```

2. The `dist` folder contains the production-ready files

3. Deploy to GitHub Pages or your preferred hosting platform

## Customization

To personalize this portfolio for your own use:

1. Update personal information in the component files
2. Replace `profile-photo.jpeg` with your photo
3. Replace `resume.pdf` with your resume
4. Update project information in `Projects.tsx`
5. Modify color scheme in `tailwind.config.ts`

## Contact

- **Email**: rlafeldt3@gatech.edu
- **LinkedIn**: [linkedin.com/in/raphael-lafeldt](https://www.linkedin.com/in/raphael-lafeldt/)
- **GitHub**: [github.com/rlafeldt](https://github.com/rlafeldt)

## License

This project is open source and available for personal use.
