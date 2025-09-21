"use client"

import { useState } from 'react'
import Topnav from '@/components/dashboard/Topnav'
import Sidebar from '@/components/dashboard/Sidebar'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function DashboardLayout({ children }) {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  const isDark = theme === 'dark'

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Topnav theme={theme} toggleTheme={toggleTheme} />
        <div className="d-flex">
          <Sidebar theme={theme} />
          <div className="flex-grow-1 mt-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
