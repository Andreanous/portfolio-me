import { Link, useNavigate }
from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(
      "isAdmin"
    );

    navigate("/login");
  };

  return (
    <div
      style={{
        width: "260px",
        height: "100vh",
        background: "#0f172a",
        padding: "30px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent:
          "space-between",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      {/* TOP MENU */}
      <div>
        <h1
          style={{
            color: "white",
            marginBottom: "40px",
          }}
        >
          Admin Panel
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Link
            to="/dashboard"
            style={linkStyle}
          >
            Dashboard
          </Link>

          <Link
            to="/admin/add"
            style={linkStyle}
          >
            Add Project
          </Link>

          <Link
            to="/admin/certificate/add"
            style={linkStyle}
          >
            Add Certificate
          </Link>

          <Link
            to="/dashboard"
            style={linkStyle}
          >
            Manage / Edit Certificates
          </Link>

          <Link
            to="/projects"
            style={linkStyle}
          >
            View Projects
          </Link>

          <Link
            to="/certifications"
            style={linkStyle}
          >
            View Certificates
          </Link>
        </div>
      </div>

      {/* BOTTOM */}
      <button
        onClick={handleLogout}
        style={{
          padding: "14px",
          border: "none",
          borderRadius: "12px",
          background: "#ef4444",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Logout
      </button>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "14px",
  borderRadius: "10px",
  background:
    "rgba(255,255,255,0.05)",
};

export default Sidebar;