import React from "react";

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    fullWidth?: boolean;
}

const Section = ({
    children,
    id,
    className = "",
    fullWidth = false,
}: SectionProps) => {
    return (
        <section
            id={id}
            className={`relative py-24 md:py-32 w-full flex justify-center ${className}`}
        >
            <div className={`w-full px-6 md:px-12 ${fullWidth ? '' : 'max-w-6xl'}`}>
                {children}
            </div>
        </section>
    );
};

export default Section;
