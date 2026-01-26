const projects = [
    {
        id: "keypilot",
        name: "KeyPilot",
        description:
            "KeyPilot is a powerful automation and keyboard macro tool designed to enhance productivity. It allows users to create custom keyboard shortcuts, automate repetitive tasks, and streamline workflows with an intuitive interface.",
        logo: "https://raw.githubusercontent.com/Hyper-Tech-Studio/KeyPilot/refs/heads/main/docs/logo.png",
        github: "https://github.com/Hyper-Tech-Studio/KeyPilot",
        tags: ["Automation", "Productivity", "Keyboard Macros", "Windows"],
        status: "Active Development",
    },
];

const ProjectCard = ({ project }) => {
    return (
        <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-emerald-100 hover:border-emerald-300 shadow-sm hover:shadow-lg transition-all duration-300"
        >
            <div className="flex items-start gap-5">
                {/* Project Logo */}
                <div className="w-16 h-16 rounded-xl bg-emerald-50 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform shrink-0">
                    <img
                        src={project.logo}
                        alt={`${project.name} logo`}
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                            e.target.style.display = "none";
                            e.target.parentElement.innerHTML = `
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-8 h-8 text-emerald-600">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                            `;
                        }}
                    />
                </div>

                {/* Project Info */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                            {project.name}
                        </h3>
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-700">
                            {project.status}
                        </span>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 text-slate-600"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Arrow Icon */}
                <div className="text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all shrink-0">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-5 h-5"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </a>
    );
};

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Our <span className="text-emerald-700">Projects</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Discover open-source tools and software built by Hyper
                        Tech Studios. We're passionate about creating solutions
                        that enhance productivity and user experience.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="space-y-4">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* More Coming Soon */}
                <div className="mt-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="w-4 h-4"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                        </svg>
                        More projects coming soon
                    </div>
                </div>

                {/* GitHub CTA */}
                <div className="mt-12 text-center">
                    <a
                        href="https://github.com/Hyper-Tech-Studio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="w-5 h-5"
                        >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        View all repositories on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
