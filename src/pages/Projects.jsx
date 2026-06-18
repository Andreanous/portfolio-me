  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";
  import StatCircle from "../components/StatCircle";
  import { motion } from "framer-motion";
  import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";



  function Projects() {

      const [projects, setProjects] = useState([]);

useEffect(() => {
  const fetchProjects = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/projects`
      );

      setProjects(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchProjects();
}, []);

    return (
      <>
        <Navbar />

        <section
          style={{
            padding: "120px 80px",
            minHeight: "100vh",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
  style={{
    position: "absolute",
    top: "120px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(59,130,246,.12), transparent 70%)",
    filter: "blur(80px)",
    zIndex: -1,
  }}
/>
          <div
  style={{
    textAlign: "center",
    marginBottom: "80px",
    marginTop: "5px",
  }}
>
  <p
    style={{
      color: "#38bdf8",
      marginBottom: "20px",
      letterSpacing: "3px",
      textTransform: "uppercase",
    }}
  >
    Project Portfolio
  </p>

  <h1
    style={{
      fontSize:"clamp(3rem, 8vw, 5rem)",
      fontWeight: "bold",
      lineHeight: 1.1,
      maxWidth: "1000px",
      margin: "0 auto 30px",
      color: "white",
    }}
  >
    Membangun Solusi Digital
    <span
      style={{
        background:
          "linear-gradient(to right, #38bdf8, #9333ea)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {" "}
      Berkualitas &{" "}
    </span>
    Terukur
  </h1>

  <p
    style={{
      maxWidth: "700px",
      margin: "0 auto",
      fontSize: "clamp(16px, 2vw, 20px)",
      color: "#ffffff",
      lineHeight: 1.8,
    }}
  >
    Seorang calon developer yang berfokus pada pengembangan web full-stack yang bersih dan efisien. Saya antusias dalam mengubah kebutuhan kompleks menjadi pengalaman digital yang intuitif, dengan fokus pada performa dan skalabilitas aplikasi.
  </p>

  <a 
    href="MASUKKAN_LINK_CV_ANDA_DI_SINI" 
    download="CV_Nama_Anda.pdf"
    style={{
      display: "inline-block",
      marginTop: "30px",
      padding: "14px 30px",
      borderRadius: "12px",
      background: "linear-gradient(to right, #38bdf8, #9333ea)",
      color: "white",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "16px",
      transition: "0.3s",
      border: "none",
    }}
    onMouseOver={(e) => {
      e.target.style.opacity = "0.9";
      e.target.style.transform = "scale(1.05)";
    }}
    onMouseOut={(e) => {
      e.target.style.opacity = "1";
      e.target.style.transform = "scale(1)";
    }}
  >
    Unduh CV
  </a>
</div>
<div
  className="project-stats"
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
    marginTop: "80px",
  }}
>
  <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <StatCircle
    value={3}
    label="Projects"
    progress={100}
  />
  </motion.div>


<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  
  <StatCircle
    value={10}
    label="Technologies"
    progress={100}
    />
    </motion.div>
    
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <StatCircle
    value={3}
    label="Years"
    progress={100}
    />
    </motion.div>
</div>
<div
  style={{
    marginBottom: "40px",
    marginTop: "100px",
  }}
>
  <p
    style={{
      color: "#38bdf8",
      marginBottom: "10px",
      letterSpacing: "3px",
      textTransform: "uppercase",
    }}
  >
    Portfolio Showcase
  </p>

  <h2
    style={{
      color: "white",
      fontSize: "42px",
      marginBottom: "12px",
    }}
  >
    Selected Work
  </h2>

  <p
    style={{
      color: "#94a3b8",
      maxWidth: "700px",
    }}
  >
    A selection of applications, platforms, and
    digital solutions built with modern technologies.
  </p>
</div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(380px,1fr))",
              gap: "40px",
            }}
          >
            {projects.map((project) => (
              <div
                key={project._id}
                className="project-card"
                style={{
                  background:
                    "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(20px)",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "28px",
                  overflow: "hidden",
                  transition: "0.4s",
                }}
              >
                <div
  style={{
    padding: "20px",
    paddingBottom: "0",
  }}
>
  <div
    style={{
      position: "relative",
      overflow: "hidden",
      borderRadius: "20px",
      height: "240px",
    }}
  >
    <img
  src={project.image}
  alt={project.title}
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform .6s ease",
  }}
/>

    <div
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: "18px",
        background:
          "linear-gradient(to top, rgba(2,6,23,.8), transparent)",
      }}
    />
  </div>
                </div>

                <div
                  style={{
                    padding: "30px",
                  }}
                >
                  <div
  style={{
    display: "inline-flex",
    alignItems: "center",
    padding: "6px 14px",
    borderRadius: "999px",
    background: "rgba(56,189,248,.12)",
    border: "1px solid rgba(56,189,248,.15)",
    color: "#38bdf8",
    fontSize: "12px",
    fontWeight: "600",
    marginBottom: "16px",
  }}
>
  Featured Project
</div>
                  <h2
  style={{
    color: "white",
    fontSize: "30px",
    fontWeight: "700",
    lineHeight: "1.2",
    marginBottom: "14px",
  }}
>
                    {project.title}
                  </h2>

                  <p
                    style={{
                      color: "#94a3b8",
                      lineHeight: "1.8",
                      marginBottom: "25px",
                    }}
                  >
                    {project.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                      marginBottom: "25px",
                    }}
                  >
                    {project.technologies?.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: "8px 14px",
                          borderRadius: "999px",
                          background:
                            "rgba(56,189,248,.12)",
                          color: "#38bdf8",
                          fontSize: "13px",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "15px",
                    }}
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        textAlign: "center",
                        padding: "14px",
                        borderRadius: "14px",
                        background:
                          "linear-gradient(135deg,#3b82f6,#9333ea)",
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "600",
                      }}
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        textAlign: "center",
                        padding: "14px",
                        borderRadius: "14px",
                        border:
                          "1px solid rgba(255,255,255,.15)",
                        color: "white",
                        textDecoration: "none",
                        background: "rgba(255,255,255,.03)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <style>
            {`
              .project-card:hover{
                transform:translateY(-12px);
                box-shadow:0 25px 60px rgba(59,130,246,.18);
              }

              .project-card:hover img{
                transform:scale(1.08);
              }
            `}
          </style>
        </section>

        <Footer />
      </>
    );
  }

  export default Projects;
