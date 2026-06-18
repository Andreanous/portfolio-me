/* eslint-env node */

import dotenv from "dotenv";
dotenv.config();
console.log(process.env.CLOUD_API_KEY);
import Project from "../server/models/project.js";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import upload from "../server/middleware/upload.js";
import { verifyToken } from "../server/middleware/auth.js";
import Certificate from "../server/models/certificate.js";
import User from "../server/models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


import "../server/config/cloudinary.js";


import serverless from "serverless-http";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Diagnostic Test Route
app.get("/test", (req, res) => {
  res.json({
    status: "ok",
    env: {
      has_mongo_uri: !!process.env.MONGO_URI,
      has_jwt_secret: !!process.env.JWT_SECRET,
      has_cloud_name: !!process.env.CLOUD_NAME,
      mongoose_state: mongoose.connection.readyState
    }
  });
});

// MongoDB Connection
let cachedConnection = null;

async function connectToDatabase() {
  if (cachedConnection) return cachedConnection;
  
  cachedConnection = await mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000,
  });
  return cachedConnection;
}

app.use(async (req, res, next) => {
  try {
    await connectToDatabase();
    next();
  } catch (err) {
    res.status(500).json({ message: "Database connection error", error: err.message });
  }
});

export const handler = serverless(app);

// Login Route
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "User tidak ditemukan" });

    const isMatch = await bcrypt.compare(password, user.password);
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

app.post(
  "/projects",
  verifyToken,
  upload.single("image"),
  async (req, res) => {
    try {

console.log(req.file);
console.log(req.body);

      const project =
        await Project.create({
          title:
            req.body.title,

          description:
            req.body.description,

          technologies:
  String(req.body.technologies)
    .split(",")
    .map((tech) => tech.trim()),

          github:
            req.body.github,

          demo:
            req.body.demo,

          image:
  req.file?.path || "",
        });

      res.json(project);

    } catch (error) {
      console.log(error);

      res.status(500).json({
        message:
          error.message,
      });
    }
  }
);

app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();

    res.json(projects);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.delete("/projects/:id", verifyToken, async (req, res) => {
  try {
    await Project.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Project Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.put(
  "/projects/:id",
  verifyToken,
  upload.single("image"),
  async (req, res) => {

    try {

      const updateData = {
        title:
          req.body.title,

        description:
          req.body.description,

        technologies:
  Array.isArray(
    req.body.technologies
  )
    ? req.body.technologies
    : req.body.technologies.split(","),

        github:
          req.body.github,

        demo:
          req.body.demo,
      };

      if (req.file) {
        updateData.image =
          req.file.path;
      }

      const updatedProject =
        await Project.findByIdAndUpdate(
          req.params.id,
          updateData,
          {
            returnDocument:
              "after",
          }
        );

      res.json(updatedProject);

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          error.message,
      });
    }
  }
);

app.get("/projects/:id", async (req, res) => {
  try {
    const project =
      await Project.findById(
        req.params.id
      );

    res.json(project);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


app.post(
  "/certificates",
  verifyToken,
  upload.single("image"),
  async (req, res) => {
    try {
      const certificate =
        await Certificate.create({
          title:
            req.body.title,

          issuer:
            req.body.issuer,

          date:
            req.body.date,

          credential:
            req.body.credential,

          skills:
            typeof req.body.skills ===
            "string"
              ? req.body.skills.split(",")
              : req.body.skills,

          image:
            req.file
              ? req.file.path
              : "",
        });

      res.json(certificate);

    } catch (error) {
      console.log(error);

      res.status(500).json({
        message:
          error.message,
      });
    }
  }
);

app.get(
  "/certificates",
  async (req, res) => {
    try {
      const certificates =
        await Certificate.find();

      res.json(certificates);

    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  }
);

app.delete(
  "/certificates/:id",
  verifyToken,
  async (req, res) => {
    try {
      await Certificate.findByIdAndDelete(
        req.params.id   
      );

      res.json({
        message:
          "Certificate Deleted",
      });

    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });   
    }
  }
);  

// GET satu sertifikat berdasarkan ID
app.get("/certificates/:id", async (req, res) => {
  try {
    const certificate = await Certificate.findById(req.params.id);
    res.json(certificate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT (Update) sertifikat
app.put("/certificates/:id", verifyToken, upload.single("image"), async (req, res) => {
  try {
    const updateData = {
      title: req.body.title,
      issuer: req.body.issuer,
      date: req.body.date,
      credential: req.body.credential,
      skills: typeof req.body.skills === "string" 
              ? req.body.skills.split(",").map(s => s.trim()) 
              : req.body.skills,
    };

    if (req.file) {
      updateData.image = req.file.path;
    }

    const updatedCertificate = await Certificate.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true } // Mengembalikan data terbaru
    );

    res.json(updatedCertificate);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});  
