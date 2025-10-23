import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "Portfolio",
    });
    console.log("MongoDB connected successfully ✅");
  } catch (error) {
    console.error("MongoDB connection failed: ❌", error.message);
    console.log("Mongo URL from .env:", process.env.MONGO_URL);

    process.exit(1); 
  }
}

export default connectDB;
