import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Creativity",
  description: "Creativity Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
<meta name="title" content="Creativity" />
<meta name="description" content="Creativity Project" />

<meta property="og:type" content="website" />
<meta property="og:url" content="https://creativity-ochre.vercel.app/" />
<meta property="og:title" content="Creativity" />
<meta property="og:description" content="Creativity Project" />
<meta property="og:image" content="meta-image.webp" />

<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://creativity-ochre.vercel.app/" />
<meta property="twitter:title" content="Creativity" />
<meta property="twitter:description" content="Creativity Project" />
<meta property="twitter:image" content="meta-image.webp" />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
