import "@/app/globals.css";
import localFont from "next/font/local";

const laobrige = localFont({
  src: [
    {
      path: "./fonts/LaObrige.otf",

      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-laobrige",
});
const font = localFont({
  src: [
    {
      path: "./fonts/Penpoint.otf",

      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-font",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
