import type { Metadata } from "next";
import { Patrick_Hand, Fraunces } from "next/font/google";
import "./globals.css";
import { ThemeWrapper } from "../components/ThemeWrapper";

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick-hand",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://manishrana.dev'),
  title: {
    default: "Manish Rana | Portfolio",
    template: "%s | Manish Rana",
  },
  description: "Full Stack Developer with ~7 years of experience in building scalable, high-performance web applications. Specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: ['Manish Rana', 'Full Stack Developer', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Manish Rana' }],
  creator: 'Manish Rana',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Manish Rana | Portfolio',
    description: 'Full Stack Developer with ~7 years of experience in building scalable, high-performance web applications.',
    siteName: 'Manish Rana',
    images: [
      {
        url: '/mkart.png',
        width: 1200,
        height: 630,
        alt: 'Manish Rana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manish Rana | Portfolio',
    description: 'Full Stack Developer with ~7 years of experience in building scalable, high-performance web applications.',
    creator: '@ManishRaanaa',
    images: ['/mkart.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-[var(--background)] text-[var(--foreground)]">
      <body
        className={`${patrickHand.variable} ${fraunces.variable} antialiased font-sans bg-[var(--background)] text-[var(--foreground)]`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && systemPrefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
