import { Link } from "react-router-dom";
import CertificateCard from "../components/CertificateCard";

function Certification({ certificates }) {
  return (
    <div
      style={{
        padding: "120px 0",
        position: "relative",
        zIndex: 2,
        overflow: "hidden",
      }}
    >
      <h1
        style={{
          fontSize: "50px",
          marginBottom: "70px",
          textAlign: "center",
          color: "white",
        }}
      >
        Sertifikasi
      </h1>

      <div
        style={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "30px",
            width: "max-content",
            animation:
              "certificateSlider 40s linear infinite",
          }}
        >
          {[...certificates, ...certificates]
            .slice(0, 6)
            .map((certificate, index) => (
              <div
                key={index}
                className="certificate-item"
                style={{
  position: "relative",
  minWidth: "360px",
  height: "240px",
  borderRadius: "28px",
  overflow: "hidden",
  cursor: "pointer",

  border:
    "1px solid rgba(255,255,255,0.08)",

  background:
    "rgba(255,255,255,0.04)",

  backdropFilter: "blur(12px)",

  transition: "0.5s",

  boxShadow:
    "0 10px 40px rgba(0,0,0,0.35)",
}}
              >
                <img    
                  src={certificate.image}
                  alt={certificate.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "0.6s",
                  }}
                />

                <div className="certificate-overlay">
                  <h2>{certificate.title}</h2>

                  <p>
                    {certificate.skills?.join(
                      " • "
                    )}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "40px",
    marginTop: "50px",
    flexWrap: "wrap",
  }}
>
  <p
  style={{
    maxWidth: "700px",
    color: "#ffffff",
    lineHeight: 1.8,
    fontSize: "clamp(15px, 2vw, 18px)",
    padding: "0 20px",
  }}
>
  Sertifikasi ini mencerminkan dedikasi saya untuk terus berkembang di dunia teknologi, rekayasa perangkat lunak, dan inovasi digital. Hal ini merupakan bukti pengalaman praktis, keahlian yang tervalidasi, serta upaya saya dalam mengejar keunggulan melalui program pembelajaran dan pelatihan standar industri.
</p>

  <Link
    to="/certifications"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "16px 28px",
      borderRadius: "999px",
      background:
        "linear-gradient(135deg, #3b82f6 0%, #9333ea 100%)",
      color: "#fff",
      textDecoration: "none",
      fontWeight: "600",
      letterSpacing: "0.5px",
      boxShadow: "0 10px 30px rgba(147,51,234,.35)",
      transition: "all .3s ease",
      whiteSpace: "nowrap",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow =
        "0 15px 40px rgba(147,51,234,.45)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow =
        "0 10px 30px rgba(147,51,234,.35)";
    }}
  >
    Lihat Semua Sertifikasi
    <span
      style={{
        fontSize: "1.2rem",
        transition: "transform .3s ease",
      }}
    >
      →
    </span>
  </Link>
</div>

      <style>
  {`
    @keyframes certificateSlider {
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(-50%);
      }
    }

    .certificate-item:hover {
  transform: translateY(-10px);

  box-shadow:
    0 25px 70px rgba(0,0,0,.55),
    0 0 40px rgba(139,92,246,.15);

  border:
    1px solid rgba(139,92,246,.35);
}

    .certificate-item:hover img {
      transform: scale(1.08);
       filter: brightness(0.45);
    }

    .certificate-item::after {
  content: "";
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      to top,
      rgba(2,6,23,0.98) 0%,
      rgba(15,23,42,0.90) 40%,
      rgba(15,23,42,0.55) 70%,
      rgba(0,0,0,0.15) 100%
    );

  opacity: 0;
  transition: all .5s ease;
}

    .certificate-item:hover::after {
      opacity: 1;
    }

    .certificate-overlay {
      position: absolute;
      inset: 0;

      display: flex;
      flex-direction: column;
      justify-content: end;

      padding: 28px;

      opacity: 0;

      transition: 0.5s;

      z-index: 2;

      transform: translateY(20px);
    }

    .certificate-item:hover .certificate-overlay {
      opacity: 1;
      transform: translateY(0);
    }

    .certificate-overlay h2 {
  color: white;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 10px;

  text-shadow:
    0 4px 20px rgba(0,0,0,.8);
}

    .certificate-overlay p {
  color: #e2e8f0;
  line-height: 1.7;
  font-size: 15px;

  text-shadow:
    0 2px 10px rgba(0,0,0,.8);
}
  `}
</style>
    </div>
  );
}

export default Certification;