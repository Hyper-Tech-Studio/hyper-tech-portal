import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full py-8 mt-12 border-t border-emerald-100 bg-white/50 backdrop-blur-md z-10 relative">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <p className="text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} Hyper Tech Studios. All rights reserved.
                </p>
                <div className="mt-4 flex justify-center space-x-6 text-slate-500 font-medium">
                    <a href="#" className="hover:text-emerald-700 transition-colors">Terms</a>
                    <a href="#" className="hover:text-emerald-700 transition-colors">Privacy</a>
                    <a href="#" className="hover:text-emerald-700 transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
