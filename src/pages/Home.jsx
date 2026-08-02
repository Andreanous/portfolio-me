import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

import Hero from "../sections/Hero";
import Aboutme from "../sections/Aboutme";
import FeaturedProject from "../sections/FeaturedProject";
import Certification from "../sections/Certification";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import SkeletonGrid from "../components/Skeleton";

function Home() {
  const [projects, setProjects] =
    useState([]);

  const [certificates, setCertificates] =
    useState([]);

  const [loadingProjects, setLoadingProjects] =
    useState(true);

  const [loadingCertificates, setLoadingCertificates] =
    useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(
          `${API_URL}/projects`
        );

        setProjects(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingProjects(false);
      }
    };

    const fetchCertificates =
      async () => {
        try {
          const res = await axios.get(
            `${API_URL}/certificates`
          );

          setCertificates(res.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoadingCertificates(false);
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

      {loadingProjects ? (
        <div style={{ padding: "clamp(40px, 10vw, 120px) 20px" }}>
          <h1 style={{ fontSize: "50px", marginBottom: "70px", textAlign: "center", color: "white" }}>
            Proyek Unggulan
          </h1>
          <SkeletonGrid count={3} type="project" />
        </div>
      ) : (
        <FeaturedProject projects={projects} />
      )}

      <Aboutme />

      <Skills />

      {loadingCertificates ? (
        <div style={{ padding: "120px 0" }}>
          <h1 style={{ fontSize: "50px", marginBottom: "70px", textAlign: "center", color: "white" }}>
            Sertifikasi
          </h1>
          <SkeletonGrid count={3} type="certificate" />
        </div>
      ) : (
        <Certification certificates={certificates} />
      )}

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
