import mongoose from "mongoose";
import User from "./models/user.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const reset = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const hash = await bcrypt.hash("admin1770", 10);
    await User.updateOne({ username: "admin" }, { password: hash });
    console.log("Password berhasil di-reset ke hash dari admin1770");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
reset();
