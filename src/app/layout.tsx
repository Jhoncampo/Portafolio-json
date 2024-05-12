import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { basics } from "@cv";

const inter = Inter({ subsets: ["latin"] });
const { name, url, image } = basics;

export const metadata: Metadata = {
    title: `Portafolio de ${name}`,
    description: `Bienvenidos a mi portafolio, mi nombre es ${name}`,
    icons: {
        icon: "https://cdn.empresataxis.online/icono-portafolio.webp",
    },
    openGraph: {
        title: `Portafolio de ${name}`,
        description: `Bienvenidos a mi portafolio, mi nombre es ${name}`,
        url: `${url}`,
        images: `${image}`,
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
