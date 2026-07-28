import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { API_URL } from "../config";

function Admin() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [github, setGithub] = useState("");
  const [demo, setDemo] = useState("");

  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const res = await axios.get(`${API_URL}/projects`);
      setProjects(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const [editingId, setEditingId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await axios.put(`${API_URL}/projects/${editingId}`, {
          title,
          description,
          technologies: technologies.split(","),
          github,
          demo,
        });

        alert("Project Updated 🔥");
        setEditingId(null);
      } else {
        await axios.post(`${API_URL}/projects`, {
          title,
          description,
          technologies: technologies.split(","),
          github,
          demo,
        });

        alert("Project Added 🔥");
      }

      fetchProjects();

      setTitle("");
      setDescription("");
      setTechnologies("");
      setGithub("");
      setDemo("");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProject = async (id) => {
    try {
      await axios.delete(`${API_URL}/projects/${id}`);
      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  const editProject = (project) => {
    setEditingId(project._id);
    setTitle(project.title);
    setDescription(project.description);
    setTechnologies(project.technologies.join(","));
    setGithub(project.github);
    setDemo(project.demo);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#020617", color: "white" }}>
      <Navbar />

      <div className="admin-content">
        <h1 style={{ fontSize: "50px", marginBottom: "40px" }}>
          Admin Dashboard
        </h1>

        <form onSubmit={handleSubmit} className="admin-form">
          <input type="text" placeholder="Project Title" value={title} onChange={(e) => setTitle(e.target.value)} className="admin-input" />

          <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="admin-input admin-textarea" />

          <input type="text" placeholder="React, Node, MongoDB" value={technologies} onChange={(e) => setTechnologies(e.target.value)} className="admin-input" />

          <input type="text" placeholder="Github URL" value={github} onChange={(e) => setGithub(e.target.value)} className="admin-input" />

          <input type="text" placeholder="Demo URL" value={demo} onChange={(e) => setDemo(e.target.value)} className="admin-input" />

          <button type="submit" className="btn-submit">
            {editingId ? "Update Project" : "Add Project"}
          </button>
        </form>

        <div style={{ marginTop: "60px" }}>
          <h2 style={{ marginBottom: "30px", fontSize: "32px" }}>
            Manage Projects
          </h2>

          <div className="project-list">
            {projects.map((project) => (
              <div key={project._id} className="project-card">
                <h3>{project.title}</h3>
                <p style={{ color: "#94a3b8" }}>{project.description}</p>

                <div className="project-actions">
                  <button className="btn-delete" onClick={() => deleteProject(project._id)}>
                    Delete
                  </button>
                  <button className="btn-admin-edit" onClick={() => editProject(project)}>
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .admin-content {
          max-width: 700px;
          margin: 0 auto;
          padding: 100px 20px 60px;
        }

        .admin-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .admin-input {
          padding: 18px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          color: white;
          font-size: 16px;
          outline: none;
        }

        .admin-input:focus {
          border-color: #3b82f6;
        }

        .admin-textarea {
          height: 120px;
          resize: vertical;
        }

        .btn-submit {
          padding: 18px;
          border: none;
          border-radius: 16px;
          background: linear-gradient(to right, #3b82f6, #9333ea);
          color: white;
          font-size: 18px;
          cursor: pointer;
          font-weight: bold;
          transition: opacity 0.2s;
        }

        .btn-submit:hover {
          opacity: 0.9;
        }

        .project-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .project-card {
          padding: 20px;
          border-radius: 20px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .project-card:hover {
          background: rgba(255,255,255,0.08);
        }

        .project-actions {
          margin-top: 20px;
          display: flex;
          gap: 10px;
        }

        .btn-delete {
          padding: 12px 20px;
          border: none;
          border-radius: 12px;
          background: #ef4444;
          color: white;
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .btn-delete:hover {
          opacity: 0.8;
        }

        .btn-admin-edit {
          padding: 12px 20px;
          border: none;
          border-radius: 12px;
          background: #3b82f6;
          color: white;
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .btn-admin-edit:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}

export default Admin;
