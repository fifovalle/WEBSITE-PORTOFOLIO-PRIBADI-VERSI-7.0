import React, { useCallback, useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
// KOMPONEN SAYA
import AnimasiTeks from "@/components/animasiTeks";
// PENGAIT KAMI
import useTampilkanTestimoni from "@/hooks/useTampilkanDataTestimoni";

const Testimonial = () => {
    const [refprensiiPenggesek, setRefprensiPenggesek] = useState(null);
    const [penggeserAktif, setPenggeserAktif] = useState(0);

    const { testimoni, memuat } = useTampilkanTestimoni();

    const tanganiSebelumnya = useCallback(() => {
        refprensiiPenggesek?.slidePrev();
    }, [refprensiiPenggesek]);

    const tanganiSelanjutnya = useCallback(() => {
        refprensiiPenggesek?.slideNext();
    }, [refprensiiPenggesek]);

    if (memuat) {
        return <div></div>;
    }

    const testimoniAktif = testimoni && testimoni[penggeserAktif];

    return (
        <div className="py-24 overflow-hidden">
            <div className="container mx-auto">
                <AnimasiTeks
                    teks="Client Feedback"
                    gayaTeks="h2 mb-[30px] xl:mb-[60px] text-center"
                />
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* INFO PENGGESER */}
                    <div className="w-full xl:w-[600px] flex flex-col justify-center items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
                        <ImQuotesLeft className="text-9xl text-aksen/20 leading-none mb-4" />
                        {testimoniAktif ? (
                            <>
                                <h3 className="h3 mb-2">
                                    {testimoniAktif.Nama}
                                </h3>
                                <p className="mb-8 max-w-[360px] text-justify">
                                    {testimoniAktif.Pesan}
                                </p>
                            </>
                        ) : (
                            <p>Data tidak tersedia</p>
                        )}

                        <div className="flex gap-3">
                            <button
                                onClick={tanganiSebelumnya}
                                className="text-2xl bg-aksen w-[48px] h-[48px] text-white rounded-full flex items-center justify-center hover:bg-aksen-melayang transition-all duration-300"
                            >
                                <FiArrowLeft />
                            </button>

                            <button
                                onClick={tanganiSelanjutnya}
                                className="text-2xl bg-aksen w-[48px] h-[48px] text-white rounded-full flex items-center justify-center hover:bg-aksen-melayang transition-all duration-300"
                            >
                                <FiArrowRight />
                            </button>
                        </div>
                    </div>

                    {/* PENGGESER */}
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        onSwiper={setRefprensiPenggesek}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1280: {
                                slidesPerView: 4,
                            },
                        }}
                        onSlideChange={(swiper) => {
                            setPenggeserAktif(swiper.realIndex);
                        }}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        className="w-full h-[400px] xl:h-[500px]"
                    >
                        {testimoni &&
                            testimoni.length > 0 &&
                            testimoni.map((testimoni, indeks) => (
                                <SwiperSlide
                                    key={indeks}
                                    className="h-full select-none"
                                >
                                    <div className="w-full h-full flex items-end">
                                        <div
                                            className={`${
                                                penggeserAktif === indeks
                                                    ? "h-full"
                                                    : "h-[248px]"
                                            } flex items-end rounded-xl overflow-hidden transition-all duration-500 relative w-full`}
                                        >
                                            <Image
                                                src={testimoni.Gambar}
                                                className="object-cover object-center"
                                                quality={100}
                                                fill
                                                alt="Gambar"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
