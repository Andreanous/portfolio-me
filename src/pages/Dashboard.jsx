import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { API_URL } from "../config";

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);

  const fetchProjects = async () => {
    try {
      const res = await axios.get(`${API_URL}/projects`);
      setProjects(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCertificates = async () => {
    try {
      const res = await axios.get(`${API_URL}/certificates`);
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
      await axios.delete(`${API_URL}/projects/${id}`);
      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCertificate = async (id) => {
    try {
      await axios.delete(`${API_URL}/certificates/${id}`);
      fetchCertificates();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ background: "#020617", minHeight: "100vh", color: "white" }}>
      <Navbar />
      <Sidebar />

      <div className="dashboard-content">
        <h1 style={{ fontSize: "40px", marginBottom: "40px" }}>
          Project Dashboard
        </h1>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project._id}>
                  <td>{project.title}</td>
                  <td>{project.description}</td>
                  <td>
                    <button className="btn-delete" onClick={() => deleteProject(project._id)}>
                      Delete
                    </button>
                    <Link className="btn-edit" to={`/admin/edit/${project._id}`}>
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h1 style={{ fontSize: "40px", marginTop: "60px", marginBottom: "40px" }}>
          Certificate Dashboard
        </h1>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Issuer</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {certificates.map((cert) => (
                <tr key={cert._id}>
                  <td>{cert.title}</td>
                  <td>{cert.issuer}</td>
                  <td>
                    <button className="btn-delete" onClick={() => deleteCertificate(cert._id)}>
                      Delete
                    </button>
                    <Link className="btn-edit" to={`/admin/certificate/edit/${cert._id}`}>
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .dashboard-content {
          margin-left: 260px;
          padding: 100px 40px 40px;
        }

        .table-wrapper {
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th {
          text-align: left;
          padding: 20px;
          background: rgba(255,255,255,0.05);
        }

        td {
          padding: 20px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        tbody tr:hover {
          background: rgba(255,255,255,0.03);
        }

        .btn-delete {
          padding: 10px 16px;
          border: none;
          border-radius: 10px;
          background: #ef4444;
          color: white;
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .btn-delete:hover {
          opacity: 0.8;
        }

        .btn-edit {
          display: inline-block;
          margin-left: 10px;
          padding: 10px 16px;
          border-radius: 10px;
          background: #3b82f6;
          color: white;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .btn-edit:hover {
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .dashboard-content {
            margin-left: 0;
            padding: 100px 16px 40px;
          }
        }
      `}</style>
    </div>
  );
}

export default Dashboard;
