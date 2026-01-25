
import React from 'react';

const Hero = () => {
    return (
        <div className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col items-center text-center">
            {/* Main Heading */}
            <h1 className="font-sans text-5xl md:text-8xl font-black tracking-tight text-slate-800 mb-12 animate-fade-in">
                Hyper Tech <span className="text-emerald-700/90">Studios</span>
            </h1>


            {/* Description */}
            <div className="max-w-2xl mb-16 animate-fade-in-up">
                <p className="text-xl md:text-2xl text-slate-600 font-sans mb-4">
                    One Portal. <span className="text-emerald-700/90 font-bold">Infinite Systems.</span>
                </p>
                <p className="text-slate-500/90 leading-relaxed max-w-lg mx-auto font-medium">
                    High-performance digital ecosystem for gaming and community management.
                    Seamlessly integrate, scale, and dominate with modern tech.
                </p>
            </div>

            {/* Feature Cards Group */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl mb-16 animate-fade-in-up">
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/40 border border-emerald-100 hover:border-emerald-300 shadow-sm transition-all cursor-pointer group">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                    </div>
                    <div className="text-left">
                        <h3 className="text-slate-900 font-semibold">Jasper Wild</h3>
                        <p className="text-slate-500 text-sm">MCPE Server Ecosystem</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/40 border border-emerald-100 hover:border-emerald-300 shadow-sm transition-all cursor-pointer group">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                            <path d="M17 9V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2m2 4h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm7-5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                        </svg>
                    </div>
                    <div className="text-left">
                        <h3 className="text-slate-900 font-semibold">Payment Gateway</h3>
                        <p className="text-slate-500 text-sm">Secure Transaction Portal</p>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 animate-bounce text-slate-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </div>
        </div>
    );
};

export default Hero;
