import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // ✅ Import CORS
import connectDB from "./Database/database.js";
import userRoutes from "./routes/auth.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

// Connect to DB
connectDB();

// ✅ Configure CORS with origin and credentials
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true,               // allow cookies/auth headers
}));

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/v1/user", userRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
