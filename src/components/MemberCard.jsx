function MemberCard({ member, variant = 'default' }) {
    const isFounder = variant === 'founder';

    return (
        <div className="card-dark rounded-2xl p-6 cursor-pointer transition-all duration-200">
            <div className="flex flex-col items-center text-center">
                {/* Avatar with gradient ring */}
                <div className="relative mb-4">
                    <div className={`absolute inset-0 rounded-full p-[2px] ${isFounder ? 'bg-gradient-to-br from-indigo-500 to-purple-600' : 'bg-gradient-to-br from-cyan-500 to-teal-600'}`}>
                        <div className="w-full h-full rounded-full bg-slate-900" />
                    </div>
                    <img
                        src={member.avatar}
                        alt={member.name}
                        className="relative w-20 h-20 rounded-full object-cover"
                        loading="lazy"
                    />
                </div>

                {/* Name - WHITE */}
                <h3 className="font-display font-semibold text-lg text-white mb-2">
                    {member.name}
                </h3>

                {/* Role */}
                <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium text-white ${isFounder
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600'
                        : 'bg-gradient-to-r from-cyan-600 to-teal-600'
                    }`}>
                    {member.role}
                </span>
            </div>
        </div>
    );
}

export default MemberCard;
