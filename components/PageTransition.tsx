"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
// Interface
import { ParentProps } from "@/interfaces/parent-props";

const PageTransition = ({ children }: ParentProps) => {
    const pathname = usePathname();

    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div
                    key={pathname}
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: {
                            delay: 1,
                            duration: 0.4,
                            ease: easeInOut,
                        },
                    }}
                    className="min-h-screen w-screen fixed top-0 pointer-events-none"
                />
                {children}
            </div>
        </AnimatePresence>
    );
};

export default PageTransition;
