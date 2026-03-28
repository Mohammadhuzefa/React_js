import { useLocation } from "react-router-dom";

export default function InvoicePage() {
  const { state } = useLocation();

  const order = state || {
    customer: {
      name: "John Doe",
      phone: "9876543210",
      address: "Mumbai, India"
    },
    product: {
      name: "PARTY SMART",
      price: "1129",
      size: "50ml",
      image: "https://myop.in/cdn/shop/files/party_smart.webp"
    }
  };

  // ✅ SAFE PRICE CONVERSION (VERY IMPORTANT)
  const rawPrice = order.product.price;

  const total =
    typeof rawPrice === "number"
      ? rawPrice
      : parseFloat(String(rawPrice).replace(/,/g, ""));

  return (
    <section className="bg-[#f5f5f5] min-h-screen py-10">

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow">

        {/* HEADER */}
        <div className="flex justify-between items-center border-b pb-4">
          <h1 className="text-2xl font-semibold">Invoice</h1>
          <button
            onClick={() => window.print()}
            className="border px-4 py-2 rounded-lg"
          >
            Print
          </button>
        </div>

        {/* CUSTOMER */}
        <div className="mt-6">
          <h2 className="font-semibold mb-2">Customer Details</h2>
          <p>{order.customer.name}</p>
          <p>{order.customer.phone}</p>
          <p>{order.customer.address}</p>
        </div>

        {/* PRODUCT */}
        <div className="mt-6 border-t pt-6">
          <h2 className="font-semibold mb-4">Order Summary</h2>

          <div className="flex gap-4 items-center">
            <img
              src={order.product.image}
              className="w-24 h-24 rounded-lg object-cover"
              alt="product"
            />

            <div className="flex-1">
              <p className="font-semibold">{order.product.name}</p>
              <p className="text-gray-500">
                Size: {order.product.size}
              </p>
            </div>

            {/* ✅ FORMATTED PRICE */}
            <p className="font-semibold">
              ₹{total.toLocaleString()}
            </p>
          </div>
        </div>

        {/* TOTAL */}
        <div className="mt-6 border-t pt-6">

          <div className="flex justify-between text-lg">
            <span>Subtotal</span>
            <span>₹{total.toLocaleString()}</span>
          </div>

          <div className="flex justify-between text-lg mt-2">
            <span>Shipping</span>
            <span>₹0</span>
          </div>

          <div className="flex justify-between text-xl font-semibold mt-4">
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
          </div>

        </div>

      </div>

    </section>
  );
}