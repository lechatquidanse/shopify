import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freelance Shopify Expert — Custom Themes, Apps & High-Performance E-Commerce",
  description:
    "Freelance Shopify Expert helping brands and agencies build high-performance Shopify stores, custom themes, apps, and advanced tracking. Available for collaboration with e-commerce businesses and digital agencies.",

  keywords: [
    "Shopify expert",
    "freelance Shopify developer",
    "Shopify theme developer",
    "Shopify app developer",
    "Shopify partner",
    "Shopify consultant",
    "agency Shopify expert",
    "custom Shopify development",
    "Shopify tracking",
    "Shopify pixel",
    "Shopify checkout customization",
  ],

  openGraph: {
    title: "Freelance Shopify Expert — Custom Themes, Apps & High-Performance E-Commerce",
    description:
      "I help Shopify stores and agencies build powerful experiences: custom themes, app development, speed optimization, and advanced tracking.",
    url: "https://lechatquidanse.github.io",
    siteName: "Stéphane El Manouni - Shopify Expert Portfolio",
    images: [
      {
        url: "https://lechatquidanse.github.io/shopify/shopify.png",
        width: 512,
        height: 512,
        alt: "Shopify Expert Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Freelance Shopify Expert for Stores & Agencies",
    description:
      "Custom Shopify themes, apps, checkout tracking, and full Shopify ecosystem expertise.",
    images: ["https://lechatquidanse.github.io/shopify/shopify.png"],
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: 'icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: 'apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Your Name",
              url: "https://your-domain.com",
              jobTitle: "Freelance Shopify Expert",
              image: "https://your-domain.com/your-photo.jpg",
              description:
                "Freelance Shopify Expert specializing in custom themes, apps, tracking, and performance optimization.",
              sameAs: [
                "https://github.com/yourname",
                "https://www.linkedin.com/in/yourname/",
              ],
              knowsAbout: [
                "Shopify Liquid",
                "Shopify Theme Development",
                "Shopify App Development",
                "Shopify Hydrogen",
                "Shopify Checkout Extensibility",
                "Shopify Pixels",
                "React",
                "Node.js",
                "E-commerce SEO",
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
