import "@/app/globals.css";
import type { Metadata } from "next";
import { Sometype_Mono } from "next/font/google";
// Components
import MainNav from "@/components/MainNav";
import PageTransition from "@/components/PageTransition";
import RectangleTransition from "@/components/RectangleTransition";

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
                            <header>header</header>
                            {children}
                        </div>
                    </div>
                </PageTransition>
            </body>
        </html>
    );
}
