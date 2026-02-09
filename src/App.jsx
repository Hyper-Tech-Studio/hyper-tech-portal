import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="min-h-screen w-full bg-[#030712] text-gravity-text font-sans">
            {/* Dark Gradient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Main dark gradient */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(135deg, #030712 0%, #0c1222 25%, #111827 50%, #0f172a 75%, #030712 100%)',
                    }}
                />

                {/* Top right subtle glow */}
                <div
                    className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-30"
                    style={{
                        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 60%)',
                    }}
                />

                {/* Bottom left subtle glow */}
                <div
                    className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-25"
                    style={{
                        background: 'radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, transparent 60%)',
                    }}
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full flex flex-col min-h-screen">
                <Navbar />
                <Hero />
                <ProjectsSection />
                <TeamSection />
                <div className="grow" />
                <Footer />
            </div>
        </div>
    );
}

export default App;
