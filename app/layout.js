import './globals.css'
import { Lobster } from 'next/font/google'

const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-lobster',
});

export const metadata = {
  title: 'Les Délices de Saleilles',
  description:
    "Découvrez Les Délices de Saleilles, restaurant convivial alliant cuisine traditionnelle française et spécialités asiatiques faites maison. Une expérience culinaire unique à Saleilles, près de Perpignan.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={lobster.variable}>
      <head>
        <link rel="icon" href="favicon.png" />
        
      </head>
     <body className="font-lobster">{children}</body>
    </html>
  )
}