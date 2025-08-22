import React from "react";
import AnimasiTeks from "@/components/animasiTeks";
// KOMPONEN SAYA
import KartuKartu from "@/components/kartuKartu";

const Perjalanan = () => {
    return (
        <section className="container mx-auto" id="Journey">
            <AnimasiTeks
                teks="My Career Story"
                gayaTeks="h2 mb-[30px] text-center"
            />
            <KartuKartu />
        </section>
    );
};

export default Perjalanan;
