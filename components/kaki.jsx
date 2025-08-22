import React from "react";
import Logo from "@/components/logo";

const Kaki = () => {
    return (
        <footer className="py-12 bg-utama text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col xl:flex-row justify-between items-center">
                    <Logo cerah={true} />
                    <div className="text-white/70 font-light mt-4 xl:mt-0 text-center xl:text-right">
                        © {new Date().getFullYear()} Naufal FIFA. All rights
                        reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Kaki;
