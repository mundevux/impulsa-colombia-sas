import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Impulsa Colombia | Proyectos Inmobiliarios",
  description:
    "Impulsa Colombia es una empresa de proyectos inmobiliarios que ofrece vivienda de interés social y vivienda de interés prioritario en Colombia, ofreciendo calidad y seguridad a nuestros clientes.",
  keywords:
    "Impulsa Colombia, Proyectos Inmobiliarios, Vivienda de interés social, Vivienda de interés prioritario, Edificios residenciales en Colombia, Proyectos de vivienda en Colombia",
  index: "index, follow",
  ogTitle: "Impulsa Colombia | Proyectos Inmobiliarios",
  ogDescription:
    "Impulsa Colombia es una empresa de proyectos inmobiliarios que ofrece vivienda de interés social y vivienda de interés prioritario en Colombia, ofreciendo calidad y seguridad a nuestros clientes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
