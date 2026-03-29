import React from "react";

// ------------------ Local Storage Helpers ------------------
const getUsers = () => JSON.parse(localStorage.getItem("users") || "[]");
const saveUsers = (users) => localStorage.setItem("users", JSON.stringify(users));

const getPayments = () => JSON.parse(localStorage.getItem("payments") || "[]");
const savePayments = (payments) => localStorage.setItem("payments", JSON.stringify(payments));

// ------------------ Auth Context ------------------
const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  state = { user: null };

  setUser = (user) => {
    this.setState({ user });
  };

  render() {
    return (
      <AuthContext.Provider value={{ user: this.state.user, setUser: this.setUser }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

// ------------------ UI Components ------------------
const Card = ({ children }) => (
  <div className="bg-white shadow-xl rounded-2xl p-6 border">{children}</div>
);

const Input = (props) => (
  <input
    {...props}
    className="block w-full border rounded-lg p-2 my-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
);

const Button = ({ children, ...props }) => (
  <button
    {...props}
    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg mt-3"
  >
    {children}
  </button>
);

// ------------------ Signup ------------------
class Signup extends React.Component {
  state = {
    form: { name: "", email: "", password: "", studentId: "", grade: "" },
    error: "",
  };

  handleChange = (key, value) => {
    this.setState({ form: { ...this.state.form, [key]: value } });
  };

  handleSubmit = () => {
    const users = getUsers();
    const exists = users.find((u) => u.email === this.state.form.email);

    if (exists) {
      this.setState({ error: "User already exists" });
      return;
    }

    users.push(this.state.form);
    saveUsers(users);
    this.props.switchToLogin();
  };

  render() {
    return (
      <Card>
        <h2 className="text-xl font-bold mb-3">Sign Up</h2>
        {this.state.error && <p className="text-red-500">{this.state.error}</p>}
        {Object.keys(this.state.form).map((key) => {
          if (key === "grade") {
            return (
              <select
                key={key}
                className="block w-full border rounded-lg p-2 my-2"
                onChange={(e) => this.handleChange(key, e.target.value)}
              >
                <option value="">Select Grade</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    Grade {i + 1}
                  </option>
                ))}
              </select>
            );
          }

          return (
            <Input
              key={key}
              placeholder={key}
              onChange={(e) => this.handleChange(key, e.target.value)}
            />
          );
        })}
        <Button onClick={this.handleSubmit}>Register</Button>
        <p className="mt-2 text-sm cursor-pointer" onClick={this.props.switchToLogin}>
          Already have an account? Login
        </p>
      </Card>
    );
  }
}

// ------------------ Login ------------------
class Login extends React.Component {
  static contextType = AuthContext;

  state = { email: "", password: "", error: "" };

  handleSubmit = () => {
    // simple admin login
    if (this.state.email === "admin@gmail.com" && this.state.password === "admin") {
      this.props.onAdminLogin();
      return;
    }

    const users = getUsers();
    const user = users.find(
      (u) => u.email === this.state.email && u.password === this.state.password
    );

    if (!user) {
      this.setState({ error: "Invalid credentials" });
      return;
    }

    this.context.setUser(user);
    this.props.onLoginSuccess();
  };

  render() {
    return (
      <Card>
        <h2 className="text-xl font-bold mb-3">Login</h2>
        {this.state.error && <p className="text-red-500">{this.state.error}</p>}
        <Input placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />
        <Input type="password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
        <Button onClick={this.handleSubmit}>Login</Button>
        <p className="mt-2 text-sm cursor-pointer" onClick={this.props.switchToSignup}>
          New user? Sign Up
        </p>
      </Card>
    );
  }
}

// ------------------ Payment Form ------------------
class PaymentForm extends React.Component {
  static contextType = AuthContext;

  state = { amount: 5000, method: "card" };

