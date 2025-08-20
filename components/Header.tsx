import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { MdFileDownload } from "react-icons/md";

// Components
import Logo from "@/components/Logo";
import Socials from "@/components/Socials";
import NavLinks from "@/components/NavLinks";
import {
    Sheet,
    SheetTitle,
    SheetHeader,
    SheetTrigger,
    SheetContent,
    SheetDescription,
} from "@/components/ui/sheet";

const Header = () => {
    return (
        <header className="2xl:hidden absolute z-40 left-0 right-0">
            <div className="container mx-auto">
                <div className="flex items-center justify-between py-6">
                    {/* =============== LOGO =============== */}
                    <Logo />

                    {/* ============== NAV MOBILE - (SHEET COMPONENTS) =============== */}
                    <Sheet>
                        {/* =============== TRIGGER =============== */}
                        <SheetTrigger className="cursor-pointer text-[30px] text-white">
                            <CiMenuFries />
                        </SheetTrigger>

                        {/* =============== CONTENT =============== */}
                        <SheetContent
                            side="left"
                            className="bg-primary border-0 flex flex-col justify-between items-center pt-16 pb-20"
                        >
                            {/* =============== HEADER =============== */}
                            <SheetHeader>
                                {/* ============== TITLE =============== */}
                                <SheetTitle>
                                    <Logo />
                                </SheetTitle>

                                {/* ============== DESCRIPTION =============== */}
                                <SheetDescription className="sr-only">
                                    Navigasi Menu
                                </SheetDescription>
                            </SheetHeader>
                            {/* ============== LINKS =============== */}
                            <NavLinks containerStyles="flex flex-col gap-8 max-w-[100px]" />

                            {/* ============= BUTTON =============== */}
                            <div>
                                <button className="btn btn-lg btn-tertiary mb-16">
                                    <div className="flex items-center gap-3">
                                        <span>Downlaod CV</span>
                                        <MdFileDownload className="text-xl" />
                                    </div>
                                </button>
                                {/* =============== SOCIALS =============== */}
                                <Socials
                                    containerStyles="flex gap-4"
                                    iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[40px] h-[40px] text-[20px] flex items-center justify-center rounded-full cursor-pointer"
                                />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;
