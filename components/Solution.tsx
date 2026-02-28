const capabilities = [
  "Rewrite your resume for any job",
  "Generate tailored cover letters instantly",
  "Prepare for interviews like a pro",
  "Identify skill gaps holding you back",
  "Create a personalized action plan",
];

export default function Solution() {
  return (
    <section className="bg-gray-950 py-24 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-transparent to-purple-950/30 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          The Solution
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
          Meet Your AI Career Copilot.
        </h2>

        <p className="text-lg text-gray-400 mb-3">
          <span className="font-semibold text-white">hire4sure.ai</span> is
          your all-in-one job search assistant.
        </p>
        <p className="text-gray-500 italic mb-12">Not generic AI.</p>

        <p className="text-xl text-gray-300 font-semibold mb-8">
          Built specifically to help you:
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 text-left">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:border-indigo-500/40 hover:bg-white/8 transition-all duration-200"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center mt-0.5">
                <svg
                  className="w-3.5 h-3.5 text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <p className="text-gray-200 font-medium text-sm">{cap}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-lg">
          All inside{" "}
          <span className="text-white font-semibold">one simple dashboard.</span>
        </p>
      </div>
    </section>
  );
}
