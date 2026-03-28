import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // ========================
    // SIGNUP
    // ========================
    if (!isLogin) {
      if (!form.name || !form.email || !form.password) {
        setError("All fields are required");
        return;
      }

      const userExists = users.find(
        (u) => u.email === form.email
      );

      if (userExists) {
        setError("User already exists");
        return;
      }

      const newUser = {
        name: form.name,
        email: form.email,
        password: form.password
      };

      localStorage.setItem(
        "users",
        JSON.stringify([...users, newUser])
      );

      setSuccess("Signup successful! Please login.");
      setIsLogin(true);

      setForm({
        name: "",
        email: "",
        password: ""
      });

      return;
    }

    // ========================
    // LOGIN
    // ========================
    const user = users.find(
      (u) =>
        u.email === form.email &&
        u.password === form.password
    );

    if (!user) {
      setError("User not found or wrong password");
      return;
    }

    // ✅ Save logged-in user
    localStorage.setItem("currentUser", JSON.stringify(user));

    setSuccess("Login successful!");

    // ✅ REDIRECT (ONLY AFTER LOGIN)
    setTimeout(() => {
      navigate("/");
    }, 1000);

    setForm({
      name: "",
      email: "",
      password: ""
    });
  };

  return (
    <section className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow">

        <h2 className="text-2xl font-semibold mb-6 text-center">
          {isLogin ? "Login" : "Create Account"}
        </h2>

        {error && <p className="text-red-500 mb-3">{error}</p>}
        {success && <p className="text-green-600 mb-3">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">

          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <button className="w-full bg-black text-white py-3 rounded-full">
            {isLogin ? "Login" : "Sign Up"}
          </button>

        </form>

        <p className="text-center mt-5 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
              setSuccess("");
            }}
            className="ml-2 font-semibold"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>

      </div>

    </section>
  );
}