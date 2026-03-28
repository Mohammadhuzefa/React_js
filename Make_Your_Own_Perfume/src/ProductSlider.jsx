import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "OFFBEAT",
    price: "1,129.00",
    image:
      "https://myop.in/cdn/shop/files/Thumbnail_copy.webp?v=1769695591&width=600"
  },
  {
    id: 2,
    name: "SANDAL VEER",
    price: "1,129.00",
    image:
      "https://myop.in/cdn/shop/files/Sandal_Veer_Product_Thumbnail.webp?v=1764918274&width=600"
  },
  {
    id: 3,
    name: "MARSHMALLOW",
    price: "1,129.00",
    image:
      "https://myop.in/cdn/shop/files/marshamallow_fluff_thumbnail.webp?v=1753800557&width=600"
  },
  {
    id: 4,
    name: "MYSTIQUE",
    price: "1,129.00",
    image:
      "https://myop.in/cdn/shop/files/purple_mystique_157c687d-d1f0-4b6a-bce9-aa8db40162b8.webp?v=1752146267&width=600"
  },
  {
    id: 5,
    name: "The Legend",
    price: "1,129.00",
    image:
      "https://myop.in/cdn/shop/files/the_legend_b941e444-0b65-48f4-8f1c-85f520434ef9.webp?v=1752146445&width=600"
  }
];

function ProductSlider() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="flex justify-between items-center mb-10">

          <h2 className="text-4xl font-semibold">
            DISCOVER <span className="text-orange-500">OUR BESTSELLERS</span>
          </h2>

        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
        >

          {products.map(product => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
}

export default ProductSlider;