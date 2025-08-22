import { useState, useEffect } from "react";
import { db, collection, getDocs } from "@/lib/firebaseConfig";

const useTampilkanTestimoni = () => {
  const [testimoni, setTestimoni] = useState([]);
  const [memuat, setMemuat] = useState(true);

  useEffect(() => {
    const ambilTestimoni = async () => {
      try {
        setMemuat(true);
        const querySnapshot = await getDocs(collection(db, "Testimoni"));
        const dataTestimoni = [];

        querySnapshot.forEach((docSnapshot) => {
          const data = docSnapshot.data();
          dataTestimoni.push({
            id: docSnapshot.id,
            ...data,
          });
        });

        setTestimoni(dataTestimoni);
      } catch (error) {
        console.error(
          "Terjadi kesalahan saat mengambil data testimoni:",
          error
        );
      } finally {
        setMemuat(false);
      }
    };

    ambilTestimoni();
  }, []);

  return { testimoni, memuat };
};

export default useTampilkanTestimoni;
