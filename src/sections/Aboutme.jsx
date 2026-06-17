import profileImage from "../assets/profile.jpeg";

function Aboutme() {
  const skills = [
    {
      name: "Frontend Development",
      percent: 90,
    },
    {
      name: "Backend Development",
      percent: 82,
    },
    {
      name: "UI/UX Design",
      percent: 75,
    },
    {
      name: "Database Management",
      percent: 80,
    },
  ];

  return (
    <div
      style={{
        padding: "140px 40px",
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
    gridTemplateColumns:
      "repeat(auto-fit,minmax(320px,1fr))",
    gap: "70px",
    alignItems: "center",

    background:
      "rgba(255,255,255,0.05)",

    border:
      "1px solid rgba(255,255,255,0.08)",

    backdropFilter: "blur(18px)",

    WebkitBackdropFilter:
      "blur(18px)",

    borderRadius: "36px",

    padding: "60px",

    boxShadow:
      "0 20px 80px rgba(0,0,0,0.35)",
      
      transition: "0.4s",
  }}
  onMouseEnter={(e) => {
  e.currentTarget.style.transform =
    "translateY(-8px)";

  e.currentTarget.style.boxShadow =
    "0 30px 90px rgba(59,130,246,0.18)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform =
    "translateY(0px)";

  e.currentTarget.style.boxShadow =
    "0 20px 80px rgba(0,0,0,0.35)";
}}
>

    
        {/* LEFT */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
  style={{
    position: "relative",

    padding: "14px",

    borderRadius: "34px",

    background:
      "rgba(255,255,255,0.04)",

    border:
      "1px solid rgba(255,255,255,0.08)",

    backdropFilter: "blur(16px)",

    boxShadow:
      "0 20px 60px rgba(59,130,246,0.15)",
  }}
>
            <div
              style={{
                position: "absolute",
                inset: "-12px",
                background:
                  "linear-gradient(to right,#3b82f6,#9333ea)",
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
                border:
                  "1px solid rgba(255,255,255,0.1)",
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
    Sebagai seorang pengembang, saya selalu antusias untuk mempelajari teknologi baru dan menerapkan solusi yang efisien. Saya sedang mencari peluang magang untuk mengasah kemampuan saya dalam pengembangan web full-stack, berkontribusi dalam tim, serta membangun aplikasi yang memberikan solusi nyata bagi pengguna.
  </p>

  <div
    style={{
      display: "grid",
      gap: "20px",
    }}
  >
    {[
      {
        icon: "🚀",
        title: "Pembelajar Cepat",
        desc: "Selalu mengeksplorasi teknologi modern dan praktik pengembangan terbaru.",
      },
      {
        icon: "🎨",
        title: "Berorientasi Desain",
        desc: "Menciptakan antarmuka yang menyeimbangkan estetika, kemudahan penggunaan, dan performa.",
      },
      {
        icon: "⚙️",
        title: "Pemecah Masalah",
        desc: "Menguraikan tantangan kompleks menjadi solusi yang praktis dan terukur.",
      },
      {
        icon: "🌍",
        title: "Berorientasi Dampak",
        desc: "Membangun aplikasi yang memberikan nilai nyata bagi pengguna dan organisasi.",
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
        <div
          style={{
            fontSize: "28px",
            minWidth: "40px",
          }}
        >
          {item.icon}
        </div>

        <div>
          <h3
            style={{
              color: "white",
              marginBottom: "8px",
              fontSize: "18px",
            }}
          >
            {item.title}
          </h3>

          <p
            style={{
              color: "#94a3b8",
              lineHeight: 1.7,
              fontSize: "14px",
            }}
          >
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