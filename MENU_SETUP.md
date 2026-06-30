# Menu System Setup Guide

## 🎉 What's New

Your website now has a dedicated **Full Menu Page** accessible at `/menu` with a **QR code** that customers can scan to view the menu directly.

## 📱 Features

- **Full Menu Page**: Access at `/menu` route with all dishes organized by category
- **QR Code**: Generated automatically, points to your menu page
- **Expandable Categories**: Click to expand/collapse dish categories
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Live QR Scanning**: Works in production once deployed

## 🚀 Getting Started

### 1. Update Your Production Domain

Edit the `.env` file and replace the placeholder with your actual domain:

```env
# .env
VITE_MENU_URL=https://yourdomain.com/menu
```

### 2. Regenerate QR Code for Production

After updating the domain, run:

```bash
npm run generate-qr
```

This will create a new `public/qr-code.jpg` file pointing to your production URL.

### 3. Test Locally

Start your development server:

```bash
npm run dev
```

Then:
- Visit `http://localhost:5173/menu` to see the full menu page
- Visit `http://localhost:5173/` to see the home page
- Click "View Menu" button in the navbar to navigate to the menu page

## 📁 New Files Created

- `src/components/Menu.tsx` - Full menu page component with QR code
- `generate-qr.ts` - Script to generate QR codes
- `.env` - Environment variables for production URL
- `public/qr-code.jpg` - Generated QR code image

## 🔧 File Structure Updates

- `src/App.tsx` - Now uses React Router with two routes: `/` (home) and `/menu` (menu)
- `src/components/Navbar.tsx` - Updated to include router navigation
- `package.json` - Added `generate-qr` script and updated build process

## 🎨 Menu Customization

The menu displays data from `src/data/menu.ts`. Your existing menu categories and items are displayed beautifully with:

- Category headers with chapter info and custom colors
- Expandable/collapsible items
- Dish images, ingredients, and preparation method
- "Popular" badges for featured items
- Color-coded sections for different categories

## 🖨️ Using the QR Code

The generated QR code (`public/qr-code.jpg`) can be:

1. **Printed on Physical Menus**: Customers can scan to view the digital version
2. **Posted at the Restaurant**: Display at entry, tables, or checkout counter
3. **Digital Menu Linking**: Use in emails, websites, or social media

## 📦 Build Process

When you run `npm run build`:

1. Automatically generates the QR code with your production URL
2. Compiles TypeScript and React
3. Builds optimized production files

## 🚨 Important Notes

- **Update .env Before Deployment**: The QR code must point to your actual domain for production scanning to work
- **Regenerate QR After URL Changes**: If you change your domain, run `npm run generate-qr` to update the QR code
- **Production URL Format**: Use your full deployed domain (e.g., `https://savouryspoon.com/menu`)

## 🎯 Next Steps

1. Update `.env` with your production domain
2. Run `npm run generate-qr` to create the final QR code
3. Print or display the QR code at your restaurant
4. Deploy your website
5. Test QR scanning on your phone!

## 📧 Support

If you need to make changes to:

- **Menu Items**: Edit `src/data/menu.ts`
- **Menu Page Styling**: Edit `src/components/Menu.tsx`
- **QR Code Settings**: Edit `generate-qr.ts` and re-run generation
- **Navigation**: Edit `src/components/Navbar.tsx`
