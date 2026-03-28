import { useState } from "react";

const products = [
  {
    id: 1,
    name: "PARTY SMART",
    price: 1129,
    image: "https://myop.in/cdn/shop/files/party_smart.webp",
    tag: ""
  },
  {
    id: 2,
    name: "PURPLE MYSTIQUE",
    price: 1129,
    image: "https://myop.in/cdn/shop/files/purple_mystique_157c687d-d1f0-4b6a-bce9-aa8db40162b8.webp?v=1752146267&width=600",
    tag: "All-Time Fav ❤️"
  },
  {
    id: 3,
    name: "THE LEGEND",
    price: 929,
    image: "https://myop.in/cdn/shop/files/the_legend_b941e444-0b65-48f4-8f1c-85f520434ef9.webp?v=1752146445&width=600",
    tag: ""
  },
  {
    id: 4,
    name: "BANGALORE BLOOM",
    price: 1129,
    image: "https://myop.in/cdn/shop/files/bangalore_bloom.webp",
    tag: "Top Seller 🔥"
  },
  {
    id: 5,
    name: "Fruit Punch",
    price: "1,129.00",
    emi: "376",
    image: "https://myop.in/cdn/shop/files/fruit_punch_e6f7349a-384a-4764-ac3b-354b8aec8894.webp?v=1752146412&width=600"
  },
  {
    id: 6,
    name: "Pablo",
    price: "1,179.00",
    emi: "376",
    image: "https://myop.in/cdn/shop/files/pablo.webp?v=1752146327&width=600"
  },
  {
    id: 7,
    name: "Guilt for Men",
    price: "929.00",
    emi: "310",
    image: "https://myop.in/cdn/shop/files/guilt_for_men_db653709-2ed6-419e-b778-2c42f97a9525.webp?v=1752146489&width=1000"
  },
  {
    id: 8,
    name: "The Valentine",
    price: "1,129.00",
    emi: "376",
    image: "https://myop.in/cdn/shop/files/the_valentine_93fbeb79-eb84-4246-af91-508494f5bd13.jpg?v=1752146452&width=600"
  }
];

export default function Product() {
  const [sort, setSort] = useState("default");

  // SORT LOGIC
  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    return 0;
  });

  return (
    <section className="bg-[#f5f5f5] py-12">

      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-10">
        SIGNATURE PERFUMES
      </h1>

      {/* FILTER + SORT */}
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center mb-8">

        {/* FILTER BUTTON */}
        <button className="border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition">
          Show filters
        </button>

        {/* SORT */}
        <div className="flex items-center gap-3">
          <span>Sort by:</span>

          <select
            onChange={(e) => setSort(e.target.value)}
            className="border px-4 py-2 rounded-full"
          >
            <option value="default">Best selling</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>
        </div>

      </div>

      {/* PRODUCT GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {sortedProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
          >

            {/* IMAGE + TAG */}
            <div className="relative">

              {item.tag && (
                <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              )}

              <img
                src={item.image}
                className="w-full h-[280px] object-cover  hover:scale-105 transition duration-500"
              />
            </div>

            {/* DETAILS */}
            <div className="p-4">

              <h3 className="font-semibold text-lg">
                {item.name}
              </h3>

              <p className="text-gray-600 mt-1">
                From Rs. {item.price}
              </p>

              {/* EMI */}
              <div className="mt-2 flex items-center gap-2 text-sm">
                <span>or ₹{Math.round(item.price / 3)}/Month</span>
                <button className="bg-black text-white px-2 py-1 rounded text-xs">
                  Buy on EMI
                </button>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}