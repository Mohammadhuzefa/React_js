import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    name: "LOVE IN PARIS",
    price: "1,749.00",
    oldPrice: "3,499.00",
    image: "https://myop.in/cdn/shop/files/LOVE_IN_PARIS_6cc6268e-19a8-41b3-b11f-95d3c616f838.webp?v=1752146220&width=1080",
    discount: "Save 50%"
  },
  {
    id: 2,
    name: "OUD DE BEIRUT",
    price: "3,499.00",
    image: "https://myop.in/cdn/shop/files/oud_de_beirut_41fab96b-10f7-4faf-9817-5a444a5990c5.webp?v=1752146209&width=1080"
  },
  {
    id: 3,
    name: "CALIFORNIA SUNSHINE",
    price: "3,499.00",
    image: "https://myop.in/cdn/shop/files/california_5cd3d19d-2510-4c2e-8f75-9fad21bf803c.webp?v=1764044610&width=1080"
  },
  {
    id: 4,
    name: "TOKYO GLOW",
    price: "1,749.00",
    oldPrice: "3,499.00",
    image: "https://myop.in/cdn/shop/files/TOKYO_GLOW.webp?v=1752146223&width=600",
    discount: "Save 50%"
  },
   {
    id: 5,
    name: "Moroccan Rose",
    price: "3,499.00",
    image: "https://myop.in/cdn/shop/files/TOKYO_GLOW.webp?v=1752146223&width=600",
    discount: "Save 50%"
  }
];

export default function CosmopolitanCarousel() {
  return (
    <section className="bg-black py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-center text-5xl text-[#C6A96B] font-semibold">
          INTRODUCING COSMOPOLITAN
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-12">
          Embark On a Sensory Voyage with the All-New Cosmopolitan Collection.
        </p>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">

                {/* Image */}
                <div className="relative">

                  {product.discount && (
                    <span className="absolute top-4 left-4 bg-red-500 text-white text-sm px-4 py-1 rounded-full">
                      {product.discount}
                    </span>
                  )}

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
                  />

                </div>

                {/* Content */}
                <div className="p-6">

                  <h3 className="text-lg font-semibold tracking-wide">
                    {product.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-3">

                    <span className="text-red-500 font-semibold">
                      From Rs. {product.price}
                    </span>

                    {product.oldPrice && (
                      <span className="line-through text-gray-400">
                        Rs. {product.oldPrice}
                      </span>
                    )}

                  </div>

                  <p className="text-sm text-black mt-2">
                    or ₹583/Month
                  </p>

                  <button className="mt-3 text-xs bg-black text-white px-3 py-1 rounded">
                    Buy on EMI
                  </button>

                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}