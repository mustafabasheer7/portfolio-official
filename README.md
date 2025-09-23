# Portfolio Official

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Showcasing professional experience, projects, skills, and education with smooth animations and a clean design.

## 🚀 Features

- **Modern Design**: Clean, professional layout with dark/light mode support
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive Contact Form**: Functional contact form using Formspree
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **TypeScript**: Full type safety throughout the application
- **SEO Ready**: Optimized for search engines

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: Formspree
- **Package Manager**: pnpm

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── About.tsx       # About section with personal info and stats
    ├── Contact.tsx     # Contact form and information
    ├── Education.tsx   # Educational background
    ├── Experience.tsx  # Work experience timeline
    ├── Footer.tsx      # Footer component
    ├── Hero.tsx        # Landing/hero section
    ├── Navbar.tsx      # Navigation bar
    ├── Projects.tsx    # Featured projects showcase
    └── Skills.tsx      # Technical skills and competencies
```

## 🏗️ Sections

### Hero

- Professional introduction
- Call-to-action buttons
- Animated elements

### About

- Personal background
- Key achievements at Noterro
- Professional photo
- Core statistics

### Experience

- Work history timeline
- Detailed achievements
- Technologies used
- Impact metrics

### Projects

- Featured project cards
- Live demos and source code links
- Technology tags
- Project statistics

### Skills

- Technical competencies
- Animated progress bars
- Skill categories

### Education

- Academic background
- Achievements and statistics
- Relevant coursework

### Contact

- Functional contact form
- Contact information
- Social media links
- Response time information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio-official
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_FORMSPREE_URL=https://formspree.io/f/your_form_id
```

4. Run the development server:

```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 Contact Form Setup

The contact form uses Formspree for easy email handling:

1. Go to [https://formspree.io/](https://formspree.io/)
2. Create a free account
3. Create a new form with your email address
4. Copy the form ID and update your `.env.local` file
5. The form will send emails directly to your inbox

## 🎨 Customization

### Colors

The project uses a teal-based color scheme. Update colors in:

- Tailwind classes throughout components
- CSS custom properties in `globals.css`

### Content

Update personal information in:

- `Hero.tsx` - Name, title, introduction
- `About.tsx` - Personal details, stats, achievements
- `Experience.tsx` - Work history and accomplishments
- `Projects.tsx` - Featured projects and links
- `Skills.tsx` - Technical skills and levels
- `Education.tsx` - Academic background
- `Contact.tsx` - Contact information

### Images

- Replace `/Mustafa.jpg` with your professional photo
- Update favicon and other assets in the `public/` directory

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🔧 Scripts

```bash
# Development
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## 📈 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with Next.js code splitting
- **Images**: Responsive and optimized loading

## 🚀 Deployment

The project is optimized for deployment on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- Any static hosting provider

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy automatically on every push

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

**Mustafa Basheer**

- Email: mustafa.basheer55@gmail.com
- LinkedIn: [linkedin.com/in/mustafabasheer7](https://linkedin.com/in/mustafabasheer7)
- GitHub: [github.com/mustafabasheer7](https://github.com/mustafabasheer7)
- Location: Ottawa, ON, Canada

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
