import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";
import userRouter from "./routes/userRoutes.js";
import hotelRouter from "./routes/hotelRoutes.js";
import connectCloudinary from "./configs/cloudinary.js";
import roomRouter from "./routes/roomRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

// Create express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// Test route
app.get("/", (req, res) => res.send("API is working now"));

// Routes
app.use("/api/clerk", clerkWebhooks);
app.use("/api/users", userRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/rooms", roomRouter);
app.use("/api/booking", bookingRouter);

// Start server function
const startServer = async () => {
  try {
    // Connect to database
    await connectDB();
    console.log("Database Connected");

    // Connect to Cloudinary
    await connectCloudinary();
    console.log("Cloudinary Connected");

    // Start Express server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.error("Server failed to start:", error);
    process.exit(1);
  }
};

// Start the server
startServer();

export default app;
    
// import express from "express"
// import "dotenv/config";
// import cors from "cors";
// import connectDB from "./configs/db.js";
// import { clerkMiddleware } from "@clerk/express";
// import clerkWebhooks from "./controllers/clerkWebhooks.js";
// import userRouter from "./routes/userRoutes.js";
// import hotelRouter from "./routes/hotelRoutes.js";
// import connectCloudinary from "./configs/cloudinary.js";
// import roomRouter from "./routes/roomRoutes.js";
// import bookingRouter from "./routes/bookingRoutes.js";

// connectDB();
// connectCloudinary();

// const app =express();
// app.use(cors());
// app.use(express.json());
// app.use(clerkMiddleware());

// app.use("/api/clerk",clerkWebhooks)

// app.get('/',(req,res) =>res.send("API is Working now kal"))
// app.use('/api/users',userRouter)
// app.use("/api/hotels", hotelRouter);
// app.use("/api/rooms", roomRouter);
// app.use("/api/booking", bookingRouter);

// const PORT =process.env.PORT || 3000;

// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// export default app;
