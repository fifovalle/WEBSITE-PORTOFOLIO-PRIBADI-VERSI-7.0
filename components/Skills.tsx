"use client";

import React from "react";
import {
    iot,
    tools,
    databases,
    languages,
    backendSkills,
    frontendSkills,
} from "@/constants/skills";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/components/ui/tooltip";

const SkillGrid = ({ skills }: { skills: typeof frontendSkills }) => (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
        {skills.map((skill, i) => (
            <TooltipProvider key={i}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="flex flex-col items-center">
                            <div
                                className="w-20 h-20 rounded-xl flex items-center justify-center
                                bg-neutral-900/70 dark:bg-neutral-800 shadow-sm
                                border border-neutral-200/20 dark:border-neutral-700
                                transition-all hover:shadow-md hover:-translate-y-1 group"
                            >
                                <skill.icon className="text-3xl text-neutral-200 group-hover:text-accent transition-colors" />
                            </div>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{skill.name}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        ))}
    </div>
);

const Skills = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 space-y-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
                My <span className="text-accent">Skills</span>
            </h2>

            {/* =============== LANGUAGES =============== */}
            <div className="space-y-8">
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                    Languages
                </h3>
                <SkillGrid skills={languages} />
            </div>

            {/* =============== FRONTEND =============== */}
            <div className="space-y-8">
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                    Frontend
                </h3>
                <SkillGrid skills={frontendSkills} />
            </div>

            {/* =============== BACKEND =============== */}
            <div className="space-y-8">
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                    Backend
                </h3>
                <SkillGrid skills={backendSkills} />
            </div>

            {/* =============== DATABASES =============== */}
            <div className="space-y-8">
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                    Databases
                </h3>
                <SkillGrid skills={databases} />
            </div>

            {/* =============== IOT =============== */}
            <div className="space-y-8">
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                    IoT
                </h3>
                <SkillGrid skills={iot} />
            </div>

            {/* =============== TOOLS =============== */}
            <div className="space-y-8">
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                    Tools
                </h3>
                <SkillGrid skills={tools} />
            </div>
        </section>
    );
};

export default Skills;
