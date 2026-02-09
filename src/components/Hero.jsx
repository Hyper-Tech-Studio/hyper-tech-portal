function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                    <span className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full" />
                    <span className="text-sm text-white/70">
                        Đang phát triển các dự án mới
                    </span>
                </div>

                {/* Heading - Geist Sans font */}
                <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight" style={{ fontFamily: '"Geist Sans", "Geist", sans-serif' }}>
                    HYPER TECH
                    <span className="block gradient-text">STUDIOS</span>
                </h1>

                {/* Slogan - WHITE */}
                <p className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-white/80 mb-8">
                    One team – One dream
                </p>

                {/* Description - BRIGHT */}
                <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Chúng tôi là team chuyên về <span className="text-white">phát triển phần mềm</span>,
                    <span className="text-white"> quản lý server</span> và
                    <span className="text-white"> cung cấp dịch vụ công nghệ</span>.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="https://discord.gg/hypertech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 btn-gradient text-white rounded-xl font-semibold text-lg transition-all flex items-center gap-3 cursor-pointer hover:shadow-lg hover:shadow-indigo-500/25"
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.36-.698.772-1.362 1.225-1.993a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.12-.098.246-.198.373-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.094.246.194.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                        </svg>
                        Tham gia Discord
                    </a>

                    <a
                        href="https://github.com/Hyper-Tech-Studio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-semibold text-lg transition-colors flex items-center gap-3 cursor-pointer"
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                    </a>
                </div>

                {/* Stats - WHITE */}
                <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto">
                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl font-display font-bold gradient-text">5+</div>
                        <div className="text-sm text-white/60 mt-1">Thành viên</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl font-display font-bold gradient-text">3+</div>
                        <div className="text-sm text-white/60 mt-1">Dự án</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl font-display font-bold gradient-text">∞</div>
                        <div className="text-sm text-white/60 mt-1">Đam mê</div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="mt-16">
                    <a href="#projects" className="inline-flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer">
                        <span className="text-sm">Khám phá thêm</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
