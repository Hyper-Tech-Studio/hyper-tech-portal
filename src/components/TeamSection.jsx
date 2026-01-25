import React from 'react';
import MemberCard from './MemberCard';

const TeamSection = () => {
    const hyperStudioMembers = [
        {
            name: 'Nguyễn Viết Hiếu',
            role: 'Founder',
            avatar: 'https://scontent.fbmv1-1.fna.fbcdn.net/v/t39.30808-6/588467093_122233398140155885_6755016248776118242_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Zle84wof8ggQ7kNvwHssOIw&_nc_oc=AdmTxXuR6eocLZQGlpCUubqFEFZlninCPau37JEcDZH8Sgwr8Sbkh2tTLmlVoBwrrIm8gugiiswPdpFnpCWcY_sr&_nc_zt=23&_nc_ht=scontent.fbmv1-1.fna&_nc_gid=sFDKIqaCPcRLDO-MHPz7-A&oh=00_AfoNWr9RszN3c_7qZ5MTwN7SxbFbbs8mCySvc0MKR91EGg&oe=697B831C'
        },
        {
            name: 'Trần Thiên Nam',
            role: 'Co-Founder',
            avatar: 'https://scontent.fbmv1-1.fna.fbcdn.net/v/t39.30808-6/294261853_854954728798061_659796097419169387_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=eQnEhN-uvyMQ7kNvwEbxCx8&_nc_oc=AdmuymBbwQL42Lvh96vbQv-4epS2m8gZdop4WbmTeHPnuSmNaKxZV1GzJDzeJZHpTnJz-TdAwzogGtHYzghsYj_Y&_nc_zt=23&_nc_ht=scontent.fbmv1-1.fna&_nc_gid=vfX6zGU8iHcj9ILk_IEO_A&oh=00_AfpaNB4ILqi6xXiU0X_c_eLbHiunnf_X5n0bvbQOR-Frlg&oe=697B950C'
        },
    ];

    const jasperWildMembers = [
        {
            name: 'Phùng Trung Nhân',
            role: 'Operator',
            avatar: 'https://scontent.fbmv1-1.fna.fbcdn.net/v/t39.30808-1/591268000_846618858121080_4513224150407081793_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=XwFX2UTsH8oQ7kNvwFKwqkB&_nc_oc=AdkTnoDWWGMcknasvNFQ4ldJZO2KfcmQqOc4_BIcpBNoUfueE2CYxQNAbu2jBgj-EpGZbMNabvAxQPEpAJIUXhqw&_nc_zt=24&_nc_ht=scontent.fbmv1-1.fna&_nc_gid=bmfQqaipg72Cls7H_QpR9A&oh=00_AfrnrN4ARCzreyVMMu82-0aiaJdCjfqxgSL_rTRJh-APtg&oe=697B9096'
        },
        {
            name: 'Trần Nhựt Phát',
            role: 'Member',
            avatar: 'https://scontent.fbmv1-1.fna.fbcdn.net/v/t39.30808-1/553307145_1335093674835927_4180731484480884994_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=2PAQ4UpnzVAQ7kNvwFby_U7&_nc_oc=Adlh3ii698xYH2Pf-g2ntAScL6BJAR8HVXWBV1o_09w5waPil2XqOz26g_84-Y6q0QFH8Ae9Ofd2vM5UuQcVHlBg&_nc_zt=24&_nc_ht=scontent.fbmv1-1.fna&_nc_gid=ps22MWCM64eMMPmVLqjAfQ&oh=00_AfrxMC--WBrv3Z2SruGrYnIizqMxcqh4KmFSaBjAEheFrw&oe=697B6D55'
        },
        {
            name: 'Trần Huy Bảo',
            role: 'Member',
            avatar: 'https://scontent.fbmv1-1.fna.fbcdn.net/v/t39.30808-6/596819076_122251903490177873_5325001381543178806_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=L4XRlzeX8QMQ7kNvwFEQAfc&_nc_oc=AdmNC4joTpICkEzCzenvLNWlx2rnX6LmVsxuvBm3U6EJmPOyvMBEdspCMydk_Swt4EBETndFRCRoje3oF4DO7k51&_nc_zt=23&_nc_ht=scontent.fbmv1-1.fna&_nc_gid=QxuV_MD_prtB5DLQdEdAkg&oh=00_AfrhPQpYWh8p6RekMtId5k-ZgSI2X0VdtMmXB70aoGGgUw&oe=697B8EB4'
        },
    ];

    return (
        <section className="py-32 px-6 w-full max-w-6xl mx-auto space-y-40 relative z-10">
            {/* Main Team Section */}
            <div className="animate-fade-in-up">
                <div className="flex flex-col items-center mb-16 space-y-4">
                    <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase bg-emerald-100/50 px-4 py-1.5 rounded-full">
                        Core Leadership
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight font-display">
                        Hyper Tech Studios
                    </h2>
                    <p className="text-slate-500 max-w-sm text-center text-sm leading-relaxed">
                        The founding architects behind the systems and vision of Hyper Tech.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {hyperStudioMembers.map((member, index) => (
                        <MemberCard key={index} {...member} />
                    ))}
                </div>
            </div>

            {/* Jasper Wild Section */}
            <div className="animate-fade-in-up">
                <div className="flex flex-col items-center mb-16 space-y-4">
                    <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase bg-emerald-100/50 px-4 py-1.5 rounded-full">
                        Server Ecosystem
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight font-display">
                        Jasper Wild
                    </h2>
                    <p className="text-slate-500 max-w-sm text-center text-sm leading-relaxed">
                        The dedicated team managing the bedrock Minecraft ecosystem.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {jasperWildMembers.map((member, index) => (
                        <MemberCard key={index} {...member} />
                    ))}
                </div>
            </div>

            {/* Bottom spacer deco */}
            <div className="pt-20 flex justify-center opacity-30">
                <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
            </div>
        </section>
    );
};

export default TeamSection;
