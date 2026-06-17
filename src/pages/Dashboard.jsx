import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

function Dashboard() {
  const [projects, setProjects] =
    useState([]);
  const [certificates, setCertificates] =
    useState([]);
  

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

  const fetchCertificates = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/certificates"
      );

      setCertificates(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
    fetchCertificates();
  }, []);

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

  const deleteCertificate = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/certificates/${id}`
      );

      fetchCertificates();
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
      <Navbar />
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
          Project Dashboard
        </h1>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                background:
                  "rgba(255,255,255,0.05)",
              }}
            >
              <th style={thStyle}>Title</th>
              <th style={thStyle}>
                Description
              </th>
              <th style={thStyle}>
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <tr
                key={project._id}
              >
                <td style={tdStyle}>
                  {project.title}
                </td>

                <td style={tdStyle}>
                  {project.description}
                </td>

                <td style={tdStyle}>
                  <button
                    onClick={() =>
                      deleteProject(
                        project._id
                      )
                    }
                    style={{
                      padding:
                        "10px 16px",
                      border: "none",
                      borderRadius:
                        "10px",
                      background:
                        "#ef4444",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                  <Link
  to={`/admin/edit/${project._id}`}
  style={{
    marginLeft: "10px",
    padding: "10px 16px",
    borderRadius: "10px",
    background: "#3b82f6",  
    color: "white",
    textDecoration: "none",
  }}
>
  Edit
</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h1
          style={{
            fontSize: "40px",
            marginTop: "60px",
            marginBottom: "40px",
          }}
        >
          Certificate Dashboard
        </h1>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                background:
                  "rgba(255,255,255,0.05)",
              }}
            >
              <th style={thStyle}>Title</th>
              <th style={thStyle}>
                Issuer
              </th>
              <th style={thStyle}>
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {certificates.map((cert) => (
              <tr
                key={cert._id}
              >
                <td style={tdStyle}>
                  {cert.title}
                </td>

                <td style={tdStyle}>
                  {cert.issuer}
                </td>

                <td style={tdStyle}>
                  <button
                    onClick={() =>
                      deleteCertificate(
                        cert._id
                      )
                    }
                    style={{
                      padding:
                        "10px 16px",
                      border: "none",
                      borderRadius:
                        "10px",
                      background:
                        "#ef4444",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/admin/certificate/edit/${cert._id}`}
                    style={{
                      marginLeft: "10px",
                      padding: "10px 16px",
                      borderRadius: "10px",
                      background: "#3b82f6",  
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const thStyle = {
  textAlign: "left",
  padding: "20px",
};

const tdStyle = {
  padding: "20px",
  borderBottom:
    "1px solid rgba(255,255,255,0.1)",
};

export default Dashboard;