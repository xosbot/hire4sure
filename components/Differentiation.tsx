const reasons = [
  {
    icon: "🏗️",
    title: "Structured for job outcomes",
    description: "Not a general assistant — every feature maps to a hiring milestone.",
  },
  {
    icon: "📋",
    title: "Pre-engineered for hiring standards",
    description: "Built around what actual recruiters look for in 2024.",
  },
  {
    icon: "🧠",
    title: "Built with recruiter logic",
    description: "We understand how hiring decisions are made, not just how to write.",
  },
  {
    icon: "🤖",
    title: "Optimized for ATS systems",
    description: "Your resume passes the bots before it reaches human eyes.",
  },
  {
    icon: "📈",
    title: "Designed for career growth",
    description: "We don't just help you apply — we help you level up.",
  },
];

export default function Differentiation() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: The question */}
          <div className="sticky top-24">
            <div className="inline-block bg-gray-100 border border-gray-200 text-gray-600 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Why hire4sure.ai?
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Why Not Just Use ChatGPT?
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Because hire4sure.ai isn&apos;t generic AI trying to do everything.
            </p>

            <div className="bg-gray-950 rounded-2xl p-6 text-center">
              <p className="text-white text-lg font-bold mb-1">
                This isn&apos;t generic AI.
              </p>
              <p className="text-indigo-300 font-semibold">
                It&apos;s AI trained for job success.
              </p>
            </div>
          </div>

          {/* Right: Reasons */}
          <div className="space-y-4">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-xl">
                  {reason.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{reason.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
