import React from "react";
import Section from "./SectionWrapper";
import GlassCard from "./GlassCard";

const SelectedWork = () => {
    const projects = [
        {
            title: "CICS TX Observability Suite",
            category: "Cloud Infrastructure",
            description: "Architected a complete observability pipeline using the EFK stack (Elasticsearch, Fluentd, Kibana) on OpenShift. Implemented Helm charts and Operators for one-click deployment, reducing incident resolution time by 40%.",
            tags: ["Kubernetes", "OpenShift", "Helm", "Fluentd", "C++"],
            gradient: "from-blue-500/10 to-transparent",
            accent: "text-accent-blue border-accent-blue/30"
        },
        {
            title: "Operations Agent Collector",
            category: "System Engineering",
            description: "Built a high-performance embedded data collector in C/C++ to aggregate system metrics with minimal resource footprint. Integrated directly with OBM frameworks for real-time dashboarding.",
            tags: ["C++17", "Embedded Systems", "Performance Tuning", "STL"],
            gradient: "from-violet-500/10 to-transparent",
            accent: "text-accent-violet border-accent-violet/30"
        },
        {
            title: "Concurrent HTTPS Scheduler",
            category: "Backend Core",
            description: "Designed a multi-threaded web server implementing advanced scheduling algorithms (FIFO, Shortest File First) to optimize request throughput and solve producer-consumer bottlenecks.",
            tags: ["C++", "Socket Programming", "Multithreading", "Algorithms"],
            gradient: "from-teal-500/10 to-transparent",
            accent: "text-accent-teal border-accent-teal/30"
        }
    ];

    return (
        <Section id="work" className="space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                <h2 className="text-3xl md:text-5xl font-bold">Selected Work</h2>
                <p className="text-zinc-500 max-w-sm text-right hidden md:block">
                    Engineering solutions for reliability, observability, and scale.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
                {projects.map((project, idx) => (
                    <GlassCard key={idx} className={`relative group overflow-hidden bg-gradient-to-r ${project.gradient}`}>
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                            <div className="col-span-12 md:col-span-8 space-y-6">
                                <div className={`inline-block px-3 py-1 rounded-full border text-xs font-mono mb-2 ${project.accent}`}>
                                    {project.category}
                                </div>
                                <h3 className="text-3xl font-bold group-hover:text-white transition-colors">{project.title}</h3>
                                <p className="text-zinc-400 leading-relaxed text-lg max-w-2xl">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-medium text-zinc-500 bg-white/5 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Number/Icon */}
                            <div className="hidden md:flex col-span-4 justify-end">
                                <span className="text-9xl font-bold text-white/5 select-none group-hover:text-white/10 transition-colors">
                                    0{idx + 1}
                                </span>
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </Section>
    );
};

export default SelectedWork;
