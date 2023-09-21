import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bikes from "./pages/Bikes";
import ParkingDetails from "./pages/ParkingDetails";
import Parkings from "./pages/Parkings";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Bikes />} />
          <Route path="/bikesStation" element={<Bikes />} />
          <Route path="/parkings" element={<Parkings />} />
          <Route path="/parkingDetails/:name" element={<ParkingDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
