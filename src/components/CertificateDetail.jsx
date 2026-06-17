import { useState } from "react";

function CertificateDetail({ certificate }) {
  const [previewOpen, setPreviewOpen] =
    useState(false);

  return (
    <>
      <div
        className="certificate-card"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "24px",
          overflow: "hidden",
          backdropFilter: "blur(20px)",
          transition: "all .4s ease",
        }}
      >
        {/* IMAGE */}
        <div
          style={{
            padding: "20px 20px 0",
          }}
        >
          <img
            src={certificate.image}
            alt={certificate.title}
            onClick={() => setPreviewOpen(true)}
            style={{
              width: "100%",
              height: "280px",
              objectFit: "cover",
              borderRadius: "20px",
              display: "block",
              cursor: "pointer",
              transition: "transform .6s ease",
            }}
          />
        </div>

        {/* CONTENT */}
        <div
          style={{
            padding: "24px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "6px 14px",
              borderRadius: "999px",
              background:
                "rgba(56,189,248,.12)",
              border:
                "1px solid rgba(56,189,248,.15)",
              color: "#38bdf8",
              fontSize: "12px",
              fontWeight: "600",
              marginBottom: "16px",
            }}
          >
            Certification
          </div>

          <h2
            style={{
              color: "white",
              fontSize: "26px",
              lineHeight: 1.3,
              marginBottom: "14px",
            }}
          >
            {certificate.title}
          </h2>

          <p
            style={{
              color: "#94a3b8",
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            {certificate.description}
          </p>

          {/* DETAILS */}
          <div
            style={{
              display: "grid",
              gap: "14px",
              marginBottom: "24px",
            }}
          >
            <div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  }}
>
  <div
    style={{
      color: "#cbd5e1",
      fontSize: "14px",
    }}
  >
    <span
      style={{
        color: "#6fdbff",
        marginRight: "8px",
      }}
    >
      Issuer:
    </span>

    <span
      style={{
        color: "white",
        fontWeight: "500",
      }}
    >
      {certificate.issuer || "Coursera"}
    </span>
  </div>

  <div
    style={{
      color: "#cbd5e1",
      fontSize: "14px",
    }}
  >
    <span
      style={{
        color: "#6fdbff",
        marginRight: "8px",
      }}
    >
      Date:
    </span>

    <span
      style={{
        color: "white",
        fontWeight: "500",
      }}
    >
      {certificate.date || "2025"}
    </span>
  </div>
</div>

            <div
              style={{
                color: "#cbd5e1",
                fontSize: "14px",
              }}
            >
              <div
                style={{
                  marginBottom: "10px",
                }}
              >
                Skills
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {(certificate.skills || [])
                  .length > 0 ? (
                  certificate.skills.map(
                    (skill) => (
                      <span
                        key={skill}
                        style={{
                          padding:
                            "6px 12px",
                          borderRadius:
                            "999px",
                          background:
                            "rgba(56,189,248,.12)",
                          color:
                            "#38bdf8",
                          fontSize:
                            "12px",
                        }}
                      >
                        {skill}
                      </span>
                    )
                  )
                ) : (
                  <span
                    style={{
                      color:
                        "#94a3b8",
                    }}
                  >
                    No skills listed
                  </span>
                )}
              </div>  
            </div>
          </div>

          {/* BUTTON */}
          {certificate.link && (
            <a
              href={certificate.link}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                padding: "14px",
                borderRadius: "14px",
                background:
                  "linear-gradient(135deg,#3b82f6,#9333ea)",
                color: "white",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              View Certificate
            </a>
          )}
        </div>
      </div>

      {/* IMAGE PREVIEW */}
      {previewOpen && (
        <div
          onClick={() =>
            setPreviewOpen(false)
          }
          style={{
            position: "fixed",
            inset: 0,
            background:
              "rgba(0,0,0,.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "30px",
            cursor: "zoom-out",
          }}
        >
          <img
            src={certificate.image}
            alt={certificate.title}
            onClick={(e) =>
              e.stopPropagation()
            }
            style={{
              maxWidth: "95%",
              maxHeight: "90vh",
              borderRadius: "20px",
              boxShadow:
                "0 30px 100px rgba(0,0,0,.6)",
            }}
          />
        </div>
      )}

      <style>
        {`
          .certificate-card:hover{
            transform:translateY(-10px);
            box-shadow:0 25px 60px rgba(59,130,246,.18);
          }

          .certificate-card:hover img{
            transform:scale(1.08);
          }
        `}
      </style>
    </>
  );
}

export default CertificateDetail;