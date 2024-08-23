import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Taskbud",
  description: "Taskbud by smartlify",
};

export default function RootLayout({ children, modal }) {
  console.log(modal);
  return (
    <html lang="en">
      <body className={`relative ${inter.className}`}>
        {modal}
        {children}
      </body>
    </html>
  );
}
