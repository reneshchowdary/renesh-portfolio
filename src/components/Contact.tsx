"use client";

import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <section
            id="contact"
            style={{
                padding: "120px 0 160px",
                position: "relative",
                textAlign: "center",
            }}
        >
            {/* Large ambient glow */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "700px",
                    height: "400px",
                    borderRadius: "50%",
                    background: "radial-gradient(ellipse, rgba(168, 124, 255, 0.12) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
                {/* Tag */}
                <p
                    style={{
                        fontSize: "12px",
                        letterSpacing: "3px",
                        color: "var(--accent)",
                        textTransform: "uppercase",
                        marginBottom: "24px",
                        fontWeight: 500,
                    }}
                >
                    Get In Touch
                </p>

                {/* Large heading */}
                <h2
                    style={{
                        fontSize: "clamp(48px, 9vw, 110px)",
                        fontWeight: 800,
                        lineHeight: 1,
                        letterSpacing: "-3px",
                        textTransform: "uppercase",
                        marginBottom: "40px",
                    }}
                >
                    SAY{" "}
                    <span
                        style={{
                            color: "var(--accent)",
                            display: "inline-block",
                        }}
                    >
                        HELLO
                    </span>
                </h2>

                <p
                    style={{
                        fontSize: "16px",
                        color: "var(--text-muted)",
                        maxWidth: "480px",
                        margin: "0 auto 60px",
                        lineHeight: "1.7",
                    }}
                >
                    Open for opportunities in Backend Engineering, Systems Architecture,
                    and High-Performance Infrastructure.
                </p>

                {/* Contact Form */}
                <div style={{ marginBottom: "60px" }}>
                    <ContactForm />
                </div>

                {/* CTA Buttons */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "16px",
                        flexWrap: "wrap",
                    }}
                >
                    <a
                        href="mailto:Reneshnaidu.para@gmail.com"
                        style={{
                            padding: "16px 48px",
                            borderRadius: "8px",
                            background: "rgba(30, 26, 36, 0.8)",
                            border: "1px solid var(--border)",
                            color: "var(--text)",
                            fontSize: "15px",
                            fontWeight: 600,
                            letterSpacing: "0.5px",
                            transition: "all 0.3s ease",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "10px",
                            backdropFilter: "blur(8px)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "var(--accent)";
                            e.currentTarget.style.background = "rgba(194, 164, 255, 0.1)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "var(--border)";
                            e.currentTarget.style.background = "rgba(30, 26, 36, 0.8)";
                        }}
                    >
                        Say Hello →
                    </a>
                    <a
                        href="mailto:Reneshnaidu.para@gmail.com"
                        style={{
                            padding: "16px 48px",
                            borderRadius: "8px",
                            background: "var(--accent)",
                            border: "1px solid var(--accent)",
                            color: "#0b080c",
                            fontSize: "15px",
                            fontWeight: 700,
                            letterSpacing: "0.5px",
                            transition: "all 0.3s ease",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "var(--accent-dark)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "var(--accent)";
                        }}
                    >
                        Hire Me →
                    </a>
                </div>

                {/* Social links */}
                <div
                    style={{
                        marginTop: "60px",
                        display: "flex",
                        justifyContent: "center",
                        gap: "32px",
                    }}
                >
                    {[
                        { label: "LinkedIn", href: "https://linkedin.com/in/reneshnaidu" },
                        { label: "GitHub", href: "https://github.com/reneshchowdary" },
                        { label: "Email", href: "mailto:Reneshnaidu.para@gmail.com" },
                    ].map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: "13px",
                                letterSpacing: "1px",
                                color: "var(--text-muted)",
                                textTransform: "uppercase",
                                fontWeight: 500,
                                transition: "color 0.2s",
                                position: "relative",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
