import mongoose from "mongoose";

const certificateSchema =
  new mongoose.Schema({
    title: String,

    issuer: String,

    date: String,

    image: String,

    credential: String,

    skills: [String],
  });

export default mongoose.model(
  "Certificate",
  certificateSchema
);