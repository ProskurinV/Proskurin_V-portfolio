import './globals.css'

export const metadata = {
  title: 'My CV',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
