import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Profile from "./Profile";

export default function ProfilePage() {
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
                    <Profile user={user} />
                </div>
            </main>
        </div>
    );
}
