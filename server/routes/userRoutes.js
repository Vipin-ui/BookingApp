//  import express from "express";
//  import { protect } from "../middleware/authMiddleware.js";
//  import {getUserData,storeRecentSearchedCities,} from "../controllers/userController.js";

//  const userRouter = express.Router();
//  userRouter.get("/", protect, getUserData);
//  userRouter.post("/store-recent-search", protect, storeRecentSearchedCities);

//  export default userRouter;

import express from "express";
import User from "../models/User.js";

const userRouter = express.Router();

// test route for inserting user
userRouter.post("/create", async (req, res) => {
  try {
    const user = await User.create({
      _id: "test123",
      username: "Vipin",
      email: "vipin@test.com",
      image: "https://via.placeholder.com/150",
      role: "user",
      recentSearchedCities: ["Delhi"],
    });

    res.json({ message: "✅ User created", user });
  } catch (error) {
    console.error("❌ Error saving user:", error);
    res.status(500).json({ error: error.message });
  }
});

export default userRouter;
