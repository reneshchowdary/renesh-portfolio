"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale";
}

const AnimatedSection = ({ 
    children, 
    className = "", 
    delay = 0,
    animation = "fadeUp" 
}: AnimatedSectionProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -100px 0px",
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [delay]);

    const getAnimationStyle = () => {
        const baseStyle = {
            opacity: isVisible ? 1 : 0,
            transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}ms`,
        };

        switch (animation) {
            case "fadeUp":
                return {
                    ...baseStyle,
                    transform: isVisible ? "translateY(0)" : "translateY(40px)",
                };
            case "fadeIn":
                return baseStyle;
            case "slideLeft":
                return {
                    ...baseStyle,
                    transform: isVisible ? "translateX(0)" : "translateX(60px)",
                };
            case "slideRight":
                return {
                    ...baseStyle,
                    transform: isVisible ? "translateX(0)" : "translateX(-60px)",
                };
            case "scale":
                return {
                    ...baseStyle,
                    transform: isVisible ? "scale(1)" : "scale(0.9)",
                };
            default:
                return baseStyle;
        }
    };

    return (
        <div ref={ref} className={className} style={getAnimationStyle()}>
            {children}
        </div>
    );
};

export default AnimatedSection;

// Made with Bob
