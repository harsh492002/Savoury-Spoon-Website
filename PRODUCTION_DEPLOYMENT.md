# Production Deployment Guide - QR Menu System

## 🚀 Pre-Deployment Checklist

Before deploying your website with the new menu system, follow these steps:

### 1. Update Your Domain in `.env`

Edit `.env` file and update the production URL:

```env
# .env - PRODUCTION VERSION
VITE_MENU_URL=https://yourdomain.com/menu
```

**Examples:**
- `https://savouryspoon.com/menu`
- `https://restaurant.example.com/menu`
- `https://myrestaurant.vercel.app/menu` (if using Vercel)

### 2. Regenerate QR Code

Run the QR code generation before deployment:

```bash
npm run generate-qr
```

This creates `public/qr-code.jpg` pointing to your production URL.

### 3. Test Locally

```bash
npm run dev
```

- Navigate to `http://localhost:5173/menu`
- Verify the menu displays correctly
- Check that all images load properly

### 4. Build for Production

```bash
npm run build
```

This automatically:
- Generates the QR code with your production URL
- Compiles all code
- Optimizes for production
- Creates the `dist/` folder for deployment

## 📱 QR Code Scanning

Once deployed, the QR code will work on:
- ✅ iOS (built-in camera app)
- ✅ Android (Google Lens or camera app)
- ✅ Android (dedicated QR scanner apps)
- ✅ Web browsers (with QR scanning capability)

## 🌐 Hosting Requirements

Make sure your hosting supports:

- **React Router SPA routing** - The server should serve `index.html` for any route not found
- **Trailing slash handling** - Both `/menu` and `/menu/` should work

### Hosting Configuration

#### Vercel (Recommended - Auto-configured)
1. Connect your repo to Vercel
2. Update `.env` before each deployment
3. Vercel automatically handles SPA routing

#### Netlify
1. Create `netlify.toml` in root:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### GitHub Pages
Not recommended for SPA routing without extra configuration.

#### Traditional Server (Apache/Nginx)
Configure to serve `index.html` for non-existent routes.

## 🔒 Security Notes

- The QR code is public and intentionally scannable
- Menu data is already public on your website
- No sensitive information is exposed
- HTTPS recommended for all connections

## 📊 Testing the QR Code

### Before Going Live

1. **Generate QR for staging URL first:**
   ```bash
   VITE_MENU_URL=https://staging.yourdomain.com/menu npm run generate-qr
   ```

2. **Print and test with phone:**
   - Print `public/qr-code.jpg`
   - Scan with your phone camera
   - Verify it opens the correct URL

3. **After confirmation, generate for production:**
   ```bash
   VITE_MENU_URL=https://yourdomain.com/menu npm run generate-qr
   ```

## 📦 Deployment Steps

### For Vercel:
```bash
# 1. Update .env with production URL
# 2. Commit changes
git add .env
git commit -m "Update production domain for QR code"

# 3. Push to trigger deployment
git push
```

### For Self-Hosted:
```bash
# 1. Update .env
VITE_MENU_URL=https://yourdomain.com/menu

# 2. Build
npm run build

# 3. Deploy dist/ folder to your server
# Upload the entire dist/ folder to your web server
```

## 🎨 Using the QR Code

### Print Options:
1. **Restaurant Menu**: Add QR code at bottom of physical menu
2. **Table Cards**: Print 4-up QR codes for each table
3. **Signage**: Display at entrance or counter
4. **Receipts**: Include in digital receipts

### Digital Usage:
- **Email**: Include in restaurant emails/newsletters
- **Social Media**: Share on Instagram, Facebook, etc.
- **Website**: Embed on your website
- **WhatsApp**: Share link in WhatsApp groups

## 🔄 Updating the QR Code

If you change your domain or hosting:

```bash
# 1. Update .env with new URL
VITE_MENU_URL=https://newdomain.com/menu

# 2. Regenerate
npm run generate-qr

# 3. Rebuild
npm run build

# 4. Re-deploy
```

## ✅ Verification Checklist

After deployment, verify:

- [ ] QR code image exists in `dist/` (or public folder)
- [ ] `/menu` route loads correctly
- [ ] Home page (`/`) still works
- [ ] Mobile menu displays properly
- [ ] All images load correctly
- [ ] QR code scans correctly with phone camera
- [ ] QR links to correct production URL
- [ ] Navigation between `/` and `/menu` works
- [ ] Navbar "View Menu" button works on all devices

## 🐛 Troubleshooting

### QR Code not scanning?
- Ensure QR image quality is high (JPG, 300x300px)
- Try different QR scanner app
- Check URL is exactly correct in `.env`

### `/menu` page shows blank/404?
- Ensure server redirects unknown routes to `index.html`
- Check hosting SPA configuration
- Test with direct URL navigation

### Images not loading on menu?
- Verify image paths in `src/data/menu.ts`
- Ensure images are in `public/Images/` folder
- Check file names match exactly (case-sensitive)

### QR links to wrong URL?
- Update `.env` file
- Run `npm run generate-qr`
- Re-upload `public/qr-code.jpg`

## 📞 Support

For issues with:
- **Routing**: Check vite config and hosting SPA support
- **QR Code**: Re-run generation with correct URL
- **Menu Items**: Edit `src/data/menu.ts`
- **Styling**: Modify `src/components/Menu.tsx`
