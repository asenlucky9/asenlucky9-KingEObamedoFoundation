# Clear Cache Instructions

If you're still seeing the Tailwind CSS PostCSS error, try these steps:

1. **Stop the dev server** (Ctrl+C)

2. **Clear Vite cache:**
   ```bash
   Remove-Item -Recurse -Force node_modules\.vite
   ```

3. **Clear npm cache (optional):**
   ```bash
   npm cache clean --force
   ```

4. **Reinstall dependencies:**
   ```bash
   Remove-Item -Recurse -Force node_modules
   npm install
   ```

5. **Restart dev server:**
   ```bash
   npm run dev
   ```

The PostCSS config is now set up correctly for Tailwind CSS v3.4.19.
