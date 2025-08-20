import React from "react";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/" className="text-[28px] font-normal">
            Naufal FIFA<span className="text-accent text-4xl">.</span>
        </Link>
    );
};

export default Logo;
