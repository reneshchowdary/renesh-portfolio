"use client";

import React, { useEffect, useState } from "react";

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + 10;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    if (!isLoading) return null;

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                background: "var(--bg)",
                zIndex: 10000,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "32px",
                opacity: progress === 100 ? 0 : 1,
                transition: "opacity 0.5s ease",
            }}
        >
            {/* Logo/Initial */}
            <div
                style={{
                    fontSize: "72px",
                    fontWeight: 800,
                    color: "var(--accent)",
                    letterSpacing: "-2px",
                    animation: "pulse-glow 2s ease-in-out infinite",
                }}
            >
                R
            </div>

            {/* Progress bar */}
            <div
                style={{
                    width: "200px",
                    height: "2px",
                    background: "var(--border)",
                    borderRadius: "2px",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        height: "100%",
                        width: `${progress}%`,
                        background: "var(--accent)",
                        transition: "width 0.3s ease",
                        boxShadow: "0 0 10px var(--accent)",
                    }}
                />
            </div>

            {/* Loading text */}
            <div
                style={{
                    fontSize: "12px",
                    letterSpacing: "3px",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    fontWeight: 500,
                }}
            >
                Loading... {progress}%
            </div>
        </div>
    );
};

export default LoadingScreen;

// Made with Bob
