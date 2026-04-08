import { Link } from "react-router-dom";

const FEATURES = [
    {
        title: "Resume Builder",
        description: "Create a resume with guided sections and a live preview.",
    },
    {
        title: "Resume Matcher",
        description: "Compare a resume with a job description and review the match score.",
    },
    {
        title: "Job Category",
        description: "Estimate which job role category best fits a resume.",
    },
    {
        title: "Skill Match Set",
        description: "Enter skills and see which roles they align with most closely.",
    },
];

const STEPS = [
    "Create an account or sign in.",
    "Open the resume tools from the dashboard.",
    "Build, review, and improve your resume step by step.",
];

export default function Landing() {
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
                        <div className="font-fraunces text-2xl font-black tracking-tight">
                            Career<span className="text-lime-300">Crafter</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link className="text-sm text-white/65 no-underline hover:text-white" to="/login">
                                Log in
                            </Link>
                            <Link
                                className="rounded-lg bg-lime-300 px-4 py-2 text-sm font-semibold text-[#0a0a0e] no-underline transition-colors duration-200 hover:bg-yellow-200"
                                to="/signup"
                            >
                                Create account
                            </Link>
                        </div>
                    </header>

                    <main className="flex flex-1 items-center py-12">
                        <div className="grid w-full gap-14 lg:grid-cols-[1.1fr_0.9fr]">
                            <section className="flex flex-col justify-center">
                                <div className="mb-5 inline-flex w-fit rounded-full border border-lime-300/20 bg-lime-300/[0.06] px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-lime-300">
                                    Cleaner workflow
                                </div>
                                <h1 className="font-fraunces max-w-3xl text-5xl font-black leading-tight tracking-[-0.05em] text-[#f0ede8]">
                                    CareerCrafter is a simple workspace for building and improving resumes.
                                </h1>
                                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/55">
                                    Instead of a flashy demo, this version focuses on what the project actually does:
                                    resume creation, resume comparison, role prediction, and skill-based guidance.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    <Link
                                        to="/signup"
                                        className="rounded-xl bg-lime-300 px-5 py-3 text-sm font-semibold text-[#0a0a0e] no-underline transition-colors duration-200 hover:bg-yellow-200"
                                    >
                                        Get started
                                    </Link>
                                    <Link
                                        to="/login"
                                        className="rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-white/70 no-underline transition-all duration-200 hover:border-white/20 hover:text-white"
                                    >
                                        Sign in
                                    </Link>
                                </div>
                            </section>

                            <section className="rounded-3xl border border-white/8 bg-white/[0.03] p-7">
                                <h2 className="font-fraunces text-3xl font-bold tracking-[-0.03em] text-[#f0ede8]">
                                    What you can do
                                </h2>
                                <div className="mt-6 grid gap-4">
                                    {FEATURES.map((feature) => (
                                        <div
                                            key={feature.title}
                                            className="rounded-2xl border border-white/8 bg-[#101014] p-4"
                                        >
                                            <p className="text-sm font-medium text-[#f0ede8]">{feature.title}</p>
                                            <p className="mt-2 text-sm leading-6 text-white/45">
                                                {feature.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 rounded-2xl border border-white/8 bg-[#101014] p-5">
                                    <p className="text-xs uppercase tracking-[0.18em] text-white/30">How it works</p>
                                    <div className="mt-4 flex flex-col gap-3">
                                        {STEPS.map((step, index) => (
                                            <div key={step} className="flex gap-3">
                                                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-lime-300 text-xs font-semibold text-[#0a0a0e]">
                                                    {index + 1}
                                                </div>
                                                <p className="pt-1 text-sm leading-6 text-white/55">{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
