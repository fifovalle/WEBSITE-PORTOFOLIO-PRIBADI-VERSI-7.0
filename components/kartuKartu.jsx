"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaJava,
    FaBootstrap,
    FaPhp,
    FaLaravel,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiFirebase,
    SiTailwindcss,
    SiTypescript,
    SiCplusplus,
    SiMysql,
    SiSupabase,
    SiDocker,
    SiPostman,
} from "react-icons/si";
// KOMPONEN SAYA
import Kartu from "@/components/kartu";
// LOGO SAYA
import Logo1 from "@/public/assets/perjalanan/pengalaman/logo-1.svg";
import Logo2 from "@/public/assets/perjalanan/pengalaman/logo-2.svg";
import Logo10 from "@/public/assets/perjalanan/pengalaman/logo-4.png";
import Logo4 from "@/public/assets/perjalanan/edukasi/logo-1.svg";
import Logo5 from "@/public/assets/perjalanan/edukasi/logo-2.svg";
import Logo6 from "@/public/assets/perjalanan/setifikat/1.svg";

const perjalananSaya = [
    {
        jenis: "pengalaman",
        perusahaan: "Badan Meteorologi, Klimatologi, dan Geofisika. Bengkulu",
        tautanLogo: Logo1,
        posisi: "Fullstack Web Developer",
        jangkaWaktu: "January 2024 – Present",
        deskripsi:
            "Led the development of the PTSP web application with a responsive and user-friendly interface, along with a scalable backend architecture. Worked closely with the team to improve public services through seamless integration of real-time weather data and geospatial information.",
    },
    {
        jenis: "pengalaman",
        perusahaan: "PT. Minilemon Nusantara",
        tautanLogo: Logo10,
        posisi: "Senior Mobile Developer",
        jangkaWaktu: "February 2025 – Present",
        deskripsi:
            "Leading the development of cross-platform mobile applications using modern frameworks. Collaborating with UI/UX designers and backend engineers to deliver high-quality and scalable apps. Responsible for code review, architecture decisions, and mentoring junior developers.",
    },
    {
        jenis: "pengalaman",
        perusahaan: "Kantor SAR Bengkulu (BASARNAS)",
        tautanLogo: Logo2,
        posisi: "Fullstack Web Developer",
        jangkaWaktu: "June 2024 – July 2024",
        deskripsi:
            "Designed and implemented the Simore (Rescue Monitoring System) web application. Delivered a real-time monitoring dashboard and robust backend to support search and rescue operations, ensuring fast and reliable data access for emergency teams.",
    },
    {
        jenis: "edukasi",
        intuisi: "SMK Mahardhika",
        tautanLogo: Logo4,
        pencapaian: "Fullstack Web Developer",
        jangkaWaktu: "July 2019 – July 2021",
        deskripsi:
            "Studied various web programming languages such as HTML, CSS, JavaScript, PHP, and related frameworks. Gained hands-on experience through projects that enhanced technical skills and understanding of web application development, including server-side programming with PHP.",
    },
    {
        jenis: "edukasi",
        intuisi: "Universitas Jenderal Achmad Yani",
        tautanLogo: Logo5,
        pencapaian: "Fullstack Mobile Developer",
        jangkaWaktu: "July 2022 – Present",
        deskripsi:
            "Focused on fullstack mobile application development, including native Android development with Java and cross-platform apps using React Native. Emphasized building responsive, user-friendly, and high-performance applications while applying best practices such as modular architecture, state management, performance optimization, and user data security.",
    },
    {
        jenis: "keahlian",
        nama: "HTML",
        ikon: <FaHtml5 />,
        jangkaWaktu: "Learned Since 2019",
        deskripsi:
            "Learned the fundamentals of web structure and how HTML elements shape web content. This skill enables me to design and develop functional web interfaces.",
    },
    {
        jenis: "keahlian",
        nama: "CSS",
        ikon: <FaCss3Alt />,
        jangkaWaktu: "Learned Since 2019",
        deskripsi:
            "Studied web design using CSS to manage layouts, colors, and typography. This allows me to create visually appealing and responsive web designs.",
    },
    {
        jenis: "keahlian",
        nama: "JavaScript",
        ikon: <FaJs />,
        jangkaWaktu: "Learned Since 2019",
        deskripsi:
            "Learned JavaScript to add interactivity and dynamic behavior to websites. This skill supports the development of complex and interactive web applications.",
    },
    {
        jenis: "keahlian",
        nama: "Bootstrap",
        ikon: <FaBootstrap />,
        jangkaWaktu: "Learned Since 2019",
        deskripsi:
            "Explored the Bootstrap framework to create responsive and interactive web interfaces. This helps in building modern, user-friendly layouts efficiently.",
    },
    {
        jenis: "keahlian",
        nama: "PHP",
        ikon: <FaPhp />,
        jangkaWaktu: "Learned Since 2019",
        deskripsi:
            "Learned PHP programming to develop dynamic web applications. This skill allows me to create functional server-side logic.",
    },
    {
        jenis: "keahlian",
        nama: "Laravel",
        ikon: <FaLaravel />,
        jangkaWaktu: "Learned Since 2019",
        deskripsi:
            "Studied the Laravel framework to build structured and scalable web applications. It supports my ability to develop interactive and robust platforms.",
    },
    {
        jenis: "keahlian",
        nama: "MySQL",
        ikon: <SiMysql />,
        jangkaWaktu: "Learned Since 2019",
        deskripsi:
            "Learned to use MySQL for managing relational databases in web development. This helps in building data-driven and dynamic applications.",
    },
    {
        jenis: "keahlian",
        nama: "Java",
        ikon: <FaJava />,
        jangkaWaktu: "Learned Since 2019",
        deskripsi:
            "Studied Java programming for building object-oriented applications. This supports the creation of reliable and scalable software solutions.",
    },
    {
        jenis: "keahlian",
        nama: "C++",
        ikon: <SiCplusplus />,
        jangkaWaktu: "Learned Since 2019",
        deskripsi:
            "Learned C++ for developing object-oriented programs. This enhances my understanding of memory management and low-level programming concepts.",
    },
    {
        jenis: "keahlian",
        nama: "Figma",
        ikon: <FaFigma />,
        jangkaWaktu: "Learned Since 2023",
        deskripsi:
            "Studied UI/UX design using Figma to create prototypes and user interfaces. This enables me to design intuitive and aesthetic user experiences.",
    },
    {
        jenis: "keahlian",
        nama: "React",
        ikon: <FaReact />,
        jangkaWaktu: "Learned Since 2024",
        deskripsi:
            "Learned the React library to build efficient and dynamic user interfaces. React supports the development of high-performance web applications with effective state management.",
    },
    {
        jenis: "keahlian",
        nama: "Node JS",
        ikon: <FaNodeJs />,
        jangkaWaktu: "Learned Since 2024",
        deskripsi:
            "Studied Node.js to develop server-side applications. This skill enables me to build fast, scalable, and real-time web services.",
    },
    {
        jenis: "keahlian",
        nama: "Next JS",
        ikon: <SiNextdotjs />,
        jangkaWaktu: "Learned Since 2024",
        deskripsi:
            "Explored Next.js framework for building dynamic and SEO-optimized web applications. It enhances performance and supports server-side rendering.",
    },
    {
        jenis: "keahlian",
        nama: "Postman",
        ikon: <SiPostman />,
        jangkaWaktu: "Learned Since 2024",
        deskripsi:
            "Used Postman to test and document APIs efficiently. It helps in ensuring API reliability, debugging requests, and collaborating with backend services effectively.",
    },
    {
        jenis: "keahlian",
        nama: "Firebase",
        ikon: <SiFirebase />,
        jangkaWaktu: "Learned Since 2024",
        deskripsi:
            "Learned to use Firebase as a backend service for building interactive and scalable web and mobile applications.",
    },
    {
        jenis: "keahlian",
        nama: "Supabase",
        ikon: <SiSupabase />,
        jangkaWaktu: "Learned Since 2024",
        deskripsi:
            "Studied Supabase as a backend-as-a-service platform to build scalable and real-time applications. This skill enables me to integrate authentication, databases, and storage with ease.",
    },
    {
        jenis: "keahlian",
        nama: "Tailwind CSS",
        ikon: <SiTailwindcss />,
        jangkaWaktu: "Learned Since 2024",
        deskripsi:
            "Studied Tailwind CSS to design responsive and visually appealing user interfaces with utility-first styling.",
    },
    {
        jenis: "keahlian",
        nama: "TypeScript",
        ikon: <SiTypescript />,
        jangkaWaktu: "Learned Since 2024",
        deskripsi:
            "Learned TypeScript to write safer and more scalable JavaScript code. It improves code quality and development efficiency in large-scale applications.",
    },
    {
        jenis: "keahlian",
        nama: "Docker",
        ikon: <SiDocker />,
        jangkaWaktu: "Learned Since 2024",
        deskripsi:
            "Learned Docker to containerize applications and ensure consistency across development and production environments. This improves deployment efficiency and scalability.",
    },
    {
        jenis: "setifikat",
        perusahaan: "Basarnas Bengkulu",
        tautanLogo: Logo6,
        posisi: "Fullstack Web Developer",
        jangkaWaktu: "June 2024 – July 2024",
        deskripsi:
            "Developed the Simore (Rescue Monitoring System) application with a focus on frontend implementation. Integrated reporting and violation management systems, implemented security protocols, and ensured seamless data management system integration.",
    },
];

