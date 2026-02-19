"use client";

import React, { useEffect, useState } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if mobile device
        setIsMobile(window.innerWidth <= 768);
        
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMobile) return;
        const updateCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            
            const target = e.target as HTMLElement;
            const isClickable = 
                target.tagName === "A" || 
                target.tagName === "BUTTON" ||
                target.closest("a") !== null ||
                target.closest("button") !== null ||
                window.getComputedStyle(target).cursor === "pointer";
            
            setIsPointer(isClickable);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", updateCursor);
        document.body.addEventListener("mouseenter", handleMouseEnter);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", updateCursor);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    if (!isVisible || isMobile) return null;

    return (
        <>
            {/* Main cursor dot */}
            <div
                style={{
                    position: "fixed",
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: isPointer ? "8px" : "6px",
                    height: isPointer ? "8px" : "6px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                    pointerEvents: "none",
                    zIndex: 10000,
                    transform: "translate(-50%, -50%)",
                    transition: "width 0.2s ease, height 0.2s ease",
                    mixBlendMode: "difference",
                }}
            />
            
            {/* Cursor ring */}
            <div
                style={{
                    position: "fixed",
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: isPointer ? "40px" : "30px",
                    height: isPointer ? "40px" : "30px",
                    border: "1px solid var(--accent)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    zIndex: 9999,
                    transform: "translate(-50%, -50%)",
                    transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s ease",
                    opacity: isPointer ? 0.6 : 0.3,
                }}
            />
        </>
    );
};

export default CustomCursor;

// Made with Bob
