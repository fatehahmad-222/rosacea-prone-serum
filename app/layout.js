import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Rosacea-Prone Redness-Calming Serum | Murasaki Beauty",
  description:
    "A feather-light daily serum for sensitive, redness-prone skin. Calms the look of visible redness, soothes reactivity, and supports the skin barrier — fragrance-free and non-comedogenic.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-dvh flex-col overflow-x-clip antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