  handlePayment = () => {
    const { user } = this.context;

    const receipt = {
      transactionId: "TXN" + Math.floor(Math.random() * 1000000),
      date: new Date().toLocaleString(),
      amount: this.state.amount,
      method: this.state.method,
      name: user.name,
    };

    const payments = getPayments();
    payments.push(receipt);
    savePayments(payments);

    this.props.onPaymentSuccess(receipt);
  };

  render() {
    const { user } = this.context;

    return (
      <Card>
        <h2 className="text-xl font-bold mb-3">Fee Payment</h2>
        <div className="bg-gray-100 p-3 rounded-lg mb-3">
          <p><b>Name:</b> {user.name}</p>
          <p><b>Student ID:</b> {user.studentId}</p>
          <p><b>Grade:</b> {user.grade}</p>
        </div>

        <Input
          type="number"
          value={this.state.amount}
          onChange={(e) => this.setState({ amount: e.target.value })}
        />

        <select
          className="w-full border rounded-lg p-2 my-2"
          onChange={(e) => this.setState({ method: e.target.value })}
        >
          <option value="card">Card</option>
          <option value="bank">Bank Transfer</option>
        </select>

        <Button onClick={this.handlePayment}>Pay Now</Button>
      </Card>
    );
  }
}

// ------------------ Admin Dashboard ------------------
class AdminDashboard extends React.Component {
  render() {
    const payments = getPayments();

    return (
      <Card>
        <h2 className="text-xl font-bold mb-3">Admin Dashboard</h2>

        <table className="w-full border text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Student</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Method</th>
              <th className="border p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p, i) => (
              <tr key={i}>
                <td className="border p-2 text-center">{p.name}</td>
                <td className="border p-2 text-center">₹{p.amount}</td>
                <td className="border p-2 text-center">{p.method}</td>
                <td className="border p-2 text-center">{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Button onClick={this.props.logout}>Logout</Button>
      </Card>
    );
  }
}

// ------------------ Receipt ------------------
class Receipt extends React.Component {
  static contextType = AuthContext;

  render() {
    const { user } = this.context;
    const { data } = this.props;

    return (
      <Card>
        <h2 className="text-xl font-bold text-green-600 mb-3">Payment Successful ✅</h2>

        <div className="bg-gray-100 p-3 rounded-lg mb-3">
          <p><b>Student:</b> {user.name}</p>
          <p><b>Student ID:</b> {user.studentId}</p>
          <p><b>Grade:</b> {user.grade}</p>
        </div>

        <p><b>Amount Paid:</b> ₹{data.amount}</p>
        <p><b>Method:</b> {data.method}</p>
        <p><b>Date:</b> {data.date}</p>
        <p><b>Transaction ID:</b> {data.transactionId}</p>

        <Button onClick={this.props.restart}>Pay Again</Button>
      </Card>
    );
  }
}

// ------------------ Main App ------------------
class App extends React.Component {
  state = { view: "login", receipt: null };

  setView = (view) => this.setState({ view });
  setReceipt = (receipt) => this.setState({ receipt });

  render() {
    return (
      <AuthProvider>
        <div className="min-h-screen bg-gray-200 flex items-center justify-center">
          <div className="w-full max-w-md">

            {this.state.view === "admin" ? (
              <AdminDashboard logout={() => this.setView("login")} />
            ) : !this.state.receipt ? (
              this.state.view === "login" ? (
                <Login
                  switchToSignup={() => this.setView("signup")}
                  onLoginSuccess={() => this.setView("payment")}
                  onAdminLogin={() => this.setView("admin")}
                />
              ) : this.state.view === "signup" ? (
                <Signup switchToLogin={() => this.setView("login")} />
              ) : (
                <PaymentForm onPaymentSuccess={this.setReceipt} />
              )
            ) : (
              <Receipt data={this.state.receipt} restart={() => this.setReceipt(null)} />
            )}

          </div>
        </div>
      </AuthProvider>
    );
  }
}

export default App;