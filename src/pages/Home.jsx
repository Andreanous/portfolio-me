import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

import Hero from "../sections/Hero";
import Aboutme from "../sections/Aboutme";
import FeaturedProject from "../sections/FeaturedProject";
import Certification from "../sections/Certification";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

function Home() {
  const [projects, setProjects] =
    useState([]);

  const [certificates, setCertificates] =
    useState([]);

  useEffect(() => {
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

    const fetchCertificates =
      async () => {
        try {
          const res = await axios.get(
            "http://localhost:5000/certificates"
          );

          setCertificates(res.data);
        } catch (error) {
          console.log(error);
        }
      };

    fetchProjects();
    fetchCertificates();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        color: "white",
        overflow: "hidden",
        position: "relative",
        zIndex: 1,
      }}
    >
      <style>{styles}</style>

      <Navbar />

      <Hero />

      <FeaturedProject
        projects={projects}
      />

      <Aboutme />

      <Skills />

      <Certification
        certificates={certificates}
      />

      <Contact />

<Footer />

    </div>
  );
}

const styles = `
@keyframes slideLeft {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}
`;

export default Home;