import {
    Home,
    FileText,
    Brain,
    Briefcase,
    User,
    Folder,
    Settings,
    LogOut,
    Sparkles,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const MENU = [
    { name: "Dashboard", icon: Home, path: "/dashboard" },
    { name: "Resume Builder", icon: FileText, path: "/resume-builder" },
    { name: "Career Advisor", icon: Sparkles, path: "/career-advisor" },
    { name: "Resume Matcher", icon: Brain, path: "/skill-matcher" },
    { name: "Job Category", icon: Briefcase, path: "/job-category" },
    { name: "Skill Match Set", icon: Brain, path: "/skill-match-set" },
];

const ACCOUNT_MENU = [
    { name: "Profile", icon: User, path: "/profile" },
    { name: "My Resumes", icon: Folder, path: "/myresumes" },
    { name: "Settings", icon: Settings, path: "/settings" },
];

function NavLink({ to, icon: Icon, label, active }) {
    return (
        <Link
            to={to}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm no-underline transition-all duration-200 ${
                active
                    ? "border border-lime-300/20 bg-lime-300/[0.08] text-lime-300"
                    : "border border-transparent text-white/55 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
            }`}
        >
            <Icon size={16} />
            <span>{label}</span>
        </Link>
    );
}

export default function Sidebar({ user, onLogout }) {
    const location = useLocation();
    const initial = user?.name?.[0]?.toUpperCase() ?? user?.email?.[0]?.toUpperCase() ?? "U";
    const displayName = user?.name || "CareerCrafter User";

    return (
        <aside className="fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-white/8 bg-[#0c0c10]">
            <div className="border-b border-white/8 px-6 py-5">
                <Link
                    to="/dashboard"
                    className="font-fraunces text-2xl font-black tracking-tight text-[#f0ede8] no-underline"
                >
                    Career<span className="text-lime-300">Crafter</span>
                </Link>
                <p className="mt-2 text-sm leading-6 text-white/40">
                    Simple tools to build, review, and improve resumes.
                </p>
            </div>

            <div className="px-4 py-4">
                <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-lime-300 font-semibold text-[#0a0a0e]">
                        {initial}
                    </div>
                    <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-[#f0ede8]">{displayName}</p>
                        <p className="truncate text-xs text-white/40">{user?.email || "Signed in"}</p>
                    </div>
                </div>
            </div>

            <nav className="min-h-0 flex-1 overflow-y-auto px-4 pb-4">
                <div className="mb-6">
                    <p className="mb-2 px-3 text-[11px] uppercase tracking-[0.18em] text-white/25">Workspace</p>
                    <div className="flex flex-col gap-1.5">
                        {MENU.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                icon={item.icon}
                                label={item.name}
                                active={location.pathname === item.path}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <p className="mb-2 px-3 text-[11px] uppercase tracking-[0.18em] text-white/25">Account</p>
                    <div className="flex flex-col gap-1.5">
                        {ACCOUNT_MENU.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                icon={item.icon}
                                label={item.name}
                                active={location.pathname === item.path}
                            />
                        ))}
                    </div>
                </div>
            </nav>

            <div className="border-t border-white/8 bg-[#0c0c10] px-4 py-4">
                <button
                    onClick={onLogout}
                    className="flex w-full items-center gap-3 rounded-xl border border-white/10 px-3 py-2.5 text-sm text-white/55 transition-all duration-200 hover:border-red-400/20 hover:bg-red-400/[0.06] hover:text-red-300"
                >
                    <LogOut size={16} />
                    Logout
                </button>
            </div>
        </aside>
    );
}
