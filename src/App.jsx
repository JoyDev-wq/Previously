import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageOne from "./components/links/PageOne";
import PageTwo from "./components/links/PageTwo";
import TheTeam from "./components/menupage/TheTeam";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <>
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
      />
      <Routes>
        <Route
          path="/"
          element={<HomePage menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
        />
        <Route
          path="/page-one"
          element={<PageOne menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
        />
        <Route
          path="/page-two"
          element={<PageTwo menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
        />
        <Route path="/who-we-are" element={<TheTeam  menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
