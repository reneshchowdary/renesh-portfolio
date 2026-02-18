import React from "react";
import Section from "./SectionWrapper";

interface SkillCategory {
    title: string;
    skills: string[];
}

const SkillGroup = ({ title, skills }: SkillCategory) => (
    <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">{title}</h4>
        <div className="flex flex-wrap gap-x-2 gap-y-2">
            {skills.map(skill => (
                <span key={skill} className="text-lg text-white/90 hover:text-accent-blue transition-colors cursor-default">
                    {skill}<span className="text-zinc-700 mx-2">/</span>
                </span>
            ))}
        </div>
    </div>
);

const Skills = () => {
    const categories = [
        {
            title: "Core Languages",
            skills: ["C", "C++11/14/17", "Embedded C++", "Python", "Assembly"]
        },
        {
            title: "Cloud & DevOps",
            skills: ["Kubernetes", "OpenShift", "Docker", "Helm", "YAML", "Jenkins"]
        },
        {
            title: "System & Network",
            skills: ["Linux Kernel", "TCP/IP", "Socket Programming", "Device Drivers", "Multithreading"]
        },
        {
            title: "Observability",
            skills: ["Elasticsearch", "Fluentd", "Kibana (EFK)", "Filebeat", "GDB Debugging"]
        }
    ];

    return (
        <Section id="skills" className="border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <h2 className="text-3xl font-bold mb-6">Technical <br />Arsenal</h2>
                    <p className="text-zinc-400 leading-relaxed">
                        A toolkit refined over 6 years of solving complex system-level challenges.
                        Focusing on low-latency execution and high-availability architecture.
                    </p>
                </div>
                <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {categories.map((cat, idx) => (
                        <SkillGroup key={idx} {...cat} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Skills;
