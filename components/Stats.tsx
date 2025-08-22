import React from "react";
import CountUp from "react-countup";

const Stats = () => {
    return (
        <div className="flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-12">
            {/* ============== YEARS EXPERIENCE =============== */}
            <div className="flex gap-4">
                <div className="text-5xl font-bold text-accent flex">
                    <CountUp
                        end={1}
                        delay={3}
                        duration={5}
                        className="block w-[35px]"
                    />
                    <div>+</div>
                </div>
                <span>
                    Years <br /> Experience
                </span>
            </div>

            {/* ============== CLIENTS EXPERIENCE =============== */}
            <div className="flex gap-4">
                <div className="text-5xl font-bold text-accent flex">
                    <CountUp
                        end={7}
                        delay={3}
                        duration={7}
                        className="block w-[65px] xl:w-[35px]"
                    />
                </div>
                <span>
                    Clients <br /> Organizations
                </span>
            </div>
        </div>
    );
};

export default Stats;
