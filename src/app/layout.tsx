import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Desprender - Buho",
  description: "Espacio creado para encontrar la calma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
