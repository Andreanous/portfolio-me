import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { API_URL } from "../config";

function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [github, setGithub] = useState("");
  const [demo, setDemo] = useState("");
  const [image, setImage] = useState(null);

  const fetchProject = async () => {
    try {
      const res = await axios.get(`${API_URL}/projects/${id}`);
      const project = res.data;
      setTitle(project.title || "");
      setDescription(project.description || "");
      setTechnologies(Array.isArray(project.technologies) ? project.technologies.join(", ") : (project.technologies || ""));
      setGithub(project.github || "");
      setDemo(project.demo || "");
    } catch (error) {
      console.log("Error fetching project:", error);
    }
  };

  useEffect(() => {
    fetchProject();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("technologies", technologies);
      formData.append("github", github);
      formData.append("demo", demo);

      if (image) {
        formData.append("image", image);
      }

      await axios.put(`${API_URL}/projects/${id}`, formData);

      alert("Project Updated 🔥");
      navigate("/dashboard");
    } catch (error) {
      console.error("Update error:", error);
      alert("Gagal update. Pastikan backend memiliki endpoint PUT /projects/:id");
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#020617", color: "white" }}>
      <Sidebar />
      <div style={{ marginLeft: "260px", padding: "40px" }}>
        <h1 style={{ fontSize: "40px", marginBottom: "40px" }}>Edit Project</h1>
        <form onSubmit={handleUpdate} style={{ maxWidth: "700px", display: "flex", flexDirection: "column", gap: "20px" }}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Project Title" style={inputStyle} />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" style={{ ...inputStyle, height: "120px" }} />
          <input value={technologies} onChange={(e) => setTechnologies(e.target.value)} placeholder="Technologies (comma separated)" style={inputStyle} />
          <input value={github} onChange={(e) => setGithub(e.target.value)} placeholder="Github URL" style={inputStyle} />
          <input value={demo} onChange={(e) => setDemo(e.target.value)} placeholder="Demo URL" style={inputStyle} />
          <input type="file" onChange={(e) => setImage(e.target.files[0])} style={{ color: "white" }} />
          <button type="submit" style={buttonStyle}>Update Project</button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = { padding: "16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "white", outline: "none" };
const buttonStyle = { padding: "16px", border: "none", borderRadius: "14px", background: "linear-gradient(to right, #3b82f6, #9333ea)", color: "white", cursor: "pointer", fontWeight: "bold" };

export default EditProject;
