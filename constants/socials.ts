import {
    BiLogoGithub,
    BiLogoYoutube,
    BiLogoLinkedin,
    BiLogoWhatsapp,
    BiLogoInstagramAlt,
} from "react-icons/bi";
import { SocialProps } from "@/interfaces/social-props";

export const socials: SocialProps[] = [
    { icon: BiLogoGithub, link: "https://github.com/fifovalle" },
    { icon: BiLogoLinkedin, link: "https://www.linkedin.com/in/naufal-fifa/" },
    {
        icon: BiLogoWhatsapp,
        link: "https://api.whatsapp.com/send?phone=+6282318334287&text=Halo,%20Saya%20ingin%20bertanya%20tentang%20proyek%20anda.",
    },
    {
        icon: BiLogoInstagramAlt,
        link: "https://www.instagram.com/fif_ovalle/",
    },
    { icon: BiLogoYoutube, link: "https://www.youtube.com/@zonadeveloper" },
];
