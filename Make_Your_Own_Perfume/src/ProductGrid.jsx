import ProductCard from "./ProductCard2";

const products = [
  {
    id: 1,
    name: "PARTY SMART",
    price: "1,129.00",
    emi: "376",
    image: "https://myop.in/cdn/shop/files/party_smart.webp?v=1752146351&width=600"
  },
  {
    id: 2,
    name: "MYSTIQUE",
    price: "1,129.00",
    emi: "376",
    image: "https://myop.in/cdn/shop/files/purple_mystique_157c687d-d1f0-4b6a-bce9-aa8db40162b8.webp?v=1752146267&width=600"
  },
  {
    id: 3,
    name: "THE LEGEND",
    price: "929.00",
    emi: "310",
    image: "https://myop.in/cdn/shop/files/the_legend_b941e444-0b65-48f4-8f1c-85f520434ef9.webp?v=1752146445&width=600"
  },
  {
    id: 4,
    name: "BLOOM",
    price: "1,129.00",
    emi: "376",
    image: "https://myop.in/cdn/shop/files/bangalore_bloom.webp?v=1752146312&width=600"
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

export default function ProductGrid() {
  return (
    <section className="bg-white py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* Grid */}
        <div className="grid gap-8
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-3
                        xl:grid-cols-4">

          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

        </div>

      </div>

    </section>
  );
}