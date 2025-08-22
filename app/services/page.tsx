"use client";

import React from "react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { motion, easeIn } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineArrowOutward, MdArrowRightAlt } from "react-icons/md";

import "swiper/css";
import "swiper/css/pagination";

// Constants
import { services } from "@/constants/services";

const Home = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: easeIn },
            }}
            className="h-screen flex items-center"
        >
            <div className="container mx-auto w-full flex flex-col gap-16">
                {/* =============== TEXT ================ */}
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">
                    {/* =============== HEADLINE ================ */}
                    <h2 className="h2 max-w-[500px] text-left xl:mb-0">
                        Custom{" "}
                        <span className="text-accent">
                            Web & Mobile Solutions
                        </span>{" "}
                        to Boost Your Business
                    </h2>

                    {/* =============== BUTTON ================ */}
                    <button className="btn btn-lg btn-accent flex gap-2">
                        All services <MdArrowRightAlt className="text-2xl" />
                    </button>
                </div>

                {/* ============== SLIDER ================ */}
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    modules={[Pagination]}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className="h-[320px]"
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-secondary/90 w-full h-[284px] rounded-[20px] px-[30px] py-[40px] flex flex-col justify-between cursor-grab">
                                <div className="flex items-center justify-between mb-12">
                                    <Image
                                        width={48}
                                        height={48}
                                        src={service.icon}
                                        alt={service.title}
                                    />
                                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center cursor-pointer text-2xl hover:rotate-45 transition-all">
                                        <MdOutlineArrowOutward />
                                    </div>
                                </div>
                                <h5 className="text-[22px] font-medium max-w-[240px]">
                                    {service.title}
                                </h5>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </motion.section>
    );
};

export default Home;
