// import User from "../models/User.js";
// export const protect = async (req,res,next)=>{
//     const{userId}=req.auth;
//     if(!userId){
//         res.json({success: false,message: "not authenticated"})

//     }else{
//         const user=await User.findById(userId);
//         req.user=user;
//         next();
//     }
// }

import User from "../models/User.js";

/**
 * Protect routes: authenticate user with Clerk and DB check
 */
export const protect = async (req, res, next) => {
  try {
    // Check if Clerk auth is present
    if (!req.auth || !req.auth.userId) {
      console.error("Authentication failed: Clerk session missing or invalid");
      return res.status(401).json({
        success: false,
        message: "Authentication failed: missing or invalid Clerk session",
      });
    }

    const userId = req.auth.userId;

    // Find user in your database
    const user = await User.findById(userId);
    if (!user) {
      console.error(
        `Authentication failed: User not found in DB for ID ${userId}`
      );
      return res.status(401).json({
        success: false,
        message: "Authentication failed: user not found",
      });
    }

    // Attach user to request for downstream controllers
    req.user = user;

    console.log(`Authentication successful for userId: ${userId}`);
    next();
  } catch (error) {
    console.error("Authentication failed due to server error:", error);
    res.status(500).json({
      success: false,
      message: "Authentication failed: server error",
    });
  }
};
