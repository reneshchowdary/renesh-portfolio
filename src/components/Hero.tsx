import React from "react";
import Section from "./SectionWrapper";
import Link from "next/link";

const Hero = () => {
    return (
        <Section id="hero" className="min-h-screen flex items-center pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Left: Typography */}
                <div className="space-y-8 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-accent-teal">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                        </span>
                        Available for new projects
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                        Constructing <br />
                        <span className="text-gradient-accent">Scalable Systems.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed">
                        I’m <strong>Renesh Naidu Para</strong>. A Senior Backend Engineer architecting high-performance infrastructure and observability stacks for global scale.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <Link
                            href="#work"
                            className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
                        >
                            Selected Work
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white font-medium"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>

                {/* Right: Abstract Systems Map Visual */}
                <div className="relative h-[400px] w-full hidden lg:block perspective-[1000px]">
                    {/* Main Container Card */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-3xl border border-white/5 backdrop-blur-sm p-8 transform rotate-y-[-12deg] rotate-x-[5deg] hover:rotate-0 transition-all duration-700 ease-out shadow-2xl">

                        {/* Grid Lines */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] rounded-3xl" />

                        {/* Nodes */}
                        <div className="relative h-full w-full">
                            {/* Center Node: Core */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-black/50 border border-accent-blue/30 rounded-full flex items-center justify-center shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)] animate-pulse-slow">
                                <div className="text-center">
                                    <div className="text-xs text-accent-blue font-mono">CORE</div>
                                    <div className="text-white font-bold">C++</div>
                                </div>
                            </div>

                            {/* Orbiting Node 1: K8s */}
                            <div className="absolute top-10 left-10 p-4 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md animate-[float_6s_ease-in-out_infinite]">
                                <div className="h-2 w-2 rounded-full bg-accent-violet mb-2" />
                                <div className="text-xs text-zinc-400 font-mono">Orchestration</div>
                                <div className="font-bold text-sm">Kubernetes</div>
                            </div>

                            {/* Orbiting Node 2: Data */}
                            <div className="absolute bottom-12 right-8 p-4 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md animate-[float_7s_ease-in-out_infinite_1s]">
                                <div className="h-2 w-2 rounded-full bg-accent-teal mb-2" />
                                <div className="text-xs text-zinc-400 font-mono">Observe</div>
                                <div className="font-bold text-sm">Elastic Stack</div>
                            </div>

                            {/* Connection Lines (Simulated purely visual) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                                <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="white" strokeDasharray="4 4" />
                                <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="white" strokeDasharray="4 4" />
                            </svg>
                        </div>
                    </div>

                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-accent-blue/20 blur-[100px] -z-10 rounded-full" />
                </div>
            </div>
        </Section>
    );
};

export default Hero;
