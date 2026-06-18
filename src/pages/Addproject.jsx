import { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { API_URL } from "../config";

function AddProject() {
  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [technologies, setTechnologies] =
    useState("");

  const [github, setGithub] =
    useState("");

  const [demo, setDemo] =
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
  "description",
  description
);

formData.append(
  "technologies",
  technologies
);

formData.append(
  "github",
  github
);

formData.append(
  "demo",
  demo
);

formData.append(
  "image",
  image
);

await axios.post(
  `${API_URL}/projects`,
  formData  
);

      alert("Project Added 🔥");
    } catch (error) {
  console.log(
    error.response.data
  );
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
          Add New Project
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
            placeholder="Title"
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
            style={inputStyle}
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            style={{
              ...inputStyle,
              height: "140px",
            }}
          />

          <input
            placeholder="React, Node"
            value={technologies}
            onChange={(e) =>
              setTechnologies(
                e.target.value
              )
            }
            style={inputStyle}
          />

          <input
            placeholder="Github URL"
            value={github}
            onChange={(e) =>
              setGithub(
                e.target.value
              )
            }
            style={inputStyle}
          />

          <input
            placeholder="Demo URL"
            value={demo}
            onChange={(e) =>
              setDemo(
                e.target.value
              )
            }
            style={inputStyle}
          />

  <input
  type="file"
  onChange={(e) =>
    setImage(e.target.files[0])
  }
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
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "18px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.05)",
  color: "white",
  outline: "none",
};

export default AddProject;
