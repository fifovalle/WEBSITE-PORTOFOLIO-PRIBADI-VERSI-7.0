"use client";
import React from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
// GAMBAR SAYA
import Gambarku from "@/public/assets/beranda/10.png";
import Panah1 from "@/public/assets/beranda/panah.svg";
import Bentuk1 from "@/public/assets/beranda/bentuk.svg";
import Bentuk2 from "@/public/assets/beranda/bentuk-2.svg";
import Bentuk3 from "@/public/assets/beranda/bentuk-3.svg";
// KOMPONEN SAYA
import Kepala from "@/components/kepala";
import Status from "@/components/status";
import BentukTerbalik from "@/components/bentukTerbalik";

const Beranda = () => {
    return (
        <section
            className="h-[800px] relative bg-aksen/10 xl:bg-white"
            id="Home"
        >
            {/* KEPALA */}
            <Kepala />

            <div className="container mx-auto h-full">
                <div className="relative z-20 h-full w-full xl:max-w-[768px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10">
                    <h1 className="h1">
                        <span className="text-aksen">Hi There! 👋</span> <br />{" "}
                        I am a
                        <TypeAnimation
                            preRenderFirstString={true}
                            sequence={[
                                "Content Creator",
                                2000,
                                "Fullstack Dev",
                                2000,
                                "Freelancer",
                                2000,
                                "College Student",
                                2000,
                                "Founder of Wireify",
                                2000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                            wrapper="span"
                            cursor={false}
                            className="ml-2 xl:ml-4"
                        />
                    </h1>
                    <p className="lead max-w-[560px] mb-7 text-justify md:text-left">
                        Specializing in powerful, tailor-made web and app
                        solutions that harmonize design and functionality.
                    </p>
                    <ScrollLink to="Contact" smooth>
                        <button
                            onClick={() => {
                                const link = document.createElement("a");
                                link.href =
                                    "/assets/NAUFAL-FADHIL-IHSAN-FIKRI-ASH-SHIDQI.pdf";
                                link.download =
                                    "NAUFAL-FADHIL-IHSAN-FIKRI-ASH-SHIDQI.pdf";
                                link.click();
                            }}
                            className="btn btn-accent transition-all 0.3s ease-in-out mb-8"
                        >
                            Get My CV
                        </button>
                    </ScrollLink>

                    {/* STATUS */}
                    <Status />
                </div>

                {/* FOTO */}
                <div className="hidden xl:flex w-[55vw] h-[800px] absolute top-0 right-0 bg-aksen">
                    <div className="absolute w-[670px] h-[900px] -bottom-16 z-40 left-[6.5vw]">
                        <Image
                            src={Gambarku}
                            alt="Gambarku"
                            fill
                            quality={100}
                            priority
                            className="object-contain"
                        />
                    </div>

                    {/* PANAH 1 */}
                    <div
                        className="hidden xl:flex absolute top-48 left-[4vw]"
                        data-scroll
                        data-scroll-speed="0.05"
                    >
                        <Image
                            src={Panah1}
                            alt="Panah"
                            width={160}
                            height={160}
                        />
                    </div>

                    {/* BENTUK 1 */}
                    <div
                        className="absolute top-[600px] left-[6vw]"
                        data-scroll
                        data-scroll-speed="0.2"
                    >
                        <BentukTerbalik
                            konten={
                                <Image
                                    src={Bentuk1}
                                    alt="Bentuk"
                                    width={38}
                                    height={38}
                                />
                            }
                            arah="kiri"
                            durasi={6}
                        />
                    </div>

                    {/* BENTUK 2 */}
                    <div
                        className="absolute top-[240px] xl:left-[30vw]"
                        data-scroll
                        data-scroll-speed="0.1"
                    >
                        <BentukTerbalik
                            konten={
                                <Image
                                    src={Bentuk2}
                                    alt="Bentuk2"
                                    width={34}
                                    height={34}
                                />
                            }
                            arah="kanan"
                            durasi={5}
                        />
                    </div>

                    {/* BENTUK 3 */}
                    <div
                        className="absolute top-[480px] xl:left-[40vw]"
                        data-scroll
                        data-scroll-speed="0.08"
                    >
                        <BentukTerbalik
                            konten={
                                <Image
                                    src={Bentuk3}
                                    alt="Bentuk3"
                                    width={36}
                                    height={36}
                                />
                            }
                            arah="kiri"
                            durasi={7}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Beranda;
