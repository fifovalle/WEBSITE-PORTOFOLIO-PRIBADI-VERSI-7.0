import React from "react";
import {
    HiOutlineUser,
    HiOutlineMail,
    HiOutlinePhone,
    HiOutlineLocationMarker,
} from "react-icons/hi";

const Info = () => {
    return (
        <div className="flex flex-col gap-6 md:gap-10">
            {/* ============== PERSONAL INFO 1 =============== */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-[280px] flex items-start gap-4">
                    <HiOutlineUser className="text-2xl mt-1 text-accent" />
                    <div>
                        <p className="text-lg">Date of Birth</p>
                        <p>10 February 2003</p>
                    </div>
                </div>

                <div className="w-[280px] flex items-start gap-4">
                    <HiOutlineMail className="text-2xl mt-1 text-accent" />
                    <div>
                        <p className="text-lg">Email Address</p>
                        <p>fifanaufal10@gmail.com</p>
                    </div>
                </div>
            </div>

            {/* ============ PERSONAL INFO 2 =============== */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-[280px] flex items-start gap-4">
                    <HiOutlinePhone className="text-2xl mt-1 text-accent" />
                    <div>
                        <p className="text-lg">Phone</p>
                        <p>+62 823-1833-4287</p>
                    </div>
                </div>

                <div className="w-[280px] flex items-start gap-4">
                    <HiOutlineLocationMarker className="text-2xl mt-1 text-accent" />
                    <div>
                        <p className="text-lg">Location</p>
                        <p>Bandung, Indonesia</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
