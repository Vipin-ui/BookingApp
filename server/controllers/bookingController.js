// import Booking from "../models/Booking";

// const checkAvailability = async ({  checkInDate, checkOutDate, room }) => {
//   try {
//     const bookings = await Booking.find({
//       room,
//       checkInDate: { $lte: checkOutDate },
//       checkOutDate: { $gte: checkInDate },
//     });

//     const isAvailable = bookings.length === 0;
//     return isAvailable;
//   } catch (error) {
//     console.error(error.message);
//   }
// };

// export const checkAvailabilityAPI = async (req, res) => {
//   try {
//     const { room, checkInDate, checkOutDate } = req.body;
//     const isAvailable = await checkAvailability({
//       checkInDate,
//       checkOutDate,
//       room,
//     });
//     res.json({ sucess: true, isAvailable });
//   } catch (error) {
//     res.json({ sucess: false, error: error.message });
//   }
// };

// export const createBooking = async (req, res) => {
//   try {
//     const { room, checkInDate, checkOutDate, guests } = req.body;
//     const user=req.user._id;
//     // Check room availability
//     const isAvailable = await checkAvailability({
//       checkInDate,
//       checkOutDate,
//       room
//     });
//     if (!isAvailable) {
//       return res.json({success:false, message:"Room is not available"})
      
//     }

//     const roomData =await Room.findById(room).populate("hotel");
//     let totalPrice =roomData.pricePerNight;
    
//     const checkIN =new Date(checkInDate)
//     const checkOut = new Date(checkOutDate)
//     const timeDiff = checkOut.getTime()- checkIN.getTime();
//     const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));


//     totalPrice *= nights;

//     const Booking=await Booking.create({
//         user,
//         room,
//         hotel: roomData.hotel._id,
//         guests: +guests,
//         checkInDate,
//         checkOutDate,
//         totalPrice,
//     })
//     res.json({ success: true, message: "Booking created successfully"});
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message:"Failed to create booking"})
//   }
// };

// export const getUserBookings =async (req,res)=>{
//     try{
//         const user= req.user._id;
//         const bookings =await Booking.find({user}).populate("room hotel").sort({created:-1});
//         res.json({ success: true, bookings });
//     }catch(error){
//         res.json({ success: false, message: "Failed to fetch bookings" });
//     }
// }

// export const getHotelBookings = async (req, res) => {
//    try{
//     const hotel =await Hotel.findOne({owner:req.auth.userId});
//    if(!hotel){
//        return res.json({ success: false, message: "Hotel not found" });
//    }
//    const bookings =await Booking.find({hotel:hotel._id}).populate(" room hotel user").sort({createdAt:-1});
//    const totalBookings =bookings.length;
//    const totalRevenue =bookings.reduce((acc,booking)=>acc+ booking.totalAmount,0);
//    res.json({ success: true, dashboardData:{ bookings, totalBookings, totalRevenue } });

//    }catch(error){
//     res.json({ success: false, message: 'Failed to fetch bookings' });
//    }
// }


import Booking from "../models/Booking.js";
import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

const checkAvailability = async ({ checkInDate, checkOutDate, room }) => {
  try {
    const bookings = await Booking.find({
      room,
      checkInDate: { $lte: checkOutDate },
      checkOutDate: { $gte: checkInDate },
    });

    return bookings.length === 0;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const checkAvailabilityAPI = async (req, res) => {
  try {
    const { room, checkInDate, checkOutDate } = req.body;
    const isAvailable = await checkAvailability({
      checkInDate,
      checkOutDate,
      room,
    });
    res.json({ success: true, isAvailable });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};

export const createBooking = async (req, res) => {
  try {
    const { room, checkInDate, checkOutDate, guests } = req.body;
    const user = req.user._id;

    // Check room availability
    const isAvailable = await checkAvailability({
      checkInDate,
      checkOutDate,
      room,
    });
    if (!isAvailable) {
      return res.json({ success: false, message: "Room is not available" });
    }

    const roomData = await Room.findById(room).populate("hotel");
    let totalPrice = roomData.pricePerNight;

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const timeDiff = checkOut.getTime() - checkIn.getTime();
    const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));

    totalPrice *= nights;

    const newBooking = await Booking.create({
      user,
      room,
      hotel: roomData.hotel._id,
      guests: +guests,
      checkInDate,
      checkOutDate,
      totalPrice,
    });

    res.json({
      success: true,
      message: "Booking created successfully",
      booking: newBooking,
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Failed to create booking" });
  }
};

export const getUserBookings = async (req, res) => {
  try {
    const user = req.user._id;
    const bookings = await Booking.find({ user })
      .populate("room hotel")
      .sort({ createdAt: -1 });

    res.json({ success: true, bookings });
  } catch (error) {
    res.json({ success: false, message: "Failed to fetch bookings" });
  }
};

export const getHotelBookings = async (req, res) => {
  try {
    const hotel = await Hotel.findOne({ owner: req.auth.userId });
    if (!hotel) {
      return res.json({ success: false, message: "Hotel not found" });
    }

    const bookings = await Booking.find({ hotel: hotel._id })
      .populate("room hotel user")
      .sort({ createdAt: -1 });

    const totalBookings = bookings.length;
    const totalRevenue = bookings.reduce(
      (acc, booking) => acc + booking.totalPrice,
      0
    );

    res.json({
      success: true,
      dashboardData: { bookings, totalBookings, totalRevenue },
    });
  } catch (error) {
    res.json({ success: false, message: "Failed to fetch bookings" });
  }
};
