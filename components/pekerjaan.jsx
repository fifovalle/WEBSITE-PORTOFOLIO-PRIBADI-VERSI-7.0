"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// KOMPONEN SAYA
import AnimasiTeks from "@/components/animasiTeks";
import KontenPekerjaan from "@/components/kontenPekerjaan";
// PENGAIT SAYA
import useTampilkanPekerjaan from "@/hooks/useTampilkanDataPekerjaan";

const Pekerjaan = () => {
    const { pekerjaan } = useTampilkanPekerjaan();

    const kategoriUnik = Array.from(
        new Set(pekerjaan.map((pekerjaan) => pekerjaan.Kategori))
    );

    const dataTab = [
        { Kategori: "All" },
        ...kategoriUnik.map((Kategori) => ({ Kategori })),
    ];

    const [nilaiTab, setNilaiTab] = useState("All");
    const [perlihatkanKonten, setPerlihatkanKonten] = useState(6);

    const pekerjaanTerurut = pekerjaan
        .map((pekerjaan) => ({
            ...pekerjaan,
            Tanggal:
                pekerjaan.Tanggal instanceof Date
                    ? pekerjaan.Tanggal.getTime()
                    : pekerjaan.Tanggal.toDate().getTime(),
        }))
        .sort((a, b) => b.Tanggal - a.Tanggal);

    const filterPekerjaan =
        nilaiTab === "All"
            ? pekerjaanTerurut
            : pekerjaanTerurut.filter((konten) => konten.Kategori === nilaiTab);

    const kotenSelengkapnya = () => {
        setPerlihatkanKonten((sebelumnya) => sebelumnya + 3);
    };

    return (
        <section className="pt-24 min-h-[1000px]" id="Work">
            <div className="container mx-auto">
                <Tabs defaultValue="All" className="w-full flex flex-col">
                    <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[30px]">
                        <AnimasiTeks
                            teks="My Latest Professional Experience"
                            gayaTeks="h2 mb-[30px] xl:mb-0"
                        />

                        <TabsList className="max-w-max h-full mb-[30px] flex flex-col md:flex-row gap-4 md:gap-0">
                            {dataTab.map((tab, indeks) => (
                                <TabsTrigger
                                    key={indeks}
                                    value={tab.Kategori}
                                    className="capitalize w-[120px]"
                                    onClick={() => setNilaiTab(tab.Kategori)}
                                >
                                    {tab.Kategori}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    <TabsContent value={nilaiTab} className="w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
                            <AnimatePresence>
                                {filterPekerjaan
                                    .slice(0, perlihatkanKonten)
                                    .map((konten, indeks) => (
                                        <motion.div
                                            key={indeks}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <KontenPekerjaan {...konten} />
                                        </motion.div>
                                    ))}
                            </AnimatePresence>
                        </div>

                        {perlihatkanKonten < pekerjaan.length && (
                            <div className="flex justify-center mt-12">
                                <button
                                    onClick={kotenSelengkapnya}
                                    className="btn btn-accent"
                                >
                                    View More
                                </button>
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

export default Pekerjaan;
