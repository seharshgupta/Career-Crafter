import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const TOOLS = [
    {
        title: "Resume Builder",
        description: "Create or edit a resume with guided sections and preview support.",
        path: "/resume-builder",
    },
    {
        title: "Resume Matcher",
        description: "Upload a resume and compare it with a job description.",
        path: "/skill-matcher",
    },
    {
        title: "Career Advisor",
        description: "Review career paths and compare roles side by side.",
        path: "/career-advisor",
    },
    {
        title: "Job Category",
        description: "Classify a resume into a likely role category.",
        path: "/job-category",
    },
    {
        title: "Skill Match Set",
        description: "Check which roles are most aligned with a set of skills.",
        path: "/skill-match-set",
    },
    {
        title: "Profile",
        description: "View your account information and basic profile details.",
        path: "/profile",
    },
];

export default function Dashboard() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-[#0a0a0e] text-[#f0ede8]">
            <Sidebar user={user} onLogout={handleLogout} />
            <Topbar />

            <main className="ml-64 min-h-screen px-8 pb-10 pt-28">
                <div className="mx-auto max-w-6xl">
                    <section className="rounded-3xl border border-white/8 bg-white/[0.03] p-8">
                        <p className="text-xs uppercase tracking-[0.18em] text-lime-300">Workspace</p>
                        <h2 className="font-fraunces mt-3 text-4xl font-bold tracking-[-0.04em] text-[#f0ede8]">
                            Welcome{user?.name ? `, ${user.name}` : ""}.
                        </h2>
                        <p className="mt-4 max-w-3xl text-base leading-7 text-white/50">
                            This dashboard is now focused on navigation instead of placeholder metrics. Choose a tool
                            below to continue your resume workflow.
                        </p>
                    </section>

                    <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {TOOLS.map((tool) => (
                            <button
                                key={tool.path}
                                onClick={() => navigate(tool.path)}
                                className="rounded-2xl border border-white/8 bg-[#101014] p-5 text-left transition-all duration-200 hover:border-lime-300/20 hover:bg-white/[0.04]"
                            >
                                <h3 className="text-lg font-semibold text-[#f0ede8]">{tool.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-white/45">{tool.description}</p>
                                <span className="mt-5 inline-block text-sm font-medium text-lime-300">
                                    Open tool
                                </span>
                            </button>
                        ))}
                    </section>
                </div>
            </main>
        </div>
    );
}
