import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToolbarWrapper } from "@/components/ToolbarWrapper";

export const metadata: Metadata = {
  title: "Tech Help FL",
  description: "Tech help and Google Maps optimization in Florida",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Initialize dark mode before first paint to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const stored = localStorage.getItem("darkMode");
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                const shouldBeDark = stored !== null ? stored === "true" : prefersDark;
                if (shouldBeDark) {
                  document.documentElement.classList.add("dark");
                }
              })();
            `,
          }}
        />
        {/* Favicon Links - Fallback for older browsers */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-09MX1Y9BR1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-09MX1Y9BR1');
            `,
          }}
        />
      </head>
      <body>
        <ToolbarWrapper />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
