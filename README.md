
## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kheehoo
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

4. Add your OpenAI API key to `.env.local`:
```env
OPENAI_API_KEY=your_openai_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Required
OPENAI_API_KEY=your_openai_api_key_here

# Optional
NEXT_PUBLIC_SITE_URL=https://kheehoo.com
NEXT_PUBLIC_GA_ID=your_google_analytics_id
CONTACT_EMAIL=info@kheehoo.com
```

### Customization

#### Company Information
Update company details in:
- `src/components/StructuredData.tsx` - SEO structured data
- `src/components/Footer.tsx` - Footer contact information
- `src/app/contact/page.tsx` - Contact page details

#### Styling
- Modify `src/app/globals.css` for global styles
- Update Tailwind configuration in `tailwind.config.js`
- Customize component styles in individual component files

#### Content
- Update page content in respective page files
- Modify navigation items in `src/components/Navbar.tsx`
- Customize services in `src/app/services/page.tsx`

## 🤖 AI Chat Widget

The chat widget features:
- **Streaming Responses**: Real-time message streaming similar to ChatGPT
- **Typing Effect**: Animated typing indicators
- **Context Awareness**: AI understands KheeHoo's services and can answer questions
- **Error Handling**: Graceful error handling and fallback messages
- **Responsive Design**: Works on all device sizes

### Chat API Endpoint

The chat functionality is implemented in `src/app/api/chat/route.ts`:
- Uses OpenAI GPT-3.5-turbo model
- Implements streaming responses
- Includes company-specific context
- Handles errors gracefully

## 📱 Responsive Design

The website is fully responsive with:
- **Mobile-first approach**: Optimized for mobile devices
- **Flexible layouts**: Grid and flexbox layouts that adapt to screen sizes
- **Touch-friendly**: Large touch targets and intuitive navigation
- **Performance**: Optimized images and lazy loading

## 🔍 SEO Features

- **Metadata**: Complete meta tags for all pages
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine directives
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for Google's ranking factors
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading

## 🛡️ Security

- **Environment Variables**: Sensitive data stored securely
- **API Rate Limiting**: Built-in rate limiting for API endpoints
- **Input Validation**: Form validation and sanitization
- **HTTPS**: SSL/TLS encryption for all communications

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Email: info@kheehoo.com
- Phone: +1 (555) 123-4567
- Website: https://kheehoo.com

## 🔄 Updates

### Version 1.0.0
- Initial release
- Complete website with all pages
- AI chat widget with streaming
- SEO optimization
- Vercel deployment ready

---

Built with ❤️ by the KheeHoo team# KeeHoo-web-site
