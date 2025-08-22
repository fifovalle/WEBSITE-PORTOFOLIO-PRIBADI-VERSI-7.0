import React from "react";
import Image from "next/image";
// SVG SAYA
import ikon1 from "@/public/assets/layanan/ikon-1.svg";
import ikon2 from "@/public/assets/layanan/ikon-2.svg";
import ikon3 from "@/public/assets/layanan/ikon-3.svg";
import ikon4 from "@/public/assets/layanan/ikon-4.svg";

const layananSaya = [
    {
        ikon: ikon1,
        judul: "UI/UX Design",
        deskripsi:
            "Delivering visually appealing interfaces and seamless user experiences to boost user engagement.",
    },
    {
        ikon: ikon2,
        judul: "Web & Mobile",
        deskripsi:
            "Developing responsive and user-friendly web and mobile applications, ensuring accessibility across devices for an optimal user experience.",
    },
    {
        ikon: ikon3,
        judul: "E-Commerce Solutions",
        deskripsi:
            "Delivering comprehensive e-commerce solutions to help your business conduct online transactions with ease and security.",
    },
    {
        ikon: ikon4,
        judul: "Caring & Supportive",
        deskripsi:
            "Providing ongoing support and attention to every detail to ensure your project's success and client satisfaction.",
    },
];

const Layanan = () => {
    return (
        <section className="relative z-40" id="Layanan">
            <div className="container mx-auto">
                <ul className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] -top-12 place-items-center lg:place-items-stretch">
                    {layananSaya.map((layanan, indeks) => (
                        <li
                            key={indeks}
                            className="bg-white shadow-kebiasaan p-6 max-w-[350px] md:max-w-none rounded-l"
                        >
                            <Image
                                src={layanan.ikon}
                                width={48}
                                height={48}
                                alt="ikon layanan"
                                className="mb-4"
                            />
                            <h3 className="text-[20px] text-utama font-semibold mb-3">
                                {layanan.judul}
                            </h3>
                            <p className="text-[15px]">{layanan.deskripsi}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Layanan;
