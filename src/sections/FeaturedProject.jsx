import ProjectCard from "../components/ProjectCard";

function FeaturedProject({ projects }) {

{/* PROJECT SECTION */}
return (
<div
  style={{
    padding: "clamp(40px, 10vw, 120px) 20px",
    position: "relative",
    zIndex: 2,
  }}
>
  <h1
    style={{
      fontSize: "50px",
      marginBottom: "70px",
      textAlign: "center",
      color: "white",
    }}
  >
    Proyek Unggulan
  </h1>
      
  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "35px",
      marginTop: "60px",
      alignItems: "stretch",
    }}
  >
    {projects.slice(0, 3).map((project, index) => (
      <div
        key={project._id}
        className={`floating-card-${index}`}
        style={{
          width: "100%",
        }}
      >
        <ProjectCard project={project} />
      </div>
    ))}
  </div>

  <style>
    {`
      .floating-card-0 {
        animation: floatProject1 5s ease-in-out infinite;
      }

      .floating-card-1 {
        animation: floatProject2 6s ease-in-out infinite;
      }

      .floating-card-2 {
        animation: floatProject3 7s ease-in-out infinite;
      }

      @keyframes floatProject1 {
        0%,100% {
          transform: translateY(0px);
        }

        50% {
          transform: translateY(-10px);
        }
      }

      @keyframes floatProject2 {
        0%,100% {
          transform: translateY(0px);
        }

        50% {
          transform: translateY(-16px);
        }
      }

      @keyframes floatProject3 {
        0%,100% {
          transform: translateY(0px);
        }

        50% {
          transform: translateY(-12px);
        }
      }
    `}
  </style>
</div>
);

        }


        export default FeaturedProject;