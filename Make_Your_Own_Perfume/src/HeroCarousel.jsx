import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "https://myop.in/cdn/shop/files/offbeat_banner_desktop_1_1.webp?v=1769835439&width=2000",
    subtitle: "",
    title: ""
  },
  {
    id: 2,
    image: "https://myop.in/cdn/shop/files/b2g1_6e47992a-e85f-4019-89d5-179ac74e931d.webp?v=1740730153&width=2000",
    subtitle: "",
    title: ""
  },
  {
    id: 3,
    image: "https://myop.in/cdn/shop/files/website_banner_forum_mall_kochi_final.webp?v=1772790498&width=2000",
    subtitle: "Introducing",
    title: ""
  }
];

function HeroCarousel() {
  return (
    <section className="w-full">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-[500px] md:h-[650px]"
      >

        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>

            <div className="relative w-full h-full">

              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full rounded-2xl object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-center">

                <div className="max-w-7xl mx-auto px-6 text-white">

                  <p className="text-2xl italic mb-2">
                    {slide.subtitle}
                  </p>

                  <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
                    {slide.title}
                  </h1>

                </div>

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
}

export default HeroCarousel;