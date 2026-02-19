"use client";

import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

const projects = [
    {
        num: "01",
        title: "CICS TX Observability Suite",
        category: "Cloud Infrastructure",
        tools: "Kubernetes, OpenShift, Helm, Fluentd, Elasticsearch, C++",
        description:
            "Architected a complete observability pipeline using the EFK stack on OpenShift. Deployed via Helm charts and Operators, reducing incident resolution time by 40%.",
        fullDescription:
            "Designed and implemented a comprehensive observability solution for IBM CICS TX using the EFK (Elasticsearch, Fluentd, Kibana) stack on OpenShift. The solution includes automated deployment via Helm charts and Operators, Filebeat sidecar integration for efficient log forwarding, and Persistent Volume Claims for high-availability data storage. This implementation reduced incident resolution time by 40% and improved system visibility across distributed environments.",
        features: [
            "Full EFK stack deployment on OpenShift/Kubernetes clusters",
            "Helm charts and Operator-based automated deployment",
            "Filebeat sidecar containers for efficient log forwarding",
            "Persistent Volume Claims for HA storage configuration",
            "Custom dashboards for real-time system monitoring",
            "Reduced MTTR (Mean Time To Resolution) by 40%",
        ],
        color: "#c2a4ff",
    },
    {
        num: "02",
        title: "Operations Agent Collector",
        category: "System Engineering",
        tools: "C++17, Embedded Systems, OBM, Performance Tuning, STL",
        description:
            "High-performance embedded data collector in C/C++ aggregating system metrics with minimal resource footprint, integrated with OBM for real-time dashboarding.",
        fullDescription:
            "Developed a high-performance embedded data collector using modern C++17 that aggregates real-time system metrics with minimal resource overhead. The collector integrates seamlessly with Operations Bridge Manager (OBM) and Performance Dashboard for comprehensive system visibility. Optimized for low-latency data collection and efficient memory usage in production environments.",
        features: [
            "Real-time system metrics collection with <1% CPU overhead",
            "Integration with OBM and Performance Dashboard",
            "Efficient data aggregation using STL containers",
            "Multi-threaded architecture for concurrent data collection",
            "Support for heterogeneous system environments",
            "Production-grade error handling and recovery",
        ],
        color: "#a87cff",
    },
    {
        num: "03",
        title: "Automotive Camera Drivers",
        category: "Embedded / Automotive",
        tools: "C, Linux Kernel, I2C, AR0820, MAX9295A, MIPI CSI",
        description:
            "Device driver development for automotive camera modules in autonomous driving systems. Developed drivers for surround recognition and driver monitoring.",
        fullDescription:
            "Developed Linux kernel device drivers for automotive camera modules used in autonomous driving systems. Implemented drivers for AR0820 image sensors, MAX9295A serializers, and MIPI CSI-2 interfaces. The drivers support surround view recognition and driver monitoring systems, ensuring reliable real-time image capture and processing for safety-critical applications.",
        features: [
            "Linux kernel module development for camera sensors",
            "I2C/SPI communication protocol implementation",
            "AR0820 and MAX9295A driver development",
            "MIPI CSI-2 interface integration",
            "Support for surround recognition systems",
            "Driver monitoring system integration",
        ],
        color: "#9070ee",
    },
    {
        num: "04",
        title: "Concurrent HTTPS Scheduler",
        category: "Backend Core",
        tools: "C++, Socket Programming, Multithreading, FIFO, Algorithms",
        description:
            "Multi-threaded web server implementing advanced scheduling algorithms to optimize request throughput and solve producer-consumer bottlenecks.",
        fullDescription:
            "Built a high-performance multi-threaded HTTPS web server implementing advanced scheduling algorithms including FIFO and Shortest-Job-First (SJF). The server efficiently handles concurrent requests using thread pools and solves classic producer-consumer synchronization problems. Optimized for maximum throughput while maintaining low latency for time-sensitive requests.",
        features: [
            "Multi-threaded architecture with thread pool management",
            "FIFO and SJF scheduling algorithm implementation",
            "Producer-consumer pattern with condition variables",
            "Socket programming for HTTP/HTTPS protocols",
            "Request queue optimization for high throughput",
            "Comprehensive error handling and logging",
        ],
        color: "#7858d8",
    },
    {
        num: "05",
        title: "Biometric Access Controller",
        category: "Embedded Linux",
        tools: "C, TCP/IP, SQLite, Embedded Linux, Dot Matrix Display",
        description:
            "Embedded Linux firmware for biometric access control systems with secure TCP/IP protocols and optimized event storage for 500K+ records.",
        fullDescription:
            "Developed embedded Linux firmware for biometric access control systems handling fingerprint authentication and access management. Implemented secure TCP/IP socket communication protocols for network connectivity and optimized SQLite database operations to efficiently store and retrieve 500,000+ access events. Enhanced UI responsiveness on resource-constrained 128×64 dot matrix displays.",
        features: [
            "Embedded Linux firmware development",
            "Secure TCP/IP socket communication protocols",
            "SQLite database optimization for 500K+ records",
            "Biometric fingerprint authentication integration",
            "128×64 Dot Matrix Display UI optimization",
            "Real-time event logging and access control",
        ],
        color: "#6040c2",
    },
];

