import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Badge } from "@/components/ui/badge";

const KontenPekerjaan = ({ Tautan, Kategori, Gambar, Judul }) => {
  return (
    <Link href={Tautan} target="_blank" className="group">
      <div className="w-full h-[300px] p-8 rounded-[30px] flex items-center justify-center mb-6 relative overflow-hidden bg-[#f4f4f4]">
        <Badge className="bg-utama text-base z-40 absolute top-6 left-6 capitalize">
          {Kategori}
        </Badge>
        <Image
          src={Gambar}
          fill
          priority
          alt="Gambar Konten Pekerjaan"
          quality={100}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex-1">
          <h3 className="h3">{Judul}</h3>
        </div>

        <button className="bg-aksen text-white rounded-full w-[48px] h-[48px] flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500">
          <FiArrowRight className="text-2xl" />
        </button>
      </div>
    </Link>
  );
};

export default KontenPekerjaan;
