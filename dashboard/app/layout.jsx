import { Inter } from 'next/font/google'
import './ui/globals.css'
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard',
  description: 'User Dashboard',
}

const Layout = ({ children }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex min-h-screen items-center justify-center">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}

export default Layout