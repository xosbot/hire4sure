const industries = [
  "Tech",
  "Finance",
  "Marketing",
  "Consulting",
  "Healthcare",
  "Design",
  "Engineering",
  "Fresh Graduates",
];

export default function SocialProof() {
  return (
    <section className="bg-gray-950 border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left: join message */}
          <p className="text-gray-400 text-sm text-center sm:text-left whitespace-nowrap">
            <span className="text-white font-semibold">Join 1,000+ early users</span>{" "}
            improving their job search with AI
          </p>

          {/* Divider */}
          <div className="hidden sm:block h-6 w-px bg-white/10" />

          {/* Industry tags */}
          <div className="flex flex-wrap justify-center gap-2">
            {industries.map((industry) => (
              <span
                key={industry}
                className="text-xs text-gray-500 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
