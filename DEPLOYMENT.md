# Deployment Guide - KheeHoo Website

This guide covers deploying the KheeHoo website to various platforms.

## 🚀 Vercel Deployment (Recommended)

### Prerequisites
- GitHub account
- Vercel account
- OpenAI API key

### Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository

3. **Configure Environment Variables**
   In Vercel dashboard, go to Settings → Environment Variables:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site will be live at the provided URL

### Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update `NEXT_PUBLIC_SITE_URL` in environment variables

## 🌐 Netlify Deployment

### Steps

1. **Build Configuration**
   Create `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [build.environment]
     NODE_VERSION = "18"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

2. **Deploy**
   - Connect GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `.next`
   - Add environment variables
   - Deploy

## ☁️ AWS Amplify Deployment

### Steps

1. **Connect Repository**
   - Go to AWS Amplify Console
   - Connect your GitHub repository
   - Select the branch to deploy

2. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Environment Variables**
   Add in Amplify console:
   - `OPENAI_API_KEY`
   - `NEXT_PUBLIC_SITE_URL`

## 🐳 Docker Deployment

### Dockerfile
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### Build and Run
```bash
docker build -t kheehoo-website .
docker run -p 3000:3000 -e OPENAI_API_KEY=your_key kheehoo-website
```

## 🔧 Environment Variables

### Required
- `OPENAI_API_KEY`: Your OpenAI API key for chat functionality

### Optional
- `NEXT_PUBLIC_SITE_URL`: Your website URL (for SEO)
- `NEXT_PUBLIC_GA_ID`: Google Analytics ID
- `CONTACT_EMAIL`: Contact form email

## 📊 Performance Optimization

### Build Optimization
```bash
# Analyze bundle size
npm run build
npm run analyze

# Optimize images
npm install @next/bundle-analyzer
```

### Runtime Optimization
- Enable gzip compression
- Set up CDN for static assets
- Configure caching headers
- Monitor Core Web Vitals

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env.local` to version control
- Use platform-specific secret management
- Rotate API keys regularly

### Headers
The `vercel.json` includes security headers:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection

### API Security
- Rate limiting on chat API
- Input validation and sanitization
- Error handling without sensitive data exposure

## 📈 Monitoring and Analytics

### Vercel Analytics
```bash
npm install @vercel/analytics
```

### Google Analytics
Add to `src/app/layout.tsx`:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
      </body>
    </html>
  )
}
```

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (18+)
   - Clear `.next` folder
   - Reinstall dependencies

2. **Environment Variables**
   - Verify variable names
   - Check platform-specific syntax
   - Ensure variables are available at build time

3. **API Errors**
   - Verify OpenAI API key
   - Check API rate limits
   - Monitor error logs

4. **Performance Issues**
   - Enable compression
   - Optimize images
   - Check bundle size

### Debug Commands
```bash
# Check build locally
npm run build
npm start

# Analyze bundle
npm run analyze

# Check environment
echo $OPENAI_API_KEY
```

## 📞 Support

For deployment issues:
- Check platform documentation
- Review error logs
- Contact platform support
- Open GitHub issue

---

**Note**: Always test deployments in a staging environment before production.
