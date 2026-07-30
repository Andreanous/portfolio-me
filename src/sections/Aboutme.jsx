import profileImage from "../assets/profile.jpeg";

function Aboutme() {
  return (
    <div
      style={{
        padding: "clamp(40px, 10vw, 140px) 20px",
        position: "relative",
        zIndex: 2,
      }}
    >
      <h1
        style={{
          fontSize: "52px",
          textAlign: "center",
          marginBottom: "80px",
          color: "white",
        }}
      >
        About Me
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "30px",
          alignItems: "center",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderRadius: "36px",
          padding: "30px",
          boxShadow: "0 20px 80px rgba(0,0,0,0.35)",
          transition: "0.4s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow = "0 30px 90px rgba(59,130,246,0.18)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0px)";
          e.currentTarget.style.boxShadow = "0 20px 80px rgba(0,0,0,0.35)";
        }}
      >
        {/* LEFT */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              position: "relative",
              padding: "14px",
              borderRadius: "34px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 20px 60px rgba(59,130,246,0.15)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "-12px",
                background: "linear-gradient(to right,#3b82f6,#9333ea)",
                borderRadius: "30px",
                filter: "blur(30px)",
                opacity: 0.5,
              }}
            />

            <img
              src={profileImage}
              alt="Profile"
              style={{
                width: "100%",
                maxWidth: "380px",
                borderRadius: "30px",
                objectFit: "cover",
                position: "relative",
                zIndex: 2,
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            />
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h2
            style={{
              fontSize: "clamp(2rem,5vw,3rem)",
              marginBottom: "24px",
              color: "white",
              lineHeight: 1.2,
            }}
          >
            Building with curiosity,
            <br />
            creativity, and purpose
          </h2>

          <p
            style={{
              color: "#a9a9a9",
              lineHeight: 1.9,
              fontSize: "17px",
              marginBottom: "40px",
            }}
          >
            Saya sedang dalam proses transisi dari pembelajaran mandiri ke pengalaman profesional
            di dunia pengembangan web. Selama ini saya mengerjakan berbagai project untuk memahami
            alur kerja full-stack, dari desain antarmuka sampai deployment. Saya terbuka untuk
            magang atau posisi entry-level.
          </p>

          {/* Tech Stack */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "40px",
            }}
          >
            {["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JavaScript", "Git", "REST API"].map((tech) => (
              <span
                key={tech}
                style={{
                  padding: "8px 16px",
                  borderRadius: "999px",
                  background: "rgba(59,130,246,0.15)",
                  border: "1px solid rgba(59,130,246,0.25)",
                  color: "#60a5fa",
                  fontSize: "14px",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gap: "20px",
            }}
          >
            {[
              {
                icon: "💻",
                title: "Lagi Dipelajari",
                desc: "Saat ini saya fokus mendalami React, Node.js, dan MongoDB, serta terus mencoba teknologi baru.",
              },
              {
                icon: "🛠️",
                title: "Yang Pernah Dibikin",
                desc: "Beberapa project yang sudah saya selesaikan: aplikasi CRUD, portfolio website, dan sistem manajemen sederhana.",
              },
              {
                icon: "🎯",
                title: "Target ke Depan",
                desc: "Saya ingin berkembang sebagai full-stack developer yang andal dan berkontribusi dalam tim engineering.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  gap: "18px",
                  padding: "20px",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,.04)",
                  border: "1px solid rgba(255,255,255,.08)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div style={{ fontSize: "28px", minWidth: "40px" }}>
                  {item.icon}
                </div>

                <div>
                  <h3 style={{ color: "white", marginBottom: "8px", fontSize: "18px" }}>
                    {item.title}
                  </h3>

                  <p style={{ color: "#94a3b8", lineHeight: 1.7, fontSize: "14px" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
