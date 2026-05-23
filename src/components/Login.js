import { useContext, useState } from "react";
import AuthContext from "../authentication/AuthContext";
import api from "../api/usersApi";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setAuth } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/login", {
        username,
        password
      });

      const accessToken = res?.data?.accessToken;
      const roles = res?.data?.roles;
      console.log("Login response data:", res.data);
      
      setAuth({ username, roles, accessToken });
      setUsername("");
      setPassword("");
      setError("");
    } catch (error) {
      if (error?.response?.status === 400) {
        setError("Invalid username or password");
      }else if (error?.response?.status === 401) {
        setError("Unauthorized please check your credentials");
      }else {
        setError("Login failed");
        console.error("Login error:", error);
      }
  
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>

        <form onSubmit={handleLogin} style={styles.form}>
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

          <button style={styles.button} type="submit">
            Login
          </button>
        </form>

        {error && <p style={styles.error}>{error}</p>}
      </div>
    </div>
  );
}

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

  error: {
    marginTop: "15px",
    color: "red",
    fontSize: "14px",
  },
};

export default Login;