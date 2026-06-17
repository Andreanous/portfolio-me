import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  const socials = [
    {
      name: "Github",
      username: "github.com/yourgithub",
      link: "https://github.com",
      icon: <FaGithub />,
    },

    {
      name: "Instagram",
      username: "@adrianfdllh",
      link: "https://www.instagram.com/adrianfdllh/",
      icon: <FaInstagram />,
    },

    {
      name: "LinkedIn",
      username: "linkedin.com/in/yourlinkedin",
      link: "https://linkedin.com",
      icon: <FaLinkedin />,
    },

    {
      name: "WhatsApp",
      username: "+62 85718134745",
      link: "https://wa.me/6285718134745",
      icon: <FaWhatsapp />,
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
<div
  style={{
    textAlign: "center",
    marginBottom: "80px",
    position: "relative",
    zIndex: 2,
  }}
>
  {/* SMALL LABEL */}

  <p
  style={{
    color: "#38bdf8",
    letterSpacing: "3px",
    textTransform: "uppercase",
    marginBottom: "20px",
  }}
>
  Hubungi Saya
</p>

  <h1
  style={{
    fontSize: "clamp(3rem,8vw,5rem)",
    lineHeight: 1.1,
    fontWeight: "800",

    background:
      "linear-gradient(to right,#ffffff,#94a3b8)",

    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",

    marginBottom: "24px",
  }}
>
  Mari Berkolaborasi
  <br />
  & Tumbuh Bersama
</h1>

  {/* GLOW LINE */}
  <div
    style={{
      width: "120px",
      height: "4px",

      margin: "0 auto 30px auto",

      background:
        "linear-gradient(to right,#3b82f6,#9333ea)",

      borderRadius: "999px",

      boxShadow:
        "0 0 25px rgba(59,130,246,0.6)",
    }}
  />

  {/* DESCRIPTION */}
  <p
    style={{
      color: "#f5f5f5",

      maxWidth: "720px",

      margin: "0 auto",

      lineHeight: 1.9,

      fontSize: "17px",

      letterSpacing: "0.3px",
    }}
  >
    Saya sangat terbuka untuk berdiskusi mengenai peluang magang, kolaborasi proyek, atau sekadar berbagi wawasan di dunia pengembangan perangkat lunak. Jangan ragu untuk menghubungi saya melalui platform di bawah ini.
  </p>
</div>
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit,minmax(260px,1fr))",

          gap: "24px",
        }}
      >
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            <div
              style={{
                background:
                  "rgba(15,23,42,0.75)",

                border:
                  "1px solid rgba(255,255,255,0.06)",

                borderRadius: "24px",

                padding: "28px",

                backdropFilter: "blur(14px)",

                transition: "0.35s",

                display: "flex",

                alignItems: "center",

                gap: "20px",

                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.25)",
              }}

              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-6px)";

                e.currentTarget.style.border =
                  "1px solid rgba(59,130,246,0.25)";

                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(59,130,246,0.12)";
              }}

              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0px)";

                e.currentTarget.style.border =
                  "1px solid rgba(255,255,255,0.06)";

                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0,0,0,0.25)";
              }}
            >
              <div
                style={{
                  width: "58px",
                  height: "58px",

                  borderRadius: "18px",

                  background:
                    "rgba(255,255,255,0.04)",

                  border:
                    "1px solid rgba(255,255,255,0.05)",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  color: "white",

                  fontSize: "24px",

                  flexShrink: 0,
                }}
              >
                {social.icon}
              </div>

              <div>
                <h2
                  style={{
                    color: "white",
                    fontSize: "20px",
                    marginBottom: "6px",
                    fontWeight: "600",
                  }}
                >
                  {social.name}
                </h2>

                <p
                  style={{
                    color: "#64748b",
                    fontSize: "15px",
                    lineHeight: 1.6,
                  }}
                >
                  {social.username}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;