const KartuKartu = () => {
    return (
        <Tabs
            defaultValue="pengalaman"
            className="w-full flex flex-col items-center"
        >
            <TabsList className="max-w-max md:block flex mb-[30px] items-center justify-center">
                <TabsTrigger value="pengalaman">Experience</TabsTrigger>
                <TabsTrigger value="edukasi">Education</TabsTrigger>
                <TabsTrigger value="keahlian">Skills</TabsTrigger>
                <TabsTrigger value="setifikat">Certificates</TabsTrigger>
            </TabsList>

            <TabsContent value="pengalaman" className="w-full">
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {perjalananSaya
                            .filter((nilai) => nilai.jenis === "pengalaman")
                            .map((kartu, indeks) => {
                                return <Kartu key={indeks} {...kartu} />;
                            })}
                    </motion.div>
                </AnimatePresence>
            </TabsContent>

            <TabsContent value="edukasi" className="w-full">
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {perjalananSaya
                            .filter((nilai) => nilai.jenis === "edukasi")
                            .map((kartu, indeks) => {
                                return <Kartu key={indeks} {...kartu} />;
                            })}
                    </motion.div>
                </AnimatePresence>
            </TabsContent>

            <TabsContent value="keahlian" className="w-full">
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {perjalananSaya
                            .filter((nilai) => nilai.jenis === "keahlian")
                            .map((kartu, indeks) => {
                                return <Kartu key={indeks} {...kartu} />;
                            })}
                    </motion.div>
                </AnimatePresence>
            </TabsContent>

            <TabsContent value="setifikat" className="w-full">
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {perjalananSaya
                            .filter((nilai) => nilai.jenis === "setifikat")
                            .map((kartu, indeks) => {
                                return <Kartu key={indeks} {...kartu} />;
                            })}
                    </motion.div>
                </AnimatePresence>
            </TabsContent>
        </Tabs>
    );
};

export default KartuKartu;
