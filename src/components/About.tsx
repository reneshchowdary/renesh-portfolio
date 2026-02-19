"use client";

import React, { useState } from "react";

const roles = [
    {
        title: "SYSTEMS ENGINEER",
        subtitle: "High-performance infrastructure & observability",
        description:
            "Building and optimizing low-latency, high-availability systems using C++ and Linux. Deep expertise in transaction processing, embedded data collection, and real-time system monitoring.",
        bullets: [
            "Transaction processing with IBM CICS TX",
            "Full EFK observability stack on OpenShift",
            "Embedded C/C++ data collectors for system metrics",
            "Real-time performance diagnostics",
        ],
    },
    {
        title: "EMBEDDED DEVELOPER",
        subtitle: "Device drivers & automotive systems",
        description:
            "Developing device drivers and low-level software for automotive and industrial applications. Proficient in ARM architectures, I2C/SPI communication, and hardware-software integration.",
        bullets: [
            "Camera module drivers (AR0820, MAX9295A)",
            "Autonomous Driving surround recognition",
            "Biometric access control systems",
            "Linux kernel module development",
        ],
    },
    {
        title: "CLOUD ARCHITECT",
        subtitle: "Kubernetes & containerized deployments",
        description:
            "Designing and deploying containerized infrastructure using Kubernetes, OpenShift, and Helm charts. Experienced in CI/CD pipelines, persistent storage, and GitOps workflows.",
        bullets: [
            "Kubernetes & OpenShift cluster management",
            "Helm charts & Operator deployment",
            "Filebeat sidecar log forwarding",
            "Persistent Volume Claims for HA storage",
        ],
    },
];

const About = () => {
    const [expanded, setExpanded] = useState<number | null>(0);

    return (
        <section
            id="about"
            style={{
                padding: "120px 0",
                position: "relative",
            }}
        >
            <div className="section-container">
                {/* Large section heading */}
                <h2
                    style={{
                        fontSize: "clamp(48px, 8vw, 100px)",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "-2px",
                        lineHeight: 1,
                        color: "var(--text)",
                        marginBottom: "80px",
                    }}
                >
                    WHAT I DO
                </h2>

                {/* Expandable Role Cards */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {roles.map((role, idx) => (
                        <div
                            key={idx}
                            style={{
                                borderTop: "1px solid var(--border)",
                                cursor: "pointer",
                            }}
                            onClick={() => setExpanded(expanded === idx ? null : idx)}
                        >
                            {/* Role Header */}
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "32px 0",
                                    transition: "all 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    const title = e.currentTarget.querySelector(".role-title") as HTMLElement;
                                    if (title) title.style.color = "var(--accent)";
                                }}
                                onMouseLeave={(e) => {
                                    const title = e.currentTarget.querySelector(".role-title") as HTMLElement;
                                    if (title) title.style.color = expanded === idx ? "var(--accent)" : "var(--text)";
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                                    <span
                                        style={{
                                            fontSize: "13px",
                                            color: "var(--text-muted)",
                                            fontWeight: 500,
                                            minWidth: "30px",
                                        }}
                                    >
                                        0{idx + 1}
                                    </span>
                                    <div>
                                        <h3
                                            className="role-title"
                                            style={{
                                                fontSize: "clamp(20px, 3vw, 32px)",
                                                fontWeight: 700,
                                                letterSpacing: "1px",
                                                color: expanded === idx ? "var(--accent)" : "var(--text)",
                                                transition: "color 0.3s ease",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            {role.title}
                                        </h3>
                                        <p
                                            style={{
                                                fontSize: "13px",
                                                color: "var(--text-muted)",
                                                marginTop: "4px",
                                                letterSpacing: "0.5px",
                                            }}
                                        >
                                            {role.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Toggle Icon */}
                                <div
                                    style={{
                                        width: "36px",
                                        height: "36px",
                                        border: "1px solid var(--border)",
                                        borderRadius: "4px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "var(--text-muted)",
                                        fontSize: "20px",
                                        flexShrink: 0,
                                        transition: "all 0.3s ease",
                                        background: expanded === idx ? "rgba(194, 164, 255, 0.1)" : "transparent",
                                        borderColor: expanded === idx ? "rgba(194, 164, 255, 0.3)" : "var(--border)",
                                    }}
                                >
                                    {expanded === idx ? "−" : "∨"}
                                </div>
                            </div>

                            {/* Expanded Content */}
                            <div
                                style={{
                                    overflow: "hidden",
                                    maxHeight: expanded === idx ? "500px" : "0px",
                                    transition: "max-height 0.5s ease",
                                    paddingBottom: expanded === idx ? "40px" : "0px",
                                }}
                            >
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: "40px",
                                        paddingLeft: "54px",
                                    }}
                                    className="about-grid"
                                >
                                    <div>
                                        <p
                                            style={{
                                                color: "var(--text-muted)",
                                                lineHeight: "1.8",
                                                fontSize: "15px",
                                            }}
                                        >
                                            {role.description}
                                        </p>
                                    </div>
                                    <div>
                                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                                            {role.bullets.map((b, i) => (
                                                <li
                                                    key={i}
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "12px",
                                                        fontSize: "14px",
                                                        color: "var(--text)",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            width: "6px",
                                                            height: "6px",
                                                            borderRadius: "50%",
                                                            background: "var(--accent)",
                                                            flexShrink: 0,
                                                        }}
                                                    />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Bottom border */}
                    <div style={{ height: "1px", background: "var(--border)" }} />
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .about-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
