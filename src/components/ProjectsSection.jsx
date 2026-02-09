const projects = [
    {
        id: 'keypilot',
        name: 'KeyPilot',
        description: 'Công cụ tự động hóa Windows nhẹ gọn, cho phép bạn gán phím tắt đến vị trí click trên màn hình.',
        icon: (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
        iconClass: 'icon-gradient-indigo',
        btnClass: 'bg-gradient-to-r from-indigo-600 to-indigo-500',
        link: 'https://github.com/Hyper-Tech-Studio/KeyPilot',
        linkText: 'GitHub',
        tags: ['Windows', 'Automation', 'Open Source'],
    },
    {
        id: 'jasper-wild',
        name: 'Jasper Wild',
        description: 'Máy chủ Minecraft PE với gameplay Skyblock và RPG hấp dẫn.',
        icon: (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>
        ),
        iconClass: 'icon-gradient-cyan',
        btnClass: 'bg-gradient-to-r from-cyan-600 to-cyan-500',
        link: 'https://discord.gg/hypertech',
        linkText: 'Tham gia',
        tags: ['Minecraft PE', 'Skyblock', 'RPG'],
    },
    {
        id: 'hyperstore',
        name: 'HyperStore',
        description: 'Dịch vụ cung cấp các tài khoản premium với giá cả hợp lý.',
        icon: (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72" />
            </svg>
        ),
        iconClass: 'icon-gradient-amber',
        btnClass: 'bg-gradient-to-r from-amber-600 to-amber-500',
        link: 'https://store.hypertechstudio.xyz/',
        linkText: 'Truy cập',
        tags: ['Premium', 'Accounts', 'Service'],
    },
];

function ProjectsSection() {
    return (
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header - WHITE TEXT */}
                <div className="text-center mb-16">
                    <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
                        Dự án & Dịch vụ
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto">
                        Những sản phẩm và dịch vụ được xây dựng với tâm huyết
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="card-dark rounded-2xl p-8 cursor-pointer transition-all duration-200"
                        >
                            {/* Icon with gradient */}
                            <div className={`w-14 h-14 rounded-xl ${project.iconClass} flex items-center justify-center text-white mb-6`}>
                                {project.icon}
                            </div>

                            {/* Title - WHITE */}
                            <h3 className="font-display font-semibold text-2xl text-white mb-3">
                                {project.name}
                            </h3>

                            {/* Description - BRIGHT */}
                            <p className="text-white/70 leading-relaxed mb-6">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Link */}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg ${project.btnClass} text-white font-medium hover:opacity-90 transition-opacity cursor-pointer`}
                            >
                                {project.linkText}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;
