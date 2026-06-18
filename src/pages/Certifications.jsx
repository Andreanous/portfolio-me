import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CertificateDetail from "../components/CertificateDetail";

function Certificates() {

  const [selectedCertificate,
setSelectedCertificate] = useState(null);

  const [certificates, setCertificates] = useState([]);

  const fetchCertificates = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/certificates`
      );

      setCertificates(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <Navbar />

     {/* HERO */}
<section
  style={{
    padding: "120px clamp(20px,5vw,80px)",
    textAlign: "center",
  }}
>
  <p
    style={{
      color: "#38bdf8",
      marginBottom: "20px",
      letterSpacing: "3px",
      textTransform: "uppercase",
    }}
  >
    Pencapaian & Pembelajaran
  </p>

  <h1
    style={{
      fontSize: "clamp(3rem, 8vw, 5rem)",
      fontWeight: "bold",
      lineHeight: 1.1,
      maxWidth: "1000px",
      margin: "0 auto 30px",
      color: "white",
    }}
  >
    Pengembangan
    <span
      style={{
        background:
          "linear-gradient(to right, #38bdf8, #9333ea)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {" "}
      Berkelanjutan{" "}
    </span>
    melalui belajar
  </h1>

  <p
    style={{
      maxWidth: "700px",
      margin: "0 auto",
      fontSize: "clamp(16px, 2vw, 20px)",
      color: "#ffffff",
      lineHeight: 1.8,
    }}
  >
    Jelajahi sertifikasi, pelatihan profesional, dan pencapaian edukasi yang menunjukkan komitmen saya terhadap pembelajaran berkelanjutan, teknologi modern, dan keunggulan dalam pengembangan perangkat lunak.
  </p>
</section>

      {/* STATS */}
      <section
        style={{
          padding: "0 80px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: " rgba(255, 255, 255, 0.12)",
              border: "1px solid rgba(255,255,255,.08)",
              padding: "25px 40px",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                color: "#38bdf8",
                fontSize: "42px",
                margin: 0,
              }}
            >
              {certificates.length}
            </h2>

            <p
              style={{
                color: "#94a3b8",
                marginTop: "8px",
              }}
            >
              Sertifikat
            </p>
          </div>
        </div>
      </section>

      {/* CERTIFICATE GRID */}
      <section
        style={{
          padding: "0 80px 100px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {certificates.map((certificate) => (
            <CertificateDetail
             certificate={certificate}
            onPreview={() => setSelectedCertificate(certificate)}
              key={certificate._id}
            />
            
            
          ))}
          
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Certificates;
