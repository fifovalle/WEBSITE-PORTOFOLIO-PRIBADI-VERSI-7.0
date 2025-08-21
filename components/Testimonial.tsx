"use client";

import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

// Constants
import { testimonial } from "@/constants/testimonial";

const Testimonial = () => {
    return (
        <Swiper
            loop={false}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="w-full max-w-[310px] md:max-w-[520px] bg-secondary rounded-lg"
        >
            {testimonial.map((person, index) => (
                <SwiperSlide key={index}>
                    <div className="flex px-8 py-6 gap-8">
                        <ImQuotesLeft className="hidden xl:flex text-8xl text-accent" />
                        <div className="flex flex-col gap-2">
                            <p>{person.message}</p>
                            <p className="self-end text-accent font-semibold">
                                {person.name}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Testimonial;
