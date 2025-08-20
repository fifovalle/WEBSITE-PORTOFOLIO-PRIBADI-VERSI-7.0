"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
// Components
import Rectangle from "@/components/Rectangle";

const RectangleTransition = () => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <div key={pathname}>
                <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-50 flex">
                    <Rectangle />
                </div>
            </div>
        </AnimatePresence>
    );
};

export default RectangleTransition;
