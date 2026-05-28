import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Del Mar Jiu-Jitsu Club",
  description:
    "Jiu-Jitsu, fitness, and community in Del Mar, California. Kids, adults, no-gi, private training, and performance center programs.",
  metadataBase: new URL("https://delmarjiujitsuclub.com"),
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg"
  },
  openGraph: {
    title: "Del Mar Jiu-Jitsu Club",
    description: "Train like a champion at Del Mar Jiu-Jitsu Club.",
    images: [
      {
        url: "https://cdn.sanity.io/images/d26yk9dk/production/65a00dcbe8861e6a77b224b223fea36e74f24b61-2000x1333.jpg",
        width: 2000,
        height: 1333
      }
    ]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070a"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
