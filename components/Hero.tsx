import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gray-950 flex flex-col items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.15) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium px-4 py-2 rounded-full mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse-slow inline-block" />
          AI Career Copilot · Early Access Open
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6 animate-fade-in-up">
          Land More Interviews.{" "}
          <span className="gradient-text">
            With AI That Actually Understands Your Career.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animate-delay-100">
          Upload your resume. Tell us your dream role.
          <br className="hidden sm:block" />
          Get a tailored resume, cover letter, interview prep, and skill
          roadmap&nbsp;—&nbsp;in minutes.
        </p>

        {/* CTA Buttons */}
        <div
          id="get-started"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-200"
        >
          <a
            href="#"
            className="group relative w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5"
          >
            Start Free →
            <span className="block text-xs font-normal text-indigo-200 mt-0.5">
              No credit card required
            </span>
          </a>

          <a
            href="#how-it-works"
            className="w-full sm:w-auto flex items-center justify-center gap-2 text-gray-300 hover:text-white font-semibold text-lg px-8 py-4 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-200 hover:bg-white/5"
          >
            <svg
              className="w-5 h-5 text-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            See How It Works
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 animate-fade-in-up animate-delay-300">
          {[
            { value: "1,000+", label: "Early users" },
            { value: "10x", label: "Faster applications" },
            { value: "5 min", label: "Avg. time to first result" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
