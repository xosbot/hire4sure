const freePlan = {
  name: "Free",
  price: "$0",
  period: "/ month",
  description: "Get started with no risk. No credit card required.",
  features: [
    "3 Resume Optimizations",
    "3 Cover Letters",
    "Limited Interview Prep",
    "Basic Skill Analysis",
  ],
  cta: "Start Free",
  ctaHref: "#get-started",
  highlight: false,
};

const proPlan = {
  name: "Pro",
  price: "$19",
  period: "/ month",
  description: "Everything you need to land your next role, fast.",
  features: [
    "Unlimited Resume Tailoring",
    "Unlimited Cover Letters",
    "Full Interview Preparation",
    "Advanced Skill Gap Roadmap",
    "Priority AI Processing",
  ],
  cta: "Get Pro Access",
  ctaHref: "#get-started",
  highlight: true,
  badge: "Most Popular",
};

function PlanCard({
  plan,
}: {
  plan: typeof freePlan | typeof proPlan;
}) {
  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col ${
        "highlight" in plan && plan.highlight
          ? "bg-indigo-600 text-white shadow-2xl shadow-indigo-500/30 scale-105"
          : "bg-white border border-gray-200 text-gray-900"
      }`}
    >
      {"badge" in plan && plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
            {plan.badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3
          className={`text-lg font-bold mb-1 ${
            "highlight" in plan && plan.highlight ? "text-indigo-100" : "text-gray-500"
          }`}
        >
          {plan.name}
        </h3>
        <div className="flex items-end gap-1 mb-3">
          <span className="text-5xl font-extrabold">{plan.price}</span>
          <span
            className={`text-sm mb-2 ${
              "highlight" in plan && plan.highlight ? "text-indigo-200" : "text-gray-400"
            }`}
          >
            {plan.period}
          </span>
        </div>
        <p
          className={`text-sm leading-relaxed ${
            "highlight" in plan && plan.highlight ? "text-indigo-100" : "text-gray-500"
          }`}
        >
          {plan.description}
        </p>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            <svg
              className={`w-4 h-4 flex-shrink-0 ${
                "highlight" in plan && plan.highlight
                  ? "text-indigo-200"
                  : "text-indigo-500"
              }`}
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
            <span
              className={
                "highlight" in plan && plan.highlight ? "text-white" : "text-gray-700"
              }
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={plan.ctaHref}
        className={`w-full text-center font-bold py-3.5 rounded-xl transition-all duration-200 ${
          "highlight" in plan && plan.highlight
            ? "bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg"
            : "bg-gray-950 text-white hover:bg-gray-800"
        }`}
      >
        {plan.cta}
      </a>

      {"highlight" in plan && plan.highlight && (
        <p className="text-center text-xs text-indigo-200 mt-3">
          Cancel anytime. No questions asked.
        </p>
      )}
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-indigo-50 border border-indigo-200 text-indigo-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Start Free. Upgrade When You&apos;re Ready.
          </h2>
          <p className="mt-4 text-gray-500">
            No risk. No credit card for the free plan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <PlanCard plan={freePlan} />
          <PlanCard plan={proPlan} />
        </div>
      </div>
    </section>
  );
}
