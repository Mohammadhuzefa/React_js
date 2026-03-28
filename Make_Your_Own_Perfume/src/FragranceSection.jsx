import FragranceCard from "./FragranceCard";

const fragrances = [
  {
    id: 1,
    title: "FRESH",
    description: "Energize. Vitalize. Awaken.",
    image: "https://myop.in/cdn/shop/files/fresh_1.webp?v=1714048533&width=1080"
  },
  {
    id: 2,
    title: "ORIENTAL/WOODY",
    description: "Exotic. Sensual. Subtle.",
    image: "https://myop.in/cdn/shop/files/woody__oriental_1.webp?v=1714048563&width=1080"
  },
  {
    id: 3,
    title: "FLORAL",
    description: "Fruity. Bloom. Candylicious.",
    image: "https://myop.in/cdn/shop/files/floral_1.webp?v=1714048608&width=1080"
  }
];

function FragranceSection() {
  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-semibold mb-12">
          OUR <span className="text-orange-500">FRAGRANCES</span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {fragrances.map((item) => (
            <FragranceCard key={item.id} item={item} />
          ))}

        </div>

      </div>

    </section>
  );
}

export default FragranceSection;