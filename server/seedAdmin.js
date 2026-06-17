import bcrypt from "bcryptjs";
import User from "./models/user.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    const adminExists = await User.findOne({ username: "admin" });
    if (adminExists) {
        console.log("Admin sudah ada.");
    } else {
        // Biarkan pre-save hook di user.js menangani hashing
        await User.create({ username: "admin", password: "admin1770" });
        console.log("Admin berhasil dibuat.");
    }

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

createAdmin();
