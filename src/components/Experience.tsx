import React from "react";

const jobs = [
    {
        period: "Jan 2024 — Present",
        company: "IBM Labs Bangalore",
        role: "Senior Software Engineer",
        project: "CICS TX",
        bullets: [
            "Core C++ component development for enterprise transaction processing",
            "Deployed full EFK stack on OpenShift/K8s via Helm Charts & Operators",
            "Integrated Filebeat sidecars for efficient log forwarding",
            "Managed Persistent Volume Claims for high-availability data storage",
        ],
    },
    {
        period: "Dec 2021 — Dec 2023",
        company: "OpenText Bangalore",
        role: "Senior Software Engineer",
        project: "Operations Agent",
        bullets: [
            "Developed embedded C/C++ data collector for real-time system metrics",
            "Integrated with OBM & Performance Dashboard for end-to-end visibility",
            "Diagnosed complex performance issues on live production systems",
            "Aggregated heterogeneous data into a unified management view",
        ],
    },
    {
        period: "Oct 2020 — Nov 2021",
        company: "Eximius Design",
        role: "Software Engineer",
        project: "Autonomous Driving",
        bullets: [
            "Device driver development for automotive camera modules",
            "Developed drivers for AR0820, MAX9295A, and serializer modules",
            "Collaborated on Surround Recognition & Driver Monitoring Systems",
            "Optimized I2C communication for sensor modules",
        ],
    },
    {
        period: "Dec 2018 — Jan 2020",
        company: "Matrix Comsec",
        role: "Software Developer",
        project: "Access Control",
        bullets: [
            "Embedded Linux development for biometric access control systems",
            "Implemented secure TCP/IP socket communication protocols",
            "Optimized event storage scaling to 500,000 records",
            "Enhanced UI responsiveness on 128×64 Dot Matrix Displays",
        ],
    },
];

const Experience = () => {
    return (
        <section
            id="experience"
            style={{
                padding: "120px 0",
                position: "relative",
            }}
        >
            <div className="section-container">
                {/* Heading */}
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "80px",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "clamp(36px, 5vw, 64px)",
                            fontWeight: 800,
                            lineHeight: 1,
                            letterSpacing: "-1px",
                        }}
                    >
                        My career &{" "}
                        <span style={{ color: "var(--accent)" }}>experience</span>
                    </h2>
                </div>

                {/* Timeline */}
                <div style={{ position: "relative" }}>
                    {/* Timeline center line */}
                    <div
                        style={{
                            position: "absolute",
                            left: "50%",
                            top: 0,
                            bottom: 0,
                            width: "1px",
                            background: "var(--border)",
                            transform: "translateX(-50%)",
                        }}
                        className="timeline-line"
                    />

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "60px",
                        }}
                    >
                        {jobs.map((job, idx) => (
                            <div
                                key={idx}
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: "60px",
                                    position: "relative",
                                    alignItems: "start",
                                }}
                                className="timeline-item"
                            >
                                {/* Left side (period, company) - even indexes on right */}
                                <div
                                    style={{
                                        textAlign: idx % 2 === 0 ? "right" : "left",
                                        order: idx % 2 === 0 ? 0 : 1,
                                        paddingTop: "4px",
                                    }}
                                    className={idx % 2 === 0 ? "timeline-left" : "timeline-right"}
                                >
                                    <span
                                        style={{
                                            fontSize: "11px",
                                            letterSpacing: "2px",
                                            color: "var(--accent)",
                                            textTransform: "uppercase",
                                            display: "block",
                                            marginBottom: "8px",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {job.period}
                                    </span>
                                    <h3
                                        style={{
                                            fontSize: "22px",
                                            fontWeight: 700,
                                            color: "var(--text)",
                                            marginBottom: "6px",
                                        }}
                                    >
                                        {job.company}
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            color: "var(--text-muted)",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {job.role}
                                    </p>
                                </div>

                                {/* Center Dot */}
                                <div
                                    style={{
                                        position: "absolute",
                                        left: "50%",
                                        top: "12px",
                                        transform: "translateX(-50%)",
                                        width: "14px",
                                        height: "14px",
                                        borderRadius: "50%",
                                        background: "var(--accent)",
                                        boxShadow: "0 0 16px rgba(194, 164, 255, 0.5)",
                                        zIndex: 1,
                                    }}
                                    className="timeline-dot"
                                />

                                {/* Right side (bullets) */}
                                <div
                                    style={{
                                        order: idx % 2 === 0 ? 1 : 0,
                                    }}
                                >
                                    <div
                                        style={{
                                            padding: "24px",
                                            borderRadius: "10px",
                                            border: "1px solid var(--border)",
                                            background: "rgba(194, 164, 255, 0.03)",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "11px",
                                                letterSpacing: "1.5px",
                                                color: "var(--accent)",
                                                textTransform: "uppercase",
                                                fontWeight: 600,
                                                display: "block",
                                                marginBottom: "16px",
                                            }}
                                        >
                                            {job.project}
                                        </span>
                                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                                            {job.bullets.map((b, i) => (
                                                <li
                                                    key={i}
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "flex-start",
                                                        gap: "10px",
                                                        fontSize: "13px",
                                                        color: "var(--text-muted)",
                                                        lineHeight: "1.6",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            width: "5px",
                                                            height: "5px",
                                                            borderRadius: "50%",
                                                            background: "var(--accent)",
                                                            flexShrink: 0,
                                                            marginTop: "6px",
                                                        }}
                                                    />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .timeline-line { display: none !important; }
                    .timeline-dot { display: none !important; }
                    .timeline-item {
                        grid-template-columns: 1fr !important;
                        gap: 16px !important;
                    }
                    .timeline-left, .timeline-right {
                        text-align: left !important;
                        order: 0 !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Experience;
