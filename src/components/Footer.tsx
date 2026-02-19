import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer
            style={{
                borderTop: "1px solid var(--border)",
                padding: "40px 0",
            }}
        >
            <div
                className="section-container"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "16px",
                }}
            >
                <div>
                    <span
                        style={{
                            fontWeight: 700,
                            fontSize: "15px",
                            color: "var(--text)",
                        }}
                    >
                        Renesh Naidu Para
                    </span>
                    <span
                        style={{
                            fontSize: "13px",
                            color: "var(--text-muted)",
                            marginLeft: "12px",
                        }}
                    >
                        Senior Software Engineer
                    </span>
                </div>

                <div
                    style={{
                        display: "flex",
                        gap: "32px",
                    }}
                >
                    {[
                        { label: "About", href: "#about" },
                        { label: "Work", href: "#work" },
                        { label: "Contact", href: "#contact" },
                        { label: "LinkedIn", href: "https://linkedin.com/in/reneshnaidu" },
                    ].map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            style={{
                                fontSize: "13px",
                                color: "var(--text-muted)",
                                fontWeight: 500,
                                letterSpacing: "0.5px",
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div
                    style={{
                        fontSize: "12px",
                        color: "rgba(234, 229, 236, 0.2)",
                        letterSpacing: "0.5px",
                    }}
                >
                    © 2026 Renesh Naidu Para
                </div>
            </div>
        </footer>
    );
};

export default Footer;
