export default function FinalCTA() {
  return (
    <section className="bg-gray-950 py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(99,102,241,0.4) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
          Your Next Interview Is{" "}
          <span className="gradient-text">Waiting.</span>
        </h2>

        <p className="text-gray-400 text-xl mb-4">Don&apos;t apply blindly.</p>
        <p className="text-white text-xl font-semibold mb-12">
          Apply confidently.
        </p>

        <div id="get-started" className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xl px-12 py-5 rounded-2xl transition-all duration-200 hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-0.5"
          >
            Start Free Now →
          </a>
        </div>

        <p className="mt-6 text-gray-600 text-sm">
          No credit card · Setup in 2 minutes · Cancel anytime
        </p>
      </div>
    </section>
  );
}
