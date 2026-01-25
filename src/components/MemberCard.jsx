import React from 'react';

const MemberCard = ({ name, role, avatar }) => {
    return (
        <div className="group relative flex flex-col items-center p-8 rounded-3xl bg-white/40 border border-emerald-100/50 hover:border-emerald-200 hover:bg-white transition-all duration-300 cursor-default overflow-hidden shadow-sm hover:shadow-lg">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Avatar Wrapper */}
            <div className="relative mb-6 transform group-hover:scale-105 transition-transform duration-300">
                <div className="w-24 h-24 rounded-full bg-slate-100 overflow-hidden border-2 border-emerald-50 group-hover:border-emerald-400 shadow-lg relative z-10">
                    {avatar ? (
                        <img src={avatar} alt={name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M19 8v6M22 11h-6" />
                            </svg>
                        </div>
                    )}
                </div>
                {/* Dynamic shadow ring */}
                <div className="absolute inset-0 rounded-full blur-xl bg-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="text-center relative z-10 w-full">
                <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {name}
                </h3>
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-widest border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-500 transition-all duration-300">
                    {role}
                </div>
            </div>

            {/* Subtle indicator decoration */}
            <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 text-amber-500/40">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M12 5v14M5 12h14" />
                </svg>
            </div>
        </div>
    );
};

export default MemberCard;
