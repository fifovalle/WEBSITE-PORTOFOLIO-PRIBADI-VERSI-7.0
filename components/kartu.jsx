import React from "react";
import Image from "next/image";
// GAMBAR SAYA
import Gambar from "@/public/assets/perjalanan/bentuk.svg";

const Kartu = ({
    nama,
    ikon,
    jenis,
    posisi,
    intuisi,
    deskripsi,
    pencapaian,
    perusahaan,
    tautanLogo,
    jangkaWaktu,
}) => {
    return (
        <div className="w-full h-[450px] md:h-[300px] overflow-hidden flex items-center sticky top-12">
            <div className="w-full h-[400px] md:h-[270px] border border-aksen/80 bg-aksen-melayang rounded-[8px]">
                <div className="flex flex-col h-full">
                    <div className="h-[80px] xl:h-[68px] bg-white flex flex-col xl:flex-row justify-center xl:justify-between items-center px-6 md:px-[84px] rounded-tl-[8px] rounded-tr-[8px]">
                        <div className="flex gap-2">
                            <Image
                                src={Gambar}
                                width={16}
                                height={16}
                                alt="ikon"
                            />
                            <h3 className="text-lg font-semibold text-utama">
                                {jenis === "pengalaman"
                                    ? posisi
                                    : jenis === "edukasi"
                                    ? pencapaian
                                    : jangkaWaktu}
                            </h3>
                        </div>
                        <p className="text-base">
                            {jenis !== "pengalaman" && jenis !== "edukasi"
                                ? null
                                : jangkaWaktu}
                        </p>
                    </div>

                    <div className="flex-1 flex items-center justify-center xl:justify-start md:py-8 md:px-16">
                        <div className="flex flex-col xl:flex-row items-center xl:items-start gap-4 text-center xl:text-left xl:gap-10 px-4 xl:px-0">
                            {jenis === "keahlian" ? (
                                <div className="flex flex-col xl:flex-row items-center xl:items-start gap-4 text-center xl:text-left xl:gap-10 px-4 xl:px-0">
                                    <div className="text-5xl text-utama">
                                        {ikon}
                                    </div>
                                </div>
                            ) : jenis === "pengalaman" ||
                              jenis === "edukasi" ? (
                                <div className="relative w-[70px] h-[70px] xl:w-[100px] xl:h-[44px]">
                                    <Image
                                        src={tautanLogo}
                                        alt="logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                            ) : (
                                <div className="relative w-[100px] h-[90px] xl:h-[44px] cursor-pointer transition-transform duration-300 hover:scale-150">
                                    <a
                                        href={tautanLogo.src}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image
                                            src={tautanLogo}
                                            alt="logo"
                                            width={100}
                                            height={100}
                                            className="object-cover"
                                        />
                                    </a>
                                </div>
                            )}

                            <div className="xl:border-l xl:border-kedua/10 xl:pl-12 w-full">
                                <h3 className="hidden xl:flex h3 mb-2 xl:mb-4">
                                    {jenis === "pengalaman" ||
                                    jenis === "setifikat"
                                        ? perusahaan
                                        : jenis === "edukasi"
                                        ? intuisi
                                        : jenis === "keahlian"
                                        ? nama
                                        : null}
                                </h3>
                                <p className="text-base max-w-[660px] text-black">
                                    {deskripsi}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kartu;
