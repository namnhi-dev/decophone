import type { Metadata } from "next";
import { K2D } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Providers from "./components/Providers";

const font = K2D({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
export const metadata: Metadata = {
    title: "Deco Phone",
    description: "Deco Phone",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={font.className}>
                <Navbar />
                <main className="flex dark grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
                    <div className="flex-1 flex flex-col h-full">
                        <Providers>{children}</Providers>
                    </div>
                    <Footer />
                </main>
                <Toaster />
            </body>
        </html>
    );
}
