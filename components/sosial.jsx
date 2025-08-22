import React from "react";
import Link from "next/link";
import {
  RiInstagramFill,
  RiGithubFill,
  RiYoutubeFill,
  RiTiktokFill,
} from "react-icons/ri";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

const tautanSosialMedia = [
  {
    ikon: <RiInstagramFill />,
    lokasi: "https://www.instagram.com/fif_ovalle/",
  },
  {
    ikon: <FaWhatsapp />,
    lokasi:
      "https://api.whatsapp.com/send?phone=+6282318334287&text=Halo,%20Saya%20ingin%20bertanya%20tentang%20proyek%20anda.",
  },
  {
    ikon: <FaLinkedinIn />,
    lokasi: "https://www.linkedin.com/in/naufal-fifa/",
  },
  {
    ikon: <RiGithubFill />,
    lokasi: "https://github.com/fifovalle",
  },
  {
    ikon: <RiYoutubeFill />,
    lokasi: "https://www.youtube.com/@zonadeveloper",
  },
  {
    ikon: <RiTiktokFill />,
    lokasi: "https://www.tiktok.com/@zonadeveloper_",
  },
];

const Sosial = ({ gayaWadah, gayaIkon }) => {
  return (
    <div className={gayaWadah}>
      {tautanSosialMedia.map((tautan, indeks) => (
        <Link
          key={indeks}
          target="_blank"
          href={tautan.lokasi}
          className={gayaIkon}
        >
          <span>{tautan.ikon}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sosial;
