# Deployment Checklist

## Pre-Deployment Checklist

- [ ] All environment variables are set in `.env.example`
- [ ] Build command works locally: `npm run build`
- [ ] Preview build works: `npm run preview`
- [ ] All images are in the `public` folder
- [ ] All routes work correctly
- [ ] No console errors
- [ ] Mobile responsive design tested
- [ ] All forms are functional
- [ ] External links work correctly

## Netlify Configuration

### Build Settings
- **Base directory:** `frontend` (if repo root is not frontend)
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18

### Environment Variables to Add
Copy these from your `.env.example` and add them in Netlify Dashboard:
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_MEASUREMENT_ID`
- `VITE_PAYSTACK_PUBLIC_KEY`
- `VITE_FLUTTERWAVE_PUBLIC_KEY`
- `VITE_SITE_URL` (update to your Netlify URL)

## Quick Deploy Steps

1. **Test build locally:**
   ```bash
   cd frontend
   npm run build
   npm run preview
   ```

2. **Push to Git:**
   ```bash
   git add .
   git commit -m "Ready for Netlify deployment"
   git push
   ```

3. **Deploy on Netlify:**
   - Connect repository
   - Set build settings
   - Add environment variables
   - Deploy!

## Files Created for Deployment

- ✅ `netlify.toml` - Netlify configuration
- ✅ `public/_redirects` - React Router support
- ✅ `NETLIFY_DEPLOYMENT.md` - Detailed deployment guide
