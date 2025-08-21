import {
    SiC,
    SiGit,
    SiPhp,
    SiExpo,
    SiMysql,
    SiDocker,
    SiVercel,
    SiNestjs,
    SiMongodb,
    SiLaravel,
    SiPostman,
    SiExpress,
    SiArduino,
    SiFirebase,
    SiCplusplus,
    SiEspressif,
    SiJavascript,
    SiTypescript,
    SiPostgresql,
    SiGithubactions,
} from "react-icons/si";
import {
    RiCss3Fill,
    RiHtml5Fill,
    RiNextjsFill,
    RiNodejsFill,
    RiReactjsFill,
    RiSupabaseFill,
    RiTailwindCssFill,
} from "react-icons/ri";

// Interface
import { SkillsProps } from "@/interfaces/skills-props";

// ========== LANGUAGES ==========
export const languages: SkillsProps[] = [
    { icon: SiC, name: "C" },
    { icon: SiPhp, name: "PHP" },
    { icon: SiCplusplus, name: "C++" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
];

// ========== FRONTEND SKILLS ==========
export const frontendSkills: SkillsProps[] = [
    { icon: SiExpo, name: "Expo" },
    { icon: RiCss3Fill, name: "CSS" },
    { icon: RiHtml5Fill, name: "HTML" },
    { icon: RiReactjsFill, name: "React" },
    { icon: RiNextjsFill, name: "Next.js" },
    { icon: RiReactjsFill, name: "React Native" },
    { icon: RiTailwindCssFill, name: "Tailwind CSS" },
];

// ========== BACKEND SKILLS ==========
export const backendSkills: SkillsProps[] = [
    { icon: SiNestjs, name: "Nest.js" },
    { icon: SiLaravel, name: "Laravel" },
    { icon: SiFirebase, name: "Firebase" },
    { icon: RiNodejsFill, name: "Node.js" },
    { icon: SiExpress, name: "Express.js" },
    { icon: RiSupabaseFill, name: "Supabase" },
];

// ========== DATABASE ==========
export const databases: SkillsProps[] = [
    { icon: SiMysql, name: "MySQL" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiPostgresql, name: "PostgreSQL" },
];

// ========== TOOLS & DEVOPS ==========
export const tools: SkillsProps[] = [
    { icon: SiGit, name: "Git" },
    { icon: SiVercel, name: "Vercel" },
    { icon: SiDocker, name: "Docker" },
    { icon: SiPostman, name: "Postman" },
    { icon: SiGithubactions, name: "GitHub Actions" },
];

// ========== IOT ==========
export const iot: SkillsProps[] = [
    { icon: SiArduino, name: "Arduino" },
    { icon: SiEspressif, name: "ESP32 / ESP8266" },
];
