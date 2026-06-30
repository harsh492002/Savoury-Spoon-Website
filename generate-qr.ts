import QRCode from 'qrcode'
import * as fs from 'fs'
import * as path from 'path'
import * as dotenv from 'dotenv'

// Load environment variables
dotenv.config()

// Generate QR code for the menu page
// For production, change the URL in .env file
const menuUrl = process.env.VITE_MENU_URL || 'http://localhost:5173/menu'

async function generateQRCode() {
  try {
    const publicDir = path.join(process.cwd(), 'public')
    const outputPath = path.join(publicDir, 'qr-code.jpg')

    // Generate QR code as JPEG image
    await QRCode.toFile(outputPath, menuUrl, {
      color: {
        dark: '#4a3728', // Match your brand color
        light: '#fdf8f3',
      },
      width: 300,
      margin: 2,
      type: 'image/jpeg',
      quality: 0.95,
    })

    console.log(`✓ QR Code generated successfully at: ${outputPath}`)
    console.log(`✓ QR Code points to: ${menuUrl}`)
  } catch (error) {
    console.error('Error generating QR code:', error)
    process.exit(1)
  }
}

generateQRCode()
