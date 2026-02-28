const features = [
  {
    emoji: "🎯",
    title: "AI Resume Optimizer",
    description:
      "Turn your resume into a role-specific, ATS-friendly document recruiters notice.",
    highlight: "ATS-Optimized",
  },
  {
    emoji: "📝",
    title: "Smart Cover Letters",
    description:
      "Customized for every application. No templates. No fluff. Just results.",
    highlight: "100% Tailored",
  },
  {
    emoji: "🎤",
    title: "Interview Prep Engine",
    description:
      "Get role-specific interview questions and high-impact answers before you walk in.",
    highlight: "Role-Specific",
  },
  {
    emoji: "📊",
    title: "Skill Gap Analyzer",
    description:
      "See exactly what you're missing — and get a clear roadmap to fix it fast.",
    highlight: "Actionable Insights",
  },
  {
    emoji: "⚡",
    title: "10x Faster Applications",
    description:
      "Stop rewriting from scratch every time. One upload. Infinite applications.",
    highlight: "Save Hours Daily",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-gray-950 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Features
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Everything You Need to Win
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            From resume to offer — hire4sure.ai covers every step of your job search.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/40 hover:bg-white/8 transition-all duration-300 ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-2xl group-hover:bg-indigo-500/20 transition-colors">
                  {feature.emoji}
                </div>
                <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full">
                  {feature.highlight}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
