import React from "react";
import Section from "./SectionWrapper";
import GlassCard from "./GlassCard";

const Experience = () => {
    const jobs = [
        {
            company: "IBM Labs Bangalore",
            role: "Senior Software Engineer",
            period: "Jan 2024 - Present",
            project: "CICS TX",
            desc: "Core C++ component development for transaction processing (CICS TX).",
            impact: [
                "Enhanced transaction reliability & performance for enterprise clients.",
                "Deployed full EFK stack on OpenShift/K8s via Helm Charts & Operators.",
                "Integrated Filebeat sidecars for efficient log forwarding without overhead.",
                "Managed Persistent Volume Claims (PVCs) for high-availability data storage."
            ]
        },
        {
            company: "OpenText Bangalore",
            role: "Senior Software Engineer",
            period: "Dec 2021 - Dec 2023",
            project: "Operations Agent",
            desc: "Centralized system health monitoring agent across diverse environments.",
            impact: [
                "Developed embedded C/C++ data collector for real-time metrics.",
                "Integrated with OBM & Performance Dashboard for end-to-end visibility.",
                "Diagnosed complex performance issues on live production systems.",
                "Aggregated heterogeneous data sources into a unified management view."
            ]
        },
        {
            company: "Eximius Design",
            role: "Software Engineer",
            period: "Oct 2020 - Nov 2021",
            project: "Autonomous Driving",
            desc: "Device driver development for automotive camera modules (VCC).",
            impact: [
                "Developed drivers for AR0820, MAX9295A, and serializer modules.",
                "Collaborated on Surround Recognition & Driver Monitoring Systems.",
                "Optimized I2C communication for sensor modules."
            ]
        },
        {
            company: "Matrix Comsec",
            role: "Software Developer",
            period: "Dec 2018 - Jan 2020",
            project: "Access Control",
            desc: "Embedded Linux development for biometric access control systems.",
            impact: [
                "Implemented secure TCP/IP socket communication protocols.",
                "Optimized event storage scaling to 500,000 records.",
                "Enhanced UI responsiveness on 128x64 Dot Matrix Displays."
            ]
        }
    ];

    return (
        <Section id="experience" className="bg-black/20">
            <div className="space-y-12">
                <h2 className="text-3xl font-bold mb-12">Experience</h2>

                <div className="space-y-4">
                    {jobs.map((job, idx) => (
                        <GlassCard key={idx} className="group transition-all hover:bg-white/5 border-transparent hover:border-white/10" noPadding>
                            <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="md:col-span-1 space-y-2">
                                    <h3 className="font-bold text-white text-lg">{job.company}</h3>
                                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-wide">{job.period}</div>
                                </div>

                                <div className="md:col-span-3 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <h4 className="text-accent-blue font-medium">{job.role}</h4>
                                    </div>

                                    <p className="text-zinc-400 text-sm">{job.desc}</p>

                                    <ul className="grid grid-cols-1 gap-2 pt-2">
                                        {job.impact.map((point, i) => (
                                            <li key={i} className="text-sm text-zinc-300 flex gap-3 items-start">
                                                <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-accent-teal transition-colors" />
                                                <span className="leading-relaxed">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
