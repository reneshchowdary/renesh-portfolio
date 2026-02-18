import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t border-white/5 bg-black py-12">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start gap-1">
                    <span className="text-white font-bold tracking-tight">Renesh Naidu Para</span>
                    <span className="text-zinc-600 text-sm">Senior Software Engineer</span>
                </div>

                <div className="flex gap-6 text-sm font-medium text-zinc-500">
                    <Link href="#" className="hover:text-white transition-colors">Resume</Link>
                    <Link href="https://linkedin.com/in/reneshnaidu" className="hover:text-white transition-colors">LinkedIn</Link>
                    <Link href="mailto:Reneshnaidu.para@gmail.com" className="hover:text-white transition-colors">Email</Link>
                </div>

                <div className="text-zinc-800 text-xs">
                    &copy; 2026 Renesh Naidu Para.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
