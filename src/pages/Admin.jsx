import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Admin() {
  // FORM STATES
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  const [technologies, setTechnologies] =
    useState("");

  const [github, setGithub] = useState("");

  const [demo, setDemo] = useState("");

  // PROJECT STATE
  const [projects, setProjects] = useState([]);

  // FETCH PROJECTS
  const fetchProjects = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/projects"
      );

      setProjects(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // LOAD PROJECTS
  useEffect(() => {
    fetchProjects();
  }, []);

  const [editingId, setEditingId] =
  useState(null);

  // ADD PROJECT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
  await axios.put(
    `http://localhost:5000/projects/${editingId}`,
    {
      title,
      description,
      technologies:
        technologies.split(","),
      github,
      demo,
    }
  );

  alert("Project Updated 🔥");

  setEditingId(null);
} else {
  await axios.post(
    "http://localhost:5000/projects",
    {
      title,
      description,
      technologies:
        technologies.split(","),
      github,
      demo,
    }
  );

  alert("Project Added 🔥");
}

      alert("Project Added 🔥");

      fetchProjects();

      // RESET FORM
      setTitle("");
      setDescription("");
      setTechnologies("");
      setGithub("");
      setDemo("");
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE PROJECT
  const deleteProject = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/projects/${id}`
      );

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };


const editProject = (project) => {
  setEditingId(project._id);

  setTitle(project.title);

  setDescription(project.description);

  setTechnologies(
    project.technologies.join(",")
  );

  setGithub(project.github);

  setDemo(project.demo);
};


  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
      }}
    >
      <Navbar />

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "60px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            marginBottom: "40px",
          }}
        >
          Admin Dashboard
        </h1>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Project Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            style={inputStyle}
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            style={{
              ...inputStyle,
              height: "120px",
            }}
          />

          <input
            type="text"
            placeholder="React, Node, MongoDB"
            value={technologies}
            onChange={(e) =>
              setTechnologies(e.target.value)
            }
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Github URL"
            value={github}
            onChange={(e) =>
              setGithub(e.target.value)
            }
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Demo URL"
            value={demo}
            onChange={(e) =>
              setDemo(e.target.value)
            }
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              padding: "18px",
              border: "none",
              borderRadius: "16px",
              background:
                "linear-gradient(to right, #3b82f6, #9333ea)",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
           {editingId
  ? "Update Project"
  : "Add Project"}
  
          </button>
        </form>

        {/* MANAGE PROJECTS */}
        <div
          style={{
            marginTop: "60px",
          }}
        >
          <h2
            style={{
              marginBottom: "30px",
              fontSize: "32px",
            }}
          >
            Manage Projects
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {projects.map((project) => (
              <div
                key={project._id}
                style={{
                  padding: "20px",
                  borderRadius: "20px",
                  background:
                    "rgba(255,255,255,0.05)",
                  border:
                    "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <h3>{project.title}</h3>

                <p
                  style={{
                    color: "#94a3b8",
                  }}
                >
                  {project.description}
                </p>

                <button
                  onClick={() =>
                    deleteProject(project._id)
                  }
                  style={{
                    marginTop: "20px",
                    padding: "12px 20px",
                    border: "none",
                    borderRadius: "12px",
                    background: "#ef4444",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>

<button
  onClick={() => editProject(project)}
  style={{
    marginTop: "10px",
    marginLeft: "10px",
    padding: "12px 20px",
    border: "none",
    borderRadius: "12px",
    background: "#3b82f6",
    color: "white",
    cursor: "pointer",
  }}
>
  Edit
</button>

              </div>
            ))}
          </div>
        </div>
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
  fontSize: "16px",
  outline: "none",
};

export default Admin;