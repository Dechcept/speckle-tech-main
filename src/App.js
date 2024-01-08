import { BrowserRouter, Route, Routes } from "react-router-dom";
import "typeface-inter";
import {
  JobDetailPage,
  SustainDetailPage,
  Productdetail,
  Navbar,
  Footer,
} from "./Components/Index";
import {
  AboutMain,
  Career,
  Home,
  ProductMain,
  SustainbilityMain,
} from "./Pages/newindex";
import ContactPage from "./Components/Contact/ContactPage";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
function App() {

  return (
    <div className="m-0 p-0">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/AboutMain" element={<AboutMain />} />
          <Route path="/career" element={<Career />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/productmain" element={<ProductMain />} />
          <Route path="/jobDetails" element={<JobDetailPage />} />
          <Route path="/SustainbilityMain" element={<SustainbilityMain />} />
          <Route
            path="/SustainbilityMain/SustainDetailPage"
            element={<SustainDetailPage />}
          />
          <Route
            path="/productmain/Productdetail"
            element={<Productdetail />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
