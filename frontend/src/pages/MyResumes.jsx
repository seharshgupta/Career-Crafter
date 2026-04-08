import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function ResumePage() {
    return (
        <div className="flex flex-col gap-6">
            <section className="rounded-3xl border border-white/8 bg-white/[0.03] p-8">
                <p className="text-xs uppercase tracking-[0.18em] text-lime-300">Resumes</p>
                <h2 className="font-fraunces mt-3 text-4xl font-bold tracking-[-0.04em] text-[#f0ede8]">
                    My Resumes
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/50">
                    This area is ready for saved resumes and drafts, but it is not connected to a real list yet.
                </p>
            </section>

            <section className="rounded-2xl border border-white/8 bg-[#101014] p-5">
                <p className="text-sm leading-6 text-white/45">
                    Once resume persistence is fully wired up, this page can show saved resumes, export history, and
                    draft status.
                </p>
            </section>
        </div>
    );
}

export default function MyResumes() {
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
                    <ResumePage />
                </div>
            </main>
        </div>
    );
}
