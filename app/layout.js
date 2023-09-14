import Navbar from '@/components/Navbar'
import './globals.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="main">
            <div className='max-w-3xl mx-auto p-4'>
            
            <Navbar />
            {children}
            </div>
      </body>
    </html>
  )
}
