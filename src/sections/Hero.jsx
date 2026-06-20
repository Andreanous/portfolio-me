function Hero() {
    
{/* HERO SECTION */}
return (
        <div
          style={{
            minHeight: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            padding: "40px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <p
            style={{
              color: "#38bdf8",
              marginTop: "clamp(60px, 10vh, 100px)",
              marginBottom: "20px",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Fullstack Developer | Web Enthusiast
          </p>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 10vw, 5rem)",
              fontWeight: "bold",
              lineHeight: 1.1,
              maxWidth: "1000px",
              marginBottom: "30px",
            }}
          >
            Membangun Pengalaman Digital <br />
            <span
              style={{
                background:
                  "linear-gradient(to right, #38bdf8, #9333ea)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {" "}
              Modern & Skalabel{" "}
            </span>
          </h1>

          <p
            style={{
              maxWidth: "700px",
              fontSize: "clamp(1rem, 3vw, 1.25rem)",
              color: "#ffffff",
              lineHeight: 1.8,
              marginBottom: "40px",
            }}
          >
            Saya adalah pengembang web yang antusias dalam mengubah ide kreatif menjadi aplikasi yang fungsional, efisien, dan berdampak nyata.
          </p>


                    {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center", // Memastikan tombol di tengah
            }}
          >
            <button
              style={{
                padding: "16px 32px",
                borderRadius: "14px",
                border: "none",
                background:
                  "linear-gradient(to right, #3b82f6, #9333ea)",
                color: "white",
                fontSize: "clamp(0.9rem, 2vw, 1rem)", // Font mengecil di HP
                cursor: "pointer",
                fontWeight: "bold",
                minWidth: "160px", // Memastikan tombol punya ukuran minimum
              }}
            >
              Explore Projects
            </button>

            <button
              style={{
                padding: "16px 32px",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "transparent",
                color: "white",
                fontSize: "clamp(0.9rem, 2vw, 1rem)", // Font mengecil di HP
                cursor: "pointer",
                backdropFilter: "blur(10px)",
                minWidth: "160px",
              }}
            >
              Contact Me
            </button>
          </div>
        </div>
)
}

export default Hero;