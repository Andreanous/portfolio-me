import { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { API_URL } from "../config";

function AddCertificate() {
  const [title, setTitle] =
    useState("");

  const [issuer, setIssuer] =
    useState("");

  const [date, setDate] =
    useState("");

  const [credential, setCredential] =
    useState("");

  const [skills, setSkills] =
    useState("");

  const [image, setImage] =
    useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData =
        new FormData();

      formData.append(
        "title",
        title
      );

      formData.append(
        "issuer",
        issuer
      );

      formData.append(
        "date",
        date
      );

      formData.append(
        "credential",
        credential
      );

      formData.append(
        "skills",
        skills
      );

      formData.append(
        "image",
        image
      );

      await axios.post(
        `${API_URL}/certificates`,
        formData
      );

      alert(
        "Certificate Added 🔥"
      );

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
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
          Add Certificate
        </h1>

        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "700px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <input
            placeholder="Certificate Title"
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
            style={inputStyle}
          />

          <input
            placeholder="Issuer"
            value={issuer}
            onChange={(e) =>
              setIssuer(
                e.target.value
              )
            }
            style={inputStyle}
          />

          <input
            placeholder="Date"
            value={date}
            onChange={(e) =>
              setDate(
                e.target.value
              )
            }
            style={inputStyle}
          />

          <input
            placeholder="Credential URL"
            value={credential}
            onChange={(e) =>
              setCredential(
                e.target.value
              )
            }
            style={inputStyle}
          />

          <input
            placeholder="React, Node, UI/UX"
            value={skills}
            onChange={(e) =>
              setSkills(
                e.target.value
              )
            }
            style={inputStyle}
          />

          <input
            type="file"
            onChange={(e) =>
              setImage(
                e.target.files[0]
              )
            }
            style={{
              color: "white",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "18px",
              border: "none",
              borderRadius: "14px",
              background:
                "linear-gradient(to right, #3b82f6, #9333ea)",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Add Certificate
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "18px",
  borderRadius: "14px",
  border:
    "1px solid rgba(255,255,255,0.1)",
  background:
    "rgba(255,255,255,0.05)",
  color: "white",
  outline: "none",
};

export default AddCertificate;
