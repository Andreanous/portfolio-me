import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { API_URL } from "../config";

function Login() {
  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/login`, {
        username,
        password,
      });

      // Simpan token di localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("isAdmin", "true");

      navigate("/dashboard");
    } catch (error) {
      alert("Login gagal: " + (error.response?.data?.message || "Password salah"));
    }
  };

  return (
 <>
    <Navbar />

    <div
      style={{
        minHeight: "90vh",
        background: "#020617",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "80px",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          width: "400px",
          padding: "40px",
          borderRadius: "20px",
          background:
            "rgba(255,255,255,0.05)",
          backdropFilter: "blur(10px)",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          Admin Login
        </h1>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            padding: "16px",
            border: "none",
            borderRadius: "12px",
            background:
              "linear-gradient(to right,#3b82f6,#9333ea)",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Login
        </button>
      </form>
    </div>
  </>
  );
}

const inputStyle = {
  padding: "16px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.05)",
  color: "white",
  outline: "none",
};

export default Login;
