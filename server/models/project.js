
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  image: {type: String,},
  github: String,
  demo: String,
});

const Project = mongoose.model("Project", projectSchema);

export default Project;

