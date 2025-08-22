"use client";
import React from "react";
// KOMPONEN SAYA
import Logo from "@/components/logo";
import Sosial from "@/components/sosial";
import Navigasi from "@/components/navigasi";

const Kepala = () => {
    return (
        <header className="w-full absolute py-8 xl:py-[48px] z-50">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-4 lg:justify-between">
                    <Logo />
                    <div className="flex items-center gap-12">
                        <Navigasi
                            gayaWadah="hidden xl:flex"
                            gayaDaftar="flex gap-6"
                            gayaTautan="text-[#f7f7f7] font-utama text-xl tracking-[1.4px] transition-all duration-300 cursor-pointer hover:text-utama hover:underline hover:underline-offset-4"
                        />
                        <Sosial
                            gayaWadah="flex items-center gap-2"
                            gayaIkon="text-base w-[32px] h-[32px] bg-utama text-white flex items-center justify-center rounded-full transition-all duration-300 hover:bg-white hover:text-utama"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Kepala;
