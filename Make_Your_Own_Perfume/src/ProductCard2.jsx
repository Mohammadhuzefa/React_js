import { Link } from "react-router-dom";


function ProductCard({ product }) {
  return (
    <div className="bg-[#f6f6f6] rounded-2xl p-4 hover:shadow-md transition">

      {/* Image */}
      <div className=" rounded-xl overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[280px] object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="mt-4">

        {/* Title + Price */}
        <div className="flex justify-between items-center">

          <h3 className="text-lg italic font-medium tracking-wide">
            {product.name}
          </h3>

          <span className="text-gray-600 text-sm">
            From Rs. {product.price}
          </span>

        </div>

        {/* EMI Row */}
        <div className="flex items-center gap-2 mt-2">

          {/* <span className="text-sm font-medium">
            or ₹{product.emi}/Month
          </span> */}

          <button className="bg-black text-white text-xs px-2 py-1 rounded">
            <Link to="/productdetail">Buy it now</Link> 
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;