// import React from "react";
// import Navbar from "./components/Navbar";
// import { Route, Routes, useLocation } from "react-router-dom";
// import Home from "./Page/Home";
// import Footer from "./components/Footer";
// import AllRoom from "./Page/AllRoom";
// import RoomDetails from "./Page/RoomDetails";
// import MyBookings from "./Page/MyBookings";
// import HotelReg from "./components/HotelReg";
// import Layout from "./Page/hotelOwner/Layout";
// import AddRoom from "./Page/hotelOwner/AddRoom";
// import Dashboard from "./Page/hotelOwner/Dashboard";
// import ListRoom from "./Page/hotelOwner/ListRoom";
// import { Toaster } from "react-hot-toast";
// import { useAppContext } from "./context/AppContext";

// function App() {
//   const isOwnerPath = useLocation().pathname.includes("owner");
//   const { showHotelReg } = useAppContext();

//   return (
//     <div>
//       <Toaster />
//       {!isOwnerPath && <Navbar />}
//       {showHotelReg && <HotelReg />}

//       <div className="min-h-[70vh]">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/rooms" element={<AllRoom />} />
//           <Route path="/rooms/:id" element={<RoomDetails />} />
//           <Route path="/my-bookings" element={<MyBookings />} />
//           <Route path="/owner" element={<Layout />}>
//             <Route index element={<Dashboard />} />
//             <Route path="add-room" element={<AddRoom />} />
//             <Route path="list-room" element={<ListRoom />} />
//           </Route>
//         </Routes>
//       </div>

//       {!isOwnerPath && <Footer />}
//     </div>
//   );
// }

// export default App;


import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Page/Home";
import Footer from "./components/Footer";
import AllRoom from "./Page/AllRoom";
import RoomDetails from "./Page/RoomDetails";
import MyBookings from "./Page/MyBookings";
import HotelReg from "./components/HotelReg";
import Layout from "./Page/hotelOwner/Layout";
import AddRoom from "./Page/hotelOwner/AddRoom";
import Dashboard from "./Page/hotelOwner/Dashboard";
import ListRoom from "./Page/hotelOwner/ListRoom";
import { Toaster } from "react-hot-toast";
import { useAppContext } from "./context/AppContext";

function App() {
  const isOwnerPath = useLocation().pathname.includes("owner");
  const { showHotelReg } = useAppContext();

  return (
    <div>
      <Toaster />
      {!isOwnerPath && <Navbar />}
      {showHotelReg && <HotelReg />}

      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRoom />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/owner" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-room" element={<ListRoom />} />
          </Route>
        </Routes>
      </div>

      {!isOwnerPath && <Footer />}
    </div>
  );
}

export default App;
