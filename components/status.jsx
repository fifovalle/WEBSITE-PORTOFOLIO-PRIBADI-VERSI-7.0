import React from "react";
// KOMPONEN SAYA
import KontenStatus from "@/components/kontenStatus";
// PENGAIT SAYA
import useTampilkanPekerjaan from "@/hooks/useTampilkanDataPekerjaan";

const Status = () => {
    const { jumlahPekerjaan } = useTampilkanPekerjaan();

    const statusSaya = [
        {
            teks: "+",
            jumlah: 2,
            deskripsi: "Years of Experience",
        },
        {
            teks: "+",
            jumlah: jumlahPekerjaan,
            deskripsi: "Projects",
        },
        {
            teks: "%",
            jumlah: 95,
            deskripsi: "Satisfied Clients",
        },
    ];

    return (
        <section className="flex justify-center xl:justify-normal mx-auto xl:mx-0 xl:w-[399px] gap-4 xl:gap-0">
            {statusSaya.map((status, indeks) => (
                <KontenStatus
                    key={indeks}
                    jumlah={status.jumlah}
                    teks={status.teks}
                    deskripsi={status.deskripsi}
                />
            ))}
        </section>
    );
};

export default Status;
