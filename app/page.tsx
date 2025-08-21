"use client";

import React from "react";
import Image from "next/image";
import { motion, easeIn } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
// Components
import Blob from "@/components/Blob";
import Socials from "@/components/Socials";
// Assets
import avatarImg from "@/public/assets/me.png";
import Pattern from "@/components/Pattern";

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
            {/* =============== CONTENT =============== */}
            <div className="flex flex-col xl:flex-row items-center justify-between w-full">
                {/* =============== PATTERN =============== */}
                <Pattern />

                {/* ============== TEXT =============== */}
                <div className="w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left">
                    <h1 className="h1 flex-1 mb-[28px]">
                        Hi! I&apos;m Naufal,{" "}
                        <TypeAnimation
                            sequence={[
                                "Web Designer",
                                2000,
                                "Web Developer",
                                2000,
                                "Mobile Designer",
                                2000,
                                "Mobile Developer",
                                2000,
                            ]}
                            speed={40}
                            wrapper="span"
                            cursor={false}
                            repeat={Infinity}
                            className="text-accent inline-block min-w-[400px]"
                        />
                    </h1>
                    <p className="max-w-[500px] mb-[44px] text-center xl:text-justify">
                        I am a Fullstack Cross-Platform Developer with extensive
                        experience in building responsive websites, modern web
                        applications, and mobile solutions. I focus on writing
                        clean, maintainable, and scalable code to deliver
                        professional-grade software.
                    </p>

                    {/* ============== BUTTONS =============== */}
                    <button className="btn btn-lg btn-accent mb-16">
                        <div className="flex items-center gap-3">
                            <span>Let&apos;s talk.</span>
                            <MdArrowOutward className="text-xl" />
                        </div>
                    </button>

                    {/* ============= CONTACT INFO =============== */}
                    <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 mb-12 xl:mb-0">
                        {/* ============= WHATSAPP INFO =============== */}
                        <div className="flex items-center gap-4 text-lg">
                            <span className="text-accent">
                                <HiOutlinePhone className="text-xl" />
                            </span>
                            <span>+62 823-1833-4287</span>
                        </div>
                        {/* ============= MAIL INFO =============== */}
                        <div className="flex items-center gap-4 text-lg">
                            <span className="text-accent">
                                <HiOutlineMail className="text-xl" />
                            </span>
                            <span>fifanaufal10@gmail.com</span>
                        </div>
                    </div>
                    {/* ============== SOCIALS =============== */}
                    <Socials
                        containerStyles="flex 2xl:flex-col gap-6 xl:hidden 2xl:flex 2xl:absolute 2xl:top-1/2 2xl:right-2 2xl:transform 2xl:-translate-x-1/2 2xl:-translate-y-1/2"
                        iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[48px] h-[48px] text-[22px] flex items-center justify-center rounded-full cursor-pointer"
                    />
                </div>

                {/* ============== IMAGE & BLOB =============== */}
                <div className="hidden xl:block flex-1 relative z-20">
                    {/* ============== BLOB =============== */}
                    <Blob containerStyles="w-[560px] h-[560px]" />
                    {/* ============== AVATAR =============== */}
                    <Image
                        src={avatarImg}
                        alt="avatar"
                        width={400}
                        height={700}
                        quality={100}
                        className="absolute top-[50px] left-[100px]"
                    />

                    {/* ============== OVERLAY GRADIENT =============== */}
                    <div className="w-full h-[164px] absolute -bottom-28 left-0 right-0 bg-gradient-to-t from-primary via-primary/90 to-primary" />
                </div>
            </div>
        </motion.section>
    );
};

export default Home;
