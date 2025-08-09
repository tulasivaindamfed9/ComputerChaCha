export default function Hero() {
    return (
      <section className="text-left px-4 py-20">
          <p className="text-sm uppercase tracking-widest text-white mb-3">
      👋 Hey, I am Erica
    </p>
        <h2 className="text-4xl font-bold leading-snug mb-8">
          <span className="text-yellow-400">A YOUNG CREATIVE DESIGNER BASED IN</span><br />
          <span className="text-pink-500">SAN DIEGO</span>
        </h2>
        <div className="flex flex-col md:flex-row items-start justify-start gap-6">
          <button className="border border-white text-white px-6 py-3 rounded-full uppercase text-sm hover:bg-white hover:text-black transition">
            MY WORKS
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-full uppercase text-sm hover:bg-white hover:text-black transition">
            LET{"'"}S TALK
          </button>
        </div>
      </section>
    );
  }
  