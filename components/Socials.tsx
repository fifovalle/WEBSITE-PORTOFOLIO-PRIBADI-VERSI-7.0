import React from "react";
// Constants
import { socials } from "@/constants/socials";
// Interface
import { ContainerProps } from "@/interfaces/container-props";

const Socials = ({ iconStyles, containerStyles }: ContainerProps) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => (
                <a
                    key={index}
                    target="_blank"
                    href={social.link}
                    className={iconStyles}
                    rel="noopener noreferrer"
                >
                    <social.icon />
                </a>
            ))}
        </div>
    );
};

export default Socials;
