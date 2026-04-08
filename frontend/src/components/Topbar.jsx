import { Link, useLocation } from "react-router-dom";

const PAGE_META = {
    "/dashboard": {
        title: "Dashboard",
        description: "Use the tools below to build, review, and improve your resume.",
    },
    "/resume-builder": {
        title: "Resume Builder",
        description: "Create or edit your resume with a cleaner, guided workflow.",
    },
    "/career-advisor": {
        title: "Career Advisor",
        description: "Compare roles and explore practical career paths.",
    },
    "/skill-matcher": {
        title: "Resume Matcher",
        description: "Check how closely a resume matches a job description.",
    },
    "/job-category": {
        title: "Job Category",
        description: "Classify a resume into the most likely role category.",
    },
    "/skill-match-set": {
        title: "Skill Match Set",
        description: "See which roles best fit a set of skills.",
    },
    "/profile": {
        title: "Profile",
        description: "View your basic account information.",
    },
    "/myresumes": {
        title: "My Resumes",
        description: "Manage saved resumes and drafts.",
    },
    "/settings": {
        title: "Settings",
        description: "Configure account and workspace preferences.",
    },
};

export default function Topbar() {
    const location = useLocation();
    const meta = PAGE_META[location.pathname] || {
        title: "CareerCrafter",
        description: "Resume tools for practical job search workflows.",
    };

    return (
        <header className="fixed left-64 right-0 top-0 z-30 border-b border-white/8 bg-[#0a0a0e]/90 px-6 py-4 backdrop-blur xl:px-8">
            <div className="flex items-center justify-between gap-4">
                <div className="min-w-0 flex-1">
                    <h1 className="truncate font-fraunces text-2xl font-bold tracking-[-0.03em] text-[#f0ede8]">
                        {meta.title}
                    </h1>
                    <p className="mt-1 truncate text-sm text-white/40">{meta.description}</p>
                </div>

                <Link
                    to="/resume-builder"
                    className="shrink-0 rounded-xl bg-lime-300 px-4 py-2.5 text-sm font-semibold text-[#0a0a0e] no-underline transition-colors duration-200 hover:bg-yellow-200"
                >
                    Open Builder
                </Link>
            </div>
        </header>
    );
}
