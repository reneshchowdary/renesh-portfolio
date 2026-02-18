import React from "react";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    noPadding?: boolean;
}

const GlassCard = ({
    children,
    className = "",
    hover = true,
    noPadding = false
}: GlassCardProps) => {
    return (
        <div className={`
            glass-panel rounded-2xl overflow-hidden
            ${hover ? "glass-panel-hover group" : ""}
            ${noPadding ? "" : "p-8"}
            ${className}
        `}>
            {children}
        </div>
    );
};

export default GlassCard;
