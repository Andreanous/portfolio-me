function CertificateCard({
  certificate,
}) {
  return (
    <div
      style={{
        background:
          "rgba(255,255,255,0.05)",
        border:
          "1px solid rgba(255,255,255,0.1)",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <img
        src={certificate.image}
        alt={certificate.title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "24px" }}>
        <h2>{certificate.title}</h2>

        <p>{certificate.description}</p>
      </div>
    </div>
  );
}

export default CertificateCard;