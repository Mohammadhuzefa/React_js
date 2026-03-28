import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function OrderPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: ""
  });

  const [loading, setLoading] = useState(false);

  // 🛑 If no product data
  if (!state) {
    return (
      <div className="p-10 text-center">
        ❌ No product selected. Go back and try again.
      </div>
    );
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Basic validation
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    const orderData = {
      customer: form,
      product: state
    };

    console.log("Order:", orderData);

    // 🔌 BACKEND CALL (optional)
    /*
    await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(orderData)
    });
    */

    // ✅ Redirect to Invoice Page
    navigate("/invoice", {
      state: orderData
    });
  };

  return (
    <section className="bg-[#f5f5f5] min-h-screen py-10">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* LEFT: PRODUCT */}
        <div className="bg-white p-6 rounded-2xl shadow">

          <img
            src={state.image}
            className="w-full h-[300px] object-cover rounded-xl"
            alt="product"
          />

          <h2 className="text-2xl mt-4 font-semibold">
            {state.name}
          </h2>

          <p className="text-gray-600 mt-1">
            Size: {state.size}
          </p>

          <p className="text-lg mt-2 font-medium">
            Rs. {state.price}
          </p>

        </div>

        {/* RIGHT: FORM */}
        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-2xl font-semibold mb-4">
            Order Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />

            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />

            <textarea
              name="address"
              placeholder="Address"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />

            <input
              name="city"
              placeholder="City"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              name="pincode"
              placeholder="Pincode"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition"
            >
              {loading ? "Processing..." : "Place Order"}
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}