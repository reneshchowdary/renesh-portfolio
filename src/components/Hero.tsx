"use client";

import React, { useEffect, useRef } from "react";

const Hero = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // Particle system
        const particles: Array<{
            x: number; y: number; size: number;
            speedX: number; speedY: number; opacity: number;
        }> = [];

        for (let i = 0; i < 80; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.5 + 0.1,
            });
        }

        let animId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.x += p.speedX;
                p.y += p.speedY;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(194, 164, 255, ${p.opacity})`;
                ctx.fill();
            });
            animId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <section
            id="hero"
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                background: "radial-gradient(ellipse at top, rgba(168, 124, 255, 0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(194, 164, 255, 0.1) 0%, transparent 50%)",
            }}
        >
            {/* Animated gradient mesh background */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: `
                        radial-gradient(circle at 20% 50%, rgba(194, 164, 255, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(168, 124, 255, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 40% 20%, rgba(194, 164, 255, 0.08) 0%, transparent 50%)
                    `,
                    animation: "mesh-move 20s ease-in-out infinite",
                    pointerEvents: "none",
                }}
            />
            {/* Particle canvas */}
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                    zIndex: 0,
                }}
            />

            {/* Centered purple glow orb */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "600px",
                    height: "600px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(168, 124, 255, 0.15) 0%, rgba(194, 164, 255, 0.05) 40%, transparent 70%)",
                    pointerEvents: "none",
                    zIndex: 0,
                    animation: "pulse-glow 4s ease-in-out infinite",
                }}
            />

            {/* Content */}
            <div
                className="section-container"
                style={{
                    position: "relative",
                    zIndex: 1,
                    textAlign: "center",
                    paddingTop: "80px",
                }}
            >
                {/* Profile Picture with Animated Border */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "40px",
                        opacity: 0,
                        animation: "fadeInUp 0.7s ease 0.1s forwards",
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            width: "280px",
                            height: "280px",
                        }}
                    >
                        {/* Animated gradient border */}
                        <div
                            style={{
                                position: "absolute",
                                inset: "-4px",
                                borderRadius: "28px",
                                background: "linear-gradient(45deg, var(--accent), var(--accent-dark), var(--accent))",
                                backgroundSize: "200% 200%",
                                animation: "gradient-border 3s ease infinite",
                                padding: "4px",
                            }}
                        >
                            <div
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "24px",
                                    background: "var(--bg)",
                                    padding: "8px",
                                }}
                            >
                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "20px",
                                        overflow: "hidden",
                                        border: "3px solid rgba(194, 164, 255, 0.2)",
                                        boxShadow: "0 0 40px rgba(194, 164, 255, 0.3)",
                                    }}
                                >
                                    <img
                                        src="/profile.jpeg"
                                        alt="Renesh Naidu Para"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            objectPosition: "center 30%",
                                        }}
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = "none";
                                            const parent = target.parentElement;
                                            if (parent) {
                                                parent.style.background = "linear-gradient(135deg, rgba(194, 164, 255, 0.2), rgba(168, 124, 255, 0.3))";
                                                parent.style.display = "flex";
                                                parent.style.alignItems = "center";
                                                parent.style.justifyContent = "center";
                                                parent.innerHTML = '<span style="font-size: 64px; font-weight: 800; color: var(--accent);">RN</span>';
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Glow effect */}
                        <div
                            style={{
                                position: "absolute",
                                inset: "-20px",
                                borderRadius: "28px",
                                background: "radial-gradient(circle, rgba(194, 164, 255, 0.2) 0%, transparent 70%)",
                                animation: "pulse-glow 3s ease-in-out infinite",
                                pointerEvents: "none",
                                zIndex: -1,
                            }}
                        />
                    </div>
                </div>

                {/* Small greeting */}
                <p
                    style={{
                        fontSize: "14px",
                        letterSpacing: "3px",
                        color: "var(--accent)",
                        textTransform: "uppercase",
                        marginBottom: "24px",
                        opacity: 0,
                        animation: "fadeInUp 0.7s ease 0.2s forwards",
                        fontWeight: 500,
                    }}
                >
                    Hello! I&apos;m
                </p>

                {/* Large Name with Gradient */}
                <h1
                    style={{
                        fontSize: "clamp(56px, 10vw, 120px)",
                        fontWeight: 800,
                        lineHeight: 1,
                        letterSpacing: "-2px",
                        background: "linear-gradient(135deg, var(--text) 0%, var(--accent) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        marginBottom: "8px",
                        opacity: 0,
                        animation: "fadeInUp 0.7s ease 0.4s forwards",
                        textTransform: "uppercase",
                        textShadow: "0 0 80px rgba(194, 164, 255, 0.5)",
                    }}
                >
                    RENESH
                </h1>
                <h1
                    style={{
                        fontSize: "clamp(56px, 10vw, 120px)",
                        fontWeight: 800,
                        lineHeight: 1,
                        letterSpacing: "-2px",
                        background: "linear-gradient(135deg, var(--accent) 0%, var(--text) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        marginBottom: "40px",
                        opacity: 0,
                        animation: "fadeInUp 0.7s ease 0.5s forwards",
                        textTransform: "uppercase",
                    }}
                >
                    NAIDU PARA
                </h1>

                {/* Role line */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "16px",
                        marginBottom: "60px",
                        opacity: 0,
                        animation: "fadeInUp 0.7s ease 0.7s forwards",
                    }}
                >
                    <span style={{ fontSize: "14px", color: "var(--text-muted)", letterSpacing: "2px" }}>A</span>
                    <div
                        style={{
                            height: "1px",
                            width: "40px",
                            background: "var(--border)",
                        }}
                    />
                    <span
                        style={{
                            fontSize: "clamp(18px, 3vw, 28px)",
                            fontWeight: 700,
                            letterSpacing: "4px",
                            textTransform: "uppercase",
                            color: "var(--text)",
                        }}
                    >
                        SYSTEMS ENGINEER
                    </span>
                    <div
                        style={{
                            height: "1px",
                            width: "40px",
                            background: "var(--border)",
                        }}
                    />
                    <span
                        style={{
                            fontSize: "clamp(18px, 3vw, 28px)",
                            fontWeight: 700,
                            letterSpacing: "4px",
                            textTransform: "uppercase",
                            color: "var(--accent)",
                        }}
                    >
                        C++ DEVELOPER
                    </span>
                </div>

                {/* CTA Buttons */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "16px",
                        flexWrap: "wrap",
                        opacity: 0,
                        animation: "fadeInUp 0.7s ease 0.9s forwards",
                    }}
                >
                    <a
                        href="#work"
                        style={{
                            padding: "14px 40px",
                            borderRadius: "6px",
                            background: "rgba(194, 164, 255, 0.15)",
                            border: "1px solid rgba(194, 164, 255, 0.3)",
                            color: "var(--text)",
                            fontSize: "14px",
                            fontWeight: 600,
                            letterSpacing: "1px",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(194, 164, 255, 0.25)";
                            e.currentTarget.style.borderColor = "var(--accent)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(194, 164, 255, 0.15)";
                            e.currentTarget.style.borderColor = "rgba(194, 164, 255, 0.3)";
                        }}
                    >
                        Explore Work →
                    </a>
                    <a
                        href="#contact"
                        style={{
                            padding: "14px 40px",
                            borderRadius: "6px",
                            background: "var(--accent)",
                            border: "1px solid var(--accent)",
                            color: "#0b080c",
                            fontSize: "14px",
                            fontWeight: 700,
                            letterSpacing: "1px",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
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

                {/* Scroll indicator */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "-80px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "8px",
                        opacity: 0,
                        animation: "fadeInUp 0.7s ease 1.2s forwards",
                    }}
                >
                    <span style={{ fontSize: "10px", letterSpacing: "3px", color: "var(--text-muted)" }}>SCROLL</span>
                    <div
                        style={{
                            width: "1px",
                            height: "50px",
                            background: "linear-gradient(to bottom, var(--accent), transparent)",
                        }}
                    />
                </div>
            </div>

            <style>{`
                @keyframes pulse-glow {
                    0%, 100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1); }
                    50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
                }
                
                @keyframes mesh-move {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                        opacity: 1;
                    }
                    33% {
                        transform: translate(30px, -30px) scale(1.1);
                        opacity: 0.8;
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                        opacity: 0.9;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
