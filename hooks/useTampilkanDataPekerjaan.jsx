import { useState, useEffect } from "react";
import { db, collection, getDocs } from "@/lib/firebaseConfig";

const useTampilkanPekerjaan = () => {
  const [pekerjaan, setPekerjaan] = useState([]);
  const [jumlahPekerjaan, setJumlahPekerjaan] = useState(0);

  useEffect(() => {
    const ambilPekerjaan = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Projek"));
        const dataPekerjaan = [];

        querySnapshot.forEach((docSnapshot) => {
          dataPekerjaan.push({
            id: docSnapshot.id,
            ...docSnapshot.data(),
          });
        });

        setPekerjaan(dataPekerjaan);
        setJumlahPekerjaan(dataPekerjaan.length);
      } catch (error) {
        console.error(
          "Terjadi kesalahan saat mengambil data pekerjaan:",
          error
        );
      }
    };

    ambilPekerjaan();
  }, []);

  return { pekerjaan, jumlahPekerjaan };
};

export default useTampilkanPekerjaan;
