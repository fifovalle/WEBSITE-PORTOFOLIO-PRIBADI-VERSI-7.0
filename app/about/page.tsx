"use client";

import React from "react";
import Image from "next/image";
import { motion, easeIn } from "framer-motion";
// Components
import Info from "@/components/Info";
import Blob from "@/components/Blob";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import Journey from "@/components/Journey";
import Testimonial from "@/components/Testimonial";
import { ScrollArea } from "@/components/ui/scroll-area";

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
            <div className="container mx-auto px-0">
                <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]">
                    {/* ============== IMAGE & SOSIAL ICONS =============== */}
                    <div className="hidden xl:flex flex-col w-full h-full pt-14 max-w-[430px] relative">
                        <Image
                            alt="Naufal"
                            width={400}
                            height={400}
                            src="/assets/me.png"
                            className="z-20 relative transform -scale-x-100"
                        />

                        {/* ============= OVERLAY =============== */}
                        <div className="w-full h-[60px] absolute top-[485px] left-0 right-0 bg-gradient-to-t from-primary via-primary z-30" />

                        {/* ============= BLOB =============== */}
                        <div className="absolute top-[80px] -left-[80px] z-10">
                            <Blob containerStyles="w-[420px] h-[420px]" />
                        </div>

                        {/* ============= SOCIAL ICONS =============== */}
                        <Socials
                            containerStyles="flex gap-4 z-40 w-max transform translate-x-[30px]"
                            iconStyles="w-[48px] h-[48px] text-[22px] text-accent hover:text-accent-hover transition-all flex items-center justify-center rounded-full cursor-pointer"
                        />
                    </div>

                    {/* ============== SCROLL AREA =============== */}
                    <ScrollArea className="w-full h-[680px]">
                        <div>
                            {/* ============== INDICATOR =============== */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-2 h-2 bg-accent rounded-full" />
                                <p>About me</p>
                            </div>

                            {/* ============== DESCRIPTION =============== */}
                            <h2 className="h2 mb-6">
                                <span className="text-accent">Naufal</span> FIFA
                            </h2>
                            <p className="max-w-[540px] mb-12">
                                I am a web developer with a passion for creating
                                beautiful and functional websites. I have
                                experience working on a wide range of projects,
                                from small personal projects to large-scale web
                                applications.
                            </p>

                            {/* ============= MORE DESCRIPTION =============== */}
                            <div className="flex flex-col items-start gap-16">
                                {/* =============== STATS =============== */}
                                <Stats />
                                {/* =============== TESTIMONIAL =============== */}
                                <Testimonial />
                                {/* ============== INFO =============== */}
                                <Info />
                                {/* ============== JOURNEY =============== */}
                                <Journey />
                                {/* ============== SKILL =============== */}
                                <Skills />
                            </div>
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </motion.section>
    );
};

export default Home;
