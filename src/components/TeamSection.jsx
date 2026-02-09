import MemberCard from './MemberCard';

const hyperStudioMembers = [
    {
        name: "Nguyễn Viết Hiếu",
        role: "Founder",
        avatar: "https://cdn.rydenprotocol.xyz/588467093_122233398140155885_6755016248776118242_n.jpg",
    },
    {
        name: "Trần Thiên Nam",
        role: "Co-Founder",
        avatar: "https://cdn.rydenprotocol.xyz/294261853_854954728798061_659796097419169387_n.jpg",
    },
];

const jasperWildMembers = [
    {
        name: "Trần Huy Bảo",
        role: "Operator",
        avatar: "https://cdn.rydenprotocol.xyz/215422899.jpg",
    },
    {
        name: "Phùng Trung Nhân",
        role: "Member",
        avatar: "https://cdn.rydenprotocol.xyz/591268000_846618858121080_4513224150407081793_n.jpg",
    },
    {
        name: "Trần Nhựt Phát",
        role: "Member",
        avatar: "https://cdn.rydenprotocol.xyz/553307145_1335093674835927_4180731484480884994_n.jpg",
    }
];

function TeamSection() {
    return (
        <section id="team" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header - WHITE TEXT */}
                <div className="text-center mb-16">
                    <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
                        Đội ngũ của chúng tôi
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto">
                        Những con người đam mê công nghệ, cùng chung một giấc mơ
                    </p>
                </div>

                {/* Hyper Studio */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl icon-gradient-indigo flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-display font-semibold text-2xl text-white">Hyper Studio</h3>
                            <p className="text-white/60 text-sm">Core Team</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
                        {hyperStudioMembers.map((member) => (
                            <MemberCard key={member.name} member={member} variant="founder" />
                        ))}
                    </div>
                </div>

                {/* Jasper Wild */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl icon-gradient-cyan flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-display font-semibold text-2xl text-white">Jasper Wild</h3>
                            <p className="text-white/60 text-sm">Gaming Division</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jasperWildMembers.map((member) => (
                            <MemberCard key={member.name} member={member} variant="gaming" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeamSection;
