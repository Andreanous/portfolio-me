  function ProjectCard({ project }) {
    return (
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "28px",
          overflow: "hidden",
          backdropFilter: "blur(10px)",
          transition: "0.4s",
          cursor: "pointer",
          padding: "20px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform =
            "translateY(-10px)";

          e.currentTarget.style.boxShadow =
            "0 20px 40px rgba(59,130,246,0.25)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            "translateY(0px)";

          e.currentTarget.style.boxShadow =
            "none";
        }}
      >
        <img
          src={
            project.image ||
            "https://via.placeholder.com/400"
          }
          alt={project.title}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            borderRadius: "18px",
            marginBottom: "24px",
          }}
        />

        <h2
          style={{
            fontSize: "28px",
            marginBottom: "14px",
            color: "white",
          }}
        >
          {project.title}
        </h2>

        <p
          style={{
            color: "#94a3b8",
            lineHeight: 1.8,
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 5,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "24px",
          }}
        >
          {project.technologies?.map(
            (tech, index) => (
              <span
                key={index}
                style={{
                  padding: "8px 14px",
                  borderRadius: "999px",
                  background:
                    "rgba(59,130,246,0.2)",
                  color: "#38bdf8",
                  fontSize: "14px",
                }}
              >
                {tech}
              </span>
            )
          )}
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "30px",
          }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            style={{
              flex: 1,
              textAlign: "center",
              padding: "14px",
              borderRadius: "14px",
              background: "#1e293b",
              color: "white",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Github
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            style={{
              flex: 1,
              textAlign: "center",
              padding: "14px",
              borderRadius: "14px",
              background:
                "linear-gradient(to right, #3b82f6, #9333ea)",
              color: "white",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Live Demo
          </a>
        </div>
      </div>
    );
  }

  export default ProjectCard;