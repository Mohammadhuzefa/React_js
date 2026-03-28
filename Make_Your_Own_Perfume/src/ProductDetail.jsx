import { useState } from "react";
import { useNavigate } from "react-router-dom";

const product = {
  name: "PARTY SMART",
  price: "1,129.00",
  rating: 5,
  reviews: 3,
  images: [
    "https://myop.in/cdn/shop/files/party_smart.webp?v=1752146351&width=600",
    "https://myop.in/cdn/shop/files/party_smart_sensation.webp?v=1759561115&width=1000",
    "https://myop.in/cdn/shop/files/bottle_options_for_website.webp?v=1764337765&width=600",
    "https://myop.in/cdn/shop/files/party_smart_copy_8e64541b-5f1d-456f-8aa6-30bfcb5b3b4b.webp?v=1754551981&width=1000"
  ]
};

export default function ProductDetail() {

  const navigate = useNavigate(); // ✅ FIX ADDED

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [size, setSize] = useState("50ml");

  return (
    <section className="bg-[#f5f5f5] py-10">
      <div className="max-w-7xl h-160 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="flex gap-4">

          {/* Main Image */}
          <div className="flex-1">
            <img
              src={selectedImage}
              className="w-full rounded-2xl"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex flex-col gap-4">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setSelectedImage(img)}
                className={`w-24 h-24 object-cover rounded-xl cursor-pointer border ${
                  selectedImage === img ? "border-black" : ""
                }`}
              />
            ))}
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div>

          {/* Title + Price */}
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-semibold">
              {product.name}
            </h1>
            <span className="text-xl">
              Rs. {product.price}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-gray-600">
              {product.rating}.0 | {product.reviews} reviews
            </span>
          </div>

          {/* EMI BOX */}
          <div className="bg-gray-200 p-4 rounded-xl mt-5 flex justify-between items-center">
            <p className="text-sm">
              or Pay <span className="text-green-600 font-semibold">₹376 now</span> & rest later
            </p>

            <button className="bg-black text-white px-4 py-2 rounded-lg">
              BUY ON EMI
            </button>
          </div>

          {/* SIZE */}
          <div className="mt-6">
            <p className="mb-2 font-medium">Size:</p>

            <div className="flex gap-3">
              {["50ml", "100ml", "100ml Personalized"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-4 py-2 rounded-lg border ${
                    size === s
                      ? "border-black"
                      : "border-gray-300 text-gray-500"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">

            <button className="flex-1 bg-black text-white py-3 rounded-full hover:opacity-90">
              Add to cart
            </button>

          </div>

          {/* ✅ BUY NOW WORKING */}
          <button
            onClick={() =>
              navigate("/order", {
                state: {
                  name: product.name,
                  price: product.price,
                  image: selectedImage,
                  size: size
                }
              })
            }
            className="w-full mt-4 border border-black py-3 rounded-full hover:bg-black hover:text-white transition"
          >
            Buy it now
          </button>

        </div>
      </div>
    </section>
  );
}