const SelectedWork = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <>
            <ProjectModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject || projects[0]}
            />
            <section
                id="work"
                style={{
                    padding: "120px 0",
                    position: "relative",
                }}
            >
            <div className="section-container">
                {/* Section heading */}
                <h2
                    style={{
                        fontSize: "clamp(48px, 8vw, 100px)",
                        fontWeight: 800,
                        lineHeight: 1,
                        marginBottom: "80px",
                        textTransform: "uppercase",
                        letterSpacing: "-2px",
                    }}
                >
                    My{" "}
                    <span style={{ color: "var(--accent)" }}>Work</span>
                </h2>

                {/* Projects - 3 column horizontal stacked */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "1px",
                        background: "var(--border)",
                        border: "1px solid var(--border)",
                        borderRadius: "12px",
                        overflow: "hidden",
                    }}
                    className="work-grid"
                >
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            style={{
                                padding: "36px 32px",
                                background: "var(--bg)",
                                position: "relative",
                                transition: "all 0.3s ease",
                                cursor: "pointer",
                            }}
                            onClick={() => setSelectedProject(project)}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "rgba(194, 164, 255, 0.05)";
                                e.currentTarget.style.transform = "translateY(-4px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "var(--bg)";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            {/* Number */}
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    marginBottom: "24px",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "42px",
                                        fontWeight: 800,
                                        color: "rgba(194, 164, 255, 0.2)",
                                        lineHeight: 1,
                                    }}
                                >
                                    {project.num}
                                </span>
                                <span
                                    style={{
                                        fontSize: "11px",
                                        color: "var(--text-muted)",
                                        letterSpacing: "1.5px",
                                        textTransform: "uppercase",
                                        paddingTop: "8px",
                                    }}
                                >
                                    {project.category}
                                </span>
                            </div>

                            {/* Title */}
                            <h3
                                style={{
                                    fontSize: "18px",
                                    fontWeight: 700,
                                    color: "var(--text)",
                                    marginBottom: "12px",
                                    lineHeight: "1.3",
                                }}
                            >
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p
                                style={{
                                    fontSize: "13px",
                                    color: "var(--text-muted)",
                                    lineHeight: "1.7",
                                    marginBottom: "20px",
                                }}
                            >
                                {project.description}
                            </p>

                            {/* Tools */}
                            <div
                                style={{
                                    borderTop: "1px solid var(--border)",
                                    paddingTop: "16px",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "11px",
                                        color: "var(--text-muted)",
                                        letterSpacing: "0.5px",
                                        display: "block",
                                        marginBottom: "6px",
                                        textTransform: "uppercase",
                                        fontWeight: 600,
                                    }}
                                >
                                    Tools and Features
                                </span>
                                <span
                                    style={{
                                        fontSize: "12px",
                                        color: "var(--text-muted)",
                                        opacity: 0.7,
                                    }}
                                >
                                    {project.tools}
                                </span>
                           </div>

                           {/* View Details indicator */}
                           <div
                               style={{
                                   marginTop: "20px",
                                   paddingTop: "16px",
                                   borderTop: "1px solid var(--border)",
                                   display: "flex",
                                   alignItems: "center",
                                   gap: "8px",
                                   fontSize: "12px",
                                   color: "var(--accent)",
                                   fontWeight: 600,
                                   letterSpacing: "0.5px",
                               }}
                           >
                               View Details →
                           </div>
                       </div>
                   ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .work-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 600px) {
                    .work-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
            </section>
        </>
    );
};

export default SelectedWork;
