import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cúspide Gym",
  description: "Entrenamientos personalizados para mejorar tu salud o rendimiento deportivo. Don't dream for it, train for it.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
