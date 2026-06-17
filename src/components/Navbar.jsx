import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] =
  useState(false);

  const [isScrolled, setIsScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <nav
      style={{
        width: "100%",
      padding: window.innerWidth < 768 ? "20px 24px" : "20px 80px",

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        position: "fixed",
        top: 0,
        left: 0,

        zIndex: 1000,

        transition: "all 0.4s ease",

        backdropFilter: isScrolled
          ? "blur(18px)"
          : "blur(0px)",

        background: isScrolled
          ? "rgba(2, 6, 23, 0.78)"
          : "transparent",

        borderBottom: isScrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid transparent",

        boxShadow: isScrolled
          ? "0 10px 30px rgba(0,0,0,0.35)"
          : "none",
      }}
    >
      {/* LOGO */}
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "700",

          background:
            "linear-gradient(to right,#60a5fa,#a78bfa)",

          WebkitBackgroundClip: "text",
          WebkitTextFillColor:
            "transparent",
        }}
      >
        Adrian.dev
      </h1>

      {/* MENU */}
      <>
  {/* DESKTOP MENU */}
  <div className="desktop-menu">
    <Link to="/" style={linkStyle}>
      Home
    </Link>

    <Link
      to="/projects"
      style={linkStyle}
    >
      Projects
    </Link>

    <Link
      to="/certifications"
      style={linkStyle}
    >
      Certifications
    </Link>

    <Link
      to="/dashboard"
      style={{
        ...linkStyle,
        color: "#60a5fa",
      }}
    >
      Admin
    </Link>
  </div>

  {/* HAMBURGER */}
  <button
    className="hamburger-btn"
    onClick={() =>
      setMenuOpen(!menuOpen)
    }
  >
    {menuOpen ? "✕" : "☰"}
  </button>
</>
{menuOpen && (
  <div className="mobile-menu">
    <Link
      to="/"
      style={mobileLink}
      onClick={() =>
        setMenuOpen(false)
      }
    >
      Home
    </Link>

    <Link
      to="/projects"
      style={mobileLink}
      onClick={() =>
        setMenuOpen(false)
      }
    >
      Projects
    </Link>

    <Link
      to="/certifications"
      style={mobileLink}
      onClick={() =>
        setMenuOpen(false)
      }
    >
      Certifications
    </Link>

    <Link
      to="/dashboard"
      style={{
        ...mobileLink,
        color: "#60a5fa",
      }}
      onClick={() =>
        setMenuOpen(false)
      }
    >
      Admin
    </Link>
  </div>
  
)}
<style>
  {`
    .desktop-menu{
      display:flex;
      align-items:center;
      gap:30px;
    }

    .hamburger-btn{
      display:none;
      background:none;
      border:none;
      color:white;
      font-size:28px;
      cursor:pointer;
    }

    .mobile-menu{
      position:absolute;
      top:100%;
      left:0;
      width:100%;
      background:rgba(2,6,23,.95);
      backdrop-filter:blur(20px);

      display:flex;
      flex-direction:column;

      padding:20px 30px;
      border-top:1px solid rgba(255,255,255,.08);
    }

    @media (max-width: 768px){

      nav{
        padding:20px 25px !important;
      }

      .desktop-menu{
        display:none;
      }

      .hamburger-btn{
        display:block;
      }
    }
  `}
</style>
    </nav>

    
  );
}

const linkStyle = {
  color: "rgba(255,255,255,0.78)",

  textDecoration: "none",

  fontSize: "15px",

  transition: "0.3s ease",
};

const mobileLink = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
  padding: "12px 0",
};



export default Navbar;