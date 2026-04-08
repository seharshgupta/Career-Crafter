import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function EyeIcon({ open }) {
    return open ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.2" />
        </svg>
    ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2l12 12M6.5 6.6A2 2 0 0 0 9.4 9.5M4.2 4.3C2.8 5.3 2 8 2 8s2.5 5 6 5c1.3 0 2.4-.4 3.3-1M6 3.1C6.6 3 7.3 3 8 3c3.5 0 6 5 6 5s-.6 1.2-1.6 2.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
    );
}

export default function LoginPage() {
    const { user, loading, login } = useAuth();

    const [formData, setFormData] = useState({
        identifier: "",
        password: "",
    });
    const [focused, setFocused] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    if (loading) return null;
    if (user) return <Navigate to="/dashboard" replace />;

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.identifier || !formData.password) {
            setError("Please fill in all fields.");
            return;
        }

        try {
            setIsLoading(true);
            setError("");
            await login(formData);
        } catch (err) {
            setError(err?.response?.data?.detail || "Login failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const inputClass = (field) =>
        `w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-[#f0ede8] outline-none transition-all duration-200 placeholder:text-white/25 ${focused === field
            ? "border-lime-300/55 shadow-[0_0_0_3px_rgba(232,255,71,0.08)]"
            : "border-white/10 hover:border-white/20"
        }`;

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;0,9..144,800&display=swap');
                .font-fraunces { font-family: 'Fraunces', serif; }
                .font-dm { font-family: 'DM Sans', sans-serif; }
            `}</style>

            <div className="font-dm min-h-screen bg-[#0a0a0e] text-[#f0ede8]">
                <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8 lg:px-10">
                    <header className="flex items-center justify-between">
                        <Link
                            to="/"
                            className="font-fraunces text-2xl font-black tracking-tight text-[#f0ede8] no-underline"
                        >
                            Career<span className="text-lime-300">Crafter</span>
                        </Link>
                        <Link
                            to="/signup"
                            className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/70 no-underline transition-colors duration-200 hover:border-white/20 hover:text-white"
                        >
                            Create account
                        </Link>
                    </header>

                    <main className="flex flex-1 items-center">
                        <div className="grid w-full gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr]">
                            <section className="flex flex-col justify-center">
                                <div className="mb-5 inline-flex w-fit items-center rounded-full border border-lime-300/20 bg-lime-300/[0.06] px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-lime-300">
                                    Simple career tools
                                </div>

                                <h1 className="font-fraunces max-w-xl text-4xl font-black leading-tight tracking-[-0.04em] text-[#f0ede8] sm:text-5xl">
                                    CareerCrafter helps users build and improve resumes with a clearer workflow.
                                </h1>

                                <p className="mt-5 max-w-2xl text-base leading-7 text-white/55">
                                    This project focuses on practical career tools: resume building, resume analysis,
                                    job matching, and skill-based suggestions. Sign in to access the dashboard and use
                                    those features from one place.
                                </p>

                                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                                        <p className="text-sm font-medium text-[#f0ede8]">Resume Builder</p>
                                        <p className="mt-2 text-sm leading-6 text-white/45">
                                            Create resumes with guided sections and export them as PDF.
                                        </p>
                                    </div>
                                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                                        <p className="text-sm font-medium text-[#f0ede8]">Resume Analysis</p>
                                        <p className="mt-2 text-sm leading-6 text-white/45">
                                            Compare a resume with a job description and review the match score.
                                        </p>
                                    </div>
                                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                                        <p className="text-sm font-medium text-[#f0ede8]">Career Insights</p>
                                        <p className="mt-2 text-sm leading-6 text-white/45">
                                            Explore role suggestions and skills-based recommendations.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="flex items-center justify-center">
                                <div className="w-full max-w-md rounded-3xl border border-white/8 bg-white/[0.04] p-7 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                                    <div className="mb-8">
                                        <h2 className="font-fraunces text-3xl font-bold tracking-[-0.03em] text-[#f0ede8]">
                                            Sign in
                                        </h2>
                                        <p className="mt-2 text-sm leading-6 text-white/45">
                                            Use your email or username and password to continue to the dashboard.
                                        </p>
                                    </div>

                                    {error && (
                                        <div className="mb-4 rounded-xl border border-red-400/20 bg-red-400/8 px-4 py-3 text-sm text-red-300">
                                            {error}
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs font-medium uppercase tracking-[0.16em] text-white/35">
                                                Email or Username
                                            </label>
                                            <input
                                                type="text"
                                                name="identifier"
                                                value={formData.identifier}
                                                onChange={handleChange}
                                                onFocus={() => setFocused("identifier")}
                                                onBlur={() => setFocused(null)}
                                                placeholder="Enter your email or username"
                                                className={inputClass("identifier")}
                                                required
                                            />
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs font-medium uppercase tracking-[0.16em] text-white/35">
                                                Password
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocused("password")}
                                                    onBlur={() => setFocused(null)}
                                                    placeholder="Enter your password"
                                                    className={`${inputClass("password")} pr-12`}
                                                    required
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword((prev) => !prev)}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/35 transition-colors duration-200 hover:text-white/65"
                                                >
                                                    <EyeIcon open={showPassword} />
                                                </button>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="mt-2 rounded-xl bg-lime-300 px-4 py-3 text-sm font-bold text-[#0a0a0e] transition-all duration-200 hover:bg-yellow-200 disabled:cursor-not-allowed disabled:opacity-70"
                                        >
                                            {isLoading ? "Signing in..." : "Sign in"}
                                        </button>
                                    </form>

                                    <p className="mt-6 text-sm text-white/45">
                                        New to CareerCrafter?{" "}
                                        <Link
                                            to="/signup"
                                            className="text-lime-300 no-underline transition-colors duration-200 hover:text-yellow-200"
                                        >
                                            Create an account
                                        </Link>
                                    </p>
                                </div>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
