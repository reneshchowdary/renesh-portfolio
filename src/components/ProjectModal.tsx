"use client";

import React, { useEffect } from "react";

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        num: string;
        title: string;
        category: string;
        tools: string;
        description: string;
        fullDescription?: string;
        features?: string[];
        github?: string;
        demo?: string;
        image?: string;
    };
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleEscape);
        return () => {
            window.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
            }}
            onClick={onClose}
        >
            {/* Backdrop */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(11, 8, 12, 0.95)",
                    backdropFilter: "blur(10px)",
                    animation: "fadeIn 0.3s ease",
                }}
            />

            {/* Modal Content */}
            <div
                style={{
                    position: "relative",
                    maxWidth: "900px",
                    width: "100%",
                    maxHeight: "90vh",
                    overflowY: "auto",
                    background: "var(--bg2)",
                    border: "1px solid var(--border)",
                    borderRadius: "16px",
                    padding: "48px",
                    animation: "fadeInUp 0.4s ease",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute",
                        top: "24px",
                        right: "24px",
                        width: "40px",
                        height: "40px",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                        background: "transparent",
                        color: "var(--text-muted)",
                        fontSize: "20px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.color = "var(--text-muted)";
                    }}
                >
                    ✕
                </button>

                {/* Project Number */}
                <div
                    style={{
                        fontSize: "72px",
                        fontWeight: 800,
                        color: "rgba(194, 164, 255, 0.1)",
                        lineHeight: 1,
                        marginBottom: "16px",
                    }}
                >
                    {project.num}
                </div>

                {/* Category */}
                <span
                    style={{
                        fontSize: "11px",
                        letterSpacing: "2px",
                        color: "var(--accent)",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        display: "block",
                        marginBottom: "12px",
                    }}
                >
                    {project.category}
                </span>

                {/* Title */}
                <h2
                    style={{
                        fontSize: "clamp(28px, 4vw, 42px)",
                        fontWeight: 700,
                        color: "var(--text)",
                        marginBottom: "24px",
                        lineHeight: 1.2,
                    }}
                >
                    {project.title}
                </h2>

                {/* Description */}
                <p
                    style={{
                        fontSize: "15px",
                        color: "var(--text-muted)",
                        lineHeight: "1.8",
                        marginBottom: "32px",
                    }}
                >
                    {project.fullDescription || project.description}
                </p>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                    <div style={{ marginBottom: "32px" }}>
                        <h3
                            style={{
                                fontSize: "16px",
                                fontWeight: 700,
                                color: "var(--text)",
                                marginBottom: "16px",
                                letterSpacing: "0.5px",
                            }}
                        >
                            Key Features
                        </h3>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                            {project.features.map((feature, i) => (
                                <li
                                    key={i}
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "12px",
                                        fontSize: "14px",
                                        color: "var(--text-muted)",
                                        lineHeight: "1.6",
                                    }}
                                >
                                    <span
                                        style={{
                                            width: "6px",
                                            height: "6px",
                                            borderRadius: "50%",
                                            background: "var(--accent)",
                                            flexShrink: 0,
                                            marginTop: "6px",
                                        }}
                                    />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Tools */}
                <div style={{ marginBottom: "32px" }}>
                    <h3
                        style={{
                            fontSize: "11px",
                            letterSpacing: "2px",
                            color: "var(--accent)",
                            textTransform: "uppercase",
                            fontWeight: 600,
                            marginBottom: "12px",
                        }}
                    >
                        Technologies Used
                    </h3>
                    <p
                        style={{
                            fontSize: "13px",
                            color: "var(--text-muted)",
                            lineHeight: "1.6",
                        }}
                    >
                        {project.tools}
                    </p>
                </div>

                {/* Action buttons */}
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: "12px 32px",
                                borderRadius: "8px",
                                border: "1px solid var(--border)",
                                background: "rgba(194, 164, 255, 0.05)",
                                color: "var(--text)",
                                fontSize: "13px",
                                fontWeight: 600,
                                letterSpacing: "0.5px",
                                transition: "all 0.3s ease",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "var(--accent)";
                                e.currentTarget.style.background = "rgba(194, 164, 255, 0.1)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "var(--border)";
                                e.currentTarget.style.background = "rgba(194, 164, 255, 0.05)";
                            }}
                        >
                            View on GitHub →
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: "12px 32px",
                                borderRadius: "8px",
                                background: "var(--accent)",
                                border: "1px solid var(--accent)",
                                color: "#0b080c",
                                fontSize: "13px",
                                fontWeight: 700,
                                letterSpacing: "0.5px",
                                transition: "all 0.3s ease",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "var(--accent-dark)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "var(--accent)";
                            }}
                        >
                            Live Demo →
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;

// Made with Bob
