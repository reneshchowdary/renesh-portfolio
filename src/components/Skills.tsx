import React from "react";

const techGroups = [
    {
        category: "Languages",
        items: [
            { name: "C", icon: "C" },
            { name: "C++", icon: "C++" },
            { name: "Python", icon: "Py" },
            { name: "Assembly", icon: "ASM" },
            { name: "Bash", icon: "SH" },
        ],
    },
    {
        category: "Systems",
        items: [
            { name: "Linux", icon: "🐧" },
            { name: "POSIX", icon: "⚙" },
            { name: "TCP/IP", icon: "🌐" },
            { name: "Sockets", icon: "🔌" },
            { name: "GDB", icon: "🐛" },
        ],
    },
    {
        category: "Cloud & DevOps",
        items: [
            { name: "Kubernetes", icon: "K8s" },
            { name: "OpenShift", icon: "OS" },
            { name: "Docker", icon: "🐋" },
            { name: "Helm", icon: "⎈" },
            { name: "Jenkins", icon: "JK" },
        ],
    },
    {
        category: "Observability",
        items: [
            { name: "Elasticsearch", icon: "ES" },
            { name: "Fluentd", icon: "FD" },
            { name: "Kibana", icon: "KB" },
            { name: "Filebeat", icon: "FB" },
            { name: "Prometheus", icon: "PRM" },
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
                                            e.currentTarget.style.transform = "translateY(-4px)";
                                            e.currentTarget.style.boxShadow = "0 8px 20px rgba(194, 164, 255, 0.1)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = "rgba(194, 164, 255, 0.03)";
                                            e.currentTarget.style.borderColor = "var(--border)";
                                            e.currentTarget.style.transform = "translateY(0)";
                                            e.currentTarget.style.boxShadow = "none";
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "18px",
                                                fontWeight: 700,
                                                color: "var(--text)",
                                                letterSpacing: "-0.5px",
                                            }}
                                        >
                                            {item.icon}
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
