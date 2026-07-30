import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function NotFound() {
  return (
    <div style={{ minHeight: "100vh", background: "#020617", color: "white" }}>
      <Navbar />

      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(6rem, 20vw, 10rem)",
            fontWeight: "bold",
            margin: 0,
            background: "linear-gradient(to right, #3b82f6, #9333ea)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1,
          }}
        >
          404
        </h1>

        <h2
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            marginTop: "20px",
            marginBottom: "16px",
          }}
        >
          Halaman Tidak Ditemukan
        </h2>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            maxWidth: "500px",
            lineHeight: 1.8,
            marginBottom: "40px",
          }}
        >
          Sepertinya halaman yang kamu cari tidak ada atau telah dipindahkan.
        </p>

        <Link
          to="/"
          style={{
            padding: "16px 32px",
            borderRadius: "14px",
            border: "none",
            background: "linear-gradient(to right, #3b82f6, #9333ea)",
            color: "white",
            fontSize: "1rem",
            cursor: "pointer",
            fontWeight: "bold",
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
          onMouseLeave={(e) => (e.target.style.opacity = "1")}
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
