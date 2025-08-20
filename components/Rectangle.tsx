"use client";

import { motion } from "framer-motion";
import React, { Fragment } from "react";
// Constants
import { rectangleVariants } from "@/constants/rectangleVariants";

const Rectangle = () => {
    return (
        <Fragment>
            <motion.div
                variants={rectangleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    delay: 0,
                    duration: 0.6,
                    ease: [0.63, 0, 0.17, 1],
                }}
                className="fixed top-full w-screen h-screen z-30 bg-[#1b162b]"
            />

            <motion.div
                variants={rectangleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    delay: 0.25,
                    duration: 0.8,
                    ease: [0.63, 0, 0.17, 1],
                }}
                className="fixed top-full w-screen h-screen z-20 bg-[#241e36]"
            />

            <motion.div
                variants={rectangleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    delay: 0.35,
                    duration: 1,
                    ease: [0.63, 0, 0.17, 1],
                }}
                className="fixed top-full w-screen h-screen z-10 bg-[#241e36]"
            />

            <motion.div
                variants={rectangleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    delay: 0.45,
                    duration: 1,
                    ease: [0.63, 0, 0.17, 1],
                }}
                className="fixed top-full w-screen h-screen z-10 bg-[#2e2743]"
            />
        </Fragment>
    );
};

export default Rectangle;
