import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Métadonnées optimisées pour le SEO local des Délices de Saleilles
export const metadata: Metadata = {
  title: "Les Délices de Saleilles | Restaurant Traditionnel & Asiatique à Saleilles",
  description: "Découvrez notre formule buffet unique à 19,80€, nos suggestions de la semaine et nos soirées Karaoké. Cuisine artisanale fait maison à 5 min de Perpignan.",
  keywords: [
    "restaurant saleilles", 
    "buffet saleilles", 
    "les delices de saleilles", 
    "karaoke perpignan", 
    "restaurant asiatique perpignan", 
    "picarfrites saleilles"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#fdf6f0] text-zinc-900 transition-colors duration-300">
        
        {/* Le Header s'affiche en haut de toutes les pages */}
        <Header />
        
        {/* Le contenu principal prend tout l'espace disponible */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Le Footer avec ses nouveaux liens juridiques */}
        <Footer />
        
      </body>
    </html>
  );
}