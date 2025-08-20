import React from "react";
import { MdFileDownload } from "react-icons/md";
// Components
import Logo from "@/components/Logo";
import NavLinks from "@/components/NavLinks";

const MainNav = () => {
    return (
        <nav className="w-full pt-16">
            <div className="flex flex-col h-full items-center justify-between">
                {/* ============== LOGO =============== */}
                <Logo />

                {/* ============= NAV LINKS =============== */}
                <NavLinks containerStyles="flex flex-col gap-6" />

                {/* ============= BUTTON =============== */}
                <button className="btn btn-lg btn-tertiary mb-16">
                    <div className="flex items-center gap-3">
                        <span>Downlaod CV</span>
                        <MdFileDownload className="text-xl" />
                    </div>
                </button>
            </div>
        </nav>
    );
};

export default MainNav;
