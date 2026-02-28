const steps = [
  {
    number: "01",
    emoji: "📄",
    title: "Upload Your Resume",
    description: "Drag and drop. We analyze your experience instantly.",
    color: "from-blue-500/20 to-indigo-500/20",
    border: "border-blue-500/20",
  },
  {
    number: "02",
    emoji: "🎯",
    title: "Choose Your Target Role",
    description: "Tell us the job you want — title, company, or job posting.",
    color: "from-indigo-500/20 to-purple-500/20",
    border: "border-indigo-500/20",
  },
  {
    number: "03",
    emoji: "✨",
    title: "Get Your Career Upgrade",
    description: null,
    deliverables: [
      "Tailored resume rewrite",
      "Custom cover letter",
      "Interview questions & model answers",
      "Skill gap breakdown",
      "Improvement roadmap",
    ],
    note: "All generated in minutes.",
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/20",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-indigo-50 border border-indigo-200 text-indigo-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Simple Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            How It Works
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 z-0" />

          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative z-10 bg-gradient-to-br ${step.color} border ${step.border} rounded-2xl p-6 flex flex-col`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl">
                  {step.emoji}
                </div>
                <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">
                  Step {step.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>

              {step.description && (
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              )}

              {step.deliverables && (
                <ul className="space-y-2 mt-1">
                  {step.deliverables.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg
                        className="w-4 h-4 text-indigo-500 flex-shrink-0"
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
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {step.note && (
                <p className="mt-4 text-sm font-semibold text-indigo-600">
                  {step.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
