import "@/app/globals.css";
import type { Metadata } from "next";
import { Sometype_Mono } from "next/font/google";
// Components
import Header from "@/components/Header";
import MainNav from "@/components/MainNav";
import Gradient from "@/components/Gradient";
import PageTransition from "@/components/PageTransition";
import RectangleTransition from "@/components/RectangleTransition";
import AudioPlayer from "@/components/AudioPlayer"; // ⬅️ tambahin

const someTypeMono = Sometype_Mono({
    variable: "--font-sometypeMono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Naufal FIFA",
    description: "Fullstack Cross Platform Developer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${someTypeMono.variable} antialiased overflow-hidden relative`}
            >
                {/* =============== BACKSOUND MUSIC (GLOBAL, hanya sekali) ================ */}
                <AudioPlayer />

                {/* =============== GRADIENT ================ */}
                <Gradient />
                {/* =============== RECTANGLES TRANSITION ================ */}
                <RectangleTransition />
                {/* =============== PAGE TRANSITION ================ */}
                <PageTransition>
                    {/* =============== WRAPPER ================ */}
                    <div className="flex">
                        {/* ============ MAIN NAV ============ */}
                        <div className="hidden 2xl:flex w-[285px] h-screen bg-secondary">
                            <MainNav />
                        </div>

                        {/* =============== CONTENT ================ */}
                        <div className="w-full max-w-[1130px] px-[15px] mx-auto">
                            {/* ============== HEADER ================ */}
                            <Header />
                            {/* =============== CHILDREN ================ */}
                            {children}
                        </div>
                    </div>
                </PageTransition>
            </body>
        </html>
    );
}
