import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({
  path: "./server/.env",
});

const certificates = [
  {
    title: "Junior Web Developer Certification",
    issuer: "LSP Informatika (BNSP)",
    date: "2024-04-25",
    image: "",
    credential: "",
    skills: [
      "User Interface",
      "Structured Programming",
      "Clean Code",
      "Library Integration",
    ],
  },

  {
    title:
      "Membuat Aplikasi CRUD Data dengan Java Menggunakan Apache NetBeans IDE",
    issuer: "PT 7Sky Global Solution",
    date: "2022-12-19",
    image: "",
    credential: "",
    skills: [
      "Java",
      "Object Oriented Programming",
      "Apache NetBeans",
      "MySQL JDBC",
      "CRUD Application",
    ],
  },

  {
    title:
      "Membangun Aplikasi BookStore Berbasis Website Menggunakan Framework Laravel dan Admin LTE",
    issuer: "PT Ginvo Indonesia Grup",
    date: "2023-07-19",
    image: "",
    credential: "",
    skills: [
      "Laravel",    
      "Admin LTE",
      "MVC Architecture",
      "Backend Development",
      "Database Management",
      "Routing",
      "Migration",
      "Validation",
    ],
  },

  {
    title: "Praktik Kerja Industri (Prakerin)",
    issuer: "PT Max Samasta",
    date: "2023-12-01",
    image: "",
    credential: "",
    skills: [
      "Software Development",
      "Team Collaboration",
      "Problem Solving",
      "Professional Experience",
    ],
  },
];

const certificateSchema =
  new mongoose.Schema(
    {
      title: String,
      issuer: String,
      date: String,
      image: String,
      credential: String,
      skills: [String],
    },
    {
      collection: "certificates",
    }
  );

const Certificate =
  mongoose.models.Certificate ||
  mongoose.model(
    "Certificate",
    certificateSchema
  );

async function seed() {
  try {
    console.log("Connecting Mongo...");

    await mongoose.connect(
      process.env.MONGO_URI
    );

    console.log(
      "✅ Mongo Connected"
    );

    await Certificate.deleteMany();

    const inserted =
      await Certificate.insertMany(
        certificates
      );

    console.log(
      `✅ ${inserted.length} certificates inserted`
    );

    await mongoose.disconnect();

    console.log(
      "🔌 Mongo disconnected"
    );

    process.exit(0);

  } catch (error) {
    console.error(
      "❌ Seed Error:",
      error
    );

    process.exit(1);
  }
}

seed();