import { Link } from "react-router-dom";


function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 ">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* Info */}
      <div className="p-2 pb-4 justify-between items-start">

        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium tracking-wide">
            {product.name}
          </h3>

           <p className="text-sm text-gray-600 whitespace-nowrap">
          From Rs. {product.price}
        </p>
        </div>
         <div>
          {/* or */}
         </div>
          <div className="flex items-center justify-between text-sm text-gray-600 mt-1">
            {/* <span>₹376/Month</span>  */}

            <span className=" bg-black text-white text-xs px-8 py-2 rounded ">
             <button> <Link to="/product">View more</Link>  </button> 
            </span>
          </div>
        </div>

       

      
    </div>
  );
}

export default ProductCard;