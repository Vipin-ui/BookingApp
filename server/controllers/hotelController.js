// import Hotel from "../models/Hotel.js";
// import User from "../models/User.js";

// export const registerHotel = async (req,res)=>{
//     try{
//         const {name,address,contact,city}=req.body;
//         const owner = req.user._id

//         const hotel = await Hotel.findOne({owner})
//         if(hotel){
//             return res.json({success: false,message:"Hotel already registered"})
//         }

//         await Hotel.create({ name, address, contact, city, owner });
//         await User.findByIdAndUpdate(owner,{role: "hotelOwner"});
        
//         res.json({success: true, message:"Hotel Registred Successfully"})


//     }catch(error){
//         res.json({ success: false, message: error.message });
        
//     }
// }


import Hotel from "../models/Hotel.js";
import User from "../models/User.js";

export const registerHotel = async (req, res) => {
  try {
    const { name, address, contact, city } = req.body;
    const owner = req.user._id;

    // Check if hotel already exists for this user
    const existingHotel = await Hotel.findOne({ owner });
    if (existingHotel) {
      return res.json({ success: false, message: "Hotel already registered" });
    }

    // Create hotel
    await Hotel.create({ name, address, contact, city, owner });

    // Update user role
    await User.findByIdAndUpdate(owner, { role: "hotelOwner" });

    res.json({ success: true, message: "Hotel registered successfully" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Failed to register hotel" });
  }
};

