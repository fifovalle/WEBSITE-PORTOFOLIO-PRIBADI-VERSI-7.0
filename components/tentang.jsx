import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// GAMBAR SAYA
import Gambarku from "@/public/assets/tentang/Naufal.jpg";
import Bentuk1 from "@/public/assets/tentang/bentuk-1.svg";
// KOMPONEN SAYA
import AnimasiTeks from "@/components/animasiTeks";

const Tentang = () => {
    return (
        <section className="relative pt-12 pb-24" id="About Me">
            <div className="container mx-auto h-full">
                <div className="h-full flex items-center justify-center">
                    {/* GAMBAR DAN BENTUK */}
                    <div className="hidden xl:flex flex-1 pl-8">
                        <div className="relative w-full max-w-[380px]">
                            {/* BENTUK */}
                            <div className="w-[160px] h-[160px] bg-aksen absolute -left-5 -top-5 -z-10"></div>
                            {/* GAMBAR */}
                            <div className="rounded-tl-[8px] rounded-tr-[120px] w-full min-h-[480px] flex items-end justify-center">
                                <Image
                                    src={Gambarku}
                                    quality={100}
                                    priority
                                    alt="gambar saya"
                                />
                            </div>
                            {/* BENTUK TERBALIK */}
                            <div className="absolute top-2/4 -right-[65px] flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{
                                        duration: 10,
                                        ease: "linear",
                                        repeat: Infinity,
                                    }}
                                >
                                    <Image
                                        src={Bentuk1}
                                        width={160}
                                        height={160}
                                        alt="bentuk"
                                    />
                                </motion.div>
                                <div className="absolute text-center text-white">
                                    <div className="text-5xl font-bold leading-none">
                                        1+
                                    </div>
                                    <div className="leading-none text-center">
                                        Years of <br /> Experience
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* TEKS */}
                    <div className="text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0 flex flex-col gap-6">
                        <div>
                            <AnimasiTeks
                                teks="I am Naufal FIFA"
                                gayaTeks="h2 mb-2"
                            />
                            <p className="text-lg">
                                Frontend to Backend. Web to Mobile.
                            </p>
                        </div>
                        <p className="max-w-[680px] mx-auto xl:mx-0 mb-2 text-justify">
                            Hello! I am a Fullstack Web &amp; Mobile Developer
                            with over a year of experience building seamless web
                            and mobile applications. I specialize in designing
                            intuitive frontends and developing robust backends.
                            I am passionate about creating smooth digital
                            experiences across both web and mobile platforms.
                            With a strong enthusiasm for technology and
                            continuous learning, I turn ideas into impactful,
                            user-centric solutions while ensuring best practices
                            are followed to avoid errors during deployment.
                        </p>
                        <div className="flex flex-col lg:flex-row gap-8 xl:gap-9 max-w-max mx-auto xl:mx-0 items-center">
                            {/* TEKS 1 */}
                            <div className="max-w-max">
                                <div className="uppercase font-bold text-utama">
                                    Age
                                </div>
                                <p>
                                    {(() => {
                                        const lahir = new Date("2003-02-10");
                                        const sekarang = new Date();
                                        let umur =
                                            sekarang.getFullYear() -
                                            lahir.getFullYear();
                                        const belumUltah =
                                            sekarang.getMonth() <
                                                lahir.getMonth() ||
                                            (sekarang.getMonth() ===
                                                lahir.getMonth() &&
                                                sekarang.getDate() <
                                                    lahir.getDate());
                                        return belumUltah ? umur - 1 : umur;
                                    })()}
                                </p>
                            </div>

                            {/* TEKS 2 */}
                            <div className="max-w-max">
                                <div className="uppercase font-bold text-utama">
                                    Birthplace
                                </div>
                                <p>Bandung</p>
                            </div>

                            {/* TEKS 3 */}
                            <div className="max-w-max">
                                <div className="uppercase font-bold text-utama">
                                    Phone
                                </div>
                                <p>+62 823-1833-4287</p>
                            </div>

                            {/* TEKS 3 */}
                            <div className="max-w-max">
                                <div className="uppercase font-bold text-utama">
                                    Email
                                </div>
                                <p>fifanaufal10@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tentang;
