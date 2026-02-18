import React from "react";
import Section from "./SectionWrapper";

const Contact = () => {
    return (
        <Section id="contact" className="py-32 md:py-48">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-4xl md:text-7xl font-bold tracking-tight">
                    Ready to build <br />
                    <span className="text-gradient-main">the next big thing?</span>
                </h2>

                <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
                    Open for opportunities in Backend Engineering, Systems Architecture, and High-Performance Infrastructure.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
                    <a
                        href="mailto:Reneshnaidu.para@gmail.com"
                        className="group px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
                    >
                        <span>Email Me</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>

                    <a
                        href="https://linkedin.com/in/reneshnaidu"
                        target="_blank"
                        className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white font-medium text-lg"
                    >
                        LinkedIn Profile
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
