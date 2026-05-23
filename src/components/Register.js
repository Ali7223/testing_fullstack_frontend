import { useState } from "react";
import api from "../api/usersApi";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ frontend validation first
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await api.post("/register", {
        username,
        password,
      });

      setMessage("User registered successfully!");

      console.log(response.data);

      setUsername("");
      setPassword("");
      setConfirmPassword("");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      if (err.response?.status === 409) {
        setMessage("User already exists");
      } else if (err.response?.status === 400) {
        setMessage("Username and password are required");
      } else {
        setMessage("Registration failed");
      }

      console.error(err);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Register</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            style={styles.input}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            style={styles.input}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button style={styles.button} type="submit">
            Register
          </button>
        </form>

        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #4facfe, #00f2fe)",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "320px",
    padding: "25px",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    textAlign: "center",
  },

  title: {
    marginBottom: "20px",
    color: "#333",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
  },

  button: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#0077ff",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },

  message: {
    marginTop: "15px",
    fontSize: "14px",
    color: "red",
  },
};

export default Register;