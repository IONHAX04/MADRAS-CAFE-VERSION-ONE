import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ConsentNotice from "./components/ConsentNotice";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import MenuLanding from "./pages/MenuLanding";
import Menu from "./pages/Menu";
import Locations from "./pages/Locations";
import Catering from "./pages/Catering";
import Social from "./pages/Social";
import Franchising from "./pages/Franchising";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App min-h-screen flex flex-col bg-[#f6e0b0]">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuLanding />} />
            <Route path="/menu/dosas" element={<Menu />} />
            <Route path="/menu/beverages" element={<Menu />} />
            <Route path="/menu/sweets" element={<Menu />} />
            <Route path="/menu/snacks" element={<Menu />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/social" element={<Social />} />
            <Route path="/franchising" element={<Franchising />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <ConsentNotice />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
