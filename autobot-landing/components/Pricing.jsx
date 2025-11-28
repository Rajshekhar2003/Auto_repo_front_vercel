export default function Pricing() {
  const tiers = [
    {
      title: "Starter",
      price: 19,
      img: "/icons/starter.png",
      popular: false,
      features: [
        "Up to 5 team members",
        "Basic analytics",
        "Email support",
        "5GB cloud storage",
      ],
    },
    {
      title: "Professional",
      price: 59,
      img: "/icons/pro.png",
      popular: true,
      features: [
        "Up to 25 team members",
        "Advanced analytics",
        "Priority support",
        "50GB storage",
      ],
    },
    {
      title: "Enterprise",
      price: 129,
      img: "/icons/enterprise.jpg",
      popular: false,
      features: [
        "Unlimited members",
        "Dedicated engineer",
        "Custom integrations",
        "Unlimited storage",
      ],
    },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Simple, transparent pricing</h2>
        <p className="text-gray-400 mt-3">
          Choose the perfect plan for your team.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {tiers.map((t, i) => (
            <div
              key={i}
              className={`
                p-10 rounded-2xl border backdrop-blur-sm 
                transition shadow-lg hover:shadow-2xl hover:-translate-y-2 
                ${
                  t.popular
                    ? "border-blue-500 bg-blue-950/40"
                    : "border-gray-700 bg-gray-900/50"
                }
              `}
            >
              {t.popular && (
                <p className="text-xs uppercase tracking-wide text-blue-400 mb-3">
                  ⭐ Most Popular
                </p>
              )}

              {/* Plan Image */}
              <img
                src={t.img}
                alt={t.title}
                className="w-14 h-14 mx-auto mb-6 brightness-200"
              />

              <h3 className="text-2xl font-bold">{t.title}</h3>

              <p className="text-5xl font-extrabold mt-4">
                ${t.price}
                <span className="text-xl text-gray-400 font-medium">/mo</span>
              </p>

              <ul className="mt-8 text-left space-y-4">
                {t.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-green-400">✔</span>
                    <span className="text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full py-3 rounded-xl font-semibold transition 
                  ${
                    t.popular
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-700 hover:bg-gray-600"
                  }
                `}
              >
                Start free trial
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
