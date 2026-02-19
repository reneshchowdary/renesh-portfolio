# Renesh Naidu Para - Portfolio Website

A modern, high-performance portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. Features smooth animations, custom cursor effects, project modals, and a fully responsive design.

## 🚀 Features

- **Modern Design**: Clean, professional design with purple accent theme
- **Custom Cursor**: Interactive cursor with hover effects (desktop only)
- **Loading Animation**: Smooth loading screen with progress indicator
- **Project Modals**: Detailed project views with expandable information
- **Smooth Animations**: Intersection observer-based scroll animations
- **Contact Form**: Validated contact form with error handling
- **Responsive Design**: Fully responsive across all devices
- **SEO Optimized**: Comprehensive meta tags and Open Graph support
- **Performance**: Optimized for fast loading and smooth interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion & React Intersection Observer
- **Font**: Geist Sans & Geist Mono

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/reneshnaidu/renesh-portfolio.git
cd renesh-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
renesh-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── Navbar.tsx          # Navigation bar
│       ├── Hero.tsx            # Hero section with particles
│       ├── About.tsx           # About section
│       ├── SelectedWork.tsx    # Projects showcase
│       ├── Skills.tsx          # Skills section
│       ├── Experience.tsx      # Work experience timeline
│       ├── Contact.tsx         # Contact section
│       ├── ContactForm.tsx     # Contact form with validation
│       ├── Footer.tsx          # Footer
│       ├── CustomCursor.tsx    # Custom cursor component
│       ├── LoadingScreen.tsx   # Loading animation
│       ├── ProjectModal.tsx    # Project detail modal
│       └── AnimatedSection.tsx # Scroll animation wrapper
├── public/
│   └── resume.txt              # Resume file (replace with PDF)
└── package.json
```

## 🎨 Customization

### Update Personal Information

1. **Metadata** (`src/app/layout.tsx`):
   - Update title, description, keywords
   - Add your social media handles
   - Update verification codes

2. **Hero Section** (`src/components/Hero.tsx`):
   - Update name and title
   - Modify greeting text

3. **About Section** (`src/components/About.tsx`):
   - Update roles and descriptions
   - Modify bullet points

4. **Projects** (`src/components/SelectedWork.tsx`):
   - Add/remove projects
   - Update project details
   - Add GitHub/demo links

5. **Experience** (`src/components/Experience.tsx`):
   - Update work history
   - Modify job descriptions

6. **Skills** (`src/components/Skills.tsx`):
   - Update technology stack
   - Modify skill categories

7. **Contact** (`src/components/Contact.tsx` & `ContactForm.tsx`):
   - Update email address
   - Modify contact form behavior

8. **Social Links** (`src/components/Navbar.tsx`):
   - Update GitHub, LinkedIn, Twitter links
   - Add/remove social platforms

### Update Resume

Replace `public/resume.txt` with your actual resume PDF:
```bash
cp /path/to/your/resume.pdf public/resume.pdf
```

Then update the link in `src/components/Navbar.tsx`:
```typescript
href="/resume.pdf"
download="Renesh_Naidu_Para_Resume.pdf"
```

### Color Theme

Update colors in `src/app/globals.css`:
```css
:root {
  --accent: #c2a4ff;        /* Primary accent color */
  --accent-dark: #a87cff;   /* Darker accent */
  --bg: #0b080c;            /* Background */
  --bg2: #0f0b11;           /* Secondary background */
  --text: #eae5ec;          /* Text color */
  --text-muted: rgba(234, 229, 236, 0.5);
  --border: rgba(194, 164, 255, 0.12);
  --glow: rgba(194, 164, 255, 0.15);
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 📝 Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

- **Email**: Reneshnaidu.para@gmail.com
- **LinkedIn**: [linkedin.com/in/reneshnaidu](https://linkedin.com/in/reneshnaidu)
- **GitHub**: [github.com/reneshnaidu](https://github.com/reneshnaidu)

---

Built with ❤️ by Renesh Naidu Para
