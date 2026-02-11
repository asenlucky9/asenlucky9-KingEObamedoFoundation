# Netlify Deployment Guide

## Prerequisites
- A Netlify account (sign up at https://www.netlify.com)
- Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider (GitHub/GitLab/Bitbucket)
   - Select your repository

3. **Configure Build Settings**
   - **Base directory:** `frontend`
   - **Build command:** `npm run build`
   - **Publish directory:** `frontend/dist`
   - Click "Deploy site"

4. **Set Environment Variables**
   - Go to Site settings → Environment variables
   - Add your Firebase and payment gateway keys:
     ```
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     VITE_PAYSTACK_PUBLIC_KEY=your_paystack_key
     VITE_FLUTTERWAVE_PUBLIC_KEY=your_flutterwave_key
     ```

5. **Redeploy**
   - After adding environment variables, trigger a new deployment

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

4. **Build the project**
   ```bash
   npm run build
   ```

5. **Deploy**
   ```bash
   netlify deploy --prod
   ```

   Or for a draft deployment:
   ```bash
   netlify deploy
   ```

## Build Configuration

The project is configured with:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18

## Important Notes

1. **Environment Variables**: Make sure to add all required environment variables in Netlify dashboard
2. **React Router**: The `_redirects` file ensures all routes work correctly
3. **Build Output**: Vite builds to the `dist` folder
4. **Base Directory**: If your repo root is not the frontend folder, set base directory to `frontend` in Netlify settings

## Post-Deployment

1. **Custom Domain**: Add your custom domain in Netlify dashboard
2. **SSL Certificate**: Netlify provides free SSL certificates automatically
3. **Continuous Deployment**: Every push to your main branch will trigger a new deployment

## Troubleshooting

- **404 errors on routes**: Ensure `_redirects` file is in the `public` folder
- **Build fails**: Check Node version (should be 18+)
- **Environment variables not working**: Make sure they start with `VITE_` prefix
- **Images not loading**: Verify image paths are correct and files are in `public` folder
