import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { API_URL } from "../config";

function EditCertificate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [issuer, setIssuer] = useState("");
  const [date, setDate] = useState("");
  const [credential, setCredential] = useState("");
  const [skills, setSkills] = useState("");
  const [image, setImage] = useState(null);

  // FETCH CERTIFICATE (Mengambil semua, lalu cari berdasarkan ID di frontend)
  const fetchCertificate = async () => {
    try {
      const res = await axios.get(`${API_URL}/certificates`);
      // res.data biasanya berisi array sertifikat
      const certificate = res.data.find((cert) => cert._id === id);

      if (certificate) {
        setTitle(certificate.title || "");
        setIssuer(certificate.issuer || "");
        setDate(certificate.date || "");
        setCredential(certificate.credential || "");
        setSkills(Array.isArray(certificate.skills) ? certificate.skills.join(", ") : (certificate.skills || ""));
      }
    } catch (error) {
      console.log("Error fetching certificate:", error);
    }
  };

  useEffect(() => {
    fetchCertificate();
  }, [id]);

  // UPDATE CERTIFICATE (PENTING: Pastikan URL PUT Anda sesuai dengan dokumentasi backend Anda)
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("issuer", issuer);
      formData.append("date", date);
      formData.append("credential", credential);
      formData.append("skills", skills);

      if (image) {
        formData.append("image", image);
      }

      // NOTE: Jika backend Anda tidak memiliki endpoint PUT /certificates/:id,
      // Anda mungkin perlu menanyakan pada pembuat backend endpoint yang benar.
      await axios.put(`${API_URL}/certificates/${id}`, formData);

      alert("Certificate Updated 🔥");
      navigate("/dashboard");
    } catch (error) {
      console.error("Update error:", error);
      alert("Gagal update. Pastikan backend memiliki endpoint PUT /certificates/:id");
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#020617", color: "white" }}>
      <Sidebar />
      <div style={{ marginLeft: "260px", padding: "40px" }}>
        <h1 style={{ fontSize: "40px", marginBottom: "40px" }}>Edit Certificate</h1>
        <form onSubmit={handleUpdate} style={{ maxWidth: "700px", display: "flex", flexDirection: "column", gap: "20px" }}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Certificate Title" style={inputStyle} />
          <input value={issuer} onChange={(e) => setIssuer(e.target.value)} placeholder="Issuer" style={inputStyle} />
          <input value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" style={inputStyle} />
          <input value={credential} onChange={(e) => setCredential(e.target.value)} placeholder="Credential URL" style={inputStyle} />
          <input value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="Skills (comma separated)" style={inputStyle} />
          <input type="file" onChange={(e) => setImage(e.target.files[0])} style={{ color: "white" }} />
          <button type="submit" style={buttonStyle}>Update Certificate</button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = { padding: "16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "white", outline: "none" };
const buttonStyle = { padding: "16px", border: "none", borderRadius: "14px", background: "linear-gradient(to right, #3b82f6, #9333ea)", color: "white", cursor: "pointer", fontWeight: "bold" };

export default EditCertificate;
