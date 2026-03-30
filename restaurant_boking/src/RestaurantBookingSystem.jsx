import React, { useState, useEffect } from "react";

const tablesData = [
  { id: 1, seats: 2 },
  { id: 2, seats: 4 },
  { id: 3, seats: 6 },
];

const menuData = [
  { id: 1, name: "Pizza", price: 109 },
  { id: 2, name: "Burger", price: 79 },
  { id: 3, name: "Pasta", price: 149 },
];

export default function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("bookings");
    if (saved) setBookings(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-4xl p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          🍽 Restaurant System
        </h1>

        {!currentUser ? (
          <Auth
            users={users}
            setUsers={setUsers}
            setCurrentUser={setCurrentUser}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
          />
        ) : (
          <RestaurantBookingSystem
            currentUser={currentUser}
            logout={() => setCurrentUser(null)}
            bookings={bookings}
            setBookings={setBookings}
          />
        )}
      </div>
    </div>
  );
}

// 🔐 Auth UI
function Auth({ users, setUsers, setCurrentUser, isLogin, setIsLogin }) {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = () => {
    if (!form.username || !form.password) {
      alert("Fill all fields");
      return;
    }

    if (isLogin) {
      const user = users.find(
        (u) =>
          u.username === form.username && u.password === form.password
      );
      if (user) setCurrentUser(user);
      else alert("Invalid credentials");
    } else {
      const exists = users.find((u) => u.username === form.username);
      if (exists) return alert("User already exists");

      setUsers([...users, form]);
      alert("Signup successful!");
      setIsLogin(true);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-center">
        {isLogin ? "Login" : "Signup"}
      </h2>

      <input
        className="w-full p-2 border rounded-lg"
        placeholder="Username"
        value={form.username}
        onChange={(e) =>
          setForm({ ...form, username: e.target.value })
        }
      />

      <input
        type="password"
        className="w-full p-2 border rounded-lg"
        placeholder="Password"
        value={form.password}
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
      >
        {isLogin ? "Login" : "Signup"}
      </button>

      <p className="text-center text-sm">
        {isLogin ? "No account?" : "Already have one?"}
        <button
          className="ml-2 text-blue-500"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Signup" : "Login"}
        </button>
      </p>
    </div>
  );
}

// 🍽 Main UI
function RestaurantBookingSystem({
  currentUser,
  logout,
  bookings,
  setBookings,
}) {
  const [selectedTable, setSelectedTable] = useState(null);
  const [reservationName, setReservationName] = useState("");
  const [date, setDate] = useState("");
  const [order, setOrder] = useState([]);

  const addToOrder = (item) => {
    setOrder((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const handleBooking = () => {
    if (!selectedTable || !reservationName || !date) {
      alert("Fill all details");
      return;
    }

    const newBooking = {
      id: Date.now(),
      user: currentUser.username,
      name: reservationName,
      table: selectedTable,
      date,
      order,
    };

    setBookings((prev) => [...prev, newBooking]);

    setSelectedTable(null);
    setReservationName("");
    setDate("");
    setOrder([]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          Welcome, {currentUser.username}
        </h2>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-1 rounded-lg"
        >
          Logout
        </button>
      </div>

      {/* Reservation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          className="p-2 border rounded-lg"
          placeholder="Reservation Name"
          value={reservationName}
          onChange={(e) => setReservationName(e.target.value)}
        />

        <input
          type="date"
          className="p-2 border rounded-lg"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Tables */}
      <div>
        <h3 className="font-semibold mb-2">Select Table</h3>
        <div className="flex gap-2">
          {tablesData.map((table) => (
            <button
              key={table.id}
              onClick={() => setSelectedTable(table)}
              className={`px-4 py-2 rounded-lg border ${
                selectedTable?.id === table.id
                  ? "bg-green-500 text-white"
                  : "bg-white"
              }`}
            >
              Table {table.id}
            </button>
          ))}
        </div>
      </div>

      {/* Menu */}
      <div>
        <h3 className="font-semibold mb-2">Menu</h3>
        <div className="grid grid-cols-3 gap-3">
          {menuData.map((item) => (
            <div
              key={item.id}
              className="p-3 border rounded-lg flex justify-between"
            >
              <div>
                <p>{item.name}</p>
                <p className="text-sm text-gray-500">Rs:{item.price}</p>
              </div>
              <button
                onClick={() => addToOrder(item)}
                className="bg-blue-500 text-white px-2 rounded"
              >
                +
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Order */}
      <div>
        <h3 className="font-semibold mb-2">Order</h3>
        {order.length === 0 ? (
          <p className="text-gray-500">No items</p>
        ) : (
          order.map((item) => (
            <p key={item.id}>
              {item.name} x {item.qty}
            </p>
          ))
        )}
      </div>

      <button
        onClick={handleBooking}
        className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
      >
        Confirm Booking
      </button>

      {/* Bookings */}
      <div>
        <h3 className="font-semibold mb-2">Your Bookings</h3>
        {bookings
          .filter((b) => b.user === currentUser.username)
          .map((b) => (
            <div
              key={b.id}
              className="p-3 border rounded-lg mb-2 bg-gray-50"
            >
              <p>
                {b.name} - Table {b.table.id} ({b.date})
              </p>
              <p className="text-sm text-gray-600">
                {b.order.map((o) => `${o.name} x${o.qty}`).join(", ")}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}