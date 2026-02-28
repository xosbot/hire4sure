export default function Urgency() {
  return (
    <section className="bg-gray-950 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 p-px shadow-2xl shadow-indigo-900/50">
          <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 rounded-3xl p-10 text-center relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl pointer-events-none" />

            <div className="relative">
              <div className="text-4xl mb-4">🚀</div>
              <div className="inline-block bg-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                Early Access Offer
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                First 1,000 users get{" "}
                <span className="text-amber-300">50% off Pro</span> for life.
              </h2>

              <p className="text-indigo-200 text-lg mb-8">
                Share with 3 friends and unlock extra free credits.
              </p>

              {/* Progress bar */}
              <div className="max-w-xs mx-auto mb-2">
                <div className="h-2.5 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 rounded-full"
                    style={{ width: "68%" }}
                  />
                </div>
              </div>
              <p className="text-indigo-200 text-sm mb-8">
                680 / 1,000 spots claimed
              </p>

              <a
                href="#get-started"
                className="inline-block bg-white text-indigo-700 font-bold text-lg px-10 py-4 rounded-xl hover:bg-indigo-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Claim Your Spot →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
