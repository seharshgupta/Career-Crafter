export default function Profile({ user }) {
    const details = [
        { label: "Name", value: user?.name || "Not available" },
        { label: "Email", value: user?.email || "Not available" },
        { label: "Username", value: user?.username || "Not available" },
    ];

    return (
        <div className="flex flex-col gap-6">
            <section className="rounded-3xl border border-white/8 bg-white/[0.03] p-8">
                <p className="text-xs uppercase tracking-[0.18em] text-lime-300">Account</p>
                <h2 className="font-fraunces mt-3 text-4xl font-bold tracking-[-0.04em] text-[#f0ede8]">
                    Profile
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/50">
                    This page now shows real account fields instead of mock profile metrics and sample data.
                </p>
            </section>

            <section className="grid gap-4 md:grid-cols-2">
                {details.map((item) => (
                    <div
                        key={item.label}
                        className="rounded-2xl border border-white/8 bg-[#101014] p-5"
                    >
                        <p className="text-xs uppercase tracking-[0.16em] text-white/30">{item.label}</p>
                        <p className="mt-3 text-base text-[#f0ede8]">{item.value}</p>
                    </div>
                ))}
            </section>

            <section className="rounded-2xl border border-white/8 bg-[#101014] p-5">
                <p className="text-sm leading-6 text-white/45">
                    Profile editing is not wired to the backend yet. When you’re ready, I can turn this into a real
                    editable account screen next.
                </p>
            </section>
        </div>
    );
}
