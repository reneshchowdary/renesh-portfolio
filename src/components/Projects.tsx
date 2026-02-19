import React from "react";
import SectionWrapper from "./SectionWrapper";
import GlassCard from "./GlassCard";

const Projects = () => {
    const projects = [
        {
            title: "CICS TX - EFK Stack Integration",
            tech: ["C++", "Kubernetes", "OpenShift", "Elasticsearch", "Fluentd"],
            description: "Implemented a fully functional EFK stack for CICS TX application observability. Developed Helm charts and Operators for simplified deployment on OpenShift/K8s clusters.",
            role: "Backend & DevOps",
        },
        {
            title: "Operations Agent Data Collector",
            tech: ["C", "C++", "STL", "Multithreading", "Data Structures"],
            description: "Designed an embedded data collector to gather real-time performance metrics. Optimized for low-overhead monitoring of system health and resource utilization.",
            role: "System Engineer",
        },
        {
            title: "Concurrent Web Server",
            tech: ["C++", "Multithreading", "Socket Programming", "HTTP"],
            description: "Built a multi-threaded HTTPS server implementing FIFO and SFF scheduling policies. Solved producer-consumer problems for efficient request handling.",
            role: "Academic Project",
        },
    ];

    return (
        <SectionWrapper id="projects">
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Highlighting complex backend systems and reliable infrastructure solutions I've architected.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <GlassCard key={idx} className="flex flex-col h-full group hover:bg-white/5 border-zinc-800">
                            <div className="mb-4">
                                <span className="text-xs font-bold tracking-wider text-purple-400 uppercase">
                                    {project.role}
                                </span>
                                <h3 className="text-xl font-bold text-white mt-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                            </div>

                            <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-2 py-1 text-xs rounded bg-white/5 text-zinc-300 border border-white/5">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Projects;
