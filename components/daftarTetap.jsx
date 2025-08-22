import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CgMenuGridR } from "react-icons/cg";
import { FiMapPin, FiPhoneCall, FiMail } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
// KOMPONEN SAYA
import Navigasi from "@/components/navigasi";
import Sosial from "@/components/sosial";

const DaftarTetap = () => {
    const [apakahTerpasang, setApakahTerpasang] = useState(false);
    const [tampilkanDaftar, setTampilkanDaftar] = useState(false);
    const [tampilkanTombolDaftar, setTampilkanTombolDaftar] = useState(false);

    const apakahSaluler = useMediaQuery({ query: "(max-width: 640px)" });

    useEffect(() => {
        setApakahTerpasang(true);
    }, []);

    useEffect(() => {
        if (apakahTerpasang) {
            const tanganiBergulir = () => {
                setTampilkanTombolDaftar(window.scrollY > 150);
            };

            if (!apakahSaluler) {
                window.addEventListener("scroll", tanganiBergulir);
                return () => {
                    window.removeEventListener("scroll", tanganiBergulir);
                };
            } else {
                setTampilkanTombolDaftar(true);
            }
        }
    }, [apakahSaluler, apakahTerpasang]);

    if (!apakahTerpasang) return null;

    return (
        <div className="fixed w-full h-[400px] z-50 flex justify-center pointer-events-none bg-transparent">
            <AnimatePresence>
                {tampilkanDaftar && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full max-w-md md:max-w-none h-[400px] bottom-[28rem] xl:bottom-[21.2rem] px-4 pointer-events-auto"
                    >
                        <div className="bg-white w-full h-full shadow-kebiasaan max-w-[1170px] mx-auto py-12 xl:py-12 px-12 xl:px-32 flex items-center gap-12 rounded-lg">
                            <Navigasi
                                gayaWadah="md:border-r-2 border-kedua/20 md:pr-12 w-full md:w-auto text-center md:text-left"
                                gayaDaftar="flex flex-col justify-center gap-4"
                                gayaTautan="text-utama text-4xl font-utama cursor-pointer transition-all duration-300 hover:text-aksen hover:underline hover:underline-offset-4"
                                pengintai={true}
                            />

                            <div className="hidden md:flex mx-auto">
                                <div>
                                    <div className="flex gap-12 mb-12">
                                        {/* LOKASI */}
                                        <div className="flex flex-col">
                                            <div className="text-[28px] text-aksen mb-2">
                                                <FiMapPin />
                                            </div>
                                            <p className="font-semibold text-utama text-lg">
                                                My Location
                                            </p>
                                            <p>Bandung, Indonesia</p>
                                        </div>
                                        {/* PONSEL */}
                                        <div className="flex flex-col">
                                            <div className="text-[28px] text-aksen mb-2">
                                                <FiPhoneCall />
                                            </div>
                                            <p className="font-semibold text-utama text-lg">
                                                Contact Me
                                            </p>
                                            <p>+62 823-1833-4287</p>
                                        </div>
                                        {/* EMAIL */}
                                        <div className="flex flex-col">
                                            <div className="text-[28px] text-aksen mb-2">
                                                <FiMail />
                                            </div>
                                            <p className="font-semibold text-utama text-lg">
                                                Email
                                            </p>
                                            <p>fifanaufal10@gmail.com</p>
                                        </div>
                                    </div>
                                    {/* SOSIAL MEDIA */}
                                    <Sosial
                                        gayaWadah="flex gap-2"
                                        gayaIkon="text-[20px] w-[32px] h-[32px] text-utama flex items-center justify-center rounded-full transition-all duration-300 hover:bg-aksen hover:text-white"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {apakahSaluler ? (
                <div className="fixed z-50 bottom-16">
                    <button
                        onClick={() => setTampilkanDaftar(!tampilkanDaftar)}
                        className="bg-aksen shadow-kebiasaan w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none pointer-events-auto"
                    >
                        <CgMenuGridR className="text-4xl text-white" />
                    </button>
                </div>
            ) : (
                <AnimatePresence>
                    {tampilkanTombolDaftar && (
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 40,
                            }}
                            className="fixed z-50 bottom-16 pointer-events-auto"
                        >
                            <button
                                onClick={() =>
                                    setTampilkanDaftar(!tampilkanDaftar)
                                }
                                className="bg-aksen shadow-kebiasaan w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none"
                            >
                                <CgMenuGridR className="text-4xl text-white" />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </div>
    );
};

export default DaftarTetap;
