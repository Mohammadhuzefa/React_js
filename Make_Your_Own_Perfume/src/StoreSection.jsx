function StoreSection() {
  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <h2 className="text-5xl font-light leading-tight">

            <span className="text-orange-500 font-semibold">70</span>{" "}
            STORES ACROSS <br /> INDIA

          </h2>

          {/* Button */}
          <button className="mt-10 border-2 border-black px-8 py-4 rounded-full flex items-center gap-3 hover:bg-black hover:text-white transition">

            Locate Our Stores

            <span className="text-xl">→</span>

          </button>

        </div>

        {/* Right Side */}
        <div className="text-gray-600 text-lg leading-relaxed">

          <p>
            Make Your Own Perfume (MYOP) is India’s pioneering perfume bar
            offering top-notch, value for money fragrances with exceptional
            expertise in the art & science of perfumery.
          </p>

          <p className="mt-4 text-orange-500 tracking-wider font-medium">
            INDIA'S FIRST PERFUME BAR
          </p>

        </div>

      </div>

    </section>
  );
}

export default StoreSection;