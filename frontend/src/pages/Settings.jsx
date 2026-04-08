import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function SettingsContent() {
    return (
        <div className="flex flex-col gap-6">
            <section className="rounded-3xl border border-white/8 bg-white/[0.03] p-8">
                <p className="text-xs uppercase tracking-[0.18em] text-lime-300">Settings</p>
                <h2 className="font-fraunces mt-3 text-4xl font-bold tracking-[-0.04em] text-[#f0ede8]">
                    Settings
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/50">
                    This page has been simplified and stripped of placeholder visuals. Settings options can be added
                    here once the backend preferences flow is ready.
                </p>
            </section>

            <section className="rounded-2xl border border-white/8 bg-[#101014] p-5">
                <p className="text-sm leading-6 text-white/45">
                    No configurable settings are connected yet.
                </p>
            </section>
        </div>
    );
}

export default function Settings() {
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
                    <SettingsContent />
                </div>
            </main>
        </div>
    );
}
