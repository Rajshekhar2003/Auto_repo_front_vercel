export default function Testimonials() {
  const people = [
    {
      name: "Sarah Chen",
      role: "CTO @ NovaTech",
      quote: "This platform improved our deployment speed by 70%. Absolute game changer!",
      img: "/people/sarah.jpg",
    },
    {
      name: "Michael Adams",
      role: "Product Manager @ Innovexa",
      quote: "The collaboration features are smooth and powerful. Our team loves it!",
      img: "/people/michael.jpg",
    },
    {
      name: "Elena Rodriguez",
      role: "Data Scientist @ DataScale",
      quote: "Clean UI, fast performance, and incredibly intuitive. Highly recommend!",
      img: "/people/elena.jpg",
    },
  ];

  return (
    <section className="py-24 bg-linear-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-900">
          Loved by teams worldwide
        </h2>
        <p className="text-center text-gray-600 mt-3">
          See what industry leaders say about using our platform.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {people.map((p, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl border bg-white/70 backdrop-blur-lg shadow-lg 
              hover:shadow-2xl transition transform hover:-translate-y-1
              border-gray-200 hover:border-blue-500"
            >
              {/* Stars */}
              <div className="flex text-yellow-400 text-xl mb-4">
                ★★★★★
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed italic">
                “{p.quote}”
              </p>

              {/* Profile */}
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-14 h-14 rounded-full object-cover border border-gray-300"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{p.name}</h4>
                  <p className="text-gray-500 text-sm">{p.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
