import React from "react";
import { Link as ScrollLink } from "react-scroll";

const tautanNavigasi = [
    {
        nama: "Home",
    },
    {
        nama: "About Me",
    },
    {
        nama: "Journey",
    },
    {
        nama: "Work",
    },
    {
        nama: "Contact",
    },
];

const Navigasi = ({ gayaWadah, gayaDaftar, gayaTautan, pengintai }) => {
    return (
        <nav className={gayaWadah}>
            <ul className={gayaDaftar}>
                {tautanNavigasi.map((tautan, indeks) => (
                    <ScrollLink
                        spy={pengintai}
                        key={indeks}
                        activeClass="active"
                        to={tautan.nama}
                        smooth={true}
                        className={gayaTautan}
                    >
                        {tautan.nama}
                    </ScrollLink>
                ))}
            </ul>
        </nav>
    );
};

export default Navigasi;
