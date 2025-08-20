"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Constants
import { links } from "@/constants/links";
// Interface
import { containerProps } from "@/interfaces/containerProps";

const NavLinks = ({ containerStyles }: containerProps) => {
    const pathname = usePathname();

    return (
        <ul className={containerStyles}>
            {links.map((link, index) => {
                const isActive = pathname === link.path;
                const charLength = link.name.length;
                const lineWidth =
                    charLength > 5 ? "after:w-[120%]" : "after:w-[90%]";

                return (
                    <li key={index}>
                        <Link
                            href={link.path}
                            className={`relative text-lg uppercase text-white ${
                                isActive &&
                                `after:content-[''] after:block after:absolute after:left-0 after:top-1/2 ${lineWidth} after:h-[4px] after:bg-accent after:-translate-y-1/2 after:-z-0`
                            }`}
                        >
                            <span className="relative z-10">{link.name}</span>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavLinks;
