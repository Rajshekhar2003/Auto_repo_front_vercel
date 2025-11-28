export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#0a0f1f] via-[#0b1228] to-[#0a0f1f] text-white py-28">
      
      {/* Soft glowing blobs */}
      <div className="absolute inset-0 -z-10">
        {/* Blue glow */}
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-600/40 rounded-full blur-[180px]" />
        {/* Purple glow */}
        <div className="absolute -bottom-20 -right-20 w-[550px] h-[550px] bg-purple-600/40 rounded-full blur-[200px]" />
        {/* Cyan accent */}
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-cyan-400/30 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-20">
        
        {/* Tag */}
        <div className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-sm mb-6 backdrop-blur-sm">
          "Introducing the future of productivity"
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Build faster, collaborate smarter,
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
            scale effortlessly.
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          A modern workspace designed for high-performance teams. Automate tasks,
          centralize your workflow, and deliver faster than ever.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-5">
          <button className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold text-lg transition shadow-lg shadow-blue-600/20">
            Get Started
          </button>
          <button className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-lg font-semibold transition backdrop-blur-sm">
            Watch Demo
          </button>
        </div>

        {/* Hero Image */}
        <div className="mt-16 flex justify-center">
          <img
            src="/hero/final.jpg"
            alt="App Preview"
            className="w-full max-w-5xl rounded-2xl shadow-2xl border border-white/10 opacity-95 backdrop-blur-sm"
          />
        </div>
      </div>
    </section>
  );
}
