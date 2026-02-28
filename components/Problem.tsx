const problems = [
  "You send 100 applications.",
  "You hear back from 3.",
  "Interviews feel unpredictable.",
  "You're not sure what skills you're missing.",
  "You waste hours rewriting resumes.",
];

export default function Problem() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: headline + closing */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Job Searching Is Broken.
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-4">
              It&apos;s exhausting.
            </p>
            <p className="text-lg font-semibold text-gray-900">
              And it shouldn&apos;t be.
            </p>
          </div>

          {/* Right: problem list */}
          <div className="space-y-4">
            {problems.map((problem, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl px-5 py-4"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
                <p className="text-gray-700 font-medium">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
