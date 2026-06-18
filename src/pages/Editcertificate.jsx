import {
  useParams,
  useNavigate,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

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

  // FETCH CERTIFICATE
  const fetchCertificate = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/certificates/${id}`
      );

      setTitle(res.data.title || "");
      setIssuer(res.data.issuer || "");
      setDate(res.data.date || "");
      setCredential(res.data.credential || "");
      setSkills(Array.isArray(res.data.skills) ? res.data.skills.join(", ") : (res.data.skills || ""));
    } catch (error) {
      console.log("Error fetching certificate:", error);
    }
  };

  useEffect(() => {
    fetchCertificate();
  }, [id]);

  // UPDATE CERTIFICATE
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

      await axios.put(
        `${API_URL}/certificates/${id}`,
        formData
      );

      alert("Certificate Updated 🔥");
      navigate("/certifications");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
      }}
    >
      <Sidebar />

      <div
        style={{
          marginLeft: "260px",
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            marginBottom: "40px",
          }}
        >
          Edit Certificate
        </h1>

        <form
          onSubmit={handleUpdate}
          style={{
            maxWidth: "700px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Certificate Title"
            style={inputStyle}
          />

          <input
            value={issuer}
            onChange={(e) => setIssuer(e.target.value)}
            placeholder="Issuer"
            style={inputStyle}
          />

          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Date"
            style={inputStyle}
          />

          <input
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            placeholder="Credential URL"
            style={inputStyle}
          />

          <input
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Skills (comma separated)"
            style={inputStyle}
          />

          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            style={{ color: "white" }}
          />

          <button
            type="submit"
            style={{
              padding: "16px",
              border: "none",
              borderRadius: "14px",
              background:
                "linear-gradient(to right, #3b82f6, #9333ea)",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Update Certificate
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "16px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.05)",
  color: "white",
  outline: "none",
};

export default EditCertificate;
