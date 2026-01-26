import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="min-h-screen w-full bg-white relative overflow-hidden text-slate-800 selection:bg-emerald-500/10 selection:text-emerald-900 font-sans selection:caret-emerald-600">
            {/* Emerald Glow Background - User provided snippet */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `
            radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #10b981 100%)
          `,
                    backgroundSize: "100% 100%",
                }}
            />

            {/* Subtle bottom gradient overlay for depth */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-linear-to-t from-emerald-50/50 to-transparent" />

            {/* Premium Texture */}
            <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Main Content Scrollable Area */}
            <div className="relative z-10 w-full flex flex-col min-h-screen">
                <Navbar />
                <Hero />
                <ProjectsSection />
                <TeamSection />
                <div className="grow"></div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
