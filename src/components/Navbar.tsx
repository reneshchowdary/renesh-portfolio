"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "ABOUT", href: "#about" },
        { name: "WORK", href: "#work" },
        { name: "CONTACT", href: "#contact" },
    ];

    return (
        <>
            {/* Main Navbar */}
            <header
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 40px",
                    background: scrolled ? "rgba(11, 8, 12, 0.9)" : "transparent",
                    backdropFilter: scrolled ? "blur(10px)" : "none",
                    borderBottom: scrolled ? "1px solid rgba(194, 164, 255, 0.08)" : "none",
                    transition: "all 0.4s ease",
                }}
            >
                {/* Logo */}
                <Link
                    href="/"
                    style={{
                        fontWeight: 700,
                        fontSize: "18px",
                        letterSpacing: "0.1px",
                        color: "var(--text)",
                    }}
                >
                    R
                </Link>

                {/* Center - Email */}
                <a
                    href="mailto:Reneshnaidu.para@gmail.com"
                    style={{
                        fontSize: "13px",
                        color: "var(--text-muted)",
                        letterSpacing: "0.5px",
                        display: "none",
                    }}
                    className="nav-email"
                >
                    Reneshnaidu.para@gmail.com
                </a>

                {/* Right Nav Links */}
                <nav style={{ display: "flex", alignItems: "center", gap: "40px" }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            style={{
                                fontSize: "13px",
                                fontWeight: 500,
                                letterSpacing: "1.5px",
                                color: "var(--text-muted)",
                                transition: "color 0.2s ease",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </header>

            {/* Left Social Sidebar */}
            <div
                style={{
                    position: "fixed",
                    left: "24px",
                    bottom: "40px",
                    zIndex: 100,
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    alignItems: "center",
                }}
            >
                {/* GitHub */}
                <a
                    href="https://github.com/reneshnaidu"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                    aria-label="GitHub"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                </a>

                {/* LinkedIn */}
                <a
                    href="https://linkedin.com/in/reneshnaidu"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                    aria-label="LinkedIn"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                </a>

                {/* Twitter/X */}
                <a
                    href="#"
                    style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                    aria-label="Twitter"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                </a>

                {/* Email */}
                <a
                    href="mailto:Reneshnaidu.para@gmail.com"
                    style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                    aria-label="Email"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                </a>

                {/* Vertical line */}
                <div style={{ width: "1px", height: "60px", background: "var(--border)" }} />
            </div>

            {/* Bottom right - Resume */}
            <a
                href="/Renesh_Naidu_Para_Resume.pdf"
                download="Renesh_Naidu_Para_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    position: "fixed",
                    right: "24px",
                    bottom: "40px",
                    zIndex: 100,
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "2px",
                    color: "var(--text-muted)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    transform: "rotate(180deg)",
                    transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
                RESUME
                <span style={{ fontSize: "16px", transform: "rotate(180deg)" }}>⊞</span>
            </a>

            <style>{`
                @media (min-width: 768px) {
                    .nav-email {
                        display: block !important;
                    }
                }
                @media (max-width: 600px) {
                    .social-sidebar { display: none; }
                    .resume-btn { display: none; }
                }
            `}</style>
        </>
    );
};

export default Navbar;
