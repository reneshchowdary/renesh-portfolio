"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Work", href: "#work" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6">
            <nav
                className={`
                    flex items-center gap-1 p-1 rounded-full border transition-all duration-500
                    ${scrolled
                        ? "bg-white/5 backdrop-blur-xl border-white/10 shadow-lg shadow-black/20"
                        : "bg-transparent border-transparent"
                    }
                `}
            >
                <Link
                    href="#hero"
                    className="px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-white/5 transition-colors"
                >
                    Renesh<span className="text-accent-blue">.</span>
                </Link>

                <div className="h-4 w-[1px] bg-white/10 mx-1 hidden sm:block" />

                <div className="hidden sm:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <Link
                    href="mailto:Reneshnaidu.para@gmail.com"
                    className="ml-1 px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition-transform"
                >
                    Let's Talk
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;
