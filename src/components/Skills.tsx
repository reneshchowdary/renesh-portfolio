import React from "react";
import {
    SiCplusplus,
    SiC,
    SiPython,
    SiLinux,
    SiKubernetes,
    SiDocker,
    SiHelm,
    SiJenkins,
    SiElasticsearch,
    SiPrometheus,
    SiGit,
    SiGnubash,
    SiRedhatopenshift
} from "react-icons/si";
import { FaNetworkWired, FaServer, FaBug, FaPlug, FaCog } from "react-icons/fa";

const techGroups = [
    {
        category: "Languages",
        items: [
            { name: "C", icon: SiC, color: "#A8B9CC" },
            { name: "C++", icon: SiCplusplus, color: "#00599C" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "Assembly", icon: FaCog, color: "#6E4C13" },
            { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
        ],
    },
    {
        category: "Systems",
        items: [
            { name: "Linux", icon: SiLinux, color: "#FCC624" },
            { name: "POSIX", icon: FaServer, color: "#8B8B8B" },
            { name: "TCP/IP", icon: FaNetworkWired, color: "#0078D7" },
            { name: "Sockets", icon: FaPlug, color: "#FF6B6B" },
            { name: "GDB", icon: FaBug, color: "#DA4453" },
        ],
    },
    {
        category: "Cloud & DevOps",
        items: [
            { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
            { name: "OpenShift", icon: SiRedhatopenshift, color: "#EE0000" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Helm", icon: SiHelm, color: "#0F1689" },
            { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
        ],
    },
    {
        category: "Observability",
        items: [
            { name: "Elasticsearch", icon: SiElasticsearch, color: "#005571" },
            { name: "Fluentd", icon: FaServer, color: "#0E83C8" },
            { name: "Kibana", icon: SiElasticsearch, color: "#005571" },
            { name: "Filebeat", icon: FaServer, color: "#00BFB3" },
            { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
        ],
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
            style={{
                padding: "120px 0",
                position: "relative",
                background: "radial-gradient(ellipse at center, rgba(168, 124, 255, 0.08) 0%, transparent 70%)",
            }}
        >
            <div className="section-container">
                {/* Section heading */}
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "80px",
                    }}
                >
                    <p
                        style={{
                            fontSize: "12px",
                            letterSpacing: "3px",
                            color: "var(--accent)",
                            textTransform: "uppercase",
                            marginBottom: "16px",
                            fontWeight: 500,
                        }}
                    >
                        Technical Stack
                    </p>
                    <h2
                        style={{
                            fontSize: "clamp(36px, 6vw, 72px)",
                            fontWeight: 800,
                            textTransform: "uppercase",
                            letterSpacing: "-2px",
                            lineHeight: 1,
                        }}
                    >
                        TOOLS & TECH
                    </h2>
                </div>

                {/* Tech groups */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "48px",
                    }}
                    className="skills-grid"
                >
                    {techGroups.map((group, gIdx) => (
                        <div key={gIdx}>
                            <h4
                                style={{
                                    fontSize: "11px",
                                    letterSpacing: "2px",
                                    textTransform: "uppercase",
                                    color: "var(--accent)",
                                    marginBottom: "24px",
                                    fontWeight: 600,
                                }}
                            >
                                {group.category}
                            </h4>
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(2, 1fr)",
                                    gap: "12px",
                                }}
                            >
                                {group.items.map((item, iIdx) => (
                                    <div
                                        key={iIdx}
                                        style={{
                                            padding: "16px 12px",
                                            borderRadius: "10px",
                                            border: "1px solid var(--border)",
                                            background: "rgba(194, 164, 255, 0.03)",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            gap: "8px",
                                            transition: "all 0.3s ease",
                                            cursor: "default",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = "rgba(194, 164, 255, 0.1)";
                                            e.currentTarget.style.borderColor = "rgba(194, 164, 255, 0.3)";
                                            e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
                                            e.currentTarget.style.boxShadow = "0 12px 24px rgba(194, 164, 255, 0.2)";
                                            const icon = e.currentTarget.querySelector('span:first-child') as HTMLElement;
                                            if (icon) {
                                                icon.style.transform = "scale(1.2) rotate(5deg)";
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = "rgba(194, 164, 255, 0.03)";
                                            e.currentTarget.style.borderColor = "var(--border)";
                                            e.currentTarget.style.transform = "translateY(0) scale(1)";
                                            e.currentTarget.style.boxShadow = "none";
                                            const icon = e.currentTarget.querySelector('span:first-child') as HTMLElement;
                                            if (icon) {
                                                icon.style.transform = "scale(1) rotate(0deg)";
                                            }
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "32px",
                                                color: item.color,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                transition: "all 0.3s ease",
                                            }}
                                        >
                                            <item.icon />
                                        </span>
                                        <span
                                            style={{
                                                fontSize: "11px",
                                                color: "var(--text-muted)",
                                                fontWeight: 500,
                                                letterSpacing: "0.3px",
                                                textAlign: "center",
                                            }}
                                        >
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Skills marquee */}
                <div
                    style={{
                        marginTop: "80px",
                        overflow: "hidden",
                        position: "relative",
                    }}
                >
                    <div style={{ display: "flex", gap: "0" }}>
                        <div
                            className="animate-marquee"
                            style={{
                                display: "flex",
                                gap: "0",
                                flexShrink: 0,
                                whiteSpace: "nowrap",
                            }}
                        >
                            {[
                                "C++17",
                                "Linux Kernel",
                                "Kubernetes",
                                "OpenShift",
                                "Helm",
                                "Elasticsearch",
                                "Fluentd",
                                "Kibana",
                                "Filebeat",
                                "Docker",
                                "GDB",
                                "TCP/IP",
                                "Multithreading",
                                "Device Drivers",
                                "POSIX",
                                "C++17",
                                "Linux Kernel",
                                "Kubernetes",
                                "OpenShift",
                                "Helm",
                                "Elasticsearch",
                                "Fluentd",
                                "Kibana",
                                "Filebeat",
                                "Docker",
                                "GDB",
                                "TCP/IP",
                                "Multithreading",
                                "Device Drivers",
                                "POSIX",
                            ].map((item, i) => (
                                <span
                                    key={i}
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        padding: "0 32px",
                                        fontSize: "13px",
                                        fontWeight: 500,
                                        color: i % 3 === 0 ? "var(--accent)" : "var(--text-muted)",
                                        letterSpacing: "1px",
                                        textTransform: "uppercase",
                                        borderRight: "1px solid var(--border)",
                                        height: "48px",
                                    }}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .skills-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 500px) {
                    .skills-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Skills